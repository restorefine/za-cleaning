"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FOOTER_CONTENT, FOOTER_SERVICES, FOOTER_QUICK_LINKS } from "@/app/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
              <Image src="/logo.svg" alt="ZA Cleaning" width={160} height={160} className="h-40 w-40" unoptimized />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">{FOOTER_CONTENT.tagline}</p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map(({ label, href, serviceIndex }) => (
                <li key={label}>
                  <Link href={serviceIndex !== undefined ? `/?service=${serviceIndex}` : href} className="text-sm text-slate-500 hover:text-accent transition-colors">
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
                  <Phone className="w-3.5 h-3.5 text-accent" />
                </div>
                <a href={`tel:${FOOTER_CONTENT.phone}`} className="text-sm text-slate-600 hover:text-accent transition-colors leading-snug font-medium">
                  {FOOTER_CONTENT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                </div>
                <a href={`mailto:${FOOTER_CONTENT.email}`} className="text-sm text-slate-600 hover:text-accent transition-colors leading-snug font-medium break-all">
                  {FOOTER_CONTENT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </div>
                <address className="text-sm text-slate-600 not-italic leading-snug">
                  {FOOTER_CONTENT.addressLine1}
                  <br />
                  {FOOTER_CONTENT.addressLine2}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-accent" />
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
              <a href="https://restorefine.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline underline-offset-2 transition-colors">
                Restorefine Studios
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-condition" className="hover:text-accent transition-colors">
              Terms &amp; Conditions
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
