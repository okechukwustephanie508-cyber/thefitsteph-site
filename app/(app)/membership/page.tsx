import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { attachProducts } from "@/lib/memberships/withProducts";

export const metadata: Metadata = {
  title: "Membership",
  robots: { index: false, follow: false },
};

const STATUS_LABEL: Record<string, string> = {
  pending: "Pending",
  active: "Active",
  inactive: "Inactive",
  cancelled: "Cancelled",
};

const PRICING_LABEL: Record<string, string> = {
  standard: "Standard price",
  custom_recurring: "Custom recurring price",
  custom_one_time: "Custom one time price",
  complimentary: "Complimentary access",
};

function formatAmount(amount: number | null, currency: string) {
  if (amount === null) return "Not set";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function MembershipPage() {
  const session = await getSessionProfile();

  if (!session) {
    redirect("/login");
  }

  const supabase = await createClient();

  const { data: memberships } = await supabase
    .from("memberships")
    .select("*")
    .eq("user_id", session.userId)
    .order("created_at", { ascending: false });

  const productIds = (memberships ?? []).map((m) => m.product_id);

  const { data: products } =
    productIds.length > 0
      ? await supabase.from("products").select("*").in("id", productIds)
      : { data: [] };

  const allMemberships = attachProducts(memberships ?? [], products ?? []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-3xl text-ink">Membership</h1>

      {allMemberships.length === 0 ? (
        <div className="border border-ink/10 bg-cream-dark p-8 text-center">
          <p className="text-ink/70">You do not have any programs yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {allMemberships.map((membership) => (
            <div
              key={membership.id}
              className="flex flex-col gap-2 border border-ink/10 bg-white/50 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-display text-lg text-ink">
                  {membership.product.name}
                </h2>
                <p className="mt-1 text-sm text-ink/60">
                  {PRICING_LABEL[membership.pricing_type]} of{" "}
                  {formatAmount(membership.amount_paid, membership.currency)}
                  {membership.is_recurring ? " per month" : ""}
                </p>
                {membership.start_date ? (
                  <p className="mt-1 text-xs text-ink/50">
                    Started {membership.start_date}
                    {membership.end_date
                      ? `, ends ${membership.end_date}`
                      : ""}
                  </p>
                ) : null}
              </div>
              <span className="inline-flex w-fit items-center border border-ink/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
                {STATUS_LABEL[membership.status]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
