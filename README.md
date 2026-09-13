# TheFitSteph

The public marketing website for **TheFitSteph** — a personal accountability
coaching brand and home of the **D30** fitness community.

> Accountability is the plan. Fitness is how it shows up.

## Phase 1 scope

This phase delivers the production-ready public marketing site only:

- Homepage (hero, the cycle, transformation, the real problem, positioning,
  programs, final CTA)
- `/get-started` contact page

Authentication, database, memberships, payments, and admin/member dashboards
are **out of scope** for this phase and land in later phases.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```
app/                  Route segments (App Router)
  page.tsx            Homepage, composed from section components
  get-started/        Contact/get-started route
components/
  layout/             Header, Footer
  sections/           Homepage sections (Hero, Programs, etc.)
  ui/                 Reusable primitives (Button, Container, SectionHeading, ...)
lib/
  programs.ts         D30 program data (name, price, cadence, description)
```

## Content notes

- Member transformation photography has not been supplied yet; the
  Transformation section uses labeled placeholders in
  `components/ui/ImagePlaceholder.tsx` pending real assets.
- The contact email on `/get-started` is a placeholder and should be
  replaced with a real inbox before launch.
