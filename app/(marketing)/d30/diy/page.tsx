import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 DIY",
  description:
    "A structured 30-day fitness reset you can complete independently, with everything you need to stay consistent.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/diy")!;

const whoItsFor = [
  "Wants to work out independently",
  "Needs a structured 30-day plan",
  "Wants guidance without live coaching",
  "Wants to build consistency",
  "Wants a simple framework they can follow from home",
];

const included = [
  {
    title: "The Full D30 Framework",
    body: "The complete D30 system, structured into a 30-day plan you follow independently, on your own terms.",
  },
  {
    title: "Self-Paced Structure",
    body: "Built for people who want the system without a live schedule to work around.",
  },
  {
    title: "A Clear Day-by-Day Plan",
    body: "A straightforward plan and accountability tools designed to remove the guesswork, so you always know what to do next.",
  },
  {
    title: "One-Time Access",
    body: "A single one-time payment for the full 30-day reset, not a recurring membership.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 DIY",
    body: "Get started with a one-time payment and immediate access to the full D30 framework.",
  },
  {
    number: "02",
    title: "Follow your 30-day plan",
    body: "Move through the structured plan at your own pace, on your own schedule, from wherever you train.",
  },
  {
    number: "03",
    title: "Complete the reset and build consistency",
    body: "Finish the 30 days having built the structure and habits to keep showing up for yourself.",
  },
];

export default function D30DiyPage() {
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
            TheFitSteph &middot; D30 DIY
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            D30 DIY
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            A structured 30-day fitness reset you can complete independently,
            with everything you need to stay consistent.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            This is a self-guided 30-day fitness reset for anyone who wants
            structure, accountability tools and a clear plan without live
            coaching.
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
          <SectionHeading eyebrow="Who It's For" title="Built for people who want to do this on their own." />
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
          <SectionHeading eyebrow="What's Included" title="Everything in your one-time reset." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
          <SectionHeading eyebrow="How It Works" title="Three steps to your reset." />
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
          <SectionHeading eyebrow="The Experience" title="What the next 30 days look like." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Over the 30 days, you move through the D30 framework at a pace
            that fits your life. There is no live class to log into and no
            fixed schedule to keep up with. Instead, you get a clear
            structure to follow and accountability tools built to remove the
            guesswork, so all that is left to do is show up for yourself, one
            day at a time.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this reset is built around. Results are
            personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Start Your Reset. Build Your Consistency.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 DIY is {program.price}, {program.cadence}, open to men and
            women who want to do this on their own terms.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
