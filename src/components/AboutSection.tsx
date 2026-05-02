import Image from "next/image";
import Link from "next/link";
import { ABOUT_CONTENT } from "@/app/data";
import { Sparkles, Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── LEFT: image collage ── */}
          <div className="relative flex gap-3 h-[480px]">
            <div className="relative w-[48%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/services/tenancy.png" alt="End of tenancy cleaning" fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-3 w-[48%]">
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/services/deep.png" alt="Deep cleaning" fill className="object-cover" />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/services/carpet.png" alt="Carpet cleaning" fill className="object-cover" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-primary border-4 border-white shadow-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-28 h-28 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(#0D3B66 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* ── RIGHT: content ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{ABOUT_CONTENT.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-5">
              {ABOUT_CONTENT.headlinePart1} <span className="text-accent">{ABOUT_CONTENT.headlineAccent}</span>
              <br />
              {ABOUT_CONTENT.headlinePart2}
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed mb-7 max-w-md">{ABOUT_CONTENT.description}</p>

            {/* Why Choose Us */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: ShieldCheck, title: "100% Satisfaction Guaranteed", desc: "Deposit-back guarantee on every job, no exceptions." },
                { icon: CheckCircle2, title: "Fully Insured & Vetted", desc: "DBS-checked, trained professionals you can trust." },
                { icon: Users, title: "Supplies Always Included", desc: "We bring all equipment and cleaning products." },
                { icon: Clock, title: "Available 7 Days", desc: "Last-minute bookings welcome, subject to availability." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 hover:border-accent/20 hover:bg-accent/[0.03] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold leading-tight mb-1">{title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpline + CTA row */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[0.68rem] text-slate-400 uppercase tracking-wide font-semibold">{ABOUT_CONTENT.phoneLabel}</p>
                  <p className="text-base font-extrabold text-primary leading-tight">{ABOUT_CONTENT.phone}</p>
                </div>
              </div>

              <Link href={ABOUT_CONTENT.cta.href} className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl">
                {ABOUT_CONTENT.cta.label}
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
