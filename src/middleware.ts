import { NextResponse, type NextRequest } from "next/server";
import { LANGS } from "@/lib/dict";

const DEFAULT: (typeof LANGS)[number] = "ko";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const first = pathname.split("/")[1];
  if ((LANGS as readonly string[]).includes(first)) {
    // /technology 는 /animai 로 흡수됨 — 기존 색인 URL 보존
    if (pathname.endsWith("/technology")) {
      const url = req.nextUrl.clone();
      url.pathname = `/${first}/animai`;
      return NextResponse.redirect(url, 308);
    }

    // 준비 중인 페이지 — 파일은 남겨두고 노출만 막는다.
    // 공개할 때는 아래 배열에서 해당 경로만 빼고 Header·sitemap 에 되살리면 된다.
    const HIDDEN = ["/news", "/careers"];
    if (HIDDEN.some((h) => pathname.endsWith(h))) {
      const url = req.nextUrl.clone();
      url.pathname = `/${first}`;
      return NextResponse.redirect(url, 307);
    }

    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${DEFAULT}` : `/${DEFAULT}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // _next 내부 · api · 확장자 있는 정적 파일은 건드리지 않는다
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
