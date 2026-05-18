"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { HERO_CONTENT } from "@/app/data";

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

export default function Hero() {
  return (
    <section className="relative z-20 min-h-[calc(100vh-5rem)] flex flex-col">
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
        <Image src="/images/hero.png" alt="" aria-hidden={true} fill priority sizes="100vw" quality={80} className="object-cover object-center" />
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
          {/* Money Back guarantee strip */}
          <div className="h-badge inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-5 py-3.5 mb-7">
            <div className="w-10 h-10 rounded-xl bg-accent/30 border border-accent/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.2} />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-extrabold leading-tight tracking-tight">100% Deposit Back Guaranteed</p>
              <p className="text-white/55 text-xs mt-0.5">We help secure your full deposit back from your landlord.</p>
            </div>
            <div className="border-l border-white/15 pl-4 ml-1 text-center shrink-0">
              <span className="text-2xl font-black text-white leading-none">100%</span>
              <p className="text-white/50 text-[0.6rem] font-bold uppercase tracking-widest">Deposit</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="h-title text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5">
            {HERO_CONTENT.headlineLine1} <span className="text-accent-lighter">{HERO_CONTENT.headlineAccent}</span>
            <br />
            {HERO_CONTENT.headlineLine3}
          </h1>

          {/* Subtitle */}
          <p className="h-sub text-white/70 text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-md">{HERO_CONTENT.subtitle}</p>

          {/* CTA row */}
          <div className="h-ctas flex flex-wrap items-center justify-center gap-3">
            <Link href={HERO_CONTENT.ctaPrimary.href} className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/35 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/45">
              {HERO_CONTENT.ctaPrimary.label}
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <a
              href={HERO_CONTENT.ctaWhatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/15 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-green-300 transition-all duration-200 hover:bg-green-500/25 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>

            <a href={HERO_CONTENT.ctaPhone.href} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              {HERO_CONTENT.ctaPhone.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
