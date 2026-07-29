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
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">
              {c.eyebrow}
            </p>
            <h1 className="mt-5 t-display text-[34px] leading-[1.2] text-ink sm:text-[48px]">
              {c.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {c.lead}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 border-t border-line pt-7">
              <div className="flex flex-col gap-7 sm:flex-row sm:gap-14">
                <div>
                  <p className="t-label text-ink-4">
                    {c.emailLabel.toUpperCase()}
                  </p>
                  <a
                    href={`mailto:${d.common.email}`}
                    className="t-display mt-2 block text-[24px] text-ink underline-offset-4 hover:text-forest hover:underline sm:text-[30px]"
                  >
                    {d.common.email}
                  </a>
                </div>
                <div>
                  <p className="t-label text-ink-4">
                    {c.phoneLabel.toUpperCase()}
                  </p>
                  <a
                    href={d.common.phoneHref}
                    className="t-display t-num mt-2 block text-[24px] text-ink underline-offset-4 hover:text-forest hover:underline sm:text-[30px]"
                  >
                    {d.common.phone}
                  </a>
                </div>
              </div>
              <a
                href={`mailto:${d.common.email}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
              >
                <Mail size={15} />
                {c.mailBtn}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 문의 유형 */}
      <section className="border-b border-line bg-bone-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {c.types.map((t, i) => (
              <Reveal key={t.t} delay={i * 70}>
                <div className="border-t border-line pt-5">
                  <h2 className="t-title text-[20px] text-ink">
                    {t.t}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-[1.8] text-ink-3">
                    {t.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-label text-ink-4">
              {c.infoH2.toUpperCase()}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <dl className="max-w-2xl">
              {d.about.facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-1 border-t border-line-dark py-4 last:border-b sm:flex-row sm:gap-8"
                >
                  <dt className="text-[12px] font-medium tracking-[0.06em] text-ink-4 sm:w-44 sm:shrink-0">
                    {f.k}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-bone/80">
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
