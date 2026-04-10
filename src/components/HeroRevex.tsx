"use client";

import React from "react";
import Link from "next/link";

export default function HeroRevex() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] flex flex-col">
      {/* Hero Content */}
      <div className="relative flex-1 flex items-center">
        {/* Centered Content */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400/90 to-blue-500/90 px-4 py-2 mb-8 shadow-lg">
            <span className="text-base">✨</span>
            <span className="text-xs font-bold text-white uppercase tracking-wide">New</span>
            <span className="text-sm font-medium text-white">Keep your transactions effortless and convenient</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto">
            QUICK CLEAN AND
            <br />
            HASSLE-FREE{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">PAYMENT</span>
              <span className="absolute inset-0 bg-blue-400/20 blur-xl -z-10 rounded-full scale-110" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">Make every payment seamless with a quick and clean process that removes complications and ensures a completely hassle-free experience every single time</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-1 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/40">
              Open Account
            </Link>
            <Link href="/checklist" className="rounded-full border-2 border-slate-900 bg-transparent px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        h1 {
          animation: fadeSlideUp 0.8s ease-out 0.2s both;
        }
        p {
          animation: fadeSlideUp 0.8s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
}
