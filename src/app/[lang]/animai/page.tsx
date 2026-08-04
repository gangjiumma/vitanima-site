import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
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
      {/* ══ HERO ═════════════════════════════════ */}
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
                <li key={st} className="flex items-center gap-2 text-[13px] text-ink-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                  {st}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 앱 화면 자리 */}
          <Reveal delay={130} className="flex justify-center">
            <PhoneMock />
          </Reveal>
        </div>
      </section>

      {/* ══ 왜 만들었나 ══════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{a.whyH2.toUpperCase()}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[26px] leading-[1.35] sm:text-[36px]">
              {a.whyLead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-8 max-w-2xl space-y-5">
              {a.whyBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-10 border-l-2 border-forest-lit pl-5 text-[17px] leading-[1.7] text-bone sm:text-[20px]">
              {a.whyQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 무엇을 하나 ══════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {a.featureH2}
            </h2>
          </Reveal>

          {/* 핵심 4 — 2×2 */}
          <div className="mt-12 grid gap-x-12 gap-y-11 sm:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="border-t-2 border-forest pt-6">
                  <span className="t-label t-num text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-title mt-2.5 text-[22px] text-ink sm:text-[24px]">
                    {f.t}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-[1.9] text-ink-3">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 보조 2 — 가로 링크 카드 */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {a.subFeatures.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="border border-line bg-bone-2 px-6 py-5">
                  <h3 className="t-title text-[17px] text-ink">{f.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.75] text-ink-3">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 사용 흐름 ════════════════════════════ */}
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
            <Reveal>
              <div className="h-full border border-line bg-bone p-6">
                <span className="t-label t-num text-forest">01</span>
                <p className="t-title mt-4 text-[17px] leading-[1.6] text-ink">
                  “{a.flowQuote}”
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="h-full border border-line bg-bone p-6">
                <span className="t-label t-num text-forest">02</span>
                <p className="t-label mt-4 text-ink-4">
                  {a.flowUnderstandLabel.toUpperCase()}
                </p>
                <ul className="mt-3 space-y-2">
                  {a.flowUnderstand.map((u) => (
                    <li
                      key={u}
                      className="flex items-center gap-2 text-[14.5px] text-ink"
                    >
                      <Check size={14} className="shrink-0 text-forest" strokeWidth={2.5} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="h-full border-2 border-forest bg-forest-tint p-6">
                <span className="t-label t-num text-forest">03</span>
                <p className="t-label mt-4 text-forest">
                  {a.flowNextLabel.toUpperCase()}
                </p>
                <p className="mt-3 text-[15px] leading-[1.85] text-ink">
                  {a.flowNext}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="mt-10 max-w-2xl text-[15px] leading-[1.9] text-ink-3">
              {a.flowBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 태그·홈 디바이스 ═════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tag-pets.png"
              alt={a.signalTagAlt}
              className="mx-auto w-full max-w-[420px]"
            />
            <p className="mt-6 text-center text-[12.5px] text-ink-4">
              {a.signalCaption}
            </p>
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

            <p className="t-title mt-9 border-l-2 border-forest pl-5 text-[15.5px] leading-[1.7] text-ink sm:text-[17px]">
              {a.signalQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ AnimAI Biz ═══════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[34px] sm:text-[44px]">{a.bizH2}</h2>
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
                  className="border border-line-dark px-4 py-2 text-[13.5px] text-bone/80"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 이용 흐름 */}
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

      {/* ══ 마지막 CTA ═══════════════════════════ */}
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
            <p className="mt-7 max-w-lg text-[15.5px] leading-[1.9] text-ink-3">
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
                {d.nav.technology}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
