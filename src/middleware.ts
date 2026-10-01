import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip rewriting if it looks like a static file (has an extension)
  if (request.nextUrl.pathname.includes('.')) {
    return NextResponse.next();
  }
  
  if (request.nextUrl.pathname === '/flavours') {
    return NextResponse.rewrite(new URL("/flavours/index.html", request.url));
  }
  
  if (request.nextUrl.pathname === '/story') {
    return NextResponse.rewrite(new URL("/story/index.html", request.url));
  }
  
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL("/palmo.html", request.url));
  }
  
  // Catch-all fallback
  return NextResponse.rewrite(new URL("/palmo.html", request.url));
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
