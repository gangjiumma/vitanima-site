import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.careers.h1} — ${d.common.companyShort}` };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const c = d.careers;

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{c.eyebrow}</p>
            <h1 className="t-display mt-5 max-w-2xl text-[34px] text-ink sm:text-[48px]">
              {c.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {c.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 일하는 방식 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] sm:text-[34px]">{c.whyH2}</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {c.why.map((w, i) => (
              <Reveal key={w.t} delay={i * 100}>
                <div className="border-t border-line-dark pt-6">
                  <h3 className="t-title text-[19px] text-bone sm:text-[21px]">
                    {w.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-bone/60">
                    {w.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 찾는 사람 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {c.lookH2}
            </h2>
          </Reveal>

          <div className="mt-10">
            {c.roles.map((r, i) => (
              <Reveal key={r.t} delay={i * 60}>
                <article className="grid gap-3 border-t border-line py-7 last:border-b sm:grid-cols-[260px_1fr] sm:gap-10">
                  <div>
                    <h3 className="t-title text-[20px] text-ink sm:text-[22px]">
                      {r.t}
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium tracking-[0.04em] text-forest">
                      {r.s}
                    </p>
                  </div>
                  <p className="max-w-xl text-[15px] leading-[1.9] text-ink-3">
                    {r.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-8 text-[14px] text-ink-4">{c.rolesNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 지원 */}
      <section className="bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[32px]">
              {c.applyH2}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-[15.5px] leading-[1.9] text-ink-3">
              {c.applyBody}
            </p>
            <a
              href={`mailto:${d.common.email}?subject=${encodeURIComponent(
                lang === "ko" ? "[지원] " : "[Application] "
              )}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              <Mail size={15} />
              {c.applyBtn}
            </a>
            <p className="mt-4 text-[13px] text-ink-4">{c.applyNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
