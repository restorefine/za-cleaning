"use client";

import { useState } from "react";
import InquiryWizard, { InquiryAnswers } from "@/components/InquiryWizard";

const INQUIRY_LABELS: Partial<Record<keyof InquiryAnswers, string>> = {
  serviceType: "Service",
  bedrooms: "Property Size",
  bathrooms: "Bathrooms",
  livingAreas: "Living Rooms",
  kitchen: "Kitchens",
  carpetCleaning: "Carpet Cleaning",
  carpetAreas: "Carpet Areas",
  windowCleaning: "External Windows",
  applianceCleaning: "Appliances",
  appliances: "Appliance List",
  additionalAreas: "Extra Areas",
  furnished: "Furnished",
  pressureWashingNeeded: "Pressure Washing",
  pressureWashSurfaces: "Surfaces",
  otherServices: "Other Services",
  propertyCondition: "Condition",
  carpetItems: "Items",
  area: "Area Size",
  premisesType: "Premises",
  preferredDate: "When",
};

export default function Contact() {
  const [inquiry, setInquiry] = useState<InquiryAnswers | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  function handleInquiryComplete(answers: InquiryAnswers) {
    setInquiry(answers);
    // Small delay so the transition feels intentional
    setTimeout(() => setFormVisible(true), 80);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      ...inquiry,
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      address1: fd.get("address1"),
      address2: fd.get("address2"),
      city: fd.get("city"),
      postcode: fd.get("postcode"),
      message: fd.get("message"),
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="bg-slate-50 min-h-screen relative font-sans">
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-[700px] z-[0] opacity-[0.05] bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop")' }} />
      <div className="absolute top-0 inset-x-0 h-[700px] z-[0] bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 pt-24 lg:pt-32 pb-12">
        <div className="max-w-2xl mx-auto text-center px-6">
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Get in Touch</span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-3 mb-6 tracking-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">Tell us about your property and we'll put together the perfect cleaning plan for you.</p>
        </div>
      </section>

      {/* Main grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">

          {/* Left column */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 min-h-[520px]">
            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center text-center py-16 h-full animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm">We'll be in touch shortly to align our services with your requirements.</p>
                <button
                  onClick={() => { setSubmitted(false); setInquiry(null); setFormVisible(false); }}
                  className="mt-8 rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-600 hover:border-accent hover:text-accent transition-colors"
                >
                  Submit Another Request
                </button>
              </div>

            ) : !inquiry ? (
              /* ── Inquiry wizard ── */
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Tell Us About Your Property</h2>
                <div className="w-10 h-1 bg-accent mt-3 mb-8 rounded-full" />
                <InquiryWizard onComplete={handleInquiryComplete} />
              </div>

            ) : (
              /* ── Contact form ── */
              <div
                className={`transition-all duration-500 ease-out ${
                  formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Inquiry summary strip */}
                <div className="mb-8 p-4 rounded-2xl bg-accent/5 border border-accent/10">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Your Property Summary</p>
                    <button
                      onClick={() => { setInquiry(null); setFormVisible(false); }}
                      className="text-xs text-slate-400 hover:text-accent transition-colors underline underline-offset-2"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(INQUIRY_LABELS) as (keyof InquiryAnswers)[])
                      .filter((key) => inquiry[key])
                      .map((key) => (
                      <span key={key} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                        <span className="text-slate-400">{INQUIRY_LABELS[key]}:</span>
                        <span className="font-semibold text-slate-900">{inquiry[key]}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">Your Contact Details</h2>
                <div className="w-10 h-1 bg-accent mt-3 mb-8 rounded-full" />

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                      <input id="name" name="name" type="text" required placeholder="Enter your full name"
                        className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="Your contact number"
                        className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                    <input id="email" name="email" type="email" required placeholder="email@address.com"
                      className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="address1" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Address Line 1</label>
                    <input id="address1" name="address1" type="text" required placeholder="House number and street name"
                      className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="address2" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Address Line 2 <span className="normal-case font-normal">(optional)</span></label>
                    <input id="address2" name="address2" type="text" placeholder="Flat, apartment, building, etc."
                      className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="city" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">City / Town</label>
                      <input id="city" name="city" type="text" required placeholder="e.g. Glasgow"
                        className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="postcode" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Postcode</label>
                      <input id="postcode" name="postcode" type="text" required placeholder="e.g. G3 7QL"
                        className="bg-[#F3F4F6] rounded-xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Any additional details..."
                      className="bg-[#F3F4F6] rounded-xl px-5 py-4 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all w-full resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-white font-bold text-sm py-4 rounded-xl mt-2 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Submit Request"}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right column — info boxes */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-[1.5rem] p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#E6EFFF] rounded-full text-accent flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Speak With Us</p>
                <p className="text-slate-900 font-bold text-base">07774 845901</p>
                <p className="text-slate-500 text-sm mt-0.5">info@zacleaningteam.com</p>
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem] p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#E6EFFF] rounded-full text-accent flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Our Office</p>
                <p className="text-slate-900 font-medium text-sm leading-snug">20-23 Woodside Pl,<br />Glasgow G3 7QL</p>
              </div>
            </div>

            <div className="bg-white rounded-[1.5rem] p-6 flex gap-4">
              <div className="w-10 h-10 bg-[#E6EFFF] rounded-full text-accent flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-full">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">Working Hours</p>
                <div className="flex justify-between text-sm font-medium text-slate-700 mb-1"><span>Mon — Fri</span><span>08:00 - 20:00</span></div>
                <div className="flex justify-between text-sm font-medium text-slate-700 mb-1"><span>Saturday</span><span>09:00 - 17:00</span></div>
                <div className="flex justify-between text-sm font-medium text-slate-400 mt-2"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>

            <div className="bg-accent rounded-[1.5rem] p-8 mt-2 h-full">
              <p className="text-white font-bold text-base mb-4">Services We Offer</p>
              <ul className="text-white/90 text-sm space-y-3">
                {["Professional Home Curation", "Executive Office Maintenance", "Specialized Deep Sanitation", "Boutique End of Tenancy"].map((s) => (
                  <li key={s} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 sm:mt-24 h-[420px] w-full rounded-[2rem] overflow-hidden relative shadow-md border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.5!2d-4.2720!3d55.8694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845c7b8c0f0b1%3A0x5ee9e13fb23c5a0a!2sWoodside%20Pl%2C%20Glasgow%20G3%207QL!5e0!3m2!1sen!2suk!4v1713200000000!5m2!1sen!2suk"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="ZA Cleaning Team — Woodside Place, Glasgow"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 bg-white rounded-2xl px-5 py-4 max-w-[280px] shadow-xl border border-slate-100 z-10">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Our Office</p>
            <p className="text-sm font-bold text-slate-800 leading-snug">20-23 Woodside Pl</p>
            <p className="text-xs text-slate-500 mt-0.5">Glasgow G3 7QL, United Kingdom</p>
          </div>
        </div>
      </section>
    </div>
  );
}
