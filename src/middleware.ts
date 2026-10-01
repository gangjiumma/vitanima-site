import { NextResponse, type NextRequest } from "next/server";
import { LANGS } from "@/lib/dict";

const DEFAULT: (typeof LANGS)[number] = "ko";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const first = pathname.split("/")[1];
  if ((LANGS as readonly string[]).includes(first)) {
    // 랜딩 모드 — 홈 한 장만 노출하고 나머지는 홈으로 돌려보낸다.
    // 전체 사이트를 되살릴 때는 이 배열을 비우고,
    // layout.tsx 의 LANDING_MODE 를 false 로, page.tsx 를 page.full.tsx.bak 로 되돌린다.
    const HIDDEN = [
      "/technology",
      "/news",
      "/careers",
      "/about",
      "/ceo",
      "/flowstamp",
      "/animai",
      "/contact",
    ];
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
