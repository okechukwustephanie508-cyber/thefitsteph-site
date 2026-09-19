import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 Group",
  description:
    "Train and stay accountable alongside a community moving through the same 30-day cycle as you.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/group")!;

const whoItsFor = [
  "Wants to train and stay accountable within a community of women",
  "Wants the structure of moving through the same 30-day cycle as the group",
  "Wants ongoing monthly accountability, not a one-time reset",
  "Wants consistency alongside others working toward the same thing",
];

const included = [
  {
    title: "Group Accountability",
    body: "Train and stay accountable alongside a community moving through the same 30-day cycle as you.",
  },
  {
    title: "The Same 30-Day Cycle",
    body: "Everyone in the group moves through the same monthly cycle together, so you are never doing it alone.",
  },
  {
    title: "Monthly Membership",
    body: "A recurring monthly membership that keeps your access and your accountability going month to month.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 Group",
    body: "Get started with a monthly membership and join the current group cycle.",
  },
  {
    number: "02",
    title: "Train through the 30-day cycle",
    body: "Move through the same 30-day cycle as the rest of the group, staying accountable together.",
  },
  {
    number: "03",
    title: "Renew and keep going",
    body: "Your membership renews monthly, so you can keep training and stay accountable cycle after cycle.",
  },
];

export default function D30GroupPage() {
  return (
    <>
      <section className="bg-cream pt-20 pb-24 sm:pt-28 sm:pb-32">
        <Container className="flex flex-col items-start gap-8">
          <Link
            href="/get-started"
            className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
          >
            &larr; Back to Programs
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            TheFitSteph &middot; D30 Group
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            D30 Group
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">
            Train and stay accountable alongside a community moving through
            the same 30-day cycle as you.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
            <span>Women only</span>
            <span aria-hidden="true">&middot;</span>
            <span className="font-display text-lg text-green">
              {program.price}
              <span className="ml-1 font-sans text-sm font-normal text-ink/50">
                {program.cadence}
              </span>
            </span>
          </div>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>

      <section className="bg-cream-dark py-24">
        <Container>
          <SectionHeading eyebrow="Who It's For" title="Built for women who want to train together." />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {whoItsFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                />
                <span className="text-base leading-relaxed text-ink/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <SectionHeading eyebrow="What You Get" title="Included in your membership." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {included.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 border border-ink/10 bg-cream-dark p-8"
              >
                <h3 className="font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Three steps to join the group." />
          <ol className="mt-16 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-3 border-t-2 border-green pt-6"
              >
                <span className="font-display text-2xl text-green">
                  {step.number}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wide text-ink">
                  {step.title}
                </span>
                <p className="text-sm leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <SectionHeading eyebrow="The Experience" title="Training within the group." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            As a member of D30 Group, you train and stay accountable
            alongside other women moving through the same 30-day cycle. It is
            built to give you the structure of a shared cycle together with
            the support of training alongside others, cycle after cycle.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this membership is built around. Results are
            personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Train Together. Stay Accountable.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 Group is {program.price} {program.cadence}, open to women
            who want to move through the cycle together.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
