import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowDown, CornerLeftUp } from "lucide-react";
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
  return { title: `${d.nav.technology} — ${d.common.companyShort}` };
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
      {/* ══ 01. HERO ═════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="t-label text-forest">{t.eyebrow}</p>
            <h1 className="t-display mt-5 text-[32px] text-ink sm:text-[44px]">
              {t.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
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
            <p className="t-title mt-7 max-w-xl border-l-2 border-forest pl-5 text-[15.5px] leading-[1.7] text-ink sm:text-[17px]">
              {t.leadNote}
            </p>
          </Reveal>

          <Reveal delay={130}>
            <div className="space-y-8">
              <div>
                <p className="t-label text-ink-4">
                  {t.heroBeforeLabel.toUpperCase()}
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
                <p className="t-label text-forest">{t.heroAfterLabel}</p>
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
                <p className="t-label mt-4 text-ink-4">{t.heroAfterNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 02. THE REAL PROBLEM ═════════════════ */}
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
                    className={`mt-4 leading-[1.6] ${
                      c.tone === "old"
                        ? "text-[15.5px] text-bone/45"
                        : c.tone === "new"
                          ? "t-title text-[16.5px] text-bone"
                          : "t-display text-[19px] text-bone"
                    }`}
                  >
                    {c.tone === "neutral" ? c.v : `“${c.v}”`}
                  </p>
                  {c.sub ? (
                    <p className="mt-3 text-[12.5px] text-ink-4">{c.sub}</p>
                  ) : null}
                  {c.extra.length > 0 ? (
                    <ul className="mt-5 space-y-1.5 border-t border-line-dark pt-4">
                      {c.extra.map((e) => (
                        <li key={e} className="text-[13px] text-bone/50">
                          “{e}”
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
            <p className="t-display mt-10 max-w-3xl text-[21px] leading-[1.45] text-forest-lit sm:text-[28px]">
              {t.realQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 03. FROM WORDS TO LIFETIME LOG ═══════ */}
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
              <p className="t-label text-forest">{t.invAfterLabel}</p>
              <ol className="mt-6">
                {t.invAfter.map((s, i) => (
                  <li key={s.t}>
                    <div className="flex items-start gap-4 border-2 border-forest bg-forest-tint px-5 py-4">
                      <span className="t-label t-num shrink-0 pt-1 text-forest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="t-title text-[16px] text-ink">{s.t}</p>
                        {s.s ? (
                          <p className="mt-1 text-[12.5px] text-forest">{s.s}</p>
                        ) : null}
                      </div>
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
            <div className="mt-14 max-w-2xl space-y-3 border-l-2 border-forest pl-5">
              {t.invBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="t-title text-[15.5px] leading-[1.8] text-ink sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 04. THE LOOP ═════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="order-2 flex flex-col items-center lg:order-1">
              <Loop
                keys={t.loopSteps.map((s) => s.k)}
                center={t.loopCenter}
                tone="dark"
              />
              <p className="mt-4 text-center text-[13px] text-bone/60">
                {t.loopCenterSub}
              </p>
              <p className="t-label mt-2 text-center text-forest-lit">
                {t.loopCenterNote}
              </p>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="t-label text-forest-lit">{t.loopEyebrow}</p>
                <h2 className="t-display mt-5 text-[26px] sm:text-[36px]">
                  {t.loopH2.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
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
                <p className="t-title mt-8 inline-block border border-forest-lit px-4 py-2 text-[14px] text-forest-lit">
                  {t.loopStatus}
                </p>
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
                  {"sub" in s && s.sub ? (
                    <p className="t-label mt-2.5 text-forest-lit">{s.sub}</p>
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={140}>
            <p className="mt-12 max-w-2xl text-[12.5px] leading-relaxed text-ink-4">
              {t.loopStatusNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 05. A REAL USE CASE ══════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{t.caseEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {t.caseH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-2xl text-[16px] leading-[1.6] text-forest sm:text-[18px]">
              {t.caseSub}
            </p>
            <p className="mt-5 text-[12.5px] text-ink-4">{t.caseNote}</p>
          </Reveal>

          <div className="mt-12">
            {t.caseSteps.map((c, i) => (
              <Reveal key={c.n} delay={i * 90}>
                <article
                  className={`grid gap-4 border-t py-8 last:border-b sm:grid-cols-[150px_1fr] sm:gap-10 ${
                    c.retro ? "border-forest bg-forest-tint/40" : "border-line"
                  }`}
                >
                  <div className={c.retro ? "sm:pl-5" : ""}>
                    <div className="flex items-center gap-2.5">
                      {c.retro ? (
                        <CornerLeftUp size={16} className="text-forest" />
                      ) : null}
                      <span className="t-display text-[20px] text-forest">
                        {c.n}
                      </span>
                    </div>
                    <p className="t-label t-num mt-2 text-ink-4">{c.when}</p>
                    {"retroLabel" in c && c.retroLabel ? (
                      <p className="t-label mt-2 inline-block rounded-full bg-forest px-2.5 py-1 text-bone">
                        {c.retroLabel}
                      </p>
                    ) : null}
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="t-title text-[19px] leading-snug text-ink sm:text-[21px]">
                      {c.t}
                    </h3>

                    {c.quote ? (
                      <p className="t-title mt-4 border-l-2 border-forest pl-4 text-[16px] leading-[1.7] text-ink">
                        “{c.quote}”
                      </p>
                    ) : null}

                    {c.lines.length > 0 ? (
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
                    ) : null}

                    {c.chips.length > 0 ? (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {c.chips.map((ch) => (
                          <li
                            key={ch}
                            className="border border-line bg-bone px-3 py-1.5 text-[13px] text-ink"
                          >
                            {ch}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <p className="t-label mt-5 text-forest">{c.stage}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="t-display mt-12 max-w-3xl text-[20px] leading-[1.5] text-ink sm:text-[25px]">
              {t.caseQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 06. SIGNAL LAYER ═════════════════════ */}
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
                <div
                  className={`h-full border-t-2 pt-5 ${
                    i === 0 ? "border-forest" : "border-line"
                  }`}
                >
                  <h3 className="t-title text-[19px] text-ink">{s.t}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.8] text-ink-3">
                    {s.d}
                  </p>
                  <p
                    className={`t-label mt-4 inline-block rounded-full border px-2.5 py-1 ${
                      i === 0
                        ? "border-forest text-forest"
                        : "border-line text-ink-4"
                    }`}
                  >
                    {s.s}
                  </p>
                  {s.sub ? (
                    <p className="mt-2.5 text-[12.5px] text-ink-4">{s.sub}</p>
                  ) : null}
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

      {/* ══ 07. TECH BRIEF ═══════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="t-label text-forest">{t.briefEyebrow}</p>
            <h2 className="t-display mt-5 max-w-md text-[22px] text-ink sm:text-[28px]">
              {t.briefH2}
            </h2>
            <div className="mt-6 max-w-md space-y-4">
              {t.briefBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={110}>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {t.briefItems.map((b) => (
                <div key={b.t} className="border-t border-line pt-4">
                  <dt className="t-title text-[16px] text-ink">{b.t}</dt>
                  <dd className="mt-1.5 text-[13.5px] leading-relaxed text-ink-3">
                    {b.d}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-[12.5px] leading-relaxed text-ink-4">
              {t.briefNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08. WHY IT GETS HARDER TO COPY ═══════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{t.moatEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] sm:text-[38px]">
              {t.moatH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 max-w-2xl text-[17px] leading-[1.6] text-forest-lit sm:text-[19px]">
              {t.moatSub}
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {t.moatSteps.map((m, i) => (
              <Reveal key={m.k} delay={i * 90}>
                <li className="h-full bg-ink px-6 py-7">
                  <p
                    className={`t-label ${
                      i === 3 ? "text-forest-lit" : "text-ink-4"
                    }`}
                  >
                    {m.k}
                  </p>
                  <h3
                    className={`t-title mt-3 text-[18px] ${
                      i === 3 ? "text-forest-lit" : "text-bone"
                    }`}
                  >
                    {m.t}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.8] text-bone/55">
                    {m.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150}>
            <p className="t-display mt-12 max-w-2xl text-[20px] leading-[1.5] sm:text-[25px]">
              {t.moatQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>

          {/* 특허 */}
          <div className="mt-20 border-t border-line-dark pt-14">
            <Reveal>
              <h3 className="t-display text-[22px] sm:text-[28px]">{t.ipH2}</h3>
            </Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-9 lg:grid-cols-3">
              {t.ip.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <div className="border-t border-line-dark pt-5">
                    <span className="t-label t-num text-forest-lit">{p.n}</span>
                    <h4 className="t-title mt-3 text-[17px] leading-snug text-bone">
                      {p.t}
                    </h4>
                    <p className="t-label t-num mt-3 text-forest-lit">{p.no}</p>
                    <p className="mt-2 text-[13px] text-bone/55">{p.s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-9 text-[12.5px] text-ink-4">{t.ipNote}</p>
          </div>
        </div>
      </section>

      {/* ══ 09. MEDICAL BOUNDARY ═════════════════ */}
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

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[26px] text-ink sm:text-[34px]">
              {t.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {t.ctaLead}
            </p>
            <Link
              href={`/${lang}/animai`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
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
