import "server-only";
import { redirect } from "next/navigation";
import { getSessionProfile, type SessionProfile } from "@/lib/auth/session";

// Page-level admin check. The middleware already blocks non-admins from
// /admin/*, but this gives every admin page its own server-side guard too,
// so admin access never depends on a single layer.
export async function requireAdminSession(): Promise<SessionProfile> {
  const session = await getSessionProfile();

  if (!session || session.profile?.role !== "admin") {
    redirect("/dashboard");
  }

  return session;
}
