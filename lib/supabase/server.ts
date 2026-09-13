import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { Database } from "@/lib/types/database";

// Server-side Supabase client for Server Components, Route Handlers, and
// Server Actions. It runs every query as the currently signed-in user (via
// their session cookie), so it is bound by the same RLS policies as the
// browser client, it just also works during server rendering.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Setting cookies from a Server Component (rather than a
            // Server Action or Route Handler) throws. Session refresh in
            // that case is handled by the middleware instead.
          }
        },
      },
    }
  );
}
