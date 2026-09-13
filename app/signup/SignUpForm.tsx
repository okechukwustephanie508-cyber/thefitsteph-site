"use client";

import { useActionState } from "react";
import { signUp, type SignUpActionState } from "./actions";
import FormField from "@/components/auth/FormField";
import SubmitButton from "@/components/auth/SubmitButton";

const initialState: SignUpActionState = { error: null, success: false };

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUp, initialState);

  if (state.success) {
    return (
      <p className="text-sm leading-relaxed text-ink/80">
        Check your email to confirm your account. Once confirmed, you can log
        in and finish setting up your account.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormField label="Email" name="email" type="email" autoComplete="email" />
      <FormField
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
      />
      <FormField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
      />
      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <SubmitButton>Create account</SubmitButton>
    </form>
  );
}
