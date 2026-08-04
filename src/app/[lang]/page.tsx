import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import Loop from "@/components/Loop";
import PhoneMock from "@/components/PhoneMock";
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
      {/* ══ 1. HERO ══════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16 lg:py-32">
          <Reveal>
            <p className="t-label text-forest">{h.eyebrow}</p>
            <h1 className="t-display mt-6 text-[36px] text-ink sm:text-[50px] lg:text-[56px]">
              {h.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-7 max-w-lg space-y-4">
              {h.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.85] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
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

          {/* 대화 → 학습 → 신호 3단 */}
          <Reveal delay={140}>
            <div>
              {h.heroFlow.map((f, i) => (
                <div key={f.k}>
                  <div className="border border-line bg-bone-2 px-6 py-5">
                    <div className="flex items-baseline gap-3">
                      <span className="t-label t-num text-forest">{f.k}</span>
                      <span className="t-label text-ink-4">{f.en}</span>
                    </div>
                    <h2 className="t-title mt-2 text-[19px] text-ink">{f.t}</h2>
                    <p className="mt-1.5 text-[13.5px] leading-[1.7] text-ink-3">
                      {f.d}
                    </p>
                  </div>
                  {i < h.heroFlow.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown size={16} className="text-forest" />
                    </div>
                  )}
                </div>
              ))}
              <p className="t-title mt-6 border-t-2 border-forest pt-4 text-center text-[15px] text-forest">
                {h.heroFlowCenter}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. PROBLEM ═══════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[40fr_60fr] lg:gap-16">
          <Reveal>
            <p className="t-label text-forest-lit">{h.problemEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] sm:text-[38px]">
              {h.problemH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 space-y-4">
              {h.problemLead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-bone/65"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-8 border-l-2 border-forest-lit pl-5 text-[16px] leading-[1.7] text-bone sm:text-[18px]">
              {h.problemQuote}
            </p>
          </Reveal>

          {/* 생애 변화 타임라인 */}
          <Reveal delay={130}>
            <ol className="grid gap-px bg-line-dark sm:grid-cols-2">
              {h.timeline.map((t, i) => (
                <li key={t.t} className="bg-ink p-5 sm:p-6">
                  <span className="t-label t-num text-forest-lit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-title mt-2 text-[17px] text-bone">{t.t}</h3>
                  <ul className="mt-2 space-y-1">
                    {t.d.map((x) => (
                      <li key={x} className="text-[13.5px] text-bone/55">
                        {x}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-8 space-y-3">
              <p className="border border-line-dark px-5 py-3.5 text-[13.5px] text-ink-4 line-through decoration-ink-4 decoration-1">
                {h.timelineOld}
              </p>
              <p className="t-title border-2 border-forest-lit bg-forest/20 px-5 py-3.5 text-[14px] text-bone">
                {h.timelineNew}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 3. PRODUCT ═══════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
            {/* 앱 화면 자리 */}
            <Reveal className="order-2 flex justify-center lg:order-1">
              <PhoneMock />
            </Reveal>

            <Reveal delay={120} className="order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-3">
                <p className="t-label text-forest">{h.prodEyebrow}</p>
                <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                  {h.prodTag}
                </span>
              </div>
              <h2 className="t-display mt-5 text-[40px] text-ink sm:text-[52px]">
                {h.prodH2}
              </h2>
              <p className="t-title mt-3 text-[19px] leading-[1.45] text-forest sm:text-[23px]">
                {h.prodTagline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <div className="mt-7 max-w-xl space-y-4">
                {h.prodBody.map((p) => (
                  <p
                    key={p.slice(0, 12)}
                    className="text-[15.5px] leading-[1.9] text-ink-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={d.common.iosUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
                >
                  {h.iosBtn}
                </a>
                <a
                  href={d.common.androidUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
                >
                  {h.androidBtn}
                </a>
                <Link
                  href={`/${lang}/animai`}
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
                >
                  {h.prodLink}
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {h.prodCards.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <li className="border-t border-line pt-5">
                  <h3 className="t-title text-[18px] text-ink">{c.t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.8] text-ink-3">
                    {c.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ 4. THE LOOP ══════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          <Reveal className="flex flex-col items-center">
            <Loop keys={h.loopSteps.map((s) => s.k)} center={h.loopCenter} tone="dark" />
            <ul className="mt-8 grid w-full gap-x-6 gap-y-2 sm:grid-cols-2">
              {h.loopSteps.map((s) => (
                <li key={s.k} className="flex items-baseline gap-2.5">
                  <span className="t-label t-num text-forest-lit">{s.k}</span>
                  <span className="text-[13.5px] text-bone/65">{s.t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={130}>
            <p className="t-label text-forest-lit">{h.loopEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] sm:text-[36px]">
              {h.loopH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-9 border border-line-dark p-6">
              <p className="t-title text-[17px] leading-[1.6] text-bone sm:text-[19px]">
                “{h.loopExampleQuote}”
              </p>

              <p className="t-label mt-7 text-ink-4">
                {h.loopExampleLabel.toUpperCase()}
              </p>
              <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {h.loopExample.map((e) => (
                  <div key={e.k} className="flex gap-3 border-t border-line-dark pt-2">
                    <dt className="w-14 shrink-0 text-[13px] text-ink-4">
                      {e.k}
                    </dt>
                    <dd className="text-[13.5px] text-forest-lit">{e.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="t-label mt-7 text-ink-4">
                {h.loopExampleNextLabel.toUpperCase()}
              </p>
              <p className="mt-2.5 text-[14px] leading-[1.85] text-bone/70">
                {h.loopExampleNext}
              </p>
            </div>

            <p className="mt-7 max-w-lg text-[14.5px] leading-[1.85] text-bone/60">
              {h.loopBody}
            </p>
            <Link
              href={`/${lang}/technology`}
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest-lit underline-offset-4 hover:underline"
            >
              {h.loopLink}
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ 5. NEXT SIGNAL ═══════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          {/* 제품 자리 */}
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tag-pets.png"
              alt={h.signalTagAlt}
              className="mx-auto w-full max-w-[440px]"
            />
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="t-label text-forest">{h.signalEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {h.signalH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 space-y-4">
              {h.signalBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-7 border-l-2 border-forest pl-5 text-[15.5px] leading-[1.7] text-ink sm:text-[17px]">
              {h.signalQuote}
            </p>

            <ol className="mt-9 space-y-3">
              {h.signalTimeline.map((t) => (
                <li
                  key={t.d}
                  className="flex flex-wrap items-baseline gap-x-5 border-t border-line pt-3"
                >
                  <span className="t-label t-num w-24 shrink-0 text-forest">
                    {t.d}
                  </span>
                  <span className="text-[14.5px] text-ink">{t.t}</span>
                </li>
              ))}
            </ol>

            <Link
              href={`/${lang}/technology`}
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
            >
              {h.signalLink}
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ 6. ONE PLATFORM ══════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest">{h.platformEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[26px] text-ink sm:text-[34px]">
              {h.platformH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-0">
            {h.platformSides.map((s, i) => (
              <Reveal key={s.t} delay={i * 130}>
                <div
                  className={
                    i === 0
                      ? "lg:border-r lg:border-line lg:pr-14"
                      : "lg:pl-14"
                  }
                >
                  <p className="t-label text-forest">{s.en}</p>
                  <h3 className="t-display mt-4 text-[30px] text-ink sm:text-[36px]">
                    {s.t}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-[1.9] text-ink-3">
                    {s.d}
                  </p>
                  <ul className="mt-7 space-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="border-t border-line pt-2 text-[14.5px] text-ink"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={i === 0 ? `/${lang}/animai` : d.common.dashboardUrl}
                    target={i === 0 ? undefined : "_blank"}
                    rel={i === 0 ? undefined : "noreferrer"}
                    className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
                  >
                    {s.link}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PROOF + CTA ═══════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{h.proofEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {h.proofH2}
            </h2>
          </Reveal>

          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {h.proofs.map((p, i) => (
              <Reveal key={p.l} delay={i * 80}>
                <div className="border-t-2 border-forest pt-5">
                  <dt className="t-display t-num text-[34px] leading-none text-forest sm:text-[42px]">
                    {p.n}
                  </dt>
                  <dd className="mt-3 text-[14px] leading-relaxed text-ink-3">
                    {p.l}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <p className="mt-9 text-[12px] text-ink-4">{h.proofNote}</p>

          {/* 실행 경험 */}
          <div className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <h3 className="t-display text-[24px] text-ink sm:text-[32px]">
                {h.trackH2.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-ink-3">
                {h.trackLead}
              </p>
              <Link
                href={`/${lang}/about`}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
              >
                {h.trackLink}
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
                {h.trackMetrics.map((m) => (
                  <div key={m.l} className="border-t border-line pt-4">
                    <dt className="t-display t-num text-[28px] leading-none text-ink sm:text-[32px]">
                      {m.n}
                    </dt>
                    <dd className="mt-2.5 text-[13px] leading-snug text-ink-3">
                      {m.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ 소식 ═════════════════════════════════ */}
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

      {/* ══ 최종 CTA ═════════════════════════════ */}
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
            <p className="mt-7 max-w-lg text-[15.5px] leading-[1.9] text-bone/70">
              {h.ctaLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/animai`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {h.ctaBtn}
                <ArrowRight size={15} />
              </Link>
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
