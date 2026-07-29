import type { Metadata } from "next";
import { ArrowUpRight, PlayCircle, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getDict, resolveLang } from "@/lib/dict";
import { sortedNews, youtubeThumb } from "@/lib/news";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  return { title: `${d.news.h1} — ${d.common.companyShort}` };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLang(params);
  const d = getDict(lang);
  const n = d.news;
  const items = sortedNews();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="t-label text-forest">{n.eyebrow}</p>
            <h1 className="t-display mt-5 text-[34px] text-ink sm:text-[48px]">
              {n.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-ink-3 sm:text-[17px]">
              {n.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          {items.length === 0 ? (
            <Reveal>
              <div className="border-t border-line pt-10 text-center sm:pt-14">
                <p className="t-title text-[19px] text-ink">{n.empty}</p>
                <p className="mt-3 text-[14.5px] text-ink-3">{n.emptySub}</p>
              </div>
            </Reveal>
          ) : (
            <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it, i) => {
                const thumb = it.thumb || youtubeThumb(it.href);
                return (
                  <Reveal key={it.id} delay={i * 70}>
                    <li>
                      <a
                        href={it.href || "#"}
                        target={it.href ? "_blank" : undefined}
                        rel={it.href ? "noreferrer" : undefined}
                        className="group block"
                      >
                        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border border-line bg-bone-2">
                          {thumb ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={thumb}
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          ) : (
                            <span className="t-label text-ink-4">
                              {d.common.companyShort}
                            </span>
                          )}
                          {it.cat === "video" && (
                            <span className="absolute inset-0 flex items-center justify-center bg-ink/25 text-bone">
                              <PlayCircle size={44} strokeWidth={1.2} />
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <span className="t-label text-forest">
                            {n.cats[it.cat]}
                          </span>
                          <span className="t-label t-num text-ink-4">
                            {it.date}
                          </span>
                          <span className="t-label text-ink-4">
                            {it.outlet[lang]}
                          </span>
                        </div>

                        <h2 className="t-title mt-2.5 text-[19px] leading-snug text-ink transition-colors group-hover:text-forest">
                          {it.title[lang]}
                        </h2>

                        {it.summary && (
                          <p className="mt-2 text-[14.5px] leading-[1.8] text-ink-3">
                            {it.summary[lang]}
                          </p>
                        )}

                        {it.href && (
                          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-forest">
                            {it.cat === "video" ? n.watch : n.readMore}
                            <ArrowUpRight size={14} />
                          </span>
                        )}
                      </a>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* 취재 문의 */}
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="t-display text-[24px] sm:text-[30px]">
              {n.pressKitH2}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-[15.5px] leading-[1.9] text-bone/70">
              {n.pressKitBody}
            </p>
            <a
              href={`mailto:${d.common.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-[14px] font-medium text-bone transition-colors hover:bg-forest-2"
            >
              <Mail size={15} />
              {d.common.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
