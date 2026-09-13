import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";
import ProfileForm from "./ProfileForm";

export const metadata: Metadata = {
  title: "Profile",
  robots: { index: false, follow: false },
};

export default async function ProfilePage() {
  const session = await getSessionProfile();

  if (!session || !session.profile) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-3xl text-ink">Profile</h1>
        <p className="mt-2 text-sm text-ink/60">{session.email}</p>
      </div>
      <ProfileForm profile={session.profile} />
    </div>
  );
}
