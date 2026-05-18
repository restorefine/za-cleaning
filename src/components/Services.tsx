"use client";

import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: '01', icon: '🏠',
    title: 'End of Tenancy Cleaning',
    desc: 'Certified move-out cleaning to secure your full deposit and meet every agent-approved standard — guaranteed.',
    featured: true,
  },
  {
    id: '02', icon: '✨',
    title: 'One-Off Deep Cleaning',
    desc: 'A thorough top-to-bottom deep clean for neglected spaces or a complete property reset.',
  },
  {
    id: '03', icon: '🏗️',
    title: 'After Builders Cleaning',
    desc: 'Post-renovation dust, plaster, and debris removed — your home returned spotless.',
  },
  {
    id: '04', icon: '🍳',
    title: 'Oven & Appliances',
    desc: 'Deep cleaning for ovens, extractors, fridges, dishwashers, and all kitchen appliances.',
  },
  {
    id: '05', icon: '🧶',
    title: 'Carpet & Rug Cleaning',
    desc: 'Hot water extraction to revive fibres and eliminate stains, allergens and odours.',
  },
  {
    id: '06', icon: '🚿',
    title: 'Pressure Washing',
    desc: 'Jet-wash for patios, driveways, exterior walls, decking, and all hard surfaces.',
    wide: true,
  },
];

function SvcCard({
  service,
  className = '',
  delay = 0,
}: {
  service: typeof SERVICES[0];
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--mx', '-9999px');
    el.style.setProperty('--my', '-9999px');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`svc-card group relative rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden cursor-default
        transition-all duration-300
        hover:border-[rgba(244,162,97,0.45)] hover:-translate-y-1.5 hover:bg-white/[0.06]
        ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Mouse spotlight layer */}
      <div className="svc-spotlight absolute inset-0 rounded-[inherit] pointer-events-none z-0" />

      {/* Glowing top border on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Watermark number */}
      <span className="absolute -bottom-2 -right-2 text-[7rem] font-black leading-none select-none text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none">
        {service.id}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7">
        {/* Icon */}
        <div className="mb-5 w-14 h-14 rounded-xl bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center text-3xl
          transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 group-hover:ring-accent/40">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 leading-snug ${service.featured ? 'text-2xl' : 'text-lg'}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className={`text-slate-400 leading-relaxed ${service.wide ? 'text-base' : 'text-sm'}`}>
          {service.desc}
        </p>

        {/* Money Back badge — featured card only */}
        {service.featured && (
          <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 self-start">
            <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.2} />
            </div>
            <div className="text-left">
              <p className="text-white text-xs font-extrabold leading-tight">100% Deposit Back Guaranteed</p>
              <p className="text-white/45 text-[0.65rem] mt-0.5">We help secure your full deposit back from your landlord.</p>
            </div>
            <div className="border-l border-white/10 pl-3 ml-1 text-center shrink-0">
              <span className="text-lg font-black text-white leading-none">100%</span>
              <p className="text-white/40 text-[0.55rem] font-bold uppercase tracking-widest">Deposit</p>
            </div>
          </div>
        )}

        {/* CTA for featured or wide */}
        {(service.featured || service.wide) && (
          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold group/link"
            >
              <span className="underline underline-offset-4 group-hover/link:text-accent-light transition-colors">
                Book this service
              </span>
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative bg-[#040c1a] py-28 overflow-hidden">
      {/* Dot-grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      {/* Injected styles */}
      <style>{`
        .svc-spotlight {
          background: radial-gradient(400px at var(--mx, -9999px) var(--my, -9999px),
            rgba(244,162,97,0.13), transparent 70%);
          transition: background 0.05s;
        }
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-card {
          opacity: 0;
          animation: svcFadeUp 0.55s ease forwards;
        }
      `}</style>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Our Core{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-md mx-auto leading-relaxed">
            From full move-out cleans to targeted deep cleaning — flawless results backed by 100s of glowing reviews.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Row 1 */}
          <SvcCard service={SERVICES[0]} className="md:col-span-2 min-h-[340px]" delay={0} />
          <SvcCard service={SERVICES[1]} className="min-h-[280px]"               delay={80} />

          {/* Row 2 */}
          <SvcCard service={SERVICES[2]} delay={160} />
          <SvcCard service={SERVICES[3]} delay={240} />
          <SvcCard service={SERVICES[4]} delay={320} />

          {/* Row 3 — full-width wide card */}
          <SvcCard service={SERVICES[5]} className="md:col-span-3" delay={400} />
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-slate-500 text-sm mt-10">
          Not seeing your service?{' '}
          <Link href="/contact" className="text-accent underline underline-offset-4 hover:text-accent-light transition-colors">
            Contact us — we cover more.
          </Link>
        </p>
      </div>
    </section>
  );
}
