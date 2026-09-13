type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in for real member transformation photography, which has not
 * been supplied yet. Swap for next/image once assets are available.
 */
export default function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-ink/15 bg-cream-dark px-6 text-center ${className}`}
    >
      <span className="font-display text-lg text-green">TheFitSteph</span>
      <span className="max-w-[16rem] text-xs uppercase tracking-[0.15em] text-ink/50">
        {label}
      </span>
    </div>
  );
}
