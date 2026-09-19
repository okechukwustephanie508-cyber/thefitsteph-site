import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "D30 Group",
  description:
    "Accountability, community and a shared 30-day commitment, for the woman who is tired of starting over.",
};

// lib/programs.ts is the single source of truth for pricing across the
// site; this page reads from it rather than repeating the price as a
// separate literal.
const program = programs.find((p) => p.href === "/d30/group")!;

const whoItsFor = [
  "Knows what to do, but struggles to stay consistent",
  "Wants accountability, not just another plan",
  "Wants the support of other women holding each other to it",
  "Is ready to stop starting over",
];

const included = [
  {
    title: "Accountability",
    body: "A structure that keeps you showing up for the commitments you already made to yourself.",
  },
  {
    title: "Community",
    body: "Women moving through the same 30-day commitment, encouraging and holding each other accountable.",
  },
  {
    title: "A Shared 30-Day Commitment",
    body: "Everyone in the group moves through the same cycle together, so you are never doing it alone.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Join D30 Group",
    body: "Get started with a monthly membership and join the current 30-day commitment.",
  },
  {
    number: "02",
    title: "Stay accountable through the cycle",
    body: "Move through the same 30-day commitment as the group, with the structure and support to stay consistent.",
  },
  {
    number: "03",
    title: "Renew and keep going",
    body: "Your membership renews monthly, so you can keep staying accountable, commitment after commitment.",
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
            You already know what to do. The hard part has never been the
            plan, it has been staying with it long enough to see it through.
            D30 Group is the accountability, community and structure that
            helps you finally stop starting over.
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
          <SectionHeading eyebrow="The Experience" title="Finally staying with it." />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            It is easy to start a plan. It is much harder to stay with one.
            D30 Group gives you the accountability, the community and the
            structure to finally follow through on the commitments you have
            already made to yourself, alongside other women doing the same
            thing.
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
            D30 Group is {program.price} {program.cadence}, for the woman
            who is ready to stop starting over.
          </p>
          <Button href="/get-started">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
