"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { SexType } from "@/lib/types/database";

export type AccountSetupState = { error: string | null };

export async function completeAccountSetup(
  _prevState: AccountSetupState,
  formData: FormData
): Promise<AccountSetupState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const dateOfBirth = String(formData.get("dateOfBirth") ?? "").trim();
  const sex = String(formData.get("sex") ?? "");

  if (!firstName || !lastName) {
    return { error: "Enter your first and last name." };
  }

  if (sex !== "male" && sex !== "female") {
    return { error: "Select an option for sex." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: firstName,
      last_name: lastName,
      phone: phone || null,
      date_of_birth: dateOfBirth || null,
      sex: sex as SexType,
      profile_completed: true,
    })
    .eq("id", user.id);

  if (error) {
    return { error: "Could not save your details. Try again." };
  }

  redirect("/dashboard");
}
