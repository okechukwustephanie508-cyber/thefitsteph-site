"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdminSession } from "@/lib/auth/adminGuard";
import type { MembershipStatus, PricingType } from "@/lib/types/database";

export type AssignMembershipState = { error: string | null; success: boolean };

export async function assignMembership(
  _prevState: AssignMembershipState,
  formData: FormData
): Promise<AssignMembershipState> {
  // Re-checked here even though the page and middleware already gate
  // access: this action performs a privileged write with the service-role
  // client, so it must never trust the caller without its own check.
  await requireAdminSession();

  const userId = String(formData.get("userId") ?? "");
  const productId = String(formData.get("productId") ?? "");
  const status = String(formData.get("status") ?? "active") as MembershipStatus;
  const pricingType = String(
    formData.get("pricingType") ?? "standard"
  ) as PricingType;
  const amountPaidRaw = String(formData.get("amountPaid") ?? "").trim();
  const isRecurring = formData.get("isRecurring") === "on";
  const startDate = String(formData.get("startDate") ?? "").trim();

  if (!userId || !productId) {
    return { error: "Select a product.", success: false };
  }

  let amountPaid: number | null = null;
  if (pricingType === "complimentary") {
    amountPaid = 0;
  } else if (amountPaidRaw) {
    const parsed = Number(amountPaidRaw);
    if (Number.isNaN(parsed) || parsed < 0) {
      return { error: "Enter a valid amount.", success: false };
    }
    amountPaid = parsed;
  }

  const admin = createAdminClient();

  const { data: product } = await admin
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (!product) {
    return { error: "That product could not be found.", success: false };
  }

  const { data: profile } = await admin
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (!profile) {
    return { error: "That member could not be found.", success: false };
  }

  // Application-level enforcement of the D30 Group women-only rule, on top
  // of the database trigger, so the admin gets a clear message instead of a
  // raw SQL error if they try to assign it to an ineligible member.
  if (product.audience === "women" && profile.sex !== "female") {
    return {
      error: "This product is only available to women members.",
      success: false,
    };
  }

  const { error } = await admin.from("memberships").insert({
    user_id: userId,
    product_id: productId,
    status,
    pricing_type: pricingType,
    amount_paid: amountPaid,
    currency: product.currency,
    is_recurring: isRecurring,
    start_date: startDate || null,
  });

  if (error) {
    const message = error.message.includes("memberships_one_active_per_product")
      ? "This member already has an active membership for that product."
      : "Could not assign this membership. Try again.";
    return { error: message, success: false };
  }

  revalidatePath(`/admin/members/${userId}`);
  return { error: null, success: true };
}
