"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn, type AuthActionState } from "./actions";
import FormField from "@/components/auth/FormField";
import SubmitButton from "@/components/auth/SubmitButton";

const initialState: AuthActionState = { error: null };

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
  const [state, formAction] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <FormField label="Email" name="email" type="email" autoComplete="email" />
      <FormField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
      />
      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm text-green underline">
          Forgot password
        </Link>
      </div>
      <SubmitButton>Log in</SubmitButton>
    </form>
  );
}
