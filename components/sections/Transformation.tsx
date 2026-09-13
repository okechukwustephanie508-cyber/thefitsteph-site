import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TransformationCarousel from "@/components/ui/TransformationCarousel";
import { transformationPhotos } from "@/lib/transformations";

export default function Transformation() {
  return (
    <section className="bg-cream py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <SectionHeading
            eyebrow="Transformation"
            title="Imagine What Could Change If You Finally Stayed Consistent."
          />
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">
            Every member who has changed their body, their habits, or their
            confidence started the same way &mdash; not with a perfect plan,
            but with consistency they didn&rsquo;t have before. Results take
            time and vary from person to person, but staying with it is what
            makes them possible.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <TransformationCarousel photos={transformationPhotos} />
        </div>
      </Container>
    </section>
  );
}
