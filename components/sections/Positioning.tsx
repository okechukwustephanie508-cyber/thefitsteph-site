import Container from "@/components/ui/Container";

const pillars = [
  {
    number: "01",
    name: "Accountability",
    body: "Knowing what to do has never been the hard part. The gap opens the moment no one is expecting you to show up. Accountability closes that gap — a coach, a check-in, a community that notices when you go quiet turns intention into something you actually follow through on.",
  },
  {
    number: "02",
    name: "Consistency",
    body: "Consistency is what accountability makes possible. It isn’t a flawless streak — it’s returning to the work after a missed day, a slow week, or a rough start. Individual actions only become habits and progress when you keep showing up, not when you get everything perfect.",
  },
  {
    number: "03",
    name: "Fitness",
    body: "Fitness is the action and the output — the workouts, the movement, the healthier habits you actually do. It’s what consistency looks like in practice, not the thing you have to force yourself into before the accountability and consistency are already in place.",
  },
  {
    number: "04",
    name: "Transformation",
    body: "Transformation is what tends to follow from repeatedly showing up and staying consistent. It isn’t instant and it looks different for everyone, but it’s the result that becomes possible once accountability and consistency are no longer the missing piece.",
  },
];

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
        <dl className="mt-8 grid w-full grid-cols-1 gap-x-8 gap-y-10 border-t border-cream/15 pt-12 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.name} className="flex flex-col gap-3">
              <dt className="flex items-baseline gap-3">
                <span className="font-display text-sm text-gold">
                  {pillar.number}
                </span>
                <span className="font-display text-xl text-cream">
                  {pillar.name}
                </span>
              </dt>
              <dd className="max-w-md text-base leading-relaxed text-cream/75">
                {pillar.body}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
