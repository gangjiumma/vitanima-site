import type { Metadata } from "next";
import { Mail, ArrowDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.contact.h1} — ${d.common.companyShort}` };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const c = d.contact;

  return (
    <>
      {/* ── 히어로 ───────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {c.h1}
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-[1.9] text-ink-3 sm:text-[17px]">
              {c.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 문의 유형별 ──────────────────────────── */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {c.types.map((t, i) => (
              <Reveal key={t.t + t.email} delay={i * 70}>
                <li className="border-t-2 border-forest pt-5">
                  <p className="t-label text-forest">{t.en.toUpperCase()}</p>
                  <h2 className="t-title mt-2.5 text-[20px] text-ink sm:text-[22px]">
                    {t.t}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-[1.8] text-ink-3">
                    {t.d}
                  </p>
                  <a
                    href={`mailto:${t.email}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-forest underline-offset-4 hover:underline"
                  >
                    <Mail size={14} />
                    {t.email}
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 대표 연락처 ──────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-16">
            <Reveal>
              <p className="t-label text-ink-4">
                {c.emailLabel.toUpperCase()}
              </p>
              <a
                href={`mailto:${d.common.email}`}
                className="t-display mt-2 block text-[22px] text-ink underline-offset-4 hover:text-forest hover:underline sm:text-[26px]"
              >
                {d.common.email}
              </a>
            </Reveal>
            <Reveal delay={90}>
              <p className="t-label text-ink-4">
                {c.phoneLabel.toUpperCase()}
              </p>
              <a
                href={d.common.phoneHref}
                className="t-display t-num mt-2 block text-[22px] text-ink underline-offset-4 hover:text-forest hover:underline sm:text-[26px]"
              >
                {d.common.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 마지막 CTA ───────────────────────────── */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="t-display max-w-2xl text-[28px] sm:text-[42px]">
              {c.ctaH2.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-lg text-[15.5px] leading-[1.9] text-bone/70">
              {c.ctaLead}
            </p>
            <ArrowDown size={22} className="mt-9 text-forest-lit" />
            <a
              href={`mailto:${d.common.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              <Mail size={16} />
              {c.mailBtn}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 회사 정보 ────────────────────────────── */}
      <section className="bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{c.infoH2.toUpperCase()}</h2>
          </Reveal>
          <Reveal delay={80}>
            <dl className="max-w-2xl">
              {d.about.facts.map((f) => (
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
    </>
  );
}
