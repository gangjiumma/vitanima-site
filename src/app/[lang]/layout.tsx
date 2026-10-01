import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 랜딩 모드.
 * true  — 홈 한 장짜리 랜딩만 노출 (Header / Footer 숨김)
 * false — 전체 사이트 복구
 * 끌 때는 middleware.ts 의 HIDDEN 배열도 함께 비울 것.
 */
const LANDING_MODE = true;
import { LANGS, getDict, resolveLang } from "@/lib/dict";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return {
    metadataBase: new URL("https://www.vitanima.kr"),
    title: d.meta.title,
    description: d.meta.description,
    keywords: [...d.meta.keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: { ko: "/ko", en: "/en" },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: `https://www.vitanima.kr/${lang}`,
      siteName: d.common.company,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    robots: { index: true, follow: true },
    verification: {
      other: {
        "naver-site-verification":
          "0a9d08a53f66a2196ea9d5752d4707b6185b35ba",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);

  return (
    <html lang={lang}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={LANDING_MODE ? "antialiased bg-paper" : "antialiased"}>
        {/* 검색엔진에 회사·서비스 구조 통보 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vitanima Inc.",
              alternateName: ["주식회사 비타니마", "비타니마", "Vitanima"],
              url: "https://www.vitanima.kr",
              email: "cs@vitanima.kr",
              telephone: "+82-10-2358-5248",
              description:
                lang === "ko"
                  ? "소상공인과 중소기업의 AX를 돕는 회사. 현장 운영 솔루션 Flowstamp와 반려동물 AI 서비스 AnimAI를 만듭니다."
                  : "AX for small businesses and SMEs. We build Flowstamp, a field operations solution, and AnimAI for life with companion animals.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR",
                addressRegion:
                  lang === "ko" ? "인천광역시" : "Incheon",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "SoftwareApplication",
                    name: "Flowstamp",
                    applicationCategory: "BusinessApplication",
                    url: "https://www.flowstamp.kr",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "SoftwareApplication",
                    name: "AnimAI",
                    applicationCategory: "LifestyleApplication",
                    url: "https://www.animai.kr",
                  },
                },
              ],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          {lang === "ko" ? "본문으로 건너뛰기" : "Skip to content"}
        </a>
        {LANDING_MODE ? (
          children
        ) : (
          <>
            <Header lang={lang} />
            <main id="main">{children}</main>
            <Footer lang={lang} />
          </>
        )}
      </body>
    </html>
  );
}
