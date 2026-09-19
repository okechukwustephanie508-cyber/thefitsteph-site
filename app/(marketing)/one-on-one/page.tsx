import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "One-on-One Coaching",
  description:
    "A personalized plan built around your life, with direct accountability from TheFitSteph.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/one-on-one")!;

const whoItsFor = [
  "Wants a plan built around their actual schedule and responsibilities",
  "Wants personalized accountability, not a one-size-fits-all program",
  "Wants flexibility a group or self-paced program cannot offer",
  "Wants support that adapts as life changes",
];

const included = [
  {
    title: "A Personalized Plan",
    body: "Built around your schedule, your responsibilities and what you can realistically sustain.",
  },
  {
    title: "Direct Accountability",
    body: "Ongoing, personal accountability directly with TheFitSteph.",
  },
  {
    title: "Monthly Coaching Membership",
    body: "A recurring monthly membership that adapts with you month to month.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join One-on-One Coaching",
    body: "Get started with a monthly coaching membership.",
  },
  {
    number: "02",
    title: "Build a plan around your life",
    body: "Your plan is built around your schedule, responsibilities and availability, not the other way around.",
  },
  {
    number: "03",
    title: "Stay consistent every month",
    body: "Your coaching membership renews monthly, adapting with you as life changes.",
  },
];

export default function OneOnOnePage() {
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
            TheFitSteph &middot; One-on-One Coaching
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            One-on-One Coaching
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            Your plan should work with your life, not compete with it.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            One-on-One Coaching is personalized accountability built around
            your schedule, your responsibilities and what you can
            realistically sustain, not a rigid program you have to force your
            life around.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
            <span>For men and women</span>
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
          <SectionHeading eyebrow="Who It's For" title="Built for a plan that fits your life." />
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
          <SectionHeading eyebrow="What You Get" title="Included in your coaching membership." />
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
          <SectionHeading eyebrow="How It Works" title="Three steps to get started." />
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
          <SectionHeading eyebrow="The Experience" title="A plan that moves with your life." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Instead of forcing your life to fit a rigid program, One-on-One
            Coaching is built around it: your schedule, your responsibilities
            and what you can realistically keep up with month to month. It is
            the most personalized and flexible way TheFitSteph offers direct
            accountability.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this coaching membership is built around.
            Results are personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Your Plan Should Work With Your Life.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            One-on-One Coaching is {program.price} {program.cadence}, open
            to men and women who want a plan built around their actual life.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
