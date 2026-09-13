"use client";

import { useActionState } from "react";
import { completeAccountSetup, type AccountSetupState } from "./actions";
import FormField from "@/components/auth/FormField";
import SubmitButton from "@/components/auth/SubmitButton";
import type { Profile } from "@/lib/types/database";

const initialState: AccountSetupState = { error: null };

export default function AccountSetupForm({
  profile,
}: {
  profile: Profile | null;
}) {
  const [state, formAction] = useActionState(
    completeAccountSetup,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="First name"
          name="firstName"
          autoComplete="given-name"
          defaultValue={profile?.first_name ?? ""}
        />
        <FormField
          label="Last name"
          name="lastName"
          autoComplete="family-name"
          defaultValue={profile?.last_name ?? ""}
        />
      </div>
      <FormField
        label="Phone number"
        name="phone"
        type="tel"
        autoComplete="tel"
        required={false}
        defaultValue={profile?.phone ?? ""}
      />
      <FormField
        label="Date of birth"
        name="dateOfBirth"
        type="date"
        required={false}
        defaultValue={profile?.date_of_birth ?? ""}
      />
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Sex</span>
        <select
          name="sex"
          required
          defaultValue={profile?.sex ?? ""}
          className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none transition-colors focus:border-green"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <span className="mt-1.5 block text-xs text-ink/50">
          Used only to determine eligibility for women-only programs like D30
          Group.
        </span>
      </label>
      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <SubmitButton>Finish setup</SubmitButton>
    </form>
  );
}
