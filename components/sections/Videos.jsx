"use client";
import Image from "next/image";
import { useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { FILTERS, VIDEOS } from "@/data/content";

const INITIAL_COUNT = 4;

function VideoCard({ video, playing, onPlay, onEnd }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  const handlePlay = () => {
    setReady(false);
    setError(false);
    onPlay();
  };

  return (
    <div className="card relative aspect-[9/16] w-full overflow-hidden bg-night">
      {!playing ? (
        <button
          onClick={handlePlay}
          aria-label={`Play ${video.cat} video`}
          className="group absolute inset-0 block h-full w-full"
        >
          <Image
            src={video.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            loading="lazy"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cream backdrop-blur transition group-hover:bg-brand group-hover:text-night">
            <Icon name="play" className="h-5 w-5" />
          </span>
        </button>
      ) : (
        <>
          <video
            src={video.src}
            poster={video.cover}
            controls
            autoPlay
            playsInline
            preload="auto"
            onCanPlay={() => setReady(true)}
            onError={() => setError(true)}
            onEnded={onEnd}
            className={`absolute inset-0 h-full w-full bg-black object-cover transition-opacity duration-300 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />

          {!ready && !error && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60"
            >
              <span className="h-9 w-9 animate-spin rounded-full border-4 border-white/20 border-t-brand" />
              <span className="text-[11px] font-bold text-white/80">Loading…</span>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 text-center text-xs font-bold text-white/80"
            >
              Couldn't load the video.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Videos() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const list =
    filter === "all" ? VIDEOS : VIDEOS.filter((v) => v.cat === filter);
  const shown = expanded ? list : list.slice(0, INITIAL_COUNT);
  const hasMore = list.length > INITIAL_COUNT;

  const changeFilter = (id) => {
    setFilter(id);
    setActiveId(null);
    setExpanded(false);
  };

  const toggleExpanded = () => {
    setExpanded((e) => !e);
    setActiveId(null);
  };

  return (
    <section
      id="videos"
      aria-labelledby="videos-title"
      className="section container-x defer"
    >
      <SectionHeading
        id="videos-title"
        eyebrow="Raw Reactions, Real Results"
        title="My Videos"
      />

      <div
        role="tablist"
        aria-label="Filter videos"
        className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => changeFilter(f.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold transition ${
              filter === f.id
                ? "border-brand bg-brand text-night"
                : "border-white/10 bg-white/[0.04] text-cream/75 hover:border-brand/60"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {shown.map((v) => (
          <li key={v.id} className="mx-auto w-full max-w-[360px] min-w-0 sm:max-w-none">
            <VideoCard
              video={v}
              playing={activeId === v.id}
              onPlay={() => setActiveId(v.id)}
              onEnd={() => setActiveId(null)}
            />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={toggleExpanded}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-brand/60 bg-white/[0.04] px-6 py-3 text-xs font-bold text-cream transition hover:bg-brand hover:text-night"
          >
            {expanded ? "Show Less" : `Show More (${list.length - INITIAL_COUNT})`}
            <Icon
              name="arrow"
              className={`h-3.5 w-3.5 transition-transform ${expanded ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}