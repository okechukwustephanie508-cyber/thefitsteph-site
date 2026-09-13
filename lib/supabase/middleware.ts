import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/lib/types/database";

const MEMBER_ROUTES = ["/dashboard", "/profile", "/membership", "/settings"];
const ADMIN_ROUTE_PREFIX = "/admin";
const ACCOUNT_SETUP_ROUTE = "/account/setup";
const AUTH_ROUTES = ["/login", "/signup", "/forgot-password"];

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isMemberRoute = MEMBER_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  const isAdminRoute = pathname.startsWith(ADMIN_ROUTE_PREFIX);
  const isAccountSetupRoute = pathname === ACCOUNT_SETUP_ROUTE;
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (!user && (isMemberRoute || isAdminRoute || isAccountSetupRoute)) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, profile_completed")
      .eq("id", user.id)
      .single();

    const profileCompleted = profile?.profile_completed ?? false;
    const isAdmin = profile?.role === "admin";

    if (isAuthRoute) {
      const destination = profileCompleted ? "/dashboard" : ACCOUNT_SETUP_ROUTE;
      return NextResponse.redirect(new URL(destination, request.url));
    }

    if (!profileCompleted && (isMemberRoute || isAdminRoute)) {
      return NextResponse.redirect(new URL(ACCOUNT_SETUP_ROUTE, request.url));
    }

    if (profileCompleted && isAccountSetupRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (isAdminRoute && !isAdmin) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return response;
}
