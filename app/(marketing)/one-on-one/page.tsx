import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "One-on-One Coaching",
  description:
    "A detailed personalized macro calculation, nutrition guidance and a workout plan built specifically for you, with 4 live workouts a week and daily accountability.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/one-on-one")!;

const whoItsFor = [
  "Wants individual attention and a program built specifically around them",
  "Wants their own personalized macro and nutrition targets, not a generic plan",
  "Wants direct, ongoing 1-on-1 coaching support",
  "Wants their progress reviewed and adjusted every week",
];

const included = [
  {
    title: "Detailed Personalized Macro Calculation",
    body: "Your individual calorie and macronutrient targets, calculated based on your body, goals, activity level and lifestyle.",
  },
  {
    title: "Personalized Nutrition Guidance",
    body: "Nutrition guidance tailored to your individual goals and macro targets.",
  },
  {
    title: "Personalized Workout Plan",
    body: "A workout structure designed specifically around your goals, fitness level and circumstances.",
  },
  {
    title: "4 Live Workouts Per Week",
    body: "Four live workout sessions every week with TheFitSteph.",
  },
  {
    title: "Daily Accountability & Check-ins",
    body: "Ongoing accountability and direct support to help you stay consistent.",
  },
  {
    title: "Weekly Progress Reviews",
    body: "Your progress is reviewed weekly, and your approach is adjusted based on your progress.",
  },
  {
    title: "Direct 1-on-1 Coaching Support",
    body: "Personalized coaching and support directly from TheFitSteph throughout your coaching period.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join One-on-One Coaching",
    body: "Get started and choose the 30-day or 90-day option that fits you.",
  },
  {
    number: "02",
    title: "Get your personalized macros, nutrition and workout plan",
    body: "Receive your detailed macro calculation, nutrition guidance and workout plan, built around your body, goals, activity level and lifestyle.",
  },
  {
    number: "03",
    title: "Train, check in and get reviewed every week",
    body: "Join 4 live workouts a week, stay on track with daily accountability and check-ins, and get your progress reviewed weekly with direct 1-on-1 support.",
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
            The premium personalized coaching option for women who want
            individual attention and a program tailored specifically to them.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            One-on-One Coaching pairs a detailed personalized macro
            calculation with nutrition guidance, a personalized workout plan,
            four live workouts a week, daily accountability and weekly
            progress reviews, all with direct 1-on-1 support from TheFitSteph.
          </p>
          <span className="text-sm text-ink/60">For men and women</span>
          <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
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
          <SectionHeading eyebrow="Who It's For" title="Built for a plan that's built around you." />
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
          <SectionHeading eyebrow="What You Get" title="Everything included in your coaching." />
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
          <SectionHeading eyebrow="The Experience" title="Coaching built specifically around you." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Instead of a generic plan, One-on-One Coaching is built entirely
            around you: a detailed personalized macro calculation, nutrition
            guidance and a workout plan matched to your goals, fitness level
            and circumstances, four live workouts a week, daily accountability
            and check-ins, and weekly progress reviews with direct 1-on-1
            support from TheFitSteph.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
            Consistency is what this coaching is built around. Results are
            personal, vary from person to person, and take time.
          </p>
        </Container>
      </section>

      <section className="bg-green-dark py-24 sm:py-32">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Coaching Built Specifically Around You.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            One-on-One Coaching starts at {program.price} {program.cadence},
            with a detailed personalized macro calculation, nutrition
            guidance, a personalized workout plan, 4 live workouts a week and
            direct 1-on-1 support.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
