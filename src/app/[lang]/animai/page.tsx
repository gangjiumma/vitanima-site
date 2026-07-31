import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Apple, Play } from "lucide-react";
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
      {/* 히어로 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="t-label text-forest">{a.eyebrow}</p>
              <span className="t-label rounded-full bg-forest px-2.5 py-1 text-bone">
                {a.tag}
              </span>
            </div>
            <h1 className="t-display mt-5 text-[40px] text-ink sm:text-[56px]">
              {a.h1}
            </h1>
            <p className="t-title mt-3 text-[19px] text-forest sm:text-[22px]">
              {a.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {a.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={d.common.iosUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
              >
                <Apple size={16} />
                {a.iosBtn}
              </a>
              <a
                href={d.common.androidUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-ink-2"
              >
                <Play size={16} />
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
          </Reveal>
        </div>
      </section>

      {/* 왜 만들었나 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] sm:text-[34px]">{a.whyH2}</h2>
            <p className="t-display mt-8 max-w-2xl text-[22px] leading-[1.45] text-forest-lit sm:text-[28px]">
              {a.whyTime}
            </p>
            <p className="mt-10 max-w-2xl border-l-2 border-line-dark pl-5 text-[16px] leading-[1.8] text-ink-4 line-through decoration-ink-4 decoration-1">
              {a.whyBefore}
            </p>
            <p className="mt-8 max-w-2xl text-[15.5px] leading-[1.95] text-bone/75">
              {a.whyBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 기능 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {a.featureH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {a.features.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="border-t border-line pt-5">
                  <h3 className="t-title text-[20px] text-ink">{f.t}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.85] text-ink-3">
                    {f.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AnimAI Biz */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[32px]">
              {a.bizH2}
            </h2>
            <p className="mt-2 text-[13px] font-medium tracking-[0.04em] text-forest">
              {a.bizTagline}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-[15.5px] leading-[1.9] text-ink-3">
              {a.bizBody}
            </p>
            <a
              href={d.common.dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-forest underline-offset-4 hover:underline"
            >
              {a.bizLink}
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 앞으로 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.roadEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {a.roadH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {a.roadNote}
            </p>
          </Reveal>

          <div className="mt-10">
            {a.road.map((it, i) => (
              <Reveal key={it.n} delay={i * 60}>
                <article className="grid gap-4 border-t border-line py-8 last:border-b sm:grid-cols-[100px_1fr] sm:gap-10">
                  <div>
                    <p className="t-display t-num text-[28px] leading-none text-forest/25 sm:text-[34px]">
                      {it.n}
                    </p>
                    <p className="t-label mt-2 text-ink-4">
                      {it.role.toUpperCase()}
                    </p>
                  </div>
                  <div className="max-w-2xl">
                    <h3 className="t-title text-[21px] text-ink sm:text-[24px]">
                      {it.t}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.9] text-ink-3">
                      {it.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <Link
              href={`/${lang}/contact`}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
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
