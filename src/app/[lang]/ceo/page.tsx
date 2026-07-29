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
  return { title: `${d.ceo.h1} — ${d.common.companyShort}` };
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
      {/* 인사말 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {c.h1}
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
            <Reveal delay={80}>
              <div className="lg:sticky lg:top-24">
                {/* 사진 자리 — public/ceo.jpg 를 넣고 아래 주석을 풀면 됩니다 */}
                <div className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center border border-line bg-bone-2">
                  <span className="t-label text-ink-4">PHOTO</span>
                </div>
                {/*
                <img
                  src="/ceo.jpg"
                  alt={c.name}
                  className="aspect-[4/5] w-full max-w-[280px] object-cover"
                />
                */}
                <p className="t-title mt-5 text-[22px] text-ink">{c.name}</p>
                <p className="mt-1 text-[13px] font-medium tracking-[0.04em] text-forest">
                  {c.role}
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="t-display text-[22px] leading-[1.45] text-ink sm:text-[28px]">
                {c.greetingLead}
              </p>
              <div className="mt-8 max-w-2xl space-y-6">
                {c.greeting.map((p) => (
                  <p
                    key={p.slice(0, 16)}
                    className="text-[15.5px] leading-[1.95] text-ink-3"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-10 border-t border-line pt-6 text-[14px] font-medium text-ink">
                {c.sign}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 요약 */}
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
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 약력 */}
      <section className="border-b border-line bg-bone-2">
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
              {d.contact.h1}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
