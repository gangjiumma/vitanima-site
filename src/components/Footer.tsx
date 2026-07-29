import Link from "next/link";
import { getDict, type Lang } from "@/lib/dict";

export default function Footer({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: `/${lang}/about`, label: d.nav.about },
    { href: `/${lang}/ceo`, label: d.nav.ceo },
    { href: `/${lang}/technology`, label: d.nav.technology },
    { href: `/${lang}/news`, label: d.nav.news },
    { href: `/${lang}/careers`, label: d.nav.careers },
    { href: `/${lang}/contact`, label: d.nav.contact },
  ];

  return (
    <footer className="border-t border-line-dark bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-[13px] font-extrabold tracking-[0.2em]">
              VIT<span className="text-forest-lit">ANIMA</span>
            </div>
            <p className="t-title mt-3 max-w-xs text-[17px] leading-relaxed text-bone/70">
              {d.footer.tagline}
            </p>
            <a
              href={`mailto:${d.common.email}`}
              className="mt-5 inline-block text-[13px] font-medium text-forest-lit underline-offset-4 hover:underline"
            >
              {d.common.email}
            </a>
          </div>

          <div>
            <h2 className="t-label text-ink-4">{d.footer.product}</h2>
            <ul className="mt-4 space-y-2.5 text-[14px] text-bone/75">
              <li>
                <Link href={`/${lang}/animai`} className="hover:text-bone">
                  AnimAI
                </Link>
              </li>
              <li>
                <a
                  href={d.common.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bone"
                >
                  animai.kr
                </a>
              </li>
              <li>
                <a
                  href={d.common.dashboardUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bone"
                >
                  AnimAI Biz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="t-label text-ink-4">{d.footer.company}</h2>
            <ul className="mt-4 space-y-2.5 text-[14px] text-bone/75">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="t-label mt-12 flex flex-col gap-2 border-t border-line-dark pt-6 text-ink-4 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {d.common.company}. {d.footer.rights}
          </span>
          <span>vitanima.kr</span>
        </div>
      </div>
    </footer>
  );
}
