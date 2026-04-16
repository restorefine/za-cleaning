import React from "react";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import Hero from "@/components/Hero";
import HeroRevex from "@/components/HeroRevex";
import AboutSection from "@/components/AboutSection";
import ChecklistProtocol from "@/components/ChecklistProtocol";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── pt-24/28 clears the floating hero feature cards */}
      <div id="services" className="pt-24 sm:pt-28">
        <ServicesSection />
      </div>

      {/* ── Coverage ── */}
      <section id="coverage">
        <CoverageSection />
      </section>

      {/* ── About ── */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ── Room-by-Room Protocol ── */}
      <section id="protocol">
        <ChecklistProtocol />
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* ── Team ── */}
      <section id="team">
        <TeamSection />
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ── CTA Banner ── */}
      {/* <section className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for a Spotless Home?</h2>
          <p className="text-slate-300 mb-8">Book in under 2 minutes. Satisfaction guaranteed or we come back free.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-accent-light hover:shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section> */}
    </>
  );
}
