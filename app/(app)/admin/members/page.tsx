import type { Metadata } from "next";
import Link from "next/link";
import { requireAdminSession } from "@/lib/auth/adminGuard";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Members",
  robots: { index: false, follow: false },
};

export default async function AdminMembersPage() {
  await requireAdminSession();

  const supabase = await createClient();
  const { data: members } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-3xl text-ink">Members</h1>
      <div className="overflow-x-auto border border-ink/10 bg-white/50">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-ink/10 text-xs uppercase tracking-wide text-ink/50">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Setup</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {(members ?? []).map((member) => {
              const name = `${member.first_name ?? ""} ${
                member.last_name ?? ""
              }`.trim();

              return (
                <tr
                  key={member.id}
                  className="border-b border-ink/5 last:border-0"
                >
                  <td className="px-4 py-3">{name || "Not set"}</td>
                  <td className="px-4 py-3">{member.email}</td>
                  <td className="px-4 py-3 capitalize">{member.role}</td>
                  <td className="px-4 py-3">
                    {member.profile_completed ? "Complete" : "Incomplete"}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/members/${member.id}`}
                      className="text-green underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
