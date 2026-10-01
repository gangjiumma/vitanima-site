import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

/**
 * 랜딩 페이지 (임시).
 *
 * 전체 사이트를 되살릴 때:
 *   1. 이 파일을 지우고 page.full.tsx.bak 을 page.tsx 로 되돌린다
 *   2. middleware.ts 의 HIDDEN 배열을 비운다
 *   3. Header / Footer / sitemap 의 링크를 복구한다
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

  const mailto = `mailto:${d.common.email}?subject=${encodeURIComponent(
    lang === "ko" ? "[비타니마 문의]" : "[Vitanima enquiry]"
  )}`;

  return (
    <main className="min-h-screen bg-paper">
      {/* ══ HERO ═════════════════════════════════ */}
      <section className="border-b border-line-soft">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <Reveal>
            <span className="t-label inline-block rounded-full bg-forest-soft px-3.5 py-1.5 text-forest">
              {t.badge}
            </span>

            <h1 className="t-display mt-8 text-[38px] leading-[1.18] text-ink sm:text-[56px] lg:text-[64px]">
              {t.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-[1.85] text-ink-3 sm:text-[19px]">
              {t.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-paper transition-colors hover:bg-forest-2"
              >
                {t.servicesH2}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line-soft px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {t.contactEyebrow === "CONTACT" && lang === "ko"
                  ? "문의하기"
                  : "Contact"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ ABOUT ════════════════════════════════ */}
      <section className="border-b border-line-soft bg-paper-2">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-label text-forest">{t.aboutH2}</h2>
            <div className="mt-7 space-y-5">
              {t.aboutBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.95] text-ink-2 sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SERVICES ═════════════════════════════ */}
      <section
        id="services"
        className="scroll-mt-16 border-b border-line-soft bg-paper"
      >
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[28px] text-ink sm:text-[36px]">
              {t.servicesH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.services.map((sv, i) => (
              <Reveal key={sv.name} delay={i * 110}>
                <a
                  href={SERVICE_URLS[i]}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line-soft bg-paper p-7 transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-[0_12px_32px_-16px_rgba(20,82,63,0.25)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="t-display text-[26px] text-ink sm:text-[30px]">
                      {sv.name}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-ink-4 transition-colors group-hover:text-forest"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="t-label rounded-full bg-forest px-2.5 py-1 text-paper">
                      {sv.status}
                    </span>
                    <span className="t-label text-ink-4">{sv.tag}</span>
                  </div>

                  <p className="mt-5 flex-1 text-[14.5px] leading-[1.85] text-ink-3">
                    {sv.desc}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest">
                    {SERVICE_URLS[i].replace("https://www.", "")}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 text-[13px] text-ink-4">{t.servicesNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════ */}
      <section id="contact" className="scroll-mt-16 bg-paper-2">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest">{t.contactEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {t.contactH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-ink-3">
              {t.contactLead}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.contactTypes.map((c) => (
                <li
                  key={c.t}
                  className="rounded-xl border border-line-soft bg-paper px-5 py-4"
                >
                  <p className="t-title text-[15px] text-ink">{c.t}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-3">
                    {c.d}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-12 rounded-2xl border border-line-soft bg-paper p-8 sm:p-10">
              <a
                href={mailto}
                className="t-display block text-[22px] text-forest underline-offset-[6px] hover:underline sm:text-[30px]"
              >
                {d.common.email}
              </a>
              <a
                href={d.common.phoneHref}
                className="t-num mt-3 block text-[16px] text-ink-3 hover:text-forest"
              >
                {d.common.phone}
              </a>

              <a
                href={mailto}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-forest-2"
              >
                <Mail size={16} />
                {t.contactBtn}
              </a>
              <p className="mt-4 text-[13px] text-ink-4">{t.contactNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 법인 정보 (표기 의무) ════════════════ */}
      <footer className="border-t border-line-soft bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-14">
          <p className="t-display text-[18px] tracking-[0.02em] text-ink">
            VIT<span className="text-forest">ANIMA</span>
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5 text-[12.5px] text-ink-4">
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
                <div key={f.k} className="flex gap-2">
                  <dt>{f.k}</dt>
                  <dd className="text-ink-3">{f.v}</dd>
                </div>
              ))}
          </dl>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-6">
            <p className="text-[12.5px] text-ink-4">
              © {new Date().getFullYear()} {d.common.company}
            </p>
            <p className="text-[12.5px] text-ink-4">{t.preparing}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
