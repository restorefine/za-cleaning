"use client";

import { useState } from 'react';
import Link from 'next/link';

const GLASGOW_AREAS = [
  'Paisley', 'Clydebank', 'East Kilbride', 'Motherwell', 'Airdrie',
  'Hamilton', 'Kilmarnock', 'Irvine', 'Ayr', 'Stirling', 'Falkirk',
  'Dunfermline', 'Helensburgh', 'Lanark', 'Cumbernauld',
];

const EDINBURGH_AREAS = [
  'Livingston', 'Dunfermline', 'Kirkcaldy', 'Musselburgh',
  'Dalkeith', 'Galashiels', 'Linlithgow', 'North Berwick',
];

const ALL_AREAS = new Set([
  ...GLASGOW_AREAS, ...EDINBURGH_AREAS,
  'Glasgow', 'Edinburgh', 'glasgow', 'edinburgh',
]);

type CheckResult = 'covered' | 'not-found' | null;

export default function Coverage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<CheckResult>(null);

  const handleCheck = () => {
    if (!query.trim()) return;
    const q = query.trim().toLowerCase();
    const found = [...ALL_AREAS].some((a) => a.toLowerCase().includes(q) || q.includes(a.toLowerCase()));
    setResult(found ? 'covered' : 'not-found');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCheck();
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero: Area Checker ── */}
      <section className="relative bg-primary overflow-hidden pt-20 pb-24">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
        />
        {/* Accent blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/8 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.75 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Service Coverage</span>
            <span className="w-8 h-0.75 rounded-full bg-accent" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Do We Cover<br /><span className="text-accent">Your Area?</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Enter your town or city below to instantly check if we operate in your area.
          </p>

          {/* Checker input */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setResult(null); }}
              onKeyDown={handleKeyDown}
              placeholder="e.g. Paisley, Falkirk, Livingston..."
              className="flex-1 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-5 py-4 text-sm text-white outline-none transition focus:border-accent focus:bg-white/15 placeholder:text-white/40"
            />
            <button
              onClick={handleCheck}
              className="rounded-2xl bg-accent px-8 py-4 text-sm font-bold text-white transition hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 active:scale-95 shrink-0"
            >
              Check Coverage
            </button>
          </div>

          {/* Result */}
          {result === 'covered' && (
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-4 text-sm">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Great news — we cover <span className="text-accent">{query}</span>!</p>
                <p className="text-white/50 text-xs mt-0.5">Book a clean or request a free quote today.</p>
              </div>
              <Link href="/contact" className="ml-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white whitespace-nowrap hover:bg-accent-light transition">
                Book Now
              </Link>
            </div>
          )}
          {result === 'not-found' && (
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-4 text-sm">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-white"><span className="text-amber-300">{query}</span> is not in our standard list — but ask us!</p>
                <p className="text-white/50 text-xs mt-0.5">We may still be able to help. Get in touch to confirm.</p>
              </div>
              <Link href="/contact" className="ml-2 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold text-white whitespace-nowrap hover:bg-amber-400 transition">
                Ask Us
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Coverage directory ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Full Coverage List</span>
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight">
              All Areas <span className="text-accent">We Serve</span>
            </h2>
            <p className="text-slate-400 mt-2 text-sm">Within 50 miles of our two hubs in Glasgow and Edinburgh.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">

            {/* Glasgow hub */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                  <span className="text-sm font-extrabold">G</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-primary text-xl leading-tight">Glasgow Hub</h3>
                  <p className="text-slate-400 text-xs">50-mile radius · {GLASGOW_AREAS.length} areas</p>
                </div>
                <span className="ml-auto rounded-full bg-primary/8 border border-primary/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                  Hub 01
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {GLASGOW_AREAS.map((area) => (
                  <button
                    key={area}
                    onClick={() => { setQuery(area); setResult('covered'); }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Edinburgh hub */}
            <div className="p-8 lg:p-10 bg-bg-soft">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0">
                  <span className="text-sm font-extrabold">E</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-primary text-xl leading-tight">Edinburgh Hub</h3>
                  <p className="text-slate-400 text-xs">50-mile radius · {EDINBURGH_AREAS.length} areas</p>
                </div>
                <span className="ml-auto rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent">
                  Hub 02
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {EDINBURGH_AREAS.map((area) => (
                  <button
                    key={area}
                    onClick={() => { setQuery(area); setResult('covered'); }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-accent hover:text-white hover:border-accent cursor-pointer"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

          </div>

          <p className="text-center text-slate-400 text-xs mt-5">
            Click any area to instantly confirm coverage above.
          </p>
        </div>
      </section>

      {/* ── Stats bar (icon-circle style) ── */}
      <div className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                value: '12+', label: 'Dedicated Teams',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
              },
              {
                value: '50mi', label: 'Coverage Radius',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
              },
              {
                value: '23+', label: 'Towns Covered',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
              },
              {
                value: '7 days', label: 'A Week',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
              },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-5">
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

      {/* ── CTA ── */}
      <section className="relative bg-primary py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative mx-auto max-w-xl px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.75 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Book Today</span>
            <span className="w-8 h-0.75 rounded-full bg-accent" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to <span className="text-accent">Book?</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Contact us now and we will confirm your area and availability — often within the hour.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
          >
            Get a Free Quote
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}
