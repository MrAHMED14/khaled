export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(request) {
  const SessionCookiesProduction = request.cookies.has(
    "__Secure-next-auth.session-token"
  );

  if (!SessionCookiesProduction)
    return NextResponse.redirect(
      new URL(
        `/signin?callbackUrl=${encodeURIComponent(request.url)}`,
        request.url
      )
    );
}

export const config = {
  matcher: ["/blog/:path*", "/secret/:path*", "/profile/:path*"],
};
