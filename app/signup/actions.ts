"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type SignUpActionState = { error: string | null; success: boolean };

export async function signUp(
  _prevState: SignUpActionState,
  formData: FormData
): Promise<SignUpActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!email || !password) {
    return { error: "Enter your email and password.", success: false };
  }

  if (password.length < 8) {
    return {
      error: "Use a password with at least 8 characters.",
      success: false,
    };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match.", success: false };
  }

  const headerList = await headers();
  const origin = headerList.get("origin");

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?redirectTo=/account/setup`,
    },
  });

  if (error) {
    return { error: error.message, success: false };
  }

  if (data.session) {
    redirect("/account/setup");
  }

  return { error: null, success: true };
}
