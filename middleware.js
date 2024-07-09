import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

//this middleware activates only if it matches the matcher
export const config = {
  matcher: ["/about/:path*"],
};
