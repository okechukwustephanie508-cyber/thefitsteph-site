import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-green-dark text-cream/70">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-cream">TheFitSteph</p>
          <p className="mt-1 text-sm">
            Accountability is the plan. Fitness is how it shows up.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.15em] text-cream/50">
          &copy; {year} TheFitSteph. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
