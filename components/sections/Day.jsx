"use client";
import { useCallback, useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import VideoModal from "../VideoModal";
import { DAY } from "@/data/content";

export default function Day() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="day" aria-labelledby="day-title" className="section defer">
      <div className="container-x">
        <SectionHeading id="day-title" eyebrow="Behind the Lens" title="Come along with my day" />
      </div>
      {/* Mobile: edge-to-edge snap scroller. md+: regular grid */}
      <ul className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-pl-5 px-5 pb-2 sm:scroll-pl-8 sm:px-8 md:container-x md:grid md:snap-none md:grid-cols-4 md:gap-4 md:overflow-visible md:scroll-pl-0 lg:gap-6">
        {DAY.map((d) => (
          <li key={d.id} className="w-[46vw] max-w-[260px] shrink-0 snap-start md:w-auto md:max-w-none">
            <button onClick={() => setActive(d)} aria-label={`Play video: ${d.title}`}
              className="group relative block aspect-[9/14] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(160deg,#17322a_0%,#0b1511_75%)] text-start transition hover:border-brand/40">
              <span className="absolute left-3 top-3 flex items-center gap-1.5 text-[10px] font-semibold text-cream/70">
                <i className={`block h-2 w-2 rounded-full ${d.color}`} /> {d.time}
              </span>
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition group-hover:bg-brand group-hover:text-night">
                <Icon name="play" className="h-5 w-5" />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-3.5 pt-10">
                <span className="block font-serif text-base font-semibold leading-tight sm:text-lg">{d.title}</span>
                <span className="mt-0.5 block text-[10px] text-cream/55">{d.sub}</span>
              </span>
            </button>
          </li>
        ))}
        <li aria-hidden="true" className="w-1 shrink-0 md:hidden" />
      </ul>
      {active && <VideoModal src={active.src} title={active.title} onClose={close} />}
    </section>
  );
}
