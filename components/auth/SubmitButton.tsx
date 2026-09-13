"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-green-light disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Please wait" : children}
    </button>
  );
}
