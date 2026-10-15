"use client";
import Icon from "./ui/Icon";
import { DELIVERABLES } from "@/data/content";
import { SITE } from "@/lib/site";

// Opens the visitor's mail client with the form data (no backend required).
export default function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name / Brand: ${f.get("name")}\nEmail: ${f.get("email")}\nDeliverable: ${f.get("deliverable")}\n\nCampaign details:\n${f.get("details")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Collab inquiry")}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-5 sm:p-8">
      <div>
        <label htmlFor="name" className="label">Your Name / Brand</label>
        <input id="name" name="name" required autoComplete="organization" placeholder="e.g. Elena, Glow Atelier" className="field" />
      </div>
      <div>
        <label htmlFor="email" className="label">Work Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="elena@glowatelier.com" className="field" />
      </div>
      <fieldset>
        <legend className="label">Deliverable Needed</legend>
        <div className="grid grid-cols-2 gap-2.5">
          {DELIVERABLES.map((d, i) => (
            <label key={d} className="cursor-pointer">
              <input type="radio" name="deliverable" value={d} defaultChecked={i === 0} className="peer sr-only" />
              <span className="flex min-h-[48px] items-center gap-2.5 rounded-xl border border-white/10 bg-night/70 px-3 py-2.5 text-xs font-semibold text-cream/75 transition peer-checked:border-brand peer-checked:bg-brand/10 peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand">
                <i className="block h-3.5 w-3.5 shrink-0 rounded-full border border-cream/40" aria-hidden="true" />
                {d}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="details" className="label">Campaign Details</label>
        <textarea id="details" name="details" rows={4} placeholder="Tell me about your product, timeline & budget..." className="field resize-none" />
      </div>
      <button type="submit" className="btn w-full uppercase tracking-wider">Send Collab Inquiry <Icon name="arrow" className="h-4 w-4" /></button>
    </form>
  );
}
