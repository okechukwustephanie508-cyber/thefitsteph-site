import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthShell({
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-16">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 block text-center font-display text-xl font-semibold text-green"
        >
          TheFitSteph
        </Link>
        <div className="border border-ink/10 bg-white/40 p-8">
          <h1 className="font-display text-2xl text-ink">{title}</h1>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {description}
            </p>
          ) : null}
          <div className="mt-6">{children}</div>
        </div>
        {footer ? (
          <p className="mt-6 text-center text-sm text-ink/60">{footer}</p>
        ) : null}
      </div>
    </div>
  );
}
