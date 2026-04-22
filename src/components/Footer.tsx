"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FOOTER_CONTENT, FOOTER_SERVICES, FOOTER_QUICK_LINKS } from "@/app/data";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  function scrollTo(section: string) {
    if (pathname !== "/") {
      router.push(`/#${section}`);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <footer className="w-full bg-white border-t border-slate-100 font-sans">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src="/logo.svg" alt="ZA Cleaning" className="h-40 w-40" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">{FOOTER_CONTENT.tagline}</p>
            {/* Social */}
            <div className="flex gap-3">
              <Link href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-500 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map(({ label, href, section }) => (
                <li key={label}>
                  {section ? (
                    <button onClick={() => scrollTo(section)} className="text-sm text-slate-500 hover:text-accent transition-colors text-left">
                      {label}
                    </button>
                  ) : (
                    <Link href={href!} className="text-sm text-slate-500 hover:text-accent transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-6">Get in Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <a href={`tel:${FOOTER_CONTENT.phone}`} className="text-sm text-slate-600 hover:text-accent transition-colors leading-snug font-medium">
                  {FOOTER_CONTENT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <a href={`mailto:${FOOTER_CONTENT.email}`} className="text-sm text-slate-600 hover:text-accent transition-colors leading-snug font-medium break-all">
                  {FOOTER_CONTENT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <address className="text-sm text-slate-600 not-italic leading-snug">
                  {FOOTER_CONTENT.addressLine1}
                  <br />
                  {FOOTER_CONTENT.addressLine2}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 leading-snug">
                  Mon – Fri: 08:00 – 20:00
                  <br />
                  Sat: 09:00 – 17:00
                  <br />
                  <span className="text-slate-400">Sun: Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {FOOTER_CONTENT.brandName}. All rights reserved.
            </p>
            <span className="hidden sm:block text-slate-200">|</span>
            <p>
              Designed by{" "}
              <a href="https://www.restorefine.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline underline-offset-2 transition-colors">
                Restorefine Studios
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
