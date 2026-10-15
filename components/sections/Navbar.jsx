"use client";
import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { NAV } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-b from-night/90 via-night/50 to-transparent backdrop-blur-[6px]">
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="#top" className="flex items-center gap-1.5" aria-label="Sarah — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Sarah" width="66" height="24" className="h-6 w-auto lg:h-7" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-semibold text-cream/75 transition hover:text-brand">{n.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn hidden !px-5 !py-2.5 lg:inline-flex">Let&apos;s Collaborate</a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] lg:hidden">
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open}
        className="border-b border-white/10 bg-night/95 backdrop-blur lg:hidden">
        <ul className="container-x grid gap-1 py-3">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-semibold text-cream/85 hover:bg-white/5">{n.label}</a></li>
          ))}
          <li className="pt-2"><a href="#contact" onClick={() => setOpen(false)} className="btn w-full">Let&apos;s Collaborate <Icon name="arrow" className="h-4 w-4" /></a></li>
        </ul>
      </nav>
    </header>
  );
}
