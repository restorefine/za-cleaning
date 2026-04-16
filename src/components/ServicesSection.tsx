"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, SERVICES_HEADER } from "@/app/data";

/* ── Service icons — indexed to match SERVICES in data.ts ── */
const SERVICE_ICONS = [
  <svg key="tenancy" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  <svg key="deep" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  <svg key="builders" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
    />
  </svg>,
  <svg key="oven" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M9 3.75v5.25m6-5.25v5.25M8.25 15.75h7.5" />
  </svg>,
  <svg key="carpet" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25v13.5M15 5.25v13.5M5.25 9h13.5M5.25 15h13.5" />
  </svg>,
  <svg key="pressure" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    />
  </svg>,
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="relative z-10 -mt-10 pt-32 pb-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">{SERVICES_HEADER.eyebrow}</span>
            <h2 className="text-4xl font-bold text-primary mt-1">{SERVICES_HEADER.headline}</h2>
          </div>
          <Link href={SERVICES_HEADER.cta.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-colors shrink-0">
            {SERVICES_HEADER.cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Desktop: expanding image panels ── */}
        <div className="hidden lg:flex gap-2 rounded-2xl overflow-hidden shadow-lg" style={{ height: "420px" }} onMouseLeave={() => setHovered(0)}>
          {SERVICES.map((s, i) => {
            const active = hovered === i;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setHovered(i)}
                className="relative overflow-hidden cursor-pointer rounded-xl"
                style={{
                  flexBasis: active ? "38%" : "12.4%",
                  transition: "flex-basis 0.5s cubic-bezier(0.4,0,0.2,1)",
                  flexShrink: 0,
                }}
              >
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700" style={{ transform: active ? "scale(1.06)" : "scale(1)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041628]/90 via-[#041628]/30 to-transparent" />

                {/* Collapsed: vertical title */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 transition-all duration-300" style={{ opacity: active ? 0 : 1, pointerEvents: "none" }}>
                  <span className="text-white/90 font-semibold text-sm whitespace-nowrap tracking-wide" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {s.title}
                  </span>
                </div>

                {/* Expanded: text + icon at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-400"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(12px)",
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  <h3 className="font-bold text-xl text-white leading-tight mb-2">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: full-image cards grid ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041628]/88 via-[#041628]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-white text-base leading-snug mb-1">{s.title}</h3>
                <p className="text-white/65 text-xs leading-relaxed line-clamp-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
