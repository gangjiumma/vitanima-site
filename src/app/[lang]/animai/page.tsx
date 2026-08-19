import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import PhoneMock from "@/components/PhoneMock";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.animai.h1} — ${d.common.companyShort}` };
}

export default async function AnimaiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const a = d.animai;

  return (
    <>
      {/* ══ 01. HERO ═════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{a.eyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {a.tag}
              </span>
            </div>
            <h1 className="t-display mt-5 text-[44px] text-ink sm:text-[58px]">
              {a.h1}
            </h1>
            <p className="t-display mt-3 text-[22px] leading-[1.4] text-forest sm:text-[28px]">
              {a.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-7 max-w-xl space-y-4">
              {a.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3 sm:text-[16.5px]"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-ink-4">
              {a.leadNote}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={d.common.iosUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
              >
                {a.iosBtn}
              </a>
              <a
                href={d.common.androidUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
              >
                {a.androidBtn}
              </a>
              <a
                href={d.common.productUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {a.siteBtn}
                <ArrowUpRight size={15} />
              </a>
            </div>

            <ul className="mt-8 space-y-1.5">
              {a.status.map((st) => (
                <li
                  key={st}
                  className="flex items-center gap-2 text-[13px] text-ink-4"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                  {st}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={130} className="flex justify-center">
            <PhoneMock />
          </Reveal>
        </div>
      </section>

      {/* ══ 02. WHY IT EXISTS ════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{a.whyH2.toUpperCase()}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] leading-[1.35] sm:text-[38px]">
              {a.whyLead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-2xl text-[17px] leading-[1.6] text-forest-lit sm:text-[19px]">
              {a.whySub}
            </p>
            <div className="mt-9 max-w-2xl space-y-5">
              {a.whyBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-display mt-12 max-w-2xl border-t border-line-dark pt-9 text-[21px] leading-[1.45] sm:text-[27px]">
              {a.whyQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 03. WHAT ANIMAI DOES ═════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {a.featureH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-11 sm:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="border-t-2 border-forest pt-6">
                  <span className="t-label t-num text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-title mt-2.5 text-[21px] text-ink sm:text-[23px]">
                    {f.t}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-[1.9] text-ink-3">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {a.subFeatures.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="border border-line bg-bone-2 px-6 py-5">
                  <h3 className="t-title text-[16px] text-ink">{f.t}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.75] text-ink-3">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04. HOW IT WORKS ═════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.flowEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {a.flowH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {a.flowSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div
                  className={`h-full p-6 ${
                    i === 2
                      ? "border-2 border-forest bg-forest-tint"
                      : "border border-line bg-bone"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="t-label t-num text-forest">{s.n}</span>
                    <span className="t-label text-ink-4">{s.label}</span>
                  </div>
                  {s.badge ? (
                    <p className="t-label mt-4 text-forest">{s.badge}</p>
                  ) : null}
                  <p
                    className={`${s.badge ? "mt-2.5" : "mt-4"} t-title text-[17px] leading-[1.6] text-ink`}
                  >
                    {s.isQuote ? `“${s.main}”` : s.main}
                  </p>
                  <p className="mt-4 text-[13.5px] leading-[1.8] text-ink-3">
                    {s.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-10 max-w-2xl text-[15px] leading-[1.9] text-ink-3">
              {a.flowBody}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3">
              {a.flowChain.map((c, i) => (
                <div key={c} className="flex items-center gap-3">
                  <span
                    className={`border px-4 py-2 text-[13.5px] ${
                      i === a.flowChain.length - 1
                        ? "border-forest bg-forest-tint text-forest"
                        : "border-line bg-bone text-ink-3"
                    }`}
                  >
                    {c}
                  </span>
                  {i < a.flowChain.length - 1 && (
                    <ArrowRight size={14} className="text-line" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 05. LIFETIME LOG ═════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.logEyebrow}</p>
            <h2 className="t-display mt-5 max-w-2xl text-[28px] text-ink sm:text-[38px]">
              {a.logH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 max-w-2xl space-y-4">
              {a.logBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14">
              <ul className="grid gap-4 sm:grid-cols-3">
                {a.logInputs.map((it) => (
                  <li
                    key={it.t}
                    className="border border-line bg-bone-2 px-5 py-5"
                  >
                    <p className="t-title text-[16px] text-ink">{it.t}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-3">
                      {it.d}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center py-4">
                <ArrowDown size={18} className="text-forest" />
              </div>

              <div className="border-2 border-forest bg-forest-tint px-6 py-6 text-center">
                <p className="t-display text-[22px] text-forest sm:text-[26px]">
                  {a.logResult}
                </p>
                <p className="mt-2 text-[14px] text-ink-3">{a.logResultSub}</p>
              </div>
            </div>

            <p className="t-display mt-12 max-w-2xl text-[20px] leading-[1.5] text-ink sm:text-[25px]">
              {a.logQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 06. CARE TAG ═════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tag-pets.png"
              alt={a.signalTagAlt}
              className="mx-auto w-full max-w-[420px]"
            />
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="t-label text-forest">{a.signalEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {a.signalH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-lg text-[16px] leading-[1.6] text-forest sm:text-[18px]">
              {a.signalSub}
            </p>
            <div className="mt-7 space-y-4">
              {a.signalBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>

            <ol className="mt-9 space-y-3">
              {a.signalTimeline.map((t) => (
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
            <p className="mt-5 text-[12.5px] text-ink-4">
              {a.signalTimelineNote}
            </p>

            <p className="t-title mt-9 border-l-2 border-forest pl-5 text-[15.5px] leading-[1.7] text-ink sm:text-[17px]">
              {a.signalQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <p className="mt-8 border-t border-line pt-5 text-[12.5px] leading-relaxed text-ink-4">
              {a.signalHomeNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 07. OBSERVATION SUBSCRIPTION ═════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <p className="t-label text-forest">{a.subEyebrow}</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="t-display max-w-2xl text-[24px] text-ink sm:text-[30px]">
              {a.subH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {a.subBody}
            </p>
            <p className="mt-4 text-[12.5px] text-ink-4">{a.subNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08. AnimAI Biz ═══════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="t-display text-[34px] sm:text-[44px]">{a.bizH2}</h2>
              <span className="t-label rounded-full border border-forest-lit px-2.5 py-1 text-forest-lit">
                {a.bizBadge}
              </span>
            </div>
            <p className="t-display mt-3 max-w-2xl text-[20px] leading-[1.4] text-forest-lit sm:text-[25px]">
              {a.bizTagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-7 max-w-2xl space-y-4">
              {a.bizBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={110}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {a.bizFeatures.map((f) => (
                <li
                  key={f}
                  className="border border-forest-lit/60 px-4 py-2 text-[13.5px] text-bone"
                >
                  {f}
                </li>
              ))}
            </ul>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {a.bizFeaturesSub.map((f) => (
                <li
                  key={f}
                  className="border border-line-dark px-4 py-2 text-[12.5px] text-bone/50"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <ol className="mt-12 grid gap-px bg-line-dark sm:grid-cols-3 lg:grid-cols-6">
              {a.bizFlow.map((f, i) => (
                <li key={f} className="bg-ink px-4 py-5">
                  <span className="t-label t-num text-forest-lit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-bone/75">
                    {f}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={d.common.dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              {a.bizLink}
              <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══ 09. FINAL CTA ════════════════════════ */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] text-ink sm:text-[40px]">
              {a.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {a.ctaLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={d.common.productUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {a.ctaBtn}
                <ArrowRight size={15} />
              </a>
              <Link
                href={`/${lang}/technology`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {a.ctaBtn2}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
