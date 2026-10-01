import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/dict";

const BASE = "https://www.vitanima.kr";
// 랜딩 모드 — 홈만 색인한다.
// 전체 사이트 복구 시 아래 주석을 해제한다.
const ROUTES = [
  "",
  // "/about", "/ceo", "/flowstamp", "/animai", "/contact", "/news", "/careers"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LANGS.flatMap((lang) =>
    ROUTES.map((r) => ({
      url: `${BASE}/${lang}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.7,
    }))
  );
}
