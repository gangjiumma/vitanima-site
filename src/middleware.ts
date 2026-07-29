import { NextResponse, type NextRequest } from "next/server";
import { LANGS } from "@/lib/dict";

const DEFAULT: (typeof LANGS)[number] = "ko";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const first = pathname.split("/")[1];
  if ((LANGS as readonly string[]).includes(first)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${DEFAULT}` : `/${DEFAULT}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // _next 내부 · api · 확장자 있는 정적 파일은 건드리지 않는다
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
