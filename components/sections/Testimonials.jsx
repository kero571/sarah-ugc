import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { REVIEWS } from "@/data/content";

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="section container-x defer">
      <SectionHeading id="reviews-title" eyebrow="Partnership Feedback" title="What Brands Say" />
      <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
        {REVIEWS.map((r) => (
          <figure key={r.company} className="flex min-w-0 flex-col rounded-2xl bg-cream p-6 text-night sm:p-8">
            <Icon name="quote" className="mb-3 h-7 w-7 text-brand" />
            <blockquote className="font-serif text-xl italic leading-snug sm:text-2xl">{r.quote}</blockquote>
            <figcaption className="mt-6 flex items-end justify-between gap-3 border-t border-night/10 pt-4">
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-wider">{r.role}</span>
                <span className="block text-xs text-night/55">{r.company}</span>
              </span>
              <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" className="h-3.5 w-3.5" />)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
