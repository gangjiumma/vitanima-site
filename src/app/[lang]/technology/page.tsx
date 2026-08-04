import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import Loop from "@/components/Loop";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.tech.h1} — ${d.common.companyShort}` };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const t = d.tech;

  return (
    <>
      {/* ══ HERO ═════════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="t-label text-forest">{t.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {t.h1}
            </h1>
            <div className="mt-8 max-w-xl space-y-5">
              {t.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[16px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={130}>
            <div className="space-y-7">
              <div>
                <p className="t-label text-ink-4">
                  {t.invBeforeLabel.toUpperCase()}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {t.heroBefore.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="border border-line bg-bone-2 px-3.5 py-2 text-[13.5px] text-ink-4">
                        {s}
                      </span>
                      {i < t.heroBefore.length - 1 && (
                        <ArrowRight size={13} className="text-line" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="t-label text-forest">AnimAI</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {t.heroAfter.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="t-title border-2 border-forest bg-forest-tint px-3.5 py-2 text-[14px] text-ink">
                        {s}
                      </span>
                      {i < t.heroAfter.length - 1 && (
                        <ArrowRight size={13} className="text-forest" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 실제 문제 ════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{t.realEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] sm:text-[38px]">
              {t.realH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.realCase.map((c, i) => (
              <Reveal key={c.k} delay={i * 110}>
                <div
                  className={`h-full border p-6 ${
                    c.tone === "new"
                      ? "border-forest-lit bg-forest/15"
                      : "border-line-dark"
                  }`}
                >
                  <p
                    className={`t-label ${
                      c.tone === "new" ? "text-forest-lit" : "text-ink-4"
                    }`}
                  >
                    {c.k}
                  </p>
                  <p
                    className={`mt-4 text-[16px] leading-[1.7] ${
                      c.tone === "old"
                        ? "text-bone/45"
                        : c.tone === "new"
                          ? "t-title text-bone"
                          : "t-display text-bone"
                    }`}
                  >
                    {c.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-12 max-w-2xl space-y-4">
              {t.realBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-bone/65"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-display mt-10 max-w-3xl text-[22px] leading-[1.4] text-forest-lit sm:text-[30px]">
              {t.realQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 방향 대비 ════════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[28px] text-ink sm:text-[38px]">
              {t.invH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="t-label text-ink-4">
                {t.invBeforeLabel.toUpperCase()}
              </p>
              <ol className="mt-6">
                {t.invBefore.map((s, i) => (
                  <li key={s}>
                    <div className="flex items-center gap-4 border border-line bg-bone px-5 py-4">
                      <span className="t-label t-num shrink-0 text-ink-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15.5px] text-ink-4">{s}</span>
                    </div>
                    {i < t.invBefore.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown size={16} className="text-line" />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={130}>
              <p className="t-label text-forest">
                {t.invAfterLabel.toUpperCase()}
              </p>
              <ol className="mt-6">
                {t.invAfter.map((s, i) => (
                  <li key={s}>
                    <div className="flex items-center gap-4 border-2 border-forest bg-forest-tint px-5 py-4">
                      <span className="t-label t-num shrink-0 text-forest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="t-title text-[16px] text-ink">{s}</span>
                    </div>
                    {i < t.invAfter.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown size={16} className="text-forest" />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <p className="t-title mt-14 max-w-2xl border-l-2 border-forest pl-5 text-[16px] leading-[1.8] text-ink sm:text-[18px]">
              {t.invBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ THE LOOP ═════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="order-2 flex justify-center lg:order-1">
              <Loop
                keys={t.loopSteps.map((s) => s.k)}
                center={t.loopCenter}
                tone="dark"
              />
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="t-label text-forest-lit">{t.loopEyebrow}</p>
                <h2 className="t-display mt-5 text-[26px] sm:text-[36px]">
                  {t.loopH2}
                </h2>
                <div className="mt-7 max-w-xl space-y-4">
                  {t.loopBody.map((p) => (
                    <p
                      key={p.slice(0, 12)}
                      className="text-[15.5px] leading-[1.95] text-bone/70"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="mt-16 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {t.loopSteps.map((s, i) => (
              <Reveal key={s.k} delay={i * 70}>
                <li className="border-t border-line-dark pt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="t-label t-num text-forest-lit">{s.k}</span>
                    <h3 className="t-title text-[19px] text-bone">{s.t}</h3>
                    <span className="t-label ml-auto rounded-full border border-line-dark px-2.5 py-0.5 text-ink-4">
                      {s.s}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-[1.8] text-bone/60">
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ 실제 작동 예시 ═══════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[28px] text-ink sm:text-[38px]">
              {t.caseH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-12">
            {t.caseSteps.map((c, i) => (
              <Reveal key={c.k} delay={i * 90}>
                <article className="grid gap-4 border-t border-line py-8 last:border-b sm:grid-cols-[120px_1fr] sm:gap-10">
                  <p className="t-label t-num text-forest sm:pt-1">{c.k}</p>
                  <div className="max-w-2xl">
                    <h3 className="t-title text-[19px] text-ink sm:text-[21px]">
                      {c.t}
                    </h3>
                    {c.lines.length > 0 && (
                      <div className="mt-3.5 space-y-2">
                        {c.lines.map((l) => (
                          <p
                            key={l.slice(0, 14)}
                            className="text-[15px] leading-[1.85] text-ink-3"
                          >
                            {l}
                          </p>
                        ))}
                      </div>
                    )}
                    {"extract" in c && c.extract ? (
                      <div className="mt-5 border-l-2 border-forest pl-5">
                        <p className="t-label text-forest">
                          {"extractLabel" in c && c.extractLabel
                            ? c.extractLabel.toUpperCase()
                            : ""}
                        </p>
                        <ul className="mt-2.5 space-y-1">
                          {c.extract.map((e) => (
                            <li key={e} className="text-[14px] text-ink">
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SIGNAL LAYER ═════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{t.signalEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {t.signalH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 max-w-2xl space-y-4">
              {t.signalBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-3">
            {t.signalItems.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <div className="border-t-2 border-forest pt-5">
                  <h3 className="t-title text-[19px] text-ink">{s.t}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.8] text-ink-3">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <p className="t-display mt-14 max-w-2xl text-[20px] leading-[1.5] text-ink sm:text-[25px]">
              {t.signalQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 의료적 경계 ══════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[22px] text-ink sm:text-[28px]">
              {t.guardH2}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-2xl space-y-4">
              {t.guardBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 특허 ═════════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{t.ipEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] sm:text-[36px]">
              {t.ipH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-bone/70">
              {t.ipLead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-3">
            {t.ip.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <div className="border-t border-line-dark pt-6">
                  <span className="t-label t-num text-forest-lit">{p.n}</span>
                  <h3 className="t-title mt-3 text-[19px] leading-snug text-bone">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-bone/60">
                    {p.s}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-[12px] text-ink-4">{t.ipNote}</p>
        </div>
      </section>

      {/* ══ 마지막 CTA ═══════════════════════════ */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] text-ink sm:text-[40px]">
              {t.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {t.ctaLead}
            </p>
            <Link
              href={`/${lang}/animai`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              {t.ctaBtn}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
