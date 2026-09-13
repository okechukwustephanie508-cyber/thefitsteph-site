import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/auth/adminGuard";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  await requireAdminSession();

  const supabase = await createClient();

  const { count: memberCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  const { count: activeMembershipCount } = await supabase
    .from("memberships")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-3xl text-ink">Admin</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border border-ink/10 bg-white/50 p-6">
          <p className="text-sm text-ink/60">Members</p>
          <p className="mt-1 font-display text-3xl text-ink">
            {memberCount ?? 0}
          </p>
        </div>
        <div className="border border-ink/10 bg-white/50 p-6">
          <p className="text-sm text-ink/60">Active memberships</p>
          <p className="mt-1 font-display text-3xl text-ink">
            {activeMembershipCount ?? 0}
          </p>
        </div>
      </div>
      <Link href="/admin/members" className="w-fit text-green underline">
        View all members
      </Link>
    </div>
  );
}
