import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-green-dark hover:bg-gold-light focus-visible:outline-gold",
  secondary:
    "bg-green text-cream hover:bg-green-light focus-visible:outline-green",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/20 hover:ring-ink/40 focus-visible:outline-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
