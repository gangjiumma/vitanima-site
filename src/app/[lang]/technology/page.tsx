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
      {/* ── 히어로 ───────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{t.eyebrow}</p>
            <h1 className="t-display mt-5 max-w-2xl text-[34px] text-ink sm:text-[48px]">
              {t.h1}
            </h1>
            <div className="mt-8 max-w-2xl space-y-5">
              {t.lead.map((p) => (
                <p
                  key={p.slice(0, 14)}
                  className="text-[16px] leading-[1.95] text-ink-3 sm:text-[17px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 방향 대비 ────────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {t.invH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* 기존 방향 */}
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

            {/* 비타니마의 방향 */}
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
            <p className="t-title mt-14 max-w-2xl border-l-2 border-forest pl-5 text-[17px] leading-[1.8] text-ink sm:text-[19px]">
              {t.invBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 루프 ─────────────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="order-2 flex justify-center lg:order-1">
              <Loop
                keys={t.loopSteps.map((s) => s.k)}
                center={d.home.loopCenter}
                tone="dark"
              />
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="t-display text-[26px] sm:text-[36px]">
                  {t.loopH2}
                </h2>
                <div className="mt-6 max-w-xl space-y-5">
                  {t.loopBody.map((p) => (
                    <p
                      key={p.slice(0, 14)}
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
                  <div className="flex items-baseline gap-3">
                    <span className="t-label t-num text-forest-lit">{s.k}</span>
                    <h3 className="t-title text-[19px] text-bone">{s.t}</h3>
                  </div>
                  <p className="mt-2.5 text-[14.5px] leading-[1.8] text-bone/60">
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 진단하지 않음 ────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[22px] text-ink sm:text-[28px]">
              {t.guardH2}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl text-[15.5px] leading-[1.95] text-ink-3">
              {t.guardBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 특허 ─────────────────────────────────── */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {t.ipH2}
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {t.ipLead}
            </p>
            <p className="mt-4 max-w-2xl text-[13px] leading-[1.8] text-ink-4">
              {t.ipNote}
            </p>
          </Reveal>

          <ul className="mt-10">
            {t.ip.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <li className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[130px_1fr_90px] sm:gap-6">
                  <span className="t-label t-num text-forest sm:pt-1">
                    {p.d}
                  </span>
                  <div>
                    <h3 className="t-title text-[19px] leading-snug text-ink">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-3">
                      {p.s}
                    </p>
                  </div>
                  <span className="t-label text-ink-4 sm:pt-1 sm:text-right">
                    {t.ipStatus.toUpperCase()}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <Link
              href={`/${lang}/contact`}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              {d.nav.contact}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
