"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, SERVICES_HEADER } from "@/app/data";
import { Home, Sparkles, Wrench, UtensilsCrossed, LayoutGrid, Smile, ArrowRight, Check } from "lucide-react";

const SERVICE_ICONS = [
  <Wrench key="builders" className="w-5 h-5" />,
  <LayoutGrid key="carpet" className="w-5 h-5" />,
  <Sparkles key="deep" className="w-5 h-5" />,
  <UtensilsCrossed key="oven" className="w-5 h-5" />,
  <Smile key="pressure" className="w-5 h-5" />,
  <Home key="tenancy" className="w-5 h-5" />,
];

export default function ServicesSection() {
  const searchParams = useSearchParams();
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    const raw = searchParams.get("service");
    if (raw === null) return;
    const idx = parseInt(raw, 10);
    if (isNaN(idx) || idx < 0 || idx >= SERVICES.length) return;
    setHovered(idx);
    requestAnimationFrame(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [searchParams]);

  const service = SERVICES[hovered];
  const totalItems = service.checklist.reduce((s, c) => s + c.items.length, 0);

  return (
    <section className="relative z-10 -mt-10 pt-32 pb-20">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .checklist-enter { animation: fadeSlideUp 0.22s ease both; }
        .card-stagger:nth-child(1)  { animation-delay: 0ms; }
        .card-stagger:nth-child(2)  { animation-delay: 30ms; }
        .card-stagger:nth-child(3)  { animation-delay: 60ms; }
        .card-stagger:nth-child(4)  { animation-delay: 90ms; }
        .card-stagger:nth-child(5)  { animation-delay: 120ms; }
        .card-stagger:nth-child(6)  { animation-delay: 150ms; }
        .card-stagger:nth-child(7)  { animation-delay: 180ms; }
        .card-stagger:nth-child(8)  { animation-delay: 210ms; }
        .card-stagger:nth-child(9)  { animation-delay: 240ms; }
        .card-stagger:nth-child(10) { animation-delay: 270ms; }
        .card-stagger:nth-child(11) { animation-delay: 300ms; }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div id="core-services" className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">{SERVICES_HEADER.eyebrow}</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mt-1 leading-tight tracking-tight">Our <span className="text-accent">Core</span> Services</h2>
          </div>
          <Link href={SERVICES_HEADER.cta.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-colors shrink-0">
            {SERVICES_HEADER.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Desktop: expanding image panels ── */}
        <div className="hidden lg:flex gap-2 rounded-2xl overflow-hidden shadow-lg" style={{ height: "400px" }} onMouseLeave={() => setHovered(0)}>
          {SERVICES.map((s, i) => {
            const isActive = hovered === i;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setHovered(i)}
                className="relative overflow-hidden cursor-pointer rounded-xl"
                style={{
                  flexBasis: isActive ? "40%" : "12%",
                  transition: "flex-basis 0.45s cubic-bezier(0.4,0,0.2,1)",
                  flexShrink: 0,
                }}
              >
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700" style={{ transform: isActive ? "scale(1.04)" : "scale(1)" }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#041628]/95 via-[#041628]/40 to-transparent" />

                {/* Collapsed label */}
                <div className="absolute inset-0 flex items-end justify-center pb-7 transition-all duration-300" style={{ opacity: isActive ? 0 : 1, pointerEvents: "none" }}>
                  <span className="text-white/85 font-semibold text-xs whitespace-nowrap tracking-wider" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {s.title}
                  </span>
                </div>

                {/* Expanded content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300" style={{ opacity: isActive ? 1 : 0, transform: isActive ? "translateY(0)" : "translateY(10px)", pointerEvents: isActive ? "auto" : "none" }}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/25 flex items-center justify-center text-accent-lighter shrink-0">{SERVICE_ICONS[i]}</span>
                    <h3 className="font-bold text-lg text-white leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed line-clamp-2">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Checklist panel ── */}
        <div className="hidden lg:block mt-10">
          {/* Big section title */}
          <div className="mb-5">
            <h3 className="text-3xl font-extrabold tracking-tight leading-tight">
              <span className="text-primary">Comprehensive</span> <span className="text-accent">Service</span> <span className="text-slate-400">Checklist</span>
            </h3>
            <p className="text-slate-500 text-sm mt-1.5">Everything covered in your selected service, zone by zone.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50/80 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">{SERVICE_ICONS[hovered]}</span>
                <div>
                  <p className="text-primary font-bold text-sm leading-tight">{service.title}</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    {totalItems} checklist items · {service.checklist.length} zones
                  </p>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent hover:underline underline-offset-2 transition-colors">
                Book this service <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Category cards — no scroll, full height */}
            <div key={hovered} className="p-5 grid grid-cols-3 gap-4">
              {service.checklist.map((section) => (
                <div key={section.category} className="checklist-enter card-stagger rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden">
                  {/* Card header */}
                  <div className="flex items-center gap-3 px-4 pt-4 pb-3">
                    <span className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">{SERVICE_ICONS[hovered]}</span>
                    <p className="font-bold text-sm text-primary leading-tight">{section.category}</p>
                  </div>

                  <div className="h-px bg-slate-200 mx-4" />

                  {/* Items */}
                  <ul className="px-4 py-3 space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full border-2 border-accent/30 bg-accent/8 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-accent" />
                        </span>
                        <span className="text-slate-600 text-[0.76rem] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile cards ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white">
              <div className="relative h-44">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#041628]/80 via-[#041628]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-white text-base leading-snug">{s.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-[0.7rem] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
