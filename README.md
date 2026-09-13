# TheFitSteph

The public marketing website and application foundation for **TheFitSteph**,
a personal accountability coaching brand and home of the **D30** fitness
community.

> Accountability is the plan. Fitness is how it shows up.

## Phase 1: marketing site (approved)

The public marketing site: homepage (hero, the cycle, transformation,
positioning, programs, final CTA) and `/get-started`. Lives under
`app/(marketing)/` with the `Header`/`Footer` chrome, styled in the brand's
deep green, warm cream, and gold palette.

## Phase 2A: application foundation (this phase)

Auth, database, and the member/admin route skeleton, built on
[Supabase](https://supabase.com) (Postgres, Auth, Row Level Security).
**Not included yet**: payments, product-specific dashboards (Remote Gym, DIY,
D30 Group, One-on-One), and any tracking/community features. Those come in
later phases.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [Supabase](https://supabase.com) (Postgres, Auth, Row Level Security)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Supabase project at [supabase.com](https://supabase.com), then
   copy `.env.example` to `.env.local` and fill in the values from
   **Project Settings > API**:

   ```bash
   cp .env.example .env.local
   ```

   - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are public.
   - `SUPABASE_SERVICE_ROLE_KEY` is server-only. Never expose it to the
     browser or commit it.

3. Apply the database schema. Either paste the contents of
   `supabase/migrations/0001_init.sql` and `0002_seed_products.sql` (in that
   order) into the Supabase SQL Editor, or, with the
   [Supabase CLI](https://supabase.com/docs/guides/cli) linked to your
   project:

   ```bash
   npx supabase link --project-ref <your-project-ref>
   npx supabase db push
   ```

4. Promote your own account to admin after signing up once, by running this
   in the Supabase SQL Editor (there is no UI for the first promotion, by
   design):

   ```sql
   update public.profiles set role = 'admin' where email = 'you@example.com';
   ```

5. Run the app:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  (marketing)/          Phase 1 public site: homepage, /get-started
  (app)/                Signed-in app shell: dashboard, profile, membership,
                         settings, admin
  login/, signup/,
  forgot-password/,
  account/setup/,
  auth/                 Auth routes and callback/reset handling
components/
  layout/, sections/, ui/   Phase 1 marketing components
  auth/                     Shared auth form UI
lib/
  supabase/             Browser, server, and admin (service-role) clients
  auth/                 Session helpers, admin guard, sign-out action
  types/database.ts     Hand-written types matching the SQL schema
  products/, memberships/  Product registry and membership/product join helper
supabase/
  migrations/           SQL schema, RLS policies, and product seed data
```

## Data model

- **profiles**: one row per account (identity fields, `role`:
  member/admin, `profile_completed`). Created automatically by a database
  trigger when someone signs up.
- **products**: the fixed catalog (D30 Remote Gym, D30 DIY, D30 Group,
  One-on-One Coaching), each with a standard price. D30 Group is marked
  women-only.
- **memberships**: grants one profile access to one product. A profile can
  hold many membership rows across many products at once. Custom pricing
  (a different amount than the product's standard price, a one-time
  discount, or complimentary access) lives on the membership row, never on
  the product, so members share the same access level while paying
  different amounts.

Security is enforced with Postgres Row Level Security: members can only
read their own profile and memberships; only admins can read everyone's.
Granting or repricing a membership is an admin-only, server-side action
(there is no client-writable path to it). The D30 Group women-only rule is
enforced by a database trigger, not just hidden in the UI, so it holds even
if it is bypassed by whatever assigns membership.

## Content notes

- Member transformation photography lives in
  `public/images/transformations/` and renders via
  `components/ui/TransformationCarousel.tsx`.
- The contact email on `/get-started` is a placeholder and should be
  replaced with a real inbox before launch.
