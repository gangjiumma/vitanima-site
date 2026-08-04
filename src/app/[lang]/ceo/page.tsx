import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      {/* ── 히어로 ───────────────────────────────── */}
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

      {/* ── 본문 ─────────────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              {c.greeting.map((p) => (
                <p
                  key={p.slice(0, 16)}
                  className="text-[15.5px] leading-[1.95] text-ink-3"
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-10 max-w-2xl border-t border-line pt-6 text-[14px] font-medium text-ink">
              {c.sign}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 요약 ─────────────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="t-label text-ink-4">{c.factsH2.toUpperCase()}</h2>
          </Reveal>
          <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.facts.map((f, i) => (
              <Reveal key={f.l} delay={i * 80}>
                <div className="border-t border-line-dark pt-5">
                  <dt className="t-display t-num text-[32px] leading-none text-forest-lit sm:text-[38px]">
                    {f.n}
                  </dt>
                  <dd className="mt-3 text-[14px] text-bone/60">{f.l}</dd>
                  {f.note ? (
                    <dd className="mt-1.5 text-[12px] leading-snug text-forest-lit">
                      {f.note}
                    </dd>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 약력 ─────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{c.careerH2.toUpperCase()}</h2>
          </Reveal>
          <div className="max-w-2xl">
            {c.career.map((it, i) => (
              <Reveal key={it.t} delay={i * 70}>
                <div className="flex flex-col gap-1 border-t border-line py-5 last:border-b sm:flex-row sm:gap-8">
                  <span className="t-label t-num text-forest sm:w-32 sm:shrink-0 sm:pt-1">
                    {it.y}
                  </span>
                  <div>
                    <h3 className="t-title text-[19px] text-ink">{it.t}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-3">
                      {it.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
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
