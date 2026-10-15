import { SOCIALS } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-x flex flex-col items-center gap-5 py-9 md:flex-row md:justify-between">
        {/* <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-cream/70">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul> */}
        <p className="text-center text-[10px] font-semibold uppercase tracking-[.18em] text-cream/40 md:text-end">
          Copyright © 2026 Sarah UGC &amp; Lifestyle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
