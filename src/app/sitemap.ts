import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/dict";

const BASE = "https://www.vitanima.kr";
const ROUTES = [
  "",
  "/about",
  "/ceo",
  "/flowstamp",
  "/animai",
  "/contact",
  // "/news", "/careers" — 준비 중 (middleware 에서 홈으로 리다이렉트)
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
