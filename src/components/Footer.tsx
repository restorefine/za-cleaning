"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative text-slate-200"
      style={{
        background: 'linear-gradient(rgba(18,22,28,0.87), rgba(18,22,28,0.87)), url(/images/footer_bg.png) center/cover no-repeat',
      }}
    >
      {/* ─── Newsletter ─── */}
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-20 text-center">
        <h2 className="text-5xl font-extrabold leading-tight text-white mb-8">
          Join Our{' '}
          <span className="text-accent">Newsletter</span>
          <br />
          <span className="text-accent">Stay Up To</span>{' '}
          Date
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full p-1.5 max-w-xl mx-auto shadow-lg">
          <input
            type="email"
            placeholder="Email address..."
            className="flex-1 bg-transparent border-none outline-none px-6 py-3 text-slate-700 text-sm w-full"
          />
          <button className="flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-bold text-white whitespace-nowrap transition hover:-translate-y-0.5 hover:bg-accent-light">
            Subscribe Now
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-accent text-xs font-extrabold">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* ─── Divider ─── */}
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-white/10" />
      </div>

      {/* ─── 4-col Links ─── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1.6fr] lg:gap-8 lg:items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-2xl">✨</span>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                ZA <span className="font-light">Cleaning</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-7 max-w-xs">
              We work with a passion of taking challenges and delivering spotless results in the cleaning sector.
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:pl-4">
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Checklist', href: '/checklist' },
                { label: 'Coverage Area', href: '/coverage' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white text-[0.95rem] font-medium hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Working Time</h4>
            <ul className="flex flex-col gap-3 text-slate-300 text-sm leading-relaxed">
              <li>Mon – Sun: 08:30 AM – 08:00 PM</li>
              <li className="text-slate-400">Seven Days a Week</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-extrabold text-2xl mb-2 tracking-tight">
              0141 XXX XXXX
            </h4>
            <a
              href="mailto:info@zacleaningteam.com"
              className="block text-white text-lg font-semibold mb-5 hover:text-accent transition-colors"
            >
              info@zacleaningteam.com
            </a>
            <div className="flex gap-2.5 items-start">
              <span className="text-accent text-base mt-0.5">📍</span>
              <p className="text-slate-400 text-sm leading-relaxed m-0">
                20-23 Woodside Pl,<br />Glasgow G3 7QL, UK
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto max-w-6xl px-6 relative flex items-center justify-center">
          <p className="text-slate-500 text-sm">
            © Copyright {new Date().getFullYear()} ZA Cleaning Team. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-6 w-10 h-10 rounded-full bg-accent text-white font-extrabold text-lg flex items-center justify-center transition hover:-translate-y-1 hover:bg-accent-light shadow-md"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
