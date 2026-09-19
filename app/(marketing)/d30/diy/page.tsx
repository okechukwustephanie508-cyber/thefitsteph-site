import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 DIY",
  description:
    "The self-paced 30-day D30 system, with lifetime access, a daily checklist and progress tracking, open to men and women.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/diy")!;

const whoItsFor = [
  "Wants to follow the D30 system independently, at their own pace",
  "Wants lifetime access without a recurring membership",
  "Wants a complete fitness, nutrition and consistency system",
  "Wants a daily checklist and progress tracking to stay on track",
  "Open to both men and women",
];

const included = [
  {
    title: "Self-Paced 30-Day D30 Program",
    body: "Work through the full D30 system at your own pace, over 30 days.",
  },
  {
    title: "Lifetime Access",
    body: "Keep access to the program for as long as you need it, with no expiry.",
  },
  {
    title: "Fitness, Nutrition & Consistency System",
    body: "A complete system covering fitness, nutrition and the habits that keep you consistent.",
  },
  {
    title: "Daily Checklist",
    body: "A daily checklist to help you stay on track with the framework.",
  },
  {
    title: "Progress Tracking",
    body: "Track your own progress as you move through the program.",
  },
  {
    title: "Personal Account",
    body: "A personal account to track your progress in one place.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 DIY",
    body: "Get started with a one-time payment and get lifetime access to the D30 system.",
  },
  {
    number: "02",
    title: "Follow your self-paced 30-day plan",
    body: "Move through the fitness, nutrition and consistency system using your daily checklist, at your own pace.",
  },
  {
    number: "03",
    title: "Track your progress in your personal account",
    body: "Use your personal account to track your progress as you complete the program.",
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
            The self-paced 30-day D30 system, built for people who want to
            follow it independently, on their own schedule.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            D30 DIY does not include live coaching, live workouts with
            TheFitSteph, 1-on-1 coaching, personalized macro calculation or
            daily personal accountability from TheFitSteph. It is designed
            for people who want to follow the system on their own.
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
          <SectionHeading eyebrow="What's Included" title="Everything in your one-time program." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionHeading eyebrow="The Experience" title="Built to follow on your own." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            D30 DIY is designed for people who want to follow the D30 system
            independently. There are no live workouts, no 1-on-1 coaching, no
            personalized macro calculation and no daily personal
            accountability from TheFitSteph. Instead, you get the full
            fitness, nutrition and consistency system, a daily checklist,
            progress tracking and a personal account, so you can work through
            the program entirely on your own terms.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this program is built around. Results are
            personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Follow The System, On Your Own Terms.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 DIY is {program.price}, {program.cadence}, open to men and
            women who want to follow the D30 system independently.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
