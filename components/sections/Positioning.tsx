import Container from "@/components/ui/Container";

export default function Positioning() {
  return (
    <section id="positioning" className="bg-green py-24 sm:py-32">
      <Container className="flex flex-col items-start gap-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          The Foundation
        </span>
        <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl md:text-5xl">
          Accountability is the plan. Fitness is how it shows up.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-cream/80">
          Fitness is what you do. Accountability is what keeps you doing it.
          TheFitSteph exists to close that gap &mdash; not with another
          workout plan, but with the structure, check-ins, and community that
          make consistency sustainable.
        </p>
        <div className="mt-4 flex flex-col gap-2 border-l-2 border-gold pl-6 text-cream/90 sm:flex-row sm:gap-10 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-6">
          <span className="font-display text-xl">Accountability</span>
          <span className="hidden text-gold sm:inline">&rarr;</span>
          <span className="font-display text-xl">Consistency</span>
          <span className="hidden text-gold sm:inline">&rarr;</span>
          <span className="font-display text-xl">Fitness</span>
          <span className="hidden text-gold sm:inline">&rarr;</span>
          <span className="font-display text-xl">Transformation</span>
        </div>
      </Container>
    </section>
  );
}
