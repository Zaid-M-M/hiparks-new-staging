import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const setCookie = response.headers.get("set-cookie");
  if (setCookie) {
    const hardened = setCookie
      .split(",")
      .map((cookie) => {
        if (!cookie.includes("HttpOnly")) cookie += "; HttpOnly";
        if (!cookie.includes("Secure")) cookie += "; Secure";
        if (!cookie.includes("SameSite")) cookie += "; SameSite=Lax";
        return cookie;
      })
      .join(",");

    response.headers.set("set-cookie", hardened);
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
