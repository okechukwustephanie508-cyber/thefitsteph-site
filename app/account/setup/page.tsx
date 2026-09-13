import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import { getSessionProfile } from "@/lib/auth/session";
import AccountSetupForm from "./AccountSetupForm";

export const metadata: Metadata = {
  title: "Set Up Your Account",
  robots: { index: false, follow: false },
};

export default async function AccountSetupPage() {
  const session = await getSessionProfile();

  if (!session) {
    redirect("/login");
  }

  return (
    <AuthShell
      title="Complete your account"
      description="A few details so we can set up your dashboard and match you to the right programs."
    >
      <AccountSetupForm profile={session.profile} />
    </AuthShell>
  );
}
