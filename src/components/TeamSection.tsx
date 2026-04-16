"use client";

import { useState } from "react";
import Image from "next/image";
import { TEAM, TEAM_HEADER } from "@/app/data";

const VISIBLE = 4;

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function TeamSection() {
  const [start, setStart] = useState(0);
  const maxStart = TEAM.length - VISIBLE;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  const visible = TEAM.slice(start, start + VISIBLE);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-1 h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{TEAM_HEADER.eyebrow}</span>
            <span className="flex-1 h-px w-10 bg-accent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
            {TEAM_HEADER.headlinePart1}{" "}
            <span className="text-accent">{TEAM_HEADER.headlineAccent}</span>{" "}
            {TEAM_HEADER.headlinePart2}
          </h2>
        </div>

        {/* Cards + arrows */}
        <div className="relative flex items-center gap-4">

          <button
            onClick={prev}
            disabled={start === 0}
            aria-label="Previous"
            className="shrink-0 w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {visible.map((member) => (
              <div key={member.name} className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer" style={{ aspectRatio: "3/4" }}>

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-primary/30 to-transparent" />

                <div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-accent/80 pointer-events-none"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[FacebookIcon, XIcon, InstagramIcon].map((Icon, i) => (
                    <button
                      key={i}
                      aria-label="Social link"
                      className="w-7 h-7 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors"
                    >
                      <Icon />
                    </button>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 z-10">
                  <p className="text-white font-extrabold text-sm uppercase tracking-wide leading-tight">{member.name}</p>
                  <p className="text-white/60 text-xs mt-0.5">{member.role}</p>
                </div>

              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={start === maxStart}
            aria-label="Next"
            className="shrink-0 w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
