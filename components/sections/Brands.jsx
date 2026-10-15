import { BRANDS } from "@/data/content";

export default function Brands() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" aria-label="Brands I've worked with" className="border-y border-white/5 py-8 lg:py-10">
      <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[.25em] text-cream/45">Brands I&apos;ve worked with</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max animate-marquee">
          {loop.map((b, i) => (
            <li key={i} aria-hidden={i >= BRANDS.length} className="shrink-0 px-6 font-serif text-lg italic tracking-wider text-cream/55 sm:px-10 sm:text-xl">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
