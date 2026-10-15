import { STATS } from "@/data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section container-x defer">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-3 font-serif text-lg italic text-brand">Meet the creator <span className="h-px w-12 bg-brand/40" aria-hidden="true" /></p>
          <h2 id="about-title" className="h2">Unfiltered honesty in a world of sponsored noise.</h2>
          <p className="lead !max-w-lg">
            Hi, I&apos;m Sarah. From hunting barrier serums on cold night walks to testing the city&apos;s richest warm pistachio cookies, I document products exactly how they behave in the real world. No studio trickery, no hollow praise—just genuine first impressions and texture routines.
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-3 sm:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="card flex flex-col-reverse items-center justify-center px-2 py-6 text-center sm:py-9">
              <dt className="mt-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-mint sm:text-[10px]">{s.label}</dt>
              <dd className="font-serif text-2xl font-semibold sm:text-4xl lg:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
