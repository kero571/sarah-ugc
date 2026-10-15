import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { OFFERS } from "@/data/content";

export default function Offer() {
  return (
    <section id="offer" aria-labelledby="offer-title" className="section container-x defer">
      <SectionHeading id="offer-title" eyebrow="Tailored Offerings" title="What I Offer" text="High-converting, organic-first content crafted with editorial aesthetic." />
      <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {OFFERS.map((o) => (
          <article key={o.title} className="card flex min-w-0 gap-4 p-5 transition hover:border-brand/40 sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"><Icon name={o.icon} /></span>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="font-serif text-xl font-semibold sm:text-2xl">{o.title}</h3>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold">{o.chip}</span>
              </div>
              <p className="text-sm leading-6 text-cream/60">{o.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
