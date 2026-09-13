import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";
import { signOut } from "@/lib/auth/actions";

export const metadata: Metadata = {
  title: "Settings",
  robots: { index: false, follow: false },
};

export default async function SettingsPage() {
  const session = await getSessionProfile();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-3xl text-ink">Settings</h1>

      <div className="max-w-lg border border-ink/10 bg-white/50 p-6">
        <h2 className="font-display text-lg text-ink">Account</h2>
        <p className="mt-2 text-sm text-ink/70">{session.email}</p>
        <a
          href="/forgot-password"
          className="mt-4 inline-block text-sm text-green underline"
        >
          Change your password
        </a>
      </div>

      <form action={signOut} className="max-w-lg">
        <button
          type="submit"
          className="w-full rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink/5"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
