import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getDict, resolveLang } from "@/lib/dict";

/**
 * 랜딩 페이지 (임시).
 *
 * 전체 사이트를 되살릴 때:
 *   1. 이 파일을 지우고 page.full.tsx.bak 을 page.tsx 로 되돌린다
 *   2. layout.tsx 의 LANDING_MODE 를 false 로
 *   3. middleware.ts 의 HIDDEN 배열을 비우고 sitemap.ts 주석을 해제한다
 */
export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const t = d.landing;

  const SERVICE_URLS = [d.common.flowstampUrl, d.common.productUrl];

  return (
    <main className="min-h-screen bg-paper">
      {/* ══ 1. HERO ══════════════════════════════ */}
      <section>
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <Reveal>
            <p className="t-display text-[19px] tracking-[0.01em] text-forest sm:text-[21px]">
              {t.wordmark}
            </p>

            <h1 className="t-display mt-10 text-[30px] leading-[1.35] text-ink sm:text-[40px]">
              {t.h1}
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {t.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. ABOUT ═════════════════════════════ */}
      <section className="border-t border-line-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <div className="space-y-4">
              {t.aboutBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.9] text-ink-2"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-8 text-[17px] leading-[1.7] text-forest sm:text-[19px]">
              {t.aboutQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 3. SERVICES ══════════════════════════ */}
      <section className="border-t border-line-soft bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="t-label text-ink-4">{t.servicesH2}</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.services.map((sv, i) => (
              <Reveal key={sv.name} delay={i * 110}>
                <a
                  href={SERVICE_URLS[i]}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line-soft bg-paper p-7 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-[0_12px_32px_-18px_rgba(20,82,63,0.28)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="t-display text-[24px] text-ink sm:text-[27px]">
                      {sv.name}
                    </h3>
                    <ArrowUpRight
                      size={19}
                      className="mt-1.5 shrink-0 text-ink-4 transition-colors group-hover:text-forest"
                    />
                  </div>

                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-ink-3">
                    {sv.desc}
                  </p>

                  <span className="mt-6 text-[13.5px] font-medium text-forest">
                    {sv.url}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. CONTACT ═══════════════════════════ */}
      <section className="border-t border-line-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[32px]">
              {t.contactH2}
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-ink-3">
              {t.contactLead}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9">
              <ContactForm copy={t.form} />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 text-[13.5px] text-ink-4">
              {t.orMail}{" "}
              <a
                href={`mailto:${d.common.email}`}
                className="font-medium text-forest underline-offset-4 hover:underline"
              >
                {d.common.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 법인 정보 (표기 의무) ════════════════ */}
      <footer className="border-t border-line-soft bg-paper-2">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-12">
          <dl className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-ink-4">
            {d.about.facts
              .filter((f) =>
                [
                  "법인명",
                  "대표이사",
                  "사업자등록번호",
                  "통신판매업신고번호",
                  "주소",
                  "Legal name",
                  "CEO",
                  "Business reg. no.",
                  "E-commerce reg. no.",
                  "Address",
                ].includes(f.k)
              )
              .map((f) => (
                <div key={f.k} className="flex gap-1.5">
                  <dt>{f.k}</dt>
                  <dd className="text-ink-3">{f.v}</dd>
                </div>
              ))}
          </dl>

          <p className="mt-6 border-t border-line-soft pt-5 text-[12.5px] text-ink-4">
            © {new Date().getFullYear()} {d.common.company}
          </p>
        </div>
      </footer>
    </main>
  );
}
