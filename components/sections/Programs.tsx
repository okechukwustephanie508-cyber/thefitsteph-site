import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/programs";

export default function Programs() {
  return (
    <section id="programs" className="bg-cream py-24">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Four programs. One thing in common."
          align="center"
          className="mx-auto"
        />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink/70">
          Every D30 program is built around the same principle: accountability
          first. Choose the level of support that fits how you live.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.name}
              className="flex h-full flex-col justify-between gap-8 border border-ink/10 bg-cream-dark p-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl text-ink">
                  {program.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {program.description}
                </p>
              </div>
              <p className="font-display text-2xl text-green">
                {program.price}
                <span className="ml-2 text-sm font-sans font-normal text-ink/50">
                  {program.cadence}
                </span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
