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
  return { title: `${d.nav.ceo} — ${d.common.companyShort}` };
}

export default async function CeoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const c = d.ceo;

  return (
    <>
      {/* ══ 01. FOUNDER HERO ═════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[35fr_65fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ceo.jpg"
              alt={c.name}
              className="aspect-[4/5] w-full max-w-[320px] border border-line object-cover"
            />
            <p className="t-title mt-5 text-[22px] text-ink">{c.name}</p>
            <p className="mt-1 text-[13px] font-medium tracking-[0.04em] text-forest">
              {c.role}
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="t-label text-forest">{c.eyebrow}</p>
            <p className="mt-5 text-[15px] text-ink-3">{c.kicker}</p>
            <h1 className="t-display mt-4 text-[32px] text-ink sm:text-[46px]">
              {c.h1.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-8 max-w-2xl space-y-5">
              {c.intro.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[16px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 02. THE STARTING POINT ═══════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest-lit">{c.startEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] sm:text-[40px]">
              {c.startH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-title mt-6 text-[17px] leading-[1.6] text-forest-lit sm:text-[19px]">
              {c.startSub}
            </p>
            <div className="mt-9 max-w-2xl space-y-5">
              {c.startBody.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-display mt-12 max-w-2xl border-t border-line-dark pt-9 text-[21px] leading-[1.45] sm:text-[27px]">
              {c.startQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 03. WHY VITANIMA ═════════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.whyEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[26px] text-ink sm:text-[36px]">
              {c.whyH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-8 max-w-2xl space-y-5">
              {c.whyBody.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[15.5px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="t-title mt-10 max-w-2xl border-l-2 border-forest pl-5 text-[17px] leading-[1.7] text-ink sm:text-[19px]">
              {c.whyQuote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 04. EXECUTION BEFORE VITANIMA ════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.execEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] text-ink sm:text-[36px]">
              {c.execH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {c.execLead}
            </p>
          </Reveal>

          <dl className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-3">
            {c.execMetrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 90}>
                <div className="border-t-2 border-forest pt-5">
                  <dt className="t-display t-num text-[30px] leading-none text-forest sm:text-[36px]">
                    {m.n}
                  </dt>
                  <dd className="mt-3 text-[13.5px] leading-snug text-ink-3">
                    {m.l}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <p className="mt-7 text-[12.5px] leading-relaxed text-ink-4">
            {c.execNote}
          </p>

          {/* 창업 경력 */}
          <Reveal delay={130}>
            <h3 className="t-label mt-16 text-ink-4">
              {c.careerH2.toUpperCase()}
            </h3>
          </Reveal>
          <div className="mt-6 max-w-3xl">
            {c.career.map((it, i) => (
              <Reveal key={it.t} delay={i * 60}>
                <div className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[120px_1fr] sm:gap-8">
                  <span className="t-label t-num text-forest sm:pt-1">
                    {it.y}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h4 className="t-title text-[19px] text-ink">{it.t}</h4>
                      <span className="t-label text-forest">{it.r}</span>
                    </div>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-3">
                      {it.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04-B. PET INDUSTRY EXPERIENCE ════════ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <p className="t-label text-forest">{c.petEyebrow}</p>
            <h2 className="t-display mt-5 max-w-xs text-[24px] text-ink sm:text-[30px]">
              {c.petH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="max-w-2xl space-y-5 border-l-2 border-forest pl-6">
              {c.petBody.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[15.5px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 05. WHAT I BUILT ═════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest-lit">{c.firstEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[26px] sm:text-[36px]">
              {c.firstH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {c.firstGrid.map((g, i) => (
              <Reveal key={g.n} delay={i * 70}>
                <li className="border-t border-line-dark pt-5">
                  <span className="t-label t-num text-forest-lit">{g.n}</span>
                  <h3 className="t-title mt-2.5 text-[19px] text-bone sm:text-[21px]">
                    {g.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-bone/60">
                    {g.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={140}>
            <p className="t-title mt-14 max-w-2xl border-l-2 border-forest-lit pl-5 text-[16px] leading-[1.7] text-bone sm:text-[18px]">
              {c.firstNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 06. HOW I BUILD ══════════════════════ */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.howEyebrow}</p>
            <h2 className="t-display mt-5 text-[26px] text-ink sm:text-[36px]">
              {c.howH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {c.how.map((h, i) => (
              <Reveal key={h.n} delay={i * 90}>
                <div className="border-t-2 border-forest pt-5">
                  <p className="t-label text-forest">
                    {h.n} · {h.en}
                  </p>
                  <h3 className="t-title mt-3 text-[19px] text-ink sm:text-[21px]">
                    {h.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-ink-3">
                    {h.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07. GLOBAL EXECUTION ═════════════════ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.globalEyebrow}</p>
            <h2 className="t-display mt-5 max-w-2xl text-[26px] text-ink sm:text-[36px]">
              {c.globalH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <dl className="mt-12 max-w-3xl">
            {c.global.map((g, i) => (
              <Reveal key={g.k} delay={i * 80}>
                <div className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[150px_1fr] sm:gap-8">
                  <dt className="t-label text-forest sm:pt-1">
                    {g.k.toUpperCase()}
                  </dt>
                  <dd>
                    <p className="t-title text-[18px] text-ink">{g.t}</p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-3">
                      {g.d}
                    </p>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={140}>
            <p className="mt-9 max-w-2xl text-[15.5px] leading-[1.9] text-ink">
              {c.globalBody}
            </p>
            <p className="mt-4 max-w-2xl text-[12.5px] leading-relaxed text-ink-4">
              {c.globalNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 08. FROM THE FOUNDER ═════════════════ */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="t-label text-forest-lit">{c.closeEyebrow}</p>
            <h2 className="t-display mt-5 max-w-3xl text-[28px] sm:text-[40px]">
              {c.closeH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-9 max-w-2xl space-y-5">
              {c.closeBody.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[15.5px] leading-[1.95] text-bone/70"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-11 border-t border-line-dark pt-6 text-[14px] font-medium text-bone">
              {c.sign}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════ */}
      <section className="bg-bone-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="t-display max-w-lg text-[22px] text-ink sm:text-[28px]">
              {c.ctaH2}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/flowstamp`}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                {c.ctaBtn}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                {c.ctaBtn2}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
