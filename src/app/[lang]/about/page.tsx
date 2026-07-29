import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.about.h1} — ${d.common.companyShort}` };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const a = d.about;

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {a.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {a.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 미션 · 비전 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="t-label text-forest-lit">
                {a.missionLabel.toUpperCase()}
              </p>
              <p className="t-display mt-4 text-[24px] leading-[1.35] sm:text-[30px]">
                {a.mission}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-label text-forest-lit">
                {a.visionLabel.toUpperCase()}
              </p>
              <p className="t-display mt-4 text-[24px] leading-[1.35] sm:text-[30px]">
                {a.vision}
              </p>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <p className="mt-14 max-w-2xl border-t border-line-dark pt-8 text-[15.5px] leading-[1.9] text-bone/70">
              {a.missionBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 여기까지 온 길 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{a.storyEyebrow}</p>
            <h2 className="t-display mt-5 text-[28px] text-ink sm:text-[38px]">
              {a.storyH2}
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-ink-3 sm:text-[16.5px]">
              {a.storyLead}
            </p>
          </Reveal>

          <div className="mt-14">
            {a.story.map((c, i) => (
              <Reveal key={c.k} delay={i * 90}>
                <article className="grid gap-5 border-t border-line py-10 sm:grid-cols-[130px_1fr] sm:gap-10 sm:py-12">
                  <div>
                    <p className="t-display t-num text-[30px] leading-none text-forest sm:text-[36px]">
                      {c.y}
                    </p>
                    <p className="t-label t-num mt-2 text-ink-4">{c.k}</p>
                  </div>

                  <div className="max-w-2xl">
                    <h3 className="t-title text-[22px] text-ink sm:text-[26px]">
                      {c.t}
                    </h3>
                    <p className="mt-4 text-[15.5px] leading-[1.95] text-ink-3">
                      {c.d}
                    </p>

                    {"metrics" in c && c.metrics ? (
                      <>
                        <dl className="mt-8 grid gap-x-6 gap-y-6 border-y border-line py-7 sm:grid-cols-3">
                          {c.metrics.map((m) => (
                            <div key={m.l}>
                              <dt className="t-display t-num text-[30px] leading-none text-forest sm:text-[34px]">
                                {m.n}
                              </dt>
                              <dd className="mt-2.5 text-[13.5px] leading-snug text-ink-3">
                                {m.l}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        {"note" in c && c.note ? (
                          <p className="mt-4 text-[13px] leading-relaxed text-ink-4">
                            {c.note}
                          </p>
                        ) : null}
                        {"learn" in c && c.learn ? (
                          <p className="mt-6 border-l-2 border-forest pl-5 text-[15.5px] leading-[1.9] text-ink">
                            {c.learn}
                          </p>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="t-title mt-6 max-w-2xl border-t border-line pt-8 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
              {a.storyClose}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="t-display text-[26px] text-ink sm:text-[34px]">
              {a.valuesH2}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="border-t border-line pt-6">
                  <span className="t-label t-num text-forest">{v.n}</span>
                  <h3 className="t-title mt-3 text-[21px] text-ink sm:text-[23px]">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-ink-3">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 이름 */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.nameH2.toUpperCase()}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="t-display text-[26px] text-ink sm:text-[34px]">
              VIT<span className="text-forest">ANIMA</span>
            </p>
            <p className="mt-5 max-w-xl text-[15.5px] leading-[1.9] text-ink-3">
              {a.nameBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 법인 정보 */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.factsH2.toUpperCase()}</h2>
          </Reveal>
          <Reveal delay={80}>
            <dl className="max-w-2xl">
              {a.facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-1 border-t border-line py-4 last:border-b sm:flex-row sm:gap-8"
                >
                  <dt className="text-[13px] font-medium tracking-[0.04em] text-ink-4 sm:w-44 sm:shrink-0">
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

      {/* 연혁 */}
      <section className="bg-bone-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">{a.historyH2.toUpperCase()}</h2>
          </Reveal>
          <div className="max-w-2xl">
            {a.history.map((it, i) => (
              <Reveal key={it.t} delay={i * 70}>
                <div className="relative border-l border-line pb-9 pl-7 last:pb-0">
                  <span
                    className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                      i === a.history.length - 1 ? "bg-forest" : "bg-line"
                    }`}
                  />
                  <p className="t-label t-num text-forest">{it.y}</p>
                  <h3 className="t-title mt-2 text-[20px] text-ink">{it.t}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-3">
                    {it.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
