import type { MetadataRoute } from "next";
import { LANGS } from "@/lib/dict";

const BASE = "https://www.vitanima.kr";
const ROUTES = [
  "",
  "/about",
  "/ceo",
  "/animai",
  "/technology",
  "/news",
  "/careers",
  "/contact",
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
