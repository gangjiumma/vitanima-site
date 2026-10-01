import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";
import { sortedNews, type NewsCat } from "@/lib/news";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const h = d.home;
  // /news 페이지는 현재 비공개(middleware 리다이렉트).
  // 공개할 때 아래 false 를 지우고 Header·Footer·sitemap 에 되살린다.
  const NEWS_PUBLIC = false;
  const news = NEWS_PUBLIC ? sortedNews().slice(0, 3) : [];

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:py-32">
          <Reveal>
            <p className="t-label text-ink-4">{h.eyebrow}</p>
            <h1 className="t-display mt-6 max-w-4xl text-[36px] text-ink sm:text-[52px] lg:text-[58px]">
              {h.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-8 max-w-2xl space-y-4">
              {h.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.9] text-ink-3 sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${d.common.salesEmail}?subject=${encodeURIComponent(
                  lang === "ko" ? "[Flowstamp 도입 문의]" : "[Flowstamp enquiry]"
                )}`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {h.ctaPrimary}
                <ArrowRight size={15} />
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {h.ctaSecondary}
                <ArrowDown size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={160} className="hidden lg:block">
            <ul className="space-y-2 border-l border-line pl-6 text-right">
              {h.heroMarks.map((m) => (
                <li
                  key={m}
                  className="t-display text-[15px] tracking-[0.18em] text-ink-4"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. PROBLEM ═══════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[45fr_55fr] lg:gap-16">
          <Reveal>
            <p className="t-label text-forest-lit">{h.problemEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] sm:text-[38px]">
              {h.problemH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-lg text-[16px] leading-[1.6] text-forest-lit sm:text-[18px]">
              {h.problemSub}
            </p>
          </Reveal>

          <Reveal delay={130}>
            <div className="space-y-5">
              {h.problemLead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-display mt-10 border-t border-line-dark pt-8 text-[22px] leading-[1.45] sm:text-[28px]">
              {h.problemQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 3. HOW WE WORK — 두 프로젝트 ═════════ */}
      <section
        id="how-we-work"
        className="scroll-mt-20 border-b border-line bg-bone-2"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest">{h.wayEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {h.wayH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-2xl text-[16px] leading-[1.6] text-forest sm:text-[18px]">
              {h.waySub}
            </p>
          </Reveal>

          {/* 열 제목 */}
          <Reveal delay={100}>
            <div className="mt-14 hidden gap-4 border-b border-line pb-3 lg:grid lg:grid-cols-[190px_1fr_1fr_1fr]">
              <span />
              {h.wayCols.map((c) => (
                <span key={c} className="t-label text-ink-4">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {h.wayRows.map((r, i) => (
            <Reveal key={r.name} delay={140 + i * 110}>
              <div className="grid gap-5 border-b border-line py-8 lg:grid-cols-[190px_1fr_1fr_1fr] lg:items-center lg:gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="t-display text-[22px] text-ink sm:text-[25px]">
                      {r.name}
                    </h3>
                    <span
                      className={`t-label rounded-full px-2.5 py-1 ${
                        r.live
                          ? "bg-forest text-bone"
                          : "border border-line text-ink-4"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] text-ink-3">{r.field}</p>
                </div>

                {r.steps.map((st, si) => (
                  <div key={st} className="flex items-center gap-3">
                    <div className="flex-1 border border-line bg-bone px-4 py-3.5 text-[14.5px] text-ink">
                      {st}
                    </div>
                    {si < r.steps.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="hidden shrink-0 text-forest lg:block"
                      />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ 4. FLOWSTAMP ═════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{h.fsEyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {h.fsBadge}
              </span>
            </div>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] text-ink sm:text-[40px]">
              {h.fsH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-2xl text-[16px] leading-[1.6] text-ink-3 sm:text-[18px]">
              {h.fsSub}
            </p>
          </Reveal>

          {/* 제품 화면 */}
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fs-console.jpg"
              alt={h.fsConsoleAlt}
              className="mt-12 w-full border border-line"
            />
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <div className="max-w-xl space-y-5">
                {h.fsBody.map((p) => (
                  <p
                    key={p.slice(0, 12)}
                    className="text-[15.5px] leading-[1.95] text-ink-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={`/${lang}/flowstamp`}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
                >
                  {h.fsLink}
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={d.common.flowstampUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
                >
                  {h.fsSiteLink}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
                {h.fsMetrics.map((m) => (
                  <div key={m.l} className="border-t-2 border-forest pt-5">
                    <dt className="t-display t-num whitespace-nowrap text-[38px] leading-none text-forest sm:text-[46px]">
                      {m.n}
                    </dt>
                    <dd className="t-title mt-3.5 text-[14px] leading-snug text-ink">
                      {m.l}
                    </dd>
                    <dd className="t-num mt-1 text-[12.5px] text-ink-4">
                      {m.sub}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 text-[12.5px] leading-relaxed text-ink-4">
                {h.fsMetricsNote}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ 5. ANIMAI ════════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{h.aiEyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {h.aiBadge}
              </span>
            </div>
            <h2 className="t-display mt-5 text-[26px] text-ink sm:text-[34px]">
              {h.aiH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 max-w-xl space-y-4">
              {h.aiBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-3">
              {h.aiMetrics.map((m) => (
                <div key={m.l} className="border-t border-line pt-4">
                  <dt className="t-display t-num whitespace-nowrap text-[24px] leading-none text-ink sm:text-[27px]">
                    {m.n}
                  </dt>
                  <dd className="mt-2 text-[13px] text-ink-3">{m.l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12.5px] text-ink-4">{h.aiMetricsNote}</p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={`/${lang}/animai`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {h.aiLink}
                <ArrowRight size={15} />
              </Link>
              <a
                href={d.common.productUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
              >
                animai.kr
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={130}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tag-pets.png"
              alt="AnimAI"
              className="mx-auto w-full max-w-[380px]"
            />
          </Reveal>
        </div>
      </section>

      {/* ══ 6. VITANIMA TODAY ════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{h.proofEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] text-ink sm:text-[36px]">
              {h.proofH2}
            </h2>
          </Reveal>

          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {h.proofs.map((p, i) => (
              <Reveal key={p.l} delay={i * 80}>
                <div className="border-t-2 border-forest pt-5">
                  <dt className="t-display t-num whitespace-nowrap text-[30px] leading-none text-forest sm:text-[36px]">
                    {p.n}
                  </dt>
                  <dd className="mt-3 text-[13.5px] leading-relaxed text-ink-3">
                    {p.l}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={140}>
            <p className="mt-9 max-w-2xl text-[12.5px] leading-relaxed text-ink-4">
              {h.proofNote}
            </p>
            <Link
              href={`/${lang}/ceo`}
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
            >
              {h.proofLink}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ 소식 — 등록된 뉴스가 있을 때만 ═══════ */}
      {news.length > 0 && (
        <section className="border-b border-line bg-bone-2">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <h2 className="t-display text-[26px] text-ink sm:text-[32px]">
                  {h.newsH2}
                </h2>
                <Link
                  href={`/${lang}/news`}
                  className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
                >
                  {h.newsLink}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <ul className="mt-8">
              {news.map((n, i) => (
                <Reveal key={n.id} delay={i * 70}>
                  <li className="border-t border-line last:border-b">
                    <a
                      href={n.href || `/${lang}/news`}
                      target={n.href ? "_blank" : undefined}
                      rel={n.href ? "noreferrer" : undefined}
                      className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-5 transition-colors hover:text-forest"
                    >
                      <span className="t-label t-num text-ink-4">{n.date}</span>
                      <span className="t-label text-forest">
                        {d.news.cats[n.cat as NewsCat]}
                      </span>
                      <span className="t-title text-[17px] sm:text-[19px]">
                        {n.title[lang]}
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ══ 7. FINAL CTA ═════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] sm:text-[42px]">
              {h.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-[1.9] text-bone/70">
              {h.ctaLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${d.common.salesEmail}?subject=${encodeURIComponent(
                  lang === "ko" ? "[Flowstamp 도입 문의]" : "[Flowstamp enquiry]"
                )}`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                <Mail size={16} />
                {h.ctaBtn}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 rounded-full border border-line-dark px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:border-forest-lit hover:text-forest-lit"
              >
                {h.ctaBtn2}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
