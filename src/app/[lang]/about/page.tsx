import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.nav.about} — ${d.common.companyShort}` };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const a = d.about;

  return (
    <>
      {/* ── COMPANY ──────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {a.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-7 max-w-2xl space-y-4">
              {a.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.9] text-ink-3 sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              {a.heroFlow.map((f, i) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="border border-line bg-bone-2 px-4 py-2.5 text-[14px] text-ink">
                    {f}
                  </span>
                  {i < a.heroFlow.length - 1 && (
                    <ArrowRight size={15} className="text-forest" />
                  )}
                </div>
              ))}
            </div>
            <p className="t-title mt-5 text-[15px] text-forest">
              {a.heroFlowCenter}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION · VISION ─────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="t-label text-forest-lit">{a.missionLabel}</p>
              <p className="t-display mt-5 text-[26px] leading-[1.3] sm:text-[34px]">
                {a.mission.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-bone/65">
                {a.missionBody}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="t-label text-forest-lit">{a.visionLabel}</p>
              <p className="t-display mt-5 text-[26px] leading-[1.3] sm:text-[34px]">
                {a.vision.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-bone/65">
                {a.visionBody}
              </p>
            </Reveal>
          </div>

          {/* 방향 전환 */}
          <Reveal delay={180}>
            <div className="mt-16 border-t border-line-dark pt-10">
              <p className="t-display text-[24px] leading-[1.35] sm:text-[32px]">
                {a.turnBody.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY VITANIMA ─────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.whyEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[40px]">
              {a.whyH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 max-w-2xl space-y-4">
              {a.whyBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-8 max-w-2xl border-l-2 border-forest pl-5 text-[16px] leading-[1.7] text-ink sm:text-[18px]">
              {a.whyQuote}
            </p>
          </Reveal>

          {/* 반복되는 과정 */}
          <Reveal delay={130}>
            <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-3">
              {a.whyLoop.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className={`border px-4 py-2.5 text-[14px] ${
                      i === 3
                        ? "border-forest bg-forest-tint text-forest"
                        : "border-line bg-bone-2 text-ink-3"
                    }`}
                  >
                    {step}
                  </span>
                  {i < a.whyLoop.length - 1 && (
                    <ArrowRight
                      size={15}
                      className={i === 3 ? "text-forest" : "text-line"}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="t-display mt-10 text-[21px] text-ink sm:text-[26px]">
              {a.whyClose}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OUR PATH ─────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.storyEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[40px]">
              {a.storyH2}
            </h2>
            <div className="mt-7 max-w-2xl space-y-4">
              {a.storyLead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3 sm:text-[16.5px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14">
            {a.story.map((c, i) => (
              <Reveal key={c.k} delay={i * 90}>
                <article className="grid gap-5 border-t border-line py-10 sm:grid-cols-[130px_1fr] sm:gap-10 sm:py-12">
                  <div>
                    <p className="t-display t-num text-[30px] leading-none text-forest sm:text-[36px]">
                      {c.y}
                    </p>
                    <p className="t-label mt-2 text-ink-4">{c.k}</p>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="t-title text-[22px] text-ink sm:text-[26px]">
                      {c.t}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-[1.95] text-ink-3">
                      {c.d}
                    </p>

                    {"metrics" in c && c.metrics ? (
                      <>
                        <dl className="mt-8 grid gap-x-6 gap-y-6 border-y border-line py-7 sm:grid-cols-3">
                          {c.metrics.map((m) => (
                            <div key={m.l}>
                              <dt className="t-display t-num text-[30px] leading-none text-forest sm:text-[34px]">
                                {m.n}
                              </dt>
                              <dd className="mt-2.5 text-[13.5px] leading-snug text-ink-3">
                                {m.l}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        {"note" in c && c.note ? (
                          <p className="mt-4 text-[12px] text-ink-4">{c.note}</p>
                        ) : null}
                        {"learn" in c && c.learn ? (
                          <p className="t-title mt-7 border-l-2 border-forest pl-5 text-[17px] leading-[1.7] text-ink sm:text-[19px]">
                            {c.learn}
                          </p>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="mt-6 max-w-2xl border-t border-line pt-9">
              <p className="t-display text-[22px] leading-[1.4] text-ink sm:text-[28px]">
                {a.storyClose.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-ink-3">
                {a.storyCloseBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 우리가 지키는 것 ─────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {a.valuesH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="border-t-2 border-forest pt-6">
                  <span className="t-label t-num text-forest">{v.n}</span>
                  <h3 className="t-title mt-3 text-[20px] leading-snug text-ink sm:text-[22px]">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-ink-3">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 회사 이름 ────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.nameH2.toUpperCase()}</h2>
          </Reveal>
          <Reveal delay={80}>

            <dl className="mt-10 max-w-2xl">
              {a.nameLines.map((n, i) => (
                <div
                  key={n.k}
                  className="flex flex-col gap-1 border-t border-line py-5 last:border-b sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <dt
                    className={`t-display shrink-0 text-[24px] sm:w-[190px] sm:text-[30px] ${
                      i === 2 ? "text-forest" : "text-ink"
                    }`}
                  >
                    {n.k}
                  </dt>
                  <dd className="text-[15.5px] leading-[1.8] text-ink-3">
                    {n.v}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 max-w-xl text-[15.5px] leading-[1.95] text-ink">
              {a.nameBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 법인 정보 ────────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.factsH2.toUpperCase()}</h2>
          </Reveal>
          <Reveal delay={80}>
            <dl className="max-w-2xl">
              {a.facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-1 border-t border-line py-4 last:border-b sm:flex-row sm:gap-8"
                >
                  <dt className="text-[13px] font-medium tracking-[0.04em] text-ink-4 sm:w-48 sm:shrink-0">
                    {f.k}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-ink">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── 연혁 ─────────────────────────────────── */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.historyH2.toUpperCase()}</h2>
          </Reveal>
          <div className="max-w-2xl">
            {a.history.map((it, i) => (
              <Reveal key={it.t} delay={i * 70}>
                <div className="relative border-l border-line pb-9 pl-7 last:pb-0">
                  <span
                    className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                      i === a.history.length - 1 ? "bg-forest" : "bg-line"
                    }`}
                  />
                  <p className="t-label t-num text-forest">{it.y}</p>
                  <h3 className="t-title mt-2 text-[20px] text-ink">{it.t}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-3">
                    {it.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 마지막 CTA ───────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] sm:text-[38px]">
              {a.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-lg text-[15.5px] leading-[1.9] text-bone/70">
              {a.ctaLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/animai`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {a.ctaBtn}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={`/${lang}/ceo`}
                className="inline-flex items-center gap-2 rounded-full border border-line-dark px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:border-forest-lit hover:text-forest-lit"
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
