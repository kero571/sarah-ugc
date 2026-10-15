import Icon from "../ui/Icon";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section container-x"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-brand/20 bg-night px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="mb-4 font-serif text-xl italic text-brand sm:text-2xl">
          Let&apos;s work together
        </p>

        <h2
          id="contact-title"
          className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          Let&apos;s create content{" "}
          <em className="font-medium text-brand">
            people trust.
          </em>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
          Have a product, campaign, or event in mind?
          Let&apos;s turn your story into something real.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex w-full max-w-xs items-center justify-center gap-2.5 !px-6 !py-4 text-sm sm:w-auto sm:text-base"
          >
            <Icon name="chat" className="h-5 w-5 shrink-0" />
            Let&apos;s Talk on WhatsApp
            <Icon name="arrow" className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}