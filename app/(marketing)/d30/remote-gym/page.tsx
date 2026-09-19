import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 Remote Gym",
  description:
    "Your virtual gym for staying active, strong and consistent without having to go to a physical gym. Women only.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/remote-gym")!;

const whoItsFor = [
  "Works from home and wants to stay active without leaving the house",
  "Is busy and doesn't have time to commute to a physical gym",
  "Is a busy mom fitting fitness around a full schedule",
  "Doesn't feel comfortable with the pressure or environment of a traditional gym",
];

const included = [
  {
    title: "4 Live Workouts Per Week",
    body: "Four live workout sessions every week.",
  },
  {
    title: "Home-Friendly Workouts",
    body: "Workouts designed to be performed from home.",
  },
  {
    title: "Women-Only Fitness Community",
    body: "A supportive female fitness environment.",
  },
  {
    title: "Accountability & Encouragement",
    body: "Support to help you remain consistent with your workouts.",
  },
  {
    title: "Strength, Mobility & Conditioning Workouts",
    body: "Training that helps you build strength, improve mobility and improve your overall fitness.",
  },
  {
    title: "Convenient Virtual Gym Experience",
    body: "Participate from home without needing to commute to a physical gym.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 Remote Gym",
    body: "Get started with your women-only virtual gym membership.",
  },
  {
    number: "02",
    title: "Train four times a week, live",
    body: "Join four live workouts a week, live at 5:00 AM GMT+1, Nigeria time, so you always know when to show up.",
  },
  {
    number: "03",
    title: "Train from home, at your pace",
    body: "Workouts are designed to be performed from home, so you can stay active without commuting to a physical gym.",
  },
  {
    number: "04",
    title: "Stay accountable, together",
    body: "Get accountability and encouragement from a supportive women-only fitness community as you build strength, mobility and consistency.",
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
          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            Your virtual gym for staying active, strong and consistent
            without having to go to a physical gym.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Built for work-from-home women, busy women and busy moms who
            don&rsquo;t have time to commute to a gym, or don&rsquo;t feel
            comfortable with the pressure of a traditional gym environment.
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
          <SectionHeading eyebrow="Who It's For" title="Built for busy women who want to stay active." />
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
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <SectionHeading eyebrow="The Experience" title="Stay active, without the gym." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Remote Gym is built for women who want to stay physically active,
            avoid a sedentary lifestyle and build consistency with exercise,
            without needing to go to a physical gym. Through four live
            workouts a week, strength, mobility and conditioning training, and
            the support of a women-only fitness community, Remote Gym helps
            you build a stronger, healthier body from home.
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
            Stay Active. Stay Consistent. Stay Home.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            D30 Remote Gym is {program.price} {program.cadence}, a
            women-only virtual gym for staying active, strong and consistent
            without having to go to a physical gym.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
