"use client";

import { useActionState } from "react";
import { updatePassword, type UpdatePasswordState } from "./actions";
import FormField from "@/components/auth/FormField";
import SubmitButton from "@/components/auth/SubmitButton";

const initialState: UpdatePasswordState = { error: null };

export default function UpdatePasswordForm() {
  const [state, formAction] = useActionState(updatePassword, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormField
        label="New password"
        name="password"
        type="password"
        autoComplete="new-password"
      />
      <FormField
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
      />
      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <SubmitButton>Update password</SubmitButton>
    </form>
  );
}
