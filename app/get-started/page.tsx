import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Choose the D30 program that fits how you live and take the first step toward staying consistent.",
};

export default function GetStartedPage() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="flex flex-col items-start gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
            Get Started
          </span>
          <h1 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Pick the program that fits your life, and let&rsquo;s keep you
            accountable.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">
            Online enrollment is on its way. In the meantime, reach out
            directly and we&rsquo;ll get you set up with the right D30
            program.
          </p>
        </div>
        <ul className="grid w-full gap-4 sm:grid-cols-2">
          {programs.map((program) => (
            <li
              key={program.name}
              className="border border-ink/10 bg-cream-dark p-6"
            >
              <p className="font-display text-lg text-ink">{program.name}</p>
              <p className="mt-1 text-sm text-ink/60">
                {program.price} &middot; {program.cadence}
              </p>
            </li>
          ))}
        </ul>
        <a
          href="mailto:hello@thefitsteph.com"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-green-dark transition-colors duration-200 hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Email hello@thefitsteph.com
        </a>
      </Container>
    </section>
  );
}
