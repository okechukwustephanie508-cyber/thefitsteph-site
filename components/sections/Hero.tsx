import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-cream pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="flex flex-col items-start gap-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
          TheFitSteph &middot; D30
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl md:text-6xl">
          How Many Times Are You Going To Start Over?
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink/70">
          You know what you need to do. But somehow, you can&rsquo;t seem to
          stay consistent long enough to see the results you desire.
        </p>
        <Button href="/#programs">Find Your Program</Button>
      </Container>
    </section>
  );
}
