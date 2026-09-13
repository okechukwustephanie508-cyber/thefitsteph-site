import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSessionProfile } from "@/lib/auth/session";
import { attachProducts } from "@/lib/memberships/withProducts";
import { PRODUCT_REGISTRY } from "@/lib/products/registry";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const session = await getSessionProfile();

  if (!session) {
    redirect("/login");
  }

  const supabase = await createClient();

  const { data: memberships } = await supabase
    .from("memberships")
    .select("*")
    .eq("user_id", session.userId)
    .eq("status", "active");

  const productIds = (memberships ?? []).map((m) => m.product_id);

  const { data: products } =
    productIds.length > 0
      ? await supabase.from("products").select("*").in("id", productIds)
      : { data: [] };

  const activeMemberships = attachProducts(memberships ?? [], products ?? []);
  const firstName = session.profile?.first_name;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-ink/60">Welcome back</p>
        <h1 className="font-display text-3xl text-ink">
          {firstName ?? "there"}
        </h1>
      </div>

      {activeMemberships.length === 0 ? (
        <div className="border border-ink/10 bg-cream-dark p-8 text-center">
          <p className="text-ink/70">
            You do not have an active program yet. Once you enroll in a
            program, it will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {activeMemberships.map((membership) => {
            const entry = PRODUCT_REGISTRY[membership.product.slug];
            return (
              <div
                key={membership.id}
                className="flex flex-col gap-2 border border-ink/10 bg-white/50 p-6"
              >
                <h2 className="font-display text-xl text-ink">
                  {entry?.title ?? membership.product.name}
                </h2>
                <p className="text-sm text-ink/70">
                  {entry?.blurb ?? "Your program content will appear here."}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
