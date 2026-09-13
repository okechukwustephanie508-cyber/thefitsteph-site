import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Supabase sends email confirmation and password recovery links here with a
// one-time code. Exchanging it for a session is what actually signs the
// user in (or starts their recovery session) before continuing on.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${redirectTo}`);
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
