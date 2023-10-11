import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    const authToken = (request.headers.get("authorization") || "")
      .split("Bearer ")
      .at(1);

    if (authToken && authToken === process.env.NEXT_PUBLIC_TOKEN) {
      return NextResponse.next();
    }

    return NextResponse.json(
      {
        error: "invalid token",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.next();
}
