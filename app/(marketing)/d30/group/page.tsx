import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 Group",
  description:
    "A group fitness, faith and accountability program for women who want structure, community and accountability, not individual 1-on-1 coaching.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/group")!;

const whoItsFor = [
  "Knows what to do, but struggles to stay consistent",
  "Wants structure, community and accountability, not individual 1-on-1 coaching",
  "Wants the support of other women holding each other to it",
  "Is ready to stop starting over",
];

const included = [
  {
    title: "4 Live Workouts Per Week",
    body: "Four live workout sessions every week.",
  },
  {
    title: "Daily Accountability & Check-ins",
    body: "Regular accountability to help you stay consistent.",
  },
  {
    title: "Weekly Nutrition/Meal Challenges",
    body: "Structured weekly nutrition challenges to help you build better eating habits.",
  },
  {
    title: "Fasting Tracking",
    body: "Support and tracking around fasting as part of the program structure.",
  },
  {
    title: "Water Intake Tracking",
    body: "Accountability around your daily water intake.",
  },
  {
    title: "Progress Tracking",
    body: "Track your progress throughout the program.",
  },
  {
    title: "Monthly Live Check-in & Progress Review",
    body: "A live monthly session focused on checking in and reviewing your progress.",
  },
  {
    title: "Women-Only Community",
    body: "A supportive community of women going through the program together.",
  },
  {
    title: "Mindset & Consistency Support",
    body: "Support focused on helping you develop consistency and maintain healthy habits.",
  },
  {
    title: "Monthly Challenge/Focus",
    body: "Each month has a structured focus or challenge to keep you engaged.",
  },
  {
    title: "Nigerian-Friendly Nutrition Guidance",
    body: "Nutrition guidance built around Nigerian foods and eating habits.",
  },
  {
    title: "Workout Replays",
    body: "Replay access to workouts, where applicable.",
  },
];

const ninetyDayPhases = [
  {
    range: "Days 1-30",
    phase: "Build",
    body: "The first 30 days, focused on building your foundation.",
  },
  {
    range: "Days 31-60",
    phase: "Strengthen",
    body: "The next 30 days, focused on strengthening what you've built.",
  },
  {
    range: "Days 61-90",
    phase: "Sustain",
    body: "The final 30 days, focused on sustaining your consistency.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 Group",
    body: "Get started with the 30-day or 90-day option and join the current group.",
  },
  {
    number: "02",
    title: "Show up for live workouts and daily check-ins",
    body: "Join four live workouts a week and stay on track with daily accountability, nutrition challenges, fasting and water tracking.",
  },
  {
    number: "03",
    title: "Review your progress and keep going",
    body: "Join your monthly live check-in and progress review, then renew and carry the same structure into the next month.",
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
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            Accountability is the plan. Fitness is how we show it.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            D30 Group is a group fitness, faith and accountability program
            for women who want structure, community and accountability, not
            individual 1-on-1 coaching. You already know what to do. D30
            Group gives you the structure and community to actually stay
            with it.
          </p>
          <span className="text-sm text-ink/60">Women only</span>
          <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
            {program.pricingOptions!.map((option) => (
              <div
                key={option.label}
                className="rounded-2xl border border-ink/10 bg-cream-dark px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {option.label}
                </p>
                <p className="mt-1 font-display text-lg text-green">
                  {option.price}
                </p>
              </div>
            ))}
          </div>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>

      <section className="bg-cream-dark py-24">
        <Container>
          <SectionHeading eyebrow="Who It's For" title="For the woman who's tired of starting over." />
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
          <SectionHeading eyebrow="What You Get" title="The accountability built into your membership." />
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
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/50">
            D30 Group is not 1-on-1 coaching. It does not include an
            individualized macro calculation, a personalized workout plan or
            private 1-on-1 coaching. The accountability, structure and
            community are what make it work.
          </p>
        </Container>
      </section>

      <section className="bg-cream-dark py-24">
        <Container>
          <SectionHeading
            eyebrow="The 90-Day Option"
            title="Choose 90 days and go through three phases."
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            The 30-day and 90-day options include the same benefits above.
            Choose 90 days and your membership is structured into three
            30-day phases, so your commitment builds over the full journey.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {ninetyDayPhases.map((step) => (
              <li
                key={step.phase}
                className="flex flex-col gap-3 border-t-2 border-green pt-6"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {step.range}
                </span>
                <span className="font-display text-2xl text-ink">
                  {step.phase}
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

      <section className="bg-cream-dark py-24">
        <Container>
          <SectionHeading eyebrow="The Experience" title="Finally staying with it." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            D30 Group is a group fitness, faith and accountability program,
            built for women who want structure, community and accountability,
            not private 1-on-1 coaching. Between four live workouts a week,
            daily check-ins, weekly nutrition challenges, fasting and water
            tracking, and a women-only community holding each other
            accountable, D30 Group gives you the structure to actually follow
            through.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Fitness is part of the transformation, but staying consistent is
            what makes it possible. Results are personal, vary from person to
            person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            You Don&rsquo;t Need Another Plan. You Need To Stay With It.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 Group is {program.pricingOptions![0].price} for 30 days, or{" "}
            {program.pricingOptions![1].price} for 90 days, for the woman
            who wants structure, community and accountability, not 1-on-1
            coaching.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
