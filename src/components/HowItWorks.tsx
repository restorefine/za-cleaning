"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import { HOW_IT_WORKS_HEADER, STEPS } from "@/app/data";
import { CalendarDays, Wrench, CheckCircle2 } from "lucide-react";

/* ── Step icons — indexed to match STEPS in data.ts ── */
const STEP_ICONS = [
  <CalendarDays key="book" className="w-9 h-9" />,
  <Wrench key="arrive" className="w-9 h-9" />,
  <CheckCircle2 key="enjoy" className="w-9 h-9" />,
];

const PATH_D = "M 120 118 L 880 118";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [buttonActive, setButtonActive] = useState(false);

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!section || !path || !dot) return;

    const rect = section.getBoundingClientRect();
    const scrolled = window.innerHeight * 0.5 - rect.top;
    const available = rect.height * 0.55;
    const progress = Math.max(0, Math.min(1, scrolled / available));

    const total = path.getTotalLength();
    const pt = path.getPointAtLength(Math.min(progress, 1) * total);

    dot.setAttribute("cx", String(pt.x));
    dot.setAttribute("cy", String(pt.y));
    dot.style.opacity = progress > 0.01 ? "1" : "0";
    dot.setAttribute("r", "9");

    if (progress >= 0.94) setActiveStep(3);
    else if (progress >= 0.5) setActiveStep(2);
    else if (progress >= 0.06) setActiveStep(1);
    else setActiveStep(0);

    setButtonActive(progress >= 0.985);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section ref={sectionRef} className="relative bg-bg-soft overflow-hidden py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{HOW_IT_WORKS_HEADER.eyebrow}</p>
          <h2 className="text-4xl font-extrabold text-primary leading-tight max-w-lg mx-auto">{HOW_IT_WORKS_HEADER.headline}</h2>
          <p className="mt-3 text-muted text-base max-w-md mx-auto">{HOW_IT_WORKS_HEADER.subtitle}</p>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden md:block relative pt-5 pb-12">
          <svg className="absolute z-0 left-0 right-0 top-0 w-full h-32 pointer-events-none" viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid meet">
            <path d={PATH_D} stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path ref={pathRef} d={PATH_D} stroke="transparent" strokeWidth="1" fill="none" />
            <circle
              ref={dotRef}
              cx="400"
              cy="20"
              r="9"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="3"
              opacity="0"
              style={{ filter: "drop-shadow(0 2px 10px rgba(59,130,246,0.85))", transition: "opacity 0.15s" }}
            />
          </svg>

          <div className="relative z-10 grid grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center relative z-10">
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 rounded-2xl border-4 border-white flex items-center justify-center shadow-sm transition-colors duration-300 ${
                      activeStep >= step.num
                        ? "bg-accent text-white ring-1 ring-accent/60"
                        : "bg-white text-primary ring-1 ring-slate-200"
                    }`}
                  >
                    {STEP_ICONS[i]}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-extrabold flex items-center justify-center shadow">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex flex-col gap-12 md:hidden">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start gap-5">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center ring-1 ring-primary/10">{STEP_ICONS[i]}</div>
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-white text-xs font-extrabold flex items-center justify-center">{step.num}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href={HOW_IT_WORKS_HEADER.cta.href}
            className={`inline-flex items-center gap-2 rounded-full border-2 px-10 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              buttonActive
                ? "border-accent bg-accent text-white shadow-lg shadow-accent/35"
                : "border-accent text-accent hover:bg-accent hover:text-white"
            }`}
          >
            {HOW_IT_WORKS_HEADER.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
