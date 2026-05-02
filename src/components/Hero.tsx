"use client";

import Link from "next/link";
import { HERO_CONTENT } from "@/app/data";
import { ShieldCheck, ArrowRight, Phone } from "lucide-react";

/* ── Pre-defined bubble positions to avoid SSR/client hydration mismatch ── */
const BUBBLES = [
  { id: 0,  size: 60,  left: 4,  duration: 9,  delay: 0   },
  { id: 1,  size: 100, left: 11, duration: 13, delay: 1.5 },
  { id: 2,  size: 45,  left: 18, duration: 8,  delay: 3   },
  { id: 3,  size: 80,  left: 25, duration: 11, delay: 0.5 },
  { id: 4,  size: 130, left: 32, duration: 15, delay: 2   },
  { id: 5,  size: 55,  left: 39, duration: 7,  delay: 4   },
  { id: 6,  size: 90,  left: 46, duration: 12, delay: 1   },
  { id: 7,  size: 40,  left: 53, duration: 9,  delay: 5   },
  { id: 8,  size: 115, left: 60, duration: 14, delay: 2.5 },
  { id: 9,  size: 70,  left: 67, duration: 10, delay: 0.8 },
  { id: 10, size: 50,  left: 74, duration: 8,  delay: 6   },
  { id: 11, size: 85,  left: 81, duration: 11, delay: 3.5 },
  { id: 12, size: 65,  left: 88, duration: 10, delay: 1.2 },
  { id: 13, size: 95,  left: 94, duration: 13, delay: 4.5 },
  { id: 14, size: 35,  left: 2,  duration: 7,  delay: 7   },
  { id: 15, size: 75,  left: 21, duration: 12, delay: 2.8 },
  { id: 16, size: 110, left: 50, duration: 16, delay: 0.3 },
  { id: 17, size: 48,  left: 78, duration: 9,  delay: 5.5 },
  { id: 18, size: 120, left: 14, duration: 17, delay: 3.8 },
  { id: 19, size: 58,  left: 63, duration: 8,  delay: 1.8 },
];

export default function Hero() {
  return (
    <section className="relative z-20 min-h-screen flex flex-col">
      {/* ── Bubble + hero animations ── */}
      <style>{`
        @keyframes bubbleRise {
          0%   { transform: translateY(0)      scale(1);   opacity: 0;    }
          10%  { opacity: 0.35; }
          85%  { opacity: 0.22; }
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
          border: 2px solid rgba(147,197,253,0.6);
          background: radial-gradient(circle at 32% 32%, rgba(191,219,254,0.45), rgba(59,130,246,0.18) 60%, transparent);
          box-shadow: inset 0 0 12px rgba(255,255,255,0.15), 0 0 8px rgba(147,197,253,0.2);
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
              borderColor: "rgba(147,197,253,0.6)",
              background: "radial-gradient(circle at 32% 32%, rgba(191,219,254,0.4), rgba(59,130,246,0.15) 60%, transparent)",
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-4xl w-full px-6 py-16 lg:py-20 text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="h-badge inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-7">
            <ShieldCheck className="w-4 h-4 text-accent-light shrink-0" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-100">{HERO_CONTENT.badge}</span>
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
          <div className="h-ctas flex flex-wrap items-center justify-center gap-3 mb-6">
            <Link href={HERO_CONTENT.ctaPrimary.href} className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/35 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/45">
              {HERO_CONTENT.ctaPrimary.label}
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <a href={HERO_CONTENT.ctaPhone.href} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5">
              <Phone className="w-4 h-4 shrink-0" />
              {HERO_CONTENT.ctaPhone.label}
            </a>

            <a
              href={HERO_CONTENT.ctaWhatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/15 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-green-300 transition-all duration-200 hover:bg-green-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
