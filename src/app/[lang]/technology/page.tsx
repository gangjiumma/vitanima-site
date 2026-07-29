import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
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
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">
              {t.eyebrow}
            </p>
            <h1 className="mt-5 max-w-2xl t-display text-[34px] leading-[1.2] text-ink sm:text-[48px]">
              {t.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {t.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 방향 역전 */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {t.invH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="t-label text-ink-4">
                {t.invBeforeLabel.toUpperCase()}
              </p>
              <ol className="mt-5 space-y-3">
                {t.invBefore.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 border-t border-line pt-3 text-[15.5px] text-ink-3 line-through decoration-line decoration-1"
                  >
                    <span className="font-medium text-[11px] text-ink-4 no-underline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120}>
              <p className="t-label text-forest">
                {t.invAfterLabel.toUpperCase()}
              </p>
              <ol className="mt-5 space-y-3">
                {t.invAfter.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 border-t border-forest/25 pt-3 text-[15.5px] font-medium text-ink"
                  >
                    <span className="font-medium text-[11px] text-forest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="mt-12 max-w-2xl border-l-2 border-forest pl-5 text-[15.5px] leading-[1.9] text-ink">
              {t.invBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 루프 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="order-2 flex justify-center lg:order-1">
            <Loop
              keys={d.home.loopSteps.map((s) => s.k)}
              center={d.home.loopCenter}
              tone="dark"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="t-display text-[26px] sm:text-[34px]">
                {t.loopH2}
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.9] text-bone/70">
                {t.loopBody}
              </p>
            </Reveal>

            <ol className="mt-10 space-y-4">
              {d.home.loopSteps.map((s, i) => (
                <Reveal key={s.k} delay={i * 60}>
                  <li className="flex gap-4 border-t border-line-dark pt-4">
                    <span className="font-medium text-[11px] leading-6 tracking-widest text-forest-lit">
                      {s.k}
                    </span>
                    <div>
                      <h3 className="t-title text-[18px] text-bone">
                        {s.t}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-bone/55">
                        {s.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 규제 가드 */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-title text-[22px] text-ink sm:text-[26px]">
              {t.guardH2}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl text-[15.5px] leading-[1.9] text-ink-3">
              {t.guardBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 특허 */}
      <section className="bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {t.ipH2}
            </h2>
            <p className="mt-4 max-w-2xl text-[14px] leading-[1.85] text-ink-4">
              {t.ipNote}
            </p>
          </Reveal>

          <ul className="mt-10">
            {t.ip.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <li className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[130px_1fr_90px] sm:gap-6">
                  <span className="text-[12px] font-medium tracking-[0.06em] text-forest">
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
                  <span className="t-label text-ink-4 sm:text-right">
                    {t.ipStatus.toUpperCase()}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <a
              href={`/${lang}/contact`}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] text-bone transition-colors hover:bg-forest-2"
            >
              {d.contact.h1}
              <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
