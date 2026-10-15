import Image from "next/image";
import Icon from "../ui/Icon";
import { TAGS } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100dvh] overflow-hidden">
      <div className="relative h-full lg:container-x lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20">
        {/* Hero Image */}
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:order-2 lg:h-[min(720px,calc(100dvh_-_10rem))] lg:min-h-0 lg:self-center lg:overflow-hidden lg:rounded-[2rem] lg:border lg:border-white/10">
          <Image
            src="/profile.jpg"
            alt="Sarah holding a coffee cup on a city night walk"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 560px"
            className="object-cover object-[50%_28%]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/10 to-night lg:bg-gradient-to-t lg:from-night/60 lg:via-transparent lg:to-transparent" />

          <span className="absolute bottom-[50%] right-5 flex animate-float items-center gap-2 rounded-full border border-white/15 bg-night/70 px-4 py-2 text-xs font-semibold backdrop-blur lg:bottom-6 lg:right-6">
            <Icon name="sparkle" className="h-3.5 w-3.5 text-mint" />
            Honest. Always.
          </span>
        </div>

        {/* Hero Content */}
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-[clamp(1rem,3svh,2rem)] pt-24 lg:order-1 lg:justify-center lg:!px-0 lg:py-0">
          <span className="inline-block animate-fadeUp self-start rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-mint">
            UGC &amp; Beauty
          </span>

          <h1 className="mt-4 animate-fadeUp font-serif text-[clamp(2.25rem,10vw,2.9rem)] font-semibold leading-[1.02] [animation-delay:.08s] sm:text-6xl lg:mt-4 lg:text-7xl xl:text-8xl">
            Real Reviews.
            <br />
            <em className="font-medium">Real Life.</em>
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-y-1 animate-fadeUp text-[11px] font-bold uppercase leading-6 tracking-[.22em] text-mint [animation-delay:.16s] sm:text-xs lg:mt-5">
            {TAGS.map((t, i) => (
              <span
                key={t}
                className="inline-flex items-center whitespace-nowrap"
              >
                {i > 0 && <span className="mx-2 text-mint/50">·</span>}
                {t}
              </span>
            ))}
          </p>

          <div className="mt-5 flex w-full flex-nowrap items-center gap-[clamp(0.375rem,2vw,0.75rem)] animate-fadeUp [animation-delay:.24s] sm:w-fit lg:mt-7">
            <a
              href="#contact"
              className="btn inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap !px-[clamp(0.45rem,2.5vw,1.25rem)] !py-[clamp(0.8rem,2.5vh,1rem)] text-[clamp(0.75rem,3.5vw,1rem)] sm:flex-none sm:gap-2 sm:text-base"
            >
              Let&apos;s Collaborate
              <Icon
                name="arrow"
                className="h-[clamp(0.875rem,4vw,1.125rem)] w-[clamp(0.875rem,4vw,1.125rem)] shrink-0"
              />
            </a>

            <a
              href="#videos"
              className="btn-ghost inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap !px-[clamp(0.45rem,2.5vw,1.25rem)] !py-[clamp(0.8rem,2.5vh,1rem)] text-[clamp(0.75rem,3.5vw,1rem)] sm:flex-none sm:gap-2 sm:text-base"
            >
              my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
