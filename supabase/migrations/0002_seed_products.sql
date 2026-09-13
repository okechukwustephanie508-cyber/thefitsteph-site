-- Seed the fixed product catalog. Safe to re-run: conflicts on slug no-op.

insert into public.products (name, slug, description, audience, billing_type, standard_price, currency, active)
values
  (
    'D30 Remote Gym',
    'd30-remote-gym',
    'Structured programming and remote check-ins for men and women who train on their own schedule.',
    'everyone',
    'recurring',
    10000,
    'NGN',
    true
  ),
  (
    'D30 DIY',
    'd30-diy',
    'The full D30 framework as a self-paced, one-time product for men and women.',
    'everyone',
    'one_time',
    15000,
    'NGN',
    true
  ),
  (
    'D30 Group',
    'd30-group',
    'A women-only monthly membership training and staying accountable together through the D30 cycle.',
    'women',
    'recurring',
    30000,
    'NGN',
    true
  ),
  (
    'One-on-One Coaching',
    'one-on-one-coaching',
    'Direct, personal accountability coaching for men and women.',
    'everyone',
    'recurring',
    100000,
    'NGN',
    true
  )
on conflict (slug) do nothing;
