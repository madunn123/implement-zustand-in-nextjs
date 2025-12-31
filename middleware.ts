import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/")) {
    // console.log("Middleware executed on /home path");
  }

//   return NextResponse.redirect(new URL("/", request.url));
}
