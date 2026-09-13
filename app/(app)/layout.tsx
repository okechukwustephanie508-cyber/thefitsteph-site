import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";
import { signOut } from "@/lib/auth/actions";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/membership", label: "Membership" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionProfile();

  if (!session) {
    redirect("/login");
  }

  const isAdmin = session.profile?.role === "admin";

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="border-b border-ink/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
          <Link
            href="/dashboard"
            className="font-display text-lg font-semibold text-green"
          >
            TheFitSteph
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            {isAdmin ? (
              <Link
                href="/admin"
                className="bg-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream"
              >
                Admin
              </Link>
            ) : null}
          </nav>
          <form action={signOut}>
            <button
              type="submit"
              className="text-sm text-ink/60 underline underline-offset-2 hover:text-ink"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
