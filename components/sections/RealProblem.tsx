import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RealProblem() {
  return (
    <section className="bg-cream-dark py-24">
      <Container className="flex flex-col gap-6">
        <SectionHeading title="The problem isn&rsquo;t that you don&rsquo;t know what to do." />
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          You&rsquo;ve tried the workouts. You&rsquo;ve tried the diets.
          You&rsquo;ve probably tried more than one approach that was supposed
          to be &ldquo;the one.&rdquo; None of that was ever really the issue.
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          The hardest part has always been staying consistent long enough for
          any of it to work.
        </p>
      </Container>
    </section>
  );
}
