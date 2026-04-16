"use client";

import { useState } from "react";
import { TESTIMONIALS, STATS } from "@/app/data";

/* ── Stat icons — indexed to match STATS in data.ts ── */
const STAT_ICONS = [
  <svg key="clients" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  <svg key="years" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="deposit" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="coverage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const prev = () => setIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section>
      {/* ── Main Testimonial Section (New UI) ── */}
      <div className="bg-accent relative overflow-hidden py-20 lg:py-28">
        {/* ── Background decorative layer ── */}

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Soft blurred orbs */}
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-blue-300 opacity-10 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[440px] h-[440px] rounded-full bg-sky-400 opacity-10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03] blur-[80px] pointer-events-none" />

        {/* Large decorative rings */}
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full border border-white/8 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/8 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-[360px] h-[360px] rounded-full border border-white/10 pointer-events-none" />

        {/* Giant faint quote mark */}
        <div className="absolute top-6 right-8 pointer-events-none select-none opacity-[0.05] text-white leading-none font-serif" style={{ fontSize: "28rem", lineHeight: 1 }}>&ldquo;</div>

        {/* Diagonal gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5 pointer-events-none" />

        {/* Thin horizontal lines */}
        <div className="absolute top-[22%] left-0 right-0 h-px bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[22%] left-0 right-0 h-px bg-white/5 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-24 items-center">
            
            {/* ── LEFT: Large Image ── */}
            <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0 lg:max-w-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-slate-200">
              <img 
                src="/images/hero.png" 
                alt="Pristine interior showcasing curated living" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop";
                }}
              />
            </div>

            {/* ── RIGHT: Testimonial Text ── */}
            <div className="flex flex-col text-white">
              <div className="mb-8 opacity-40">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 9c-3.3 0-6 2.7-6 6v10h10V15H8c0-1.1.9-2 2-2h2V9h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V15h-6c0-1.1.9-2 2-2h2V9h-2z" />
                </svg>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.3] font-bold text-white mb-10 tracking-tight">
                {t.quote}
              </h3>

              <div className="flex items-center gap-6">
                <div className="w-8 h-[1px] bg-white/40 shrink-0"></div>
                <div>
                  <p className="text-white font-bold text-lg leading-snug tracking-wide">{t.name}</p>
                  <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {t.role || "Client"}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex gap-4 mt-12 bg-white/10 w-max rounded-full p-1 border border-white/10 backdrop-blur-sm">
                <button 
                  onClick={prev} 
                  aria-label="Previous testimonial" 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <div className="flex items-center gap-1.5 px-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setIdx(i)} 
                      aria-label={`Go to slide ${i + 1}`} 
                      className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"}`} 
                    />
                  ))}
                </div>
                <button 
                  onClick={next} 
                  aria-label="Next testimonial" 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-slate-500/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                <div className="shrink-0 w-16 h-16 rounded-full border-2 border-white bg-accent flex items-center justify-center text-white">
                  {STAT_ICONS[i]}
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-accent leading-none">{s.value}</p>
                  <p className="text-slate-500 text-sm font-medium mt-1.5 uppercase tracking-wide">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
