export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export function middleware(req) {
//   const URI = encodeURIComponent(req.url);
//   const sessionCookies = req.cookies.has("__Secure-next-auth.session-token");

//   if (!sessionCookies)
//     return NextResponse.redirect(
//       new URL(`/signin?callbackUrl=${URI}`, req.url)
//     );
// }

export const config = {
  matcher: ["/blog/:path*", "/secret/:path*", "/profile/:path*"],
};
