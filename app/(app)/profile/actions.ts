"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { SexType } from "@/lib/types/database";

export type ProfileFormState = { error: string | null; success: boolean };

export async function updateProfile(
  _prevState: ProfileFormState,
  formData: FormData
): Promise<ProfileFormState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const dateOfBirth = String(formData.get("dateOfBirth") ?? "").trim();
  const sex = String(formData.get("sex") ?? "");

  if (!firstName || !lastName) {
    return { error: "Enter your first and last name.", success: false };
  }

  if (sex !== "male" && sex !== "female") {
    return { error: "Select an option for sex.", success: false };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Your session has expired. Log in again.", success: false };
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      first_name: firstName,
      last_name: lastName,
      phone: phone || null,
      date_of_birth: dateOfBirth || null,
      sex: sex as SexType,
    })
    .eq("id", user.id);

  if (error) {
    return { error: "Could not save your details. Try again.", success: false };
  }

  revalidatePath("/profile");
  return { error: null, success: true };
}
