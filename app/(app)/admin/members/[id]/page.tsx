import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/adminGuard";
import { createClient } from "@/lib/supabase/server";
import { attachProducts } from "@/lib/memberships/withProducts";
import AssignMembershipForm from "./AssignMembershipForm";

export const metadata: Metadata = {
  title: "Member",
  robots: { index: false, follow: false },
};

function formatAmount(amount: number | null, currency: string) {
  if (amount === null) return "Not set";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function AdminMemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminSession();
  const { id } = await params;

  const supabase = await createClient();

  const { data: member } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) {
    notFound();
  }

  const [{ data: memberships }, { data: products }] = await Promise.all([
    supabase
      .from("memberships")
      .select("*")
      .eq("user_id", id)
      .order("created_at", { ascending: false }),
    supabase.from("products").select("*").eq("active", true),
  ]);

  const memberMemberships = attachProducts(memberships ?? [], products ?? []);
  const name = `${member.first_name ?? ""} ${member.last_name ?? ""}`.trim();

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-display text-3xl text-ink">
          {name || member.email}
        </h1>
        <p className="mt-2 text-sm text-ink/60">{member.email}</p>
        <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-ink/50">Role</dt>
            <dd className="capitalize text-ink">{member.role}</dd>
          </div>
          <div>
            <dt className="text-ink/50">Sex</dt>
            <dd className="capitalize text-ink">{member.sex ?? "Not set"}</dd>
          </div>
          <div>
            <dt className="text-ink/50">Phone</dt>
            <dd className="text-ink">{member.phone ?? "Not set"}</dd>
          </div>
          <div>
            <dt className="text-ink/50">Setup</dt>
            <dd className="text-ink">
              {member.profile_completed ? "Complete" : "Incomplete"}
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <h2 className="font-display text-xl text-ink">Memberships</h2>
        {memberMemberships.length === 0 ? (
          <p className="mt-3 text-sm text-ink/60">
            This member has no memberships yet.
          </p>
        ) : (
          <div className="mt-4 flex flex-col gap-3">
            {memberMemberships.map((membership) => (
              <div
                key={membership.id}
                className="flex flex-col gap-1 border border-ink/10 bg-white/50 p-4 text-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-ink">
                    {membership.product.name}
                  </p>
                  <p className="text-ink/60">
                    {membership.pricing_type.replace(/_/g, " ")}:{" "}
                    {formatAmount(membership.amount_paid, membership.currency)}
                    {membership.is_recurring ? " per month" : ""}
                  </p>
                </div>
                <span className="w-fit border border-ink/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
                  {membership.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display text-xl text-ink">Assign membership</h2>
        <p className="mt-2 max-w-lg text-sm text-ink/60">
          A custom amount here does not change the product. It only changes
          what this member pays for the same access.
        </p>
        <div className="mt-4 max-w-lg">
          <AssignMembershipForm userId={member.id} products={products ?? []} />
        </div>
      </div>
    </div>
  );
}
