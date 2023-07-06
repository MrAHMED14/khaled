export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(request) {
  const SessionCookies = request.cookies.has("next-auth.session-token");
  if (!SessionCookies)
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
