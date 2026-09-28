import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.flowstamp.h1} — ${d.common.companyShort}` };
}

export default async function FlowstampPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const f = d.flowstamp;
  const mailto = `mailto:${d.common.salesEmail}?subject=${encodeURIComponent(
    lang === "ko" ? "[Flowstamp 도입 문의]" : "[Flowstamp enquiry]"
  )}`;

  return (
    <>
      {/* ══ 01. HERO ═════════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{f.eyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {f.badge}
              </span>
            </div>
            <h1 className="t-display mt-5 text-[44px] text-ink sm:text-[56px]">
              {f.h1}
            </h1>
            <p className="t-display mt-3 max-w-3xl text-[22px] leading-[1.4] text-forest sm:text-[28px]">
              {f.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-7 max-w-2xl space-y-4">
              {f.lead.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3 sm:text-[16.5px]"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                <Mail size={15} />
                {f.heroBtn}
              </a>
              <a
                href={d.common.flowstampUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
              >
                {f.siteBtn}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={130}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fs-console.jpg"
              alt={f.consoleAlt}
              className="mt-14 w-full border border-line"
            />
          </Reveal>
        </div>
      </section>

      {/* ══ 02. WHY ══════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{f.whyH2.toUpperCase()}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] leading-[1.35] sm:text-[38px]">
              {f.whyLead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-9 max-w-2xl space-y-5">
              {f.whyBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-display mt-11 border-t border-line-dark pt-9 text-[22px] leading-[1.45] sm:text-[28px]">
              {f.whyQuote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 03. FEATURES ═════════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {f.featureH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-11 sm:grid-cols-2">
            {f.features.map((it, i) => (
              <Reveal key={it.n} delay={i * 70}>
                <div className="border-t-2 border-forest pt-6">
                  <span className="t-label t-num text-forest">{it.n}</span>
                  <h3 className="t-title mt-2.5 text-[20px] text-ink sm:text-[22px]">
                    {it.t}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-[1.9] text-ink-3">
                    {it.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04. AI ═══════════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {f.aiH2}
            </h2>
            <div className="mt-7 max-w-xl space-y-4">
              {f.aiBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-9 border-l-2 border-forest pl-5 text-[15.5px] leading-[1.7] text-ink sm:text-[17px]">
              {f.aiQuote}
            </p>
          </Reveal>

          <Reveal delay={130}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fs-ai-order.jpg"
              alt={f.aiOrderAlt}
              className="mx-auto w-full max-w-[380px] border border-line"
            />
          </Reveal>
        </div>
      </section>

      {/* ══ 05. CLIENT VIEW ══════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fs-client.jpg"
              alt={f.clientAlt}
              className="mx-auto w-full max-w-[420px] border border-line"
            />
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {f.clientH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 max-w-lg space-y-4">
              {f.clientBody.map((p) => (
                <p
                  key={p.slice(0, 12)}
                  className="text-[15.5px] leading-[1.9] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 06. VALIDATION ═══════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{f.proofEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] sm:text-[38px]">
              {f.proofH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {f.proofMetrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 90}>
                <div className="border-t-2 border-forest-lit pt-5">
                  <dt className="t-display t-num whitespace-nowrap text-[34px] leading-none text-forest-lit sm:text-[40px]">
                    {m.n}
                  </dt>
                  <dd className="mt-3 text-[14px] text-bone/70">{m.l}</dd>
                  <dd className="t-num mt-1.5 text-[13px] text-ink-4">
                    {m.sub}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={140}>
            <dl className="mt-14 max-w-2xl">
              {f.proofItems.map((it) => (
                <div
                  key={it.k}
                  className="flex flex-col gap-1 border-t border-line-dark py-4 last:border-b sm:flex-row sm:gap-8"
                >
                  <dt className="text-[13px] font-medium tracking-[0.04em] text-ink-4 sm:w-56 sm:shrink-0">
                    {it.k}
                  </dt>
                  <dd className="text-[15px] text-bone">{it.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 max-w-2xl text-[12.5px] leading-relaxed text-ink-4">
              {f.proofNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 07. WHO ══════════════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {f.whoH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {f.who.map((w, i) => (
              <Reveal key={w.t} delay={i * 90}>
                <div
                  className={`h-full border p-6 ${
                    w.now
                      ? "border-2 border-forest bg-forest-tint"
                      : "border-line bg-bone"
                  }`}
                >
                  <span
                    className={`t-label rounded-full px-2.5 py-1 ${
                      w.now
                        ? "bg-forest text-bone"
                        : "border border-line text-ink-4"
                    }`}
                  >
                    {w.now
                      ? lang === "ko"
                        ? "적용 중"
                        : "In use"
                      : lang === "ko"
                        ? "확장 예정"
                        : "Planned"}
                  </span>
                  <h3 className="t-title mt-4 text-[18px] leading-snug text-ink">
                    {w.t}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.8] text-ink-3">
                    {w.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mt-9 text-[13px] text-ink-4">{f.whoNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08. HOW TO START ═════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[36px]">
              {f.howH2}
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {f.howSteps.map((st, i) => (
              <Reveal key={st.n} delay={i * 80}>
                <li className="border-t border-line pt-5">
                  <span className="t-label t-num text-forest">{st.n}</span>
                  <h3 className="t-title mt-2.5 text-[18px] text-ink">
                    {st.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.8] text-ink-3">
                    {st.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150}>
            <p className="mt-10 max-w-2xl border-t border-line pt-6 text-[13.5px] leading-relaxed text-ink-3">
              {f.howNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 09. CTA ══════════════════════════════ */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] text-ink sm:text-[40px]">
              {f.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {f.ctaLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                <Mail size={16} />
                {f.ctaBtn}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {f.ctaBtn2}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
