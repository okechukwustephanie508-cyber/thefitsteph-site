-- TheFitSteph Phase 2A foundation schema
-- Profiles, products, memberships, and the RLS/trigger security model.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------

create type public.user_role as enum ('member', 'admin');
create type public.sex_type as enum ('male', 'female');
create type public.product_audience as enum ('everyone', 'women');
create type public.billing_type as enum ('recurring', 'one_time');
create type public.membership_status as enum ('pending', 'active', 'inactive', 'cancelled');
create type public.pricing_type as enum (
  'standard',
  'custom_recurring',
  'custom_one_time',
  'complimentary'
);

-- ---------------------------------------------------------------------------
-- Shared helper: keep updated_at current on every update
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- profiles: one row per auth.users row, created automatically on signup
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  first_name text,
  last_name text,
  phone text,
  date_of_birth date,
  sex public.sex_type,
  role public.user_role not null default 'member',
  profile_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_role_idx on public.profiles (role);

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Auto-create a profile row whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Prevent a non-admin from granting themselves the admin role via a direct
-- update to their own profile row (RLS alone only restricts which rows are
-- writable, not which columns change). Connections that already bypass RLS
-- (a Postgres superuser, or the service-role key used for the one-time
-- manual admin promotion and by trusted server-side admin actions) are left
-- alone, since triggers otherwise fire even for roles RLS itself would
-- exempt, and auth.uid() has no meaning outside a user's own session.
--
-- Deliberately NOT security definer: this function must see the real
-- calling role via current_user. A security definer function runs with
-- its owner's identity for current_user as well as privileges, which would
-- make this check see the function owner (effectively a superuser) on
-- every call and skip the guard entirely regardless of who is actually
-- making the request.
create or replace function public.prevent_role_self_escalation()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  v_bypasses_rls boolean;
begin
  select (rolsuper or rolbypassrls) into v_bypasses_rls
  from pg_roles
  where rolname = current_user;

  if new.role is distinct from old.role
     and not coalesce(v_bypasses_rls, false)
     and not public.is_admin()
  then
    new.role := old.role;
  end if;

  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- products: the fixed catalog (D30 Remote Gym, D30 DIY, D30 Group, 1:1)
-- ---------------------------------------------------------------------------

create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  audience public.product_audience not null default 'everyone',
  billing_type public.billing_type not null,
  standard_price numeric(12, 2) not null check (standard_price >= 0),
  currency text not null default 'NGN',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- memberships: grants one profile access to one product. A profile can hold
-- many membership rows across many products at once. Custom pricing lives
-- here, never on the product itself, so every member of a product can still
-- share the same access level while paying a different amount.
-- ---------------------------------------------------------------------------

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete restrict,
  status public.membership_status not null default 'pending',
  pricing_type public.pricing_type not null default 'standard',
  amount_paid numeric(12, 2) check (amount_paid is null or amount_paid >= 0),
  currency text not null default 'NGN',
  is_recurring boolean not null default false,
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint memberships_end_after_start
    check (end_date is null or start_date is null or end_date >= start_date),
  constraint memberships_complimentary_amount
    check (pricing_type <> 'complimentary' or amount_paid is null or amount_paid = 0)
);

create index memberships_user_idx on public.memberships (user_id);
create index memberships_product_idx on public.memberships (product_id);

-- A member can only hold one *active* row per product at a time; history
-- (cancelled/inactive rows) is preserved rather than overwritten.
create unique index memberships_one_active_per_product
  on public.memberships (user_id, product_id)
  where (status = 'active');

create trigger memberships_set_updated_at
before update on public.memberships
for each row execute function public.set_updated_at();

-- Server-side, DB-level enforcement of the D30 Group women-only rule. This
-- fires on every insert/update regardless of which client or role performs
-- it, so the rule cannot be bypassed by skipping a UI check.
create or replace function public.enforce_product_audience()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_audience public.product_audience;
  v_sex public.sex_type;
begin
  select audience into v_audience from public.products where id = new.product_id;
  select sex into v_sex from public.profiles where id = new.user_id;

  if v_audience = 'women' and (v_sex is distinct from 'female') then
    raise exception 'This product is only available to women members.'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

create trigger memberships_enforce_audience
before insert or update on public.memberships
for each row execute function public.enforce_product_audience();

-- ---------------------------------------------------------------------------
-- is_admin(): security-definer helper so RLS policies can check role without
-- causing recursive RLS evaluation on the profiles table itself.
-- ---------------------------------------------------------------------------

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- profiles_protect_role must be created after is_admin() exists.
create trigger profiles_protect_role
before update on public.profiles
for each row execute function public.prevent_role_self_escalation();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.memberships enable row level security;

-- profiles: a member sees and edits only their own row; admins see and edit
-- every row. Only the trigger above may change `role` for a non-admin.
create policy "profiles_select_own" on public.profiles
  for select using (id = auth.uid());

create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

create policy "profiles_select_admin" on public.profiles
  for select using (public.is_admin());

create policy "profiles_update_admin" on public.profiles
  for update using (public.is_admin());

-- products: active products are publicly readable (marketing/pricing use);
-- only admins can see inactive rows or write to the catalog.
create policy "products_select_active_or_admin" on public.products
  for select using (active = true or public.is_admin());

create policy "products_insert_admin" on public.products
  for insert with check (public.is_admin());

create policy "products_update_admin" on public.products
  for update using (public.is_admin());

create policy "products_delete_admin" on public.products
  for delete using (public.is_admin());

-- memberships: a member may only ever read their own access rows. There is
-- deliberately no insert/update policy for ordinary members: granting or
-- repricing access is an admin-only, server-side action.
create policy "memberships_select_own" on public.memberships
  for select using (user_id = auth.uid());

create policy "memberships_select_admin" on public.memberships
  for select using (public.is_admin());

create policy "memberships_insert_admin" on public.memberships
  for insert with check (public.is_admin());

create policy "memberships_update_admin" on public.memberships
  for update using (public.is_admin());

create policy "memberships_delete_admin" on public.memberships
  for delete using (public.is_admin());
