"use client";

import Link from "next/link";
import { HERO_CONTENT, HERO_FEATURES } from "@/app/data";

/* ── Pre-defined bubble positions to avoid SSR/client hydration mismatch ── */
const BUBBLES = [
  { id: 0, size: 60, left: 8, duration: 9, delay: 0 },
  { id: 1, size: 100, left: 17, duration: 13, delay: 1.5 },
  { id: 2, size: 45, left: 26, duration: 8, delay: 3 },
  { id: 3, size: 80, left: 35, duration: 11, delay: 0.5 },
  { id: 4, size: 130, left: 44, duration: 15, delay: 2 },
  { id: 5, size: 55, left: 53, duration: 7, delay: 4 },
  { id: 6, size: 90, left: 62, duration: 12, delay: 1 },
  { id: 7, size: 40, left: 71, duration: 9, delay: 5 },
  { id: 8, size: 115, left: 80, duration: 14, delay: 2.5 },
  { id: 9, size: 70, left: 89, duration: 10, delay: 0.8 },
  { id: 10, size: 50, left: 6, duration: 8, delay: 6 },
  { id: 11, size: 85, left: 93, duration: 11, delay: 3.5 },
];

/* ── Feature icons — indexed to match HERO_FEATURES in data.ts ── */
const FEATURE_ICONS = [
  <svg key="tenancy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  <svg key="reliable" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="insured" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="sameday" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function Hero() {
  return (
    <section className="relative z-20 min-h-[78vh] flex flex-col">
      {/* ── Bubble + hero animations ── */}
      <style>{`
        @keyframes bubbleRise {
          0%   { transform: translateY(0)      scale(1);   opacity: 0;    }
          10%  { opacity: 0.18; }
          85%  { opacity: 0.12; }
          100% { transform: translateY(-105vh) scale(0.65); opacity: 0;  }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bubble-el {
          position: absolute;
          bottom: -80px;
          border-radius: 50%;
          border: 1.5px solid rgba(147,197,253,0.3);
          background: radial-gradient(circle at 32% 32%, rgba(191,219,254,0.22), rgba(59,130,246,0.06) 60%, transparent);
          animation: bubbleRise linear infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }
        .h-badge  { animation: heroFadeUp 0.55s ease 0.1s  both; }
        .h-title  { animation: heroFadeUp 0.55s ease 0.22s both; }
        .h-sub    { animation: heroFadeUp 0.55s ease 0.38s both; }
        .h-ctas   { animation: heroFadeUp 0.55s ease 0.52s both; }
      `}</style>

      {/* ── Background image + overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="/images/hero.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

        {BUBBLES.map((b) => (
          <span
            key={b.id}
            className="bubble-el"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              borderColor: "rgba(255,255,255,0.2)",
              background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 60%, transparent)",
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-4xl w-full px-6 py-16 lg:py-20 text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="h-badge inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-7">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-light shrink-0">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-100">{HERO_CONTENT.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="h-title text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5">
            {HERO_CONTENT.headlineLine1} <span className="text-accent-lighter">{HERO_CONTENT.headlineAccent}</span>
            <br />
            {HERO_CONTENT.headlineLine3}
          </h1>

          {/* Subtitle */}
          <p className="h-sub text-white/70 text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-md">{HERO_CONTENT.subtitle}</p>

          {/* CTA row */}
          <div className="h-ctas flex flex-wrap items-center justify-center gap-4">
            <Link href={HERO_CONTENT.ctaPrimary.href} className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/35 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/45">
              {HERO_CONTENT.ctaPrimary.label}
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Floating feature cards ── */}
      <div className="relative z-30 px-6 -mb-16 sm:-mb-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-2xl shadow-slate-900/15 overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_FEATURES.map((f, index) => (
              <div key={f.title} className={`flex flex-col gap-4 px-6 py-7 lg:px-7 group hover:bg-slate-50 transition-colors ${index < HERO_FEATURES.length - 1 ? "border-b sm:border-b-0 sm:border-r border-slate-100" : ""}`}>
                <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/8 flex items-center justify-center text-accent transition-colors group-hover:bg-accent group-hover:text-white">{FEATURE_ICONS[index]}</div>
                <div>
                  <p className="text-slate-900 text-base font-bold leading-tight mb-1.5">{f.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
