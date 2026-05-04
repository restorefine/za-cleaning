import Image from "next/image";
import { FAQ_HEADER, FAQS } from "@/app/data";
import { Wrench, Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: image collage ── */}
          <div className="relative h-115">

            <div className="absolute top-0 left-0 w-[75%] h-[52%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/services/pressure.png" alt="Professional cleaning" fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 w-[58%] h-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/services/deep.png" alt="Cleaning professional" fill className="object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-[44%] left-[38%] z-10 w-16 h-16 rounded-full bg-primary border-4 border-white shadow-2xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-white" />
            </div>

            {/* Dot grid decoration */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 pointer-events-none opacity-25"
              style={{
                backgroundImage: "radial-gradient(#0D3B66 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* ── RIGHT: FAQ content ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{FAQ_HEADER.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-10">
              {FAQ_HEADER.headlinePart1}{" "}
              <span className="text-accent">{FAQ_HEADER.headlineAccent}</span>
              <br />
              {FAQ_HEADER.headlinePart2}
            </h2>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-slate-200 bg-white hover:bg-accent hover:border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <span className="text-sm font-bold text-primary group-hover:text-white transition-colors duration-300 leading-snug">
                      {i + 1}. {faq.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-slate-200 bg-slate-50 group-hover:border-white/30 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                      <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-200" />
                    </span>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/75">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
