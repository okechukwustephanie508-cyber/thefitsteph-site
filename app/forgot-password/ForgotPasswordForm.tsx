"use client";

import { useActionState } from "react";
import {
  requestPasswordReset,
  type ForgotPasswordState,
} from "./actions";
import FormField from "@/components/auth/FormField";
import SubmitButton from "@/components/auth/SubmitButton";

const initialState: ForgotPasswordState = { error: null, success: false };

export default function ForgotPasswordForm() {
  const [state, formAction] = useActionState(
    requestPasswordReset,
    initialState
  );

  if (state.success) {
    return (
      <p className="text-sm leading-relaxed text-ink/80">
        If that email has an account, a password reset link is on its way.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormField label="Email" name="email" type="email" autoComplete="email" />
      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <SubmitButton>Send reset link</SubmitButton>
    </form>
  );
}
