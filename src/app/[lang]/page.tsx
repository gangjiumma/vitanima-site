import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Loop from "@/components/Loop";
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
  const news = sortedNews().slice(0, 3);

  return (
    <>
      {/* ── 1. 메인 ──────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-32">
          <Reveal>
            <p className="t-label text-forest">{h.eyebrow}</p>
            <h1 className="t-display mt-6 text-[36px] text-ink sm:text-[50px] lg:text-[58px]">
              {h.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-lg text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {h.lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/animai`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {h.ctaPrimary}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={`/${lang}/technology`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {h.ctaSecondary}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140} className="flex flex-col items-center">
            <Loop keys={h.loopSteps.map((s) => s.k)} center={h.loopCenter} />
            <p className="mt-6 max-w-[320px] text-center text-[13px] leading-relaxed text-ink-4">
              {h.loopCaption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. 문제 정의 ─────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest-lit">{h.problemEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] sm:text-[40px]">
              {h.problemH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-bone/70 sm:text-[16.5px]">
              {h.problemLead}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {h.problems.map((p, i) => (
              <Reveal key={p.t} delay={i * 110}>
                <div className="border-t border-line-dark pt-6">
                  <h3 className="t-title text-[19px] leading-snug text-bone sm:text-[21px]">
                    {p.t}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-[1.85] text-bone/60">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 접근 방식 ─────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest">{h.axEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] sm:text-[38px]">
              <span className="block text-ink-4">{h.axH2[0]}</span>
              <span className="mt-1 block text-ink">{h.axH2[1]}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[15.5px] leading-[1.95] text-ink-3 sm:text-[16.5px]">
              {h.axBody}
            </p>
            <p className="t-title mt-6 max-w-2xl border-l-2 border-forest pl-5 text-[16px] leading-[1.7] text-ink sm:text-[18px]">
              {h.axNote}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="t-label mt-16 text-ink-4">
              {h.axCardsTitle.toUpperCase()}
            </h3>
          </Reveal>
          <ol className="mt-7 grid gap-x-10 gap-y-9 sm:grid-cols-3">
            {h.axPoints.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <li className="border-t-2 border-forest pt-5">
                  <span className="t-label t-num text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="t-title mt-2.5 text-[19px] text-ink sm:text-[21px]">
                    {p.t}
                  </h4>
                  <p className="mt-2.5 text-[14.5px] leading-[1.85] text-ink-3">
                    {p.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. 서비스 ────────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{h.fieldEyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {h.fieldTag}
              </span>
            </div>
            <h2 className="t-display mt-5 text-[40px] text-ink sm:text-[52px]">
              {h.fieldH2}
            </h2>
            <p className="t-title mt-3 max-w-xl text-[18px] leading-[1.5] text-forest sm:text-[21px]">
              {h.fieldTagline}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {h.fieldCols.map((c, i) => (
              <Reveal key={c.t} delay={i * 120}>
                <div className="border-t border-line pt-6">
                  <h3 className="t-title text-[21px] text-ink sm:text-[24px]">
                    {c.t}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-[1.9] text-ink-3">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <ul className="mt-14 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {h.fieldFeatures.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <li className="border-t border-line pt-4">
                  <h4 className="t-title text-[16px] text-ink">{f.t}</h4>
                  <p className="mt-1.5 text-[13.5px] leading-[1.7] text-ink-3">
                    {f.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <Link
              href={`/${lang}/animai`}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              {h.fieldLink}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 5. 기술 구조 ─────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest">{h.structureEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[40px]">
              {h.structureH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3 sm:text-[16.5px]">
              {h.structureLead}
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {h.loopSteps.map((s, i) => (
              <Reveal key={s.k} delay={i * 70}>
                <li className="border-t border-line pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="t-label t-num text-forest">{s.k}</span>
                    <h3 className="t-title text-[20px] text-ink">{s.t}</h3>
                  </div>
                  <p className="mt-2.5 text-[14.5px] leading-[1.8] text-ink-3">
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <Link
              href={`/${lang}/technology`}
              className="mt-12 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
            >
              {h.structureLink}
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 6. 회사 경험 ─────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <p className="t-label text-forest-lit">{h.trackEyebrow}</p>
              <h2 className="t-display mt-5 text-[26px] sm:text-[36px]">
                {h.trackH2.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-7 max-w-lg text-[15px] leading-[1.9] text-bone/70">
                {h.trackLead}
              </p>
              <Link
                href={`/${lang}/about`}
                className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest-lit underline-offset-4 hover:underline"
              >
                {h.trackLink}
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>

            <Reveal delay={130}>
              <dl className="grid gap-x-8 gap-y-9 sm:grid-cols-3">
                {h.trackMetrics.map((m) => (
                  <div key={m.l} className="border-t-2 border-forest-lit pt-5">
                    <dt className="t-display t-num text-[34px] leading-none text-forest-lit sm:text-[40px]">
                      {m.n}
                    </dt>
                    <dd className="mt-3 text-[13.5px] leading-snug text-bone/60">
                      {m.l}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-[12px] text-ink-4">{h.trackNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. 현재까지 ──────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{h.proofEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] text-ink sm:text-[36px]">
              {h.proofH2}
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {h.proofLead}
            </p>
          </Reveal>

          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {h.proofs.map((p, i) => (
              <Reveal key={p.l} delay={i * 80}>
                <div className="border-t border-line pt-5">
                  <dt className="t-display t-num text-[32px] leading-none text-forest sm:text-[38px]">
                    {p.n}
                  </dt>
                  <dd className="mt-3 text-[14px] leading-relaxed text-ink-3">
                    {p.l}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <p className="mt-10 text-[12px] text-ink-4">{h.proofNote}</p>
        </div>
      </section>

      {/* ── 8. 소식 ──────────────────────────────── */}
      <section className="border-b border-line">
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

          {news.length === 0 ? (
            <Reveal delay={80}>
              <p className="mt-8 border-t border-line pt-6 text-[15px] text-ink-4">
                {h.newsEmpty}
              </p>
            </Reveal>
          ) : (
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
          )}
        </div>
      </section>

      {/* ── 9. 문의 ──────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] text-ink sm:text-[40px]">
              {h.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-lg text-[15.5px] leading-[1.85] text-ink-3">
              {h.ctaLead}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              {h.ctaBtn}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
