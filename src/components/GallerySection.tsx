"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY_HEADER, GALLERY_ITEMS } from "@/app/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ComparisonSlider({ before, after, room }: { before: string; after: string; room: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number) => Math.min(96, Math.max(4, v));

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => { setDragging(true); updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging) updatePos(e.clientX); }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { e.preventDefault(); updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => setDragging(false)}
    >
      {/* Before */}
      <Image
        src={before}
        alt={`${room} — before`}
        fill
        draggable={false}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 800px"
      />

      {/* After — revealed from left */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={after}
          alt={`${room} — after`}
          fill
          draggable={false}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-center cursor-col-resize"
        style={{ left: `${pos}%` }}
      >
        <ChevronLeft className="w-3.5 h-3.5 text-primary" />
        <ChevronRight className="w-3.5 h-3.5 text-primary" />
      </div>

      {/* Corner labels */}
      <span className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
        After
      </span>
      <span className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
        Before
      </span>

      {/* Drag hint — bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(4,22,40,0.6), transparent)" }}
      >
        <div className="absolute bottom-4 inset-x-0 flex justify-center">
          <span className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">
            ← drag to compare →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIdx(idx);
      setVisible(true);
    }, 180);
  }, []);

  const prev = () => goTo(activeIdx === 0 ? GALLERY_ITEMS.length - 1 : activeIdx - 1);
  const next = () => goTo(activeIdx === GALLERY_ITEMS.length - 1 ? 0 : activeIdx + 1);

  const item = GALLERY_ITEMS[activeIdx];

  return (
    <section className="bg-bg-soft py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">{GALLERY_HEADER.eyebrow}</span>
          <h2 className="text-4xl font-bold text-primary mt-2 leading-tight">
            {GALLERY_HEADER.headlinePart1}{" "}
            <span className="text-accent">{GALLERY_HEADER.headlineAccent}</span>{" "}
            {GALLERY_HEADER.headlinePart2}
          </h2>
          <p className="text-muted text-sm mt-3 leading-relaxed">{GALLERY_HEADER.subtitle}</p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Main comparison card */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl bg-slate-200 aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] transition-opacity duration-200"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <ComparisonSlider key={activeIdx} before={item.before} after={item.after} room={item.room} />
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-105 transition-all duration-150"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-white hover:scale-105 transition-all duration-150"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Info bar ── */}
        <div
          className="mt-5 flex items-center justify-between transition-opacity duration-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div>
            <p className="text-primary font-bold text-lg leading-snug">{item.room}</p>
            <p className="text-muted text-xs uppercase tracking-widest mt-0.5">{item.tag}</p>
          </div>
          <span className="text-muted text-sm font-medium tabular-nums">
            {String(activeIdx + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Dots + thumbnail strip ── */}
        <div className="mt-6 flex flex-col items-center gap-5">

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx ? "w-7 h-2 bg-accent" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 w-full justify-center">
            {GALLERY_ITEMS.map((g, i) => (
              <button
                key={g.id}
                onClick={() => goTo(i)}
                aria-label={g.room}
                className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                  i === activeIdx
                    ? "ring-2 ring-accent ring-offset-2 opacity-100 scale-[1.04]"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={g.after}
                  alt={g.room}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                {i === activeIdx && (
                  <div className="absolute inset-0 bg-accent/20" />
                )}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
