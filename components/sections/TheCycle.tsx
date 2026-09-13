import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "Start",
    copy: "A new plan, a new program, a new Monday. Motivation is high and momentum feels real.",
  },
  {
    step: "Stall",
    copy: "Life gets in the way. A missed session turns into a missed week. Consistency starts to slip.",
  },
  {
    step: "Stop",
    copy: "Without anyone checking in, it becomes easy to quietly quit and tell yourself you'll restart later.",
  },
  {
    step: "Start Again",
    copy: "Weeks or months pass. You start over from scratch, no closer to the transformation you wanted.",
  },
];

export default function TheCycle() {
  return (
    <section className="bg-cream-dark py-24">
      <Container>
        <SectionHeading
          eyebrow="The Pattern"
          title="You start. You stop. You start again."
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          This is the cycle almost everyone knows: the repeated loop of
          committing to a fitness or health journey, losing momentum, stopping
          altogether, and eventually starting over from zero. It isn&rsquo;t a
          lack of willpower. It&rsquo;s a lack of something to keep you going
          when motivation runs out.
        </p>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="flex flex-col gap-3 border-t-2 border-green pt-6"
            >
              <span className="font-display text-2xl text-green">
                0{index + 1}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-ink">
                {item.step}
              </span>
              <p className="text-sm leading-relaxed text-ink/70">{item.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
