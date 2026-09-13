import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 Remote Gym",
  description:
    "A structured remote fitness program built around showing up consistently and staying accountable wherever you train.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/remote-gym")!;

const included = [
  "4 live workouts per week",
  "Live workouts at 5:00 AM GMT+1, Nigeria time",
  "7,000 daily steps challenge",
  "Workout access and workout links",
  "Monthly workout attendance checklist and history",
  "Remote accountability and structure",
];

const howItWorks = [
  {
    number: "01",
    title: "The 30-Day Cycle",
    body: "Your membership runs in 30-day cycles. Each cycle is 30 days of access to the program, not a fixed number of workouts. You train within that window on the weekly schedule.",
  },
  {
    number: "02",
    title: "Four Live Workouts a Week",
    body: "Live workouts run four times a week at 5:00 AM GMT+1, Nigeria time, so you always know when to show up and can build your routine around it.",
  },
  {
    number: "03",
    title: "The 7,000 Steps Challenge",
    body: "Alongside the live workouts, members take on a daily challenge to hit 7,000 steps, building consistent movement into every day, not only training days.",
  },
  {
    number: "04",
    title: "Attendance and Accountability",
    body: "A monthly workout attendance checklist keeps a record of your consistency, backed by remote accountability and structure wherever you are training from.",
  },
];

export default function D30RemoteGymPage() {
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
            TheFitSteph &middot; D30 Remote Gym
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            D30 Remote Gym
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">
            A structured remote fitness program built around showing up
            consistently and staying accountable wherever you train.
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
          <SectionHeading eyebrow="What You Get" title="Included in your membership." />
          <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {included.map((item) => (
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
          <SectionHeading eyebrow="How It Works" title="Structure you can plan your week around." />
          <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this program is built around. Results are
            personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Show Up. Stay Accountable. Keep Training.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 Remote Gym is {program.price} {program.cadence}, open to men
            and women wherever you train.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
