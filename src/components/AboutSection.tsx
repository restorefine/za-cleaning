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
            <div className="flex flex-col gap-3 mb-8">
              {/* Money Back — full-width hero card */}
              <div className="relative rounded-2xl bg-accent overflow-hidden shadow-xl shadow-accent/30">
                {/* top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-white/0 via-white/40 to-white/0" />
                {/* faint radial glow behind the 100% number */}
                <div className="absolute -right-6 -top-6 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                <div className="relative flex items-center gap-0 px-6 py-5">
                  {/* left: icon + text */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-7 h-7 text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-white/70 text-[0.65rem] font-bold uppercase tracking-[0.18em] mb-0.5">Our Promise</p>
                      <p className="text-white text-lg sm:text-xl font-extrabold leading-tight tracking-tight">Deposit Back Guaranteed</p>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed mt-1 max-w-xs">We help secure your full deposit back from your landlord, guaranteed.</p>
                    </div>
                  </div>

                  {/* right: big 100% stamp */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-24 border-l border-white/20 pl-5 pr-5 ml-4">
                    <span className="text-4xl font-black text-white leading-none tracking-tighter">100%</span>
                    <span className="text-white/60 text-[0.6rem] font-bold uppercase tracking-widest mt-0.5 text-center">refund</span>
                  </div>
                </div>
              </div>

              {/* Remaining three cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: CheckCircle2, title: "Fully Insured & Vetted", desc: "DBS-checked, trained professionals you can trust." },
                  { icon: Users, title: "Supplies Always Included", desc: "We bring all equipment and cleaning products." },
                  { icon: Clock, title: "Available 7 Days", desc: "Last-minute bookings welcome, subject to availability." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 hover:border-accent/20 hover:bg-accent/3 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-accent/8 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-xs font-bold leading-tight mb-1">{title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
