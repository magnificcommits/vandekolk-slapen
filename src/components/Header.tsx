"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const main: { href: Route; label: string }[] = [
  { href: "/collectie", label: "Bedden" },
  { href: "/assortiment", label: "Matrassen & meer" },
  { href: "/configurator", label: "Welk bed past bij u?" },
  { href: "/slaapadvies", label: "Zo werken wij" },
  { href: "/over-ons", label: "Ons verhaal" },
];

const top: { href: Route; label: string }[] = [
  { href: "/showroomcollectie", label: "Showroomcollectie" },
  { href: "/kennis", label: "Kennis" },
  { href: "/contact", label: "Contact & route" },
];

export default function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = dark && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          onDark ? "bg-transparent text-white" : "bg-paper/95 backdrop-blur text-ink border-b border-line"
        }`}
      >
        {/* Servicebalk */}
        <div className={`hidden lg:block ${onDark ? "border-b border-white/15" : "border-b border-line bg-linen"}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5 text-[0.7rem] tracking-[0.08em]">
            <p className={onDark ? "text-white/70" : "text-stone"}>Markt 20, Lochem · di t/m vr 10:00–17:30 · za 10:00–16:00 · avond op afspraak</p>
            <div className="flex items-center gap-5">
              {top.map((n) => (
                <Link key={n.href} href={n.href} className={`uppercase transition ${onDark ? "text-white/70 hover:text-white" : "text-stone hover:text-ink"}`}>
                  {n.label}
                </Link>
              ))}
              <a href={site.phoneHref} className={`font-medium ${onDark ? "text-white" : "text-ink"}`}>{site.phone}</a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-xl leading-none tracking-tight lg:text-2xl">
            van de kolk
            <span className={`ml-2 text-[0.55rem] tracking-[0.35em] uppercase align-middle ${onDark ? "text-white/70" : "text-stone"}`}>
              slapen
            </span>
          </Link>

          <nav className="hidden items-center gap-7 whitespace-nowrap text-[0.76rem] tracking-[0.1em] uppercase lg:flex">
            {main.map((n) => (
              <Link key={n.href} href={n.href} className="opacity-85 transition hover:opacity-100">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/afspraak" className={`btn hidden md:inline-flex ${onDark ? "btn-light" : "btn-primary"} !py-2.5 !px-5 whitespace-nowrap`}>
              Plan een afspraak
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span className={`h-px w-6 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-paper px-6 pb-8 pt-4 text-ink lg:hidden">
            <nav className="flex flex-col gap-4 text-base">
              {main.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line pb-3">
                  {n.label}
                </Link>
              ))}
              {top.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-stone">
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/afspraak" onClick={() => setOpen(false)} className="btn btn-primary">
                Plan een afspraak
              </Link>
              <a href={site.phoneHref} className="btn btn-outline">
                Bel {site.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sticky CTA mobiel */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-paper md:hidden">
        <a href={site.phoneHref} className="py-4 text-center text-[0.75rem] tracking-[0.14em] uppercase text-ink">
          Bellen
        </a>
        <Link href="/afspraak" className="bg-ink py-4 text-center text-[0.75rem] tracking-[0.14em] uppercase text-white">
          Afspraak
        </Link>
      </div>
    </>
  );
}
