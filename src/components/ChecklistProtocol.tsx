"use client";

import { useState } from "react";
import { PROTOCOL_HEADER, PROTOCOL_SECTIONS } from "@/app/data";
import { Wrench, Target, Home, CheckCircle2, ChevronDown } from "lucide-react";

/* ── Section icons — indexed to match PROTOCOL_SECTIONS in data.ts ── */
const SECTION_ICONS = [
  <Wrench key="kitchen" className="w-5 h-5" />,
  <Target key="bathroom" className="w-5 h-5" />,
  <Home key="living" className="w-5 h-5" />,
];

const CheckIcon = () => <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />;

export default function ChecklistProtocol() {
  const [open, setOpen] = useState<string>("kitchen");

  return (
    <section className="bg-bg-soft py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* ── LEFT: sticky header + stats ── */}
          <div className="lg:sticky lg:top-28">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{PROTOCOL_HEADER.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-5">
              {PROTOCOL_HEADER.headlinePart1} <span className="text-accent">{PROTOCOL_HEADER.headlineAccent}</span>
            </h2>

            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md">{PROTOCOL_HEADER.subtitle}</p>

            {/* Stats row */}
            <div className="flex gap-8 sm:gap-12 mb-10">
              <div>
                <p className="text-3xl font-extrabold text-primary leading-none mb-1">80+</p>
                <p className="text-[0.68rem] font-bold text-slate-400 uppercase tracking-widest">Checklist Points</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary leading-none mb-1">3</p>
                <p className="text-[0.68rem] font-bold text-slate-400 uppercase tracking-widest">Key Zones</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary leading-none mb-1">100%</p>
                <p className="text-[0.68rem] font-bold text-slate-400 uppercase tracking-widest">Guaranteed</p>
              </div>
            </div>

            {/* Section tab pills */}
            <div className="flex gap-2 flex-wrap">
              {PROTOCOL_SECTIONS.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => setOpen(section.id)}
                  onMouseEnter={() => setOpen(section.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${open === section.id ? "bg-accent text-white shadow-sm" : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"}`}
                >
                  <span className={open === section.id ? "text-white" : "text-slate-400"}>{SECTION_ICONS[i]}</span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: accordion panels ── */}
          <div className="flex flex-col gap-3">
            {PROTOCOL_SECTIONS.map((section, i) => {
              const isOpen = open === section.id;
              return (
                <div key={section.id} onMouseEnter={() => setOpen(section.id)} className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? "border-primary/20 shadow-lg shadow-primary/5" : "border-slate-100 shadow-sm hover:shadow-md"}`}>
                  {/* Header row */}
                  <button onClick={() => setOpen(isOpen ? "" : section.id)} className={`w-full flex items-center justify-between px-6 py-5 outline-none transition-colors duration-200 ${isOpen ? "bg-accent" : "bg-white"}`}>
                    <div className="flex items-center gap-3">
                      <span className={isOpen ? "text-accent-light" : "text-accent"}>{SECTION_ICONS[i]}</span>
                      <span className={`font-bold text-base ${isOpen ? "text-white" : "text-slate-900"}`}>{section.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isOpen ? "bg-white/15 text-white/80" : "bg-slate-100 text-slate-400"}`}>{section.items.length} tasks</span>
                    </div>

                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "border-white/30 bg-white/15 rotate-180" : "border-slate-200 bg-slate-50"}`}>
                      <ChevronDown className={`w-3 h-3 ${isOpen ? "text-white" : "text-slate-400"}`} />
                    </span>
                  </button>

                  {/* Collapsible item list */}
                  <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 bg-white">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-x-8 p-6 pt-5">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <CheckIcon />
                            <span className="text-sm text-slate-600 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
