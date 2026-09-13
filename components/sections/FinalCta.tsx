import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="bg-green-dark py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-cream sm:text-4xl md:text-5xl">
          Don&rsquo;t Just Start. Stay With It.
        </h2>
        <Button href="/get-started">Get Started</Button>
      </Container>
    </section>
  );
}
