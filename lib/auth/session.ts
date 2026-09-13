import "server-only";
import { createClient } from "@/lib/supabase/server";
import type { Profile } from "@/lib/types/database";

export type SessionProfile = {
  userId: string;
  email: string;
  profile: Profile | null;
};

// Reads the current user and their profile using the request-scoped,
// RLS-bound server client. Returns null when no one is signed in. Pages
// under app/(app) can rely on the middleware to have already redirected
// signed-out visitors, but they still call this to get the actual data.
export async function getSessionProfile(): Promise<SessionProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    userId: user.id,
    email: user.email ?? "",
    profile: profile ?? null,
  };
}
