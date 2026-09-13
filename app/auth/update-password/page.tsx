import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import UpdatePasswordForm from "./UpdatePasswordForm";

export const metadata: Metadata = {
  title: "Update Password",
  robots: { index: false, follow: false },
};

export default function UpdatePasswordPage() {
  return (
    <AuthShell
      title="Choose a new password"
      description="Enter a new password for your account."
    >
      <UpdatePasswordForm />
    </AuthShell>
  );
}
