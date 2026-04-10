"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Tenant, Glasgow",
    initials: "SM",
    quote:
      "Absolutely outstanding service. They arrived on time, worked through every detail on the checklist, and left my flat in pristine condition. Got my full deposit back without any dispute — couldn't be happier.",
  },
  {
    name: "James Robertson",
    role: "Landlord, Edinburgh",
    initials: "JR",
    quote:
      "I use ZA Cleaning Team for all my rental properties between tenancies. Consistently excellent results, always professional and on time. My go-to cleaning company without question.",
  },
  {
    name: "Priya Sharma",
    role: "Letting Agent, Stirling",
    initials: "PS",
    quote:
      "Our preferred cleaning partner for all managed properties. The after-builders clean they delivered was remarkable — the property looked completely brand new. Highly recommended.",
  },
  {
    name: "David Thomson",
    role: "Homeowner, Falkirk",
    initials: "DT",
    quote:
      "Booked a deep clean with only 48 hours notice and they delivered flawlessly. Professional, thorough, and incredibly efficient. Will absolutely be booking again.",
  },
];

const STATS = [
  {
    value: "500+",
    label: "Happy Clients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Deposit Success",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "50mi",
    label: "Coverage Radius",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const Stars = () => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const prev = () => setIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section>
      {/* ── Main two-column panel ── */}
      <div className="bg-bg-soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ minHeight: "600px" }}>

            {/* ── LEFT: image + watch video ── */}
            <div className="relative min-h-105 lg:min-h-0">
              <img
                src="/images/hero.png"
                alt="ZA Cleaning Team in action"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-primary/45 to-primary/15" />

              {/* Watch video button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <button
                  aria-label="Watch video"
                  className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30 hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white translate-x-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-white/90 text-base font-semibold tracking-wide">Watch Video</span>
              </div>
            </div>

            {/* ── RIGHT: testimonial content ── */}
            <div className="bg-white px-12 py-14 flex flex-col justify-between relative">

              {/* Decorative large quote mark */}
              <span className="absolute bottom-10 right-10 text-[9rem] leading-none font-serif text-slate-100 select-none pointer-events-none">
                &ldquo;
              </span>

              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-0.75 rounded-full bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Testimonial</span>
                </div>

                {/* Headline + nav arrows */}
                <div className="flex items-start justify-between gap-4 mb-10">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-snug">
                    Our Clients Are{" "}
                    <span className="text-accent">Saying</span>
                    <br />
                    About Us
                  </h2>
                  <div className="flex gap-2 shrink-0 mt-1">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white transition-all hover:bg-primary-light active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white transition-all hover:bg-primary-light active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Reviewer name + stars */}
                <p className="font-bold text-primary text-lg mb-2">{t.name}</p>
                <Stars />

                {/* Quote */}
                <p className="text-slate-500 text-base leading-relaxed mt-5 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Avatar row */}
              <div className="flex items-center gap-4 mt-10 pt-7 border-t border-slate-100 relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-base font-bold text-primary shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-base font-bold text-primary leading-tight">{t.name}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{t.role}</p>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2 ml-auto">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === idx ? "w-6 h-2.5 bg-accent" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-5">
                {/* Icon circle */}
                <div className="shrink-0 w-16 h-16 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-white">
                  {s.icon}
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-white/55 text-sm font-medium mt-1.5 uppercase tracking-wide">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
