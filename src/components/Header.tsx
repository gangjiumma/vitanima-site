"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getDict, type Lang } from "@/lib/dict";

export default function Header({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const rest = pathname.split("/").slice(2).join("/");
  const other: Lang = lang === "ko" ? "en" : "ko";
  const otherHref = `/${other}${rest ? `/${rest}` : ""}`;

  const links = [
    { href: `/${lang}/about`, label: d.nav.about },
    { href: `/${lang}/ceo`, label: d.nav.ceo },
    { href: `/${lang}/animai`, label: d.nav.animai },
    { href: `/${lang}/technology`, label: d.nav.technology },
    { href: `/${lang}/news`, label: d.nav.news },
    { href: `/${lang}/careers`, label: d.nav.careers },
    { href: `/${lang}/contact`, label: d.nav.contact },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bone/90 backdrop-blur-md"
          : "border-transparent bg-bone"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href={`/${lang}`}
          className="shrink-0 text-[13px] font-extrabold tracking-[0.2em] text-ink"
          aria-label={d.common.company}
        >
          VIT<span className="text-forest">ANIMA</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] transition-colors ${
                isActive(l.href) ? "text-forest" : "text-ink-3 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={otherHref}
            className="t-label ml-1 rounded-full border border-line px-3 py-1 text-ink-3 transition-colors hover:border-forest hover:text-forest"
          >
            {other.toUpperCase()}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={otherHref}
            className="t-label rounded-full border border-line px-3 py-1 text-ink-3"
          >
            {other.toUpperCase()}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? d.nav.close : d.nav.menu}
            className="-mr-1 p-1 text-ink"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bone lg:hidden">
          <div className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block border-b border-line/60 py-3.5 text-[15px] last:border-0 ${
                  isActive(l.href) ? "text-forest" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
