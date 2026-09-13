type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "ink",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowTone = tone === "cream" ? "text-gold-light" : "text-green";
  const titleTone = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`max-w-3xl font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl ${titleTone}`}
      >
        {title}
      </h2>
    </div>
  );
}
