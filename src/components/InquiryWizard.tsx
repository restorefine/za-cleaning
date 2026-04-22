"use client";

import { useState } from "react";

// ── Public types ──────────────────────────────────────────────
export interface InquiryAnswers {
  serviceType: string;
  propertySize?: string;
  bathrooms?: string;
  addOns?: string;
  appliances?: string;
  carpetItems?: string;
  area?: string;
  premisesType?: string;
  preferredDate?: string;
}

interface Props {
  onComplete: (answers: InquiryAnswers) => void;
}

// ── Step shape ────────────────────────────────────────────────
type StepKind = "single" | "multi";

interface Step {
  id: keyof InquiryAnswers;
  question: string;
  kind: StepKind;
  options: readonly string[];
  icon: React.ReactNode;
}

// ── Icons ─────────────────────────────────────────────────────
const Icon = {
  service: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  property: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  bathroom: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h18M3 10.5V19a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 19v-8.5M3 10.5V7.5A4.5 4.5 0 017.5 3h.75M7.5 10.5V3" />
    </svg>
  ),
  addons: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  appliances: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
    </svg>
  ),
  carpet: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
    </svg>
  ),
  area: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  ),
  premises: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  date: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
};

// ── Reusable step definitions ─────────────────────────────────
const PROPERTY_STEP: Step = {
  id: "propertySize",
  question: "What size is the property?",
  kind: "single",
  options: ["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5+ Bedrooms"],
  icon: Icon.property,
};

const BATHROOMS_STEP: Step = {
  id: "bathrooms",
  question: "How many bathrooms / toilets?",
  kind: "single",
  options: ["1", "2", "3", "4+"],
  icon: Icon.bathroom,
};

const ADDONS_STEP: Step = {
  id: "addOns",
  question: "Would you like any add-ons?",
  kind: "multi",
  options: [
    "Carpet Cleaning",
    "Oven Cleaning",
    "Fridge / Freezer",
    "Washing Machine",
    "Dishwasher",
    "Upholstery / Sofa",
    "Curtains & Blinds",
    "Mattress Cleaning",
  ],
  icon: Icon.addons,
};

const APPLIANCES_STEP: Step = {
  id: "appliances",
  question: "Which appliances need cleaning?",
  kind: "multi",
  options: [
    "Single Oven",
    "Double Oven",
    "AGA Oven",
    "Range Cooker",
    "Hob & Hood",
    "Washing Machine",
    "Dishwasher",
    "Tumble Dryer",
    "Fridge",
    "Freezer",
    "Extractor Fan",
  ],
  icon: Icon.appliances,
};

const CARPET_STEP: Step = {
  id: "carpetItems",
  question: "What would you like cleaned?",
  kind: "multi",
  options: [
    "Carpet (per room)",
    "Rug",
    "Mattress",
    "1-Seater Sofa",
    "2-Seater Sofa",
    "3-Seater Sofa",
    "4-Seater Sofa",
    "L-Shape Sofa",
    "Curtains (per pair)",
    "Blinds",
  ],
  icon: Icon.carpet,
};

const AREA_STEP: Step = {
  id: "area",
  question: "How large is the area to be pressure washed?",
  kind: "single",
  options: ["Small (up to 20 m²)", "Medium (20–50 m²)", "Large (50–100 m²)", "Extra Large (100 m²+)"],
  icon: Icon.area,
};

const PREMISES_STEP: Step = {
  id: "premisesType",
  question: "What type of commercial premises?",
  kind: "single",
  options: ["Office", "Retail / Shop", "Restaurant or Café", "Warehouse", "Medical / Dental", "Other"],
  icon: Icon.premises,
};

const DATE_STEP: Step = {
  id: "preferredDate",
  question: "When would you like this done?",
  kind: "single",
  options: ["This week", "Next week", "Within 2 weeks", "Within a month", "Flexible / Not sure"],
  icon: Icon.date,
};

// ── Service → step mapping ─────────────────────────────────────
const SERVICE_FLOW: Record<string, Step[]> = {
  "End of Tenancy":      [PROPERTY_STEP, BATHROOMS_STEP, ADDONS_STEP, DATE_STEP],
  "Deep Cleaning":       [PROPERTY_STEP, BATHROOMS_STEP, ADDONS_STEP, DATE_STEP],
  "After Builders":      [PROPERTY_STEP, BATHROOMS_STEP, ADDONS_STEP, DATE_STEP],
  "Carpet & Upholstery": [CARPET_STEP, DATE_STEP],
  "Appliances Cleaning": [APPLIANCES_STEP, DATE_STEP],
  "Pressure Washing":    [AREA_STEP, DATE_STEP],
  "Commercial Cleaning": [PREMISES_STEP, DATE_STEP],
  "Other":               [DATE_STEP],
};

const SERVICE_STEP: Step = {
  id: "serviceType",
  question: "What service do you require?",
  kind: "single",
  options: Object.keys(SERVICE_FLOW),
  icon: Icon.service,
};

// ── Component ─────────────────────────────────────────────────
export default function InquiryWizard({ onComplete }: Props) {
  // stepIndex 0 = service selector; 1+ = service-specific steps
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<InquiryAnswers>>({});
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const serviceSteps: Step[] = answers.serviceType
    ? SERVICE_FLOW[answers.serviceType] ?? [DATE_STEP]
    : [];

  const totalSteps = 1 + serviceSteps.length;
  const step: Step = stepIndex === 0 ? SERVICE_STEP : serviceSteps[stepIndex - 1];
  const progress = (stepIndex / totalSteps) * 100;

  function slide(dir: "forward" | "back", cb: () => void) {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => { cb(); setAnimating(false); setCustomInput(""); }, 260);
  }

  function advance(next: Partial<InquiryAnswers>) {
    if (stepIndex < totalSteps - 1) {
      slide("forward", () => {
        setStepIndex((i) => i + 1);
        setAnswers(next);
        setMultiSel([]);
      });
    } else {
      onComplete(next as InquiryAnswers);
    }
  }

  function choose(value: string) {
    if (step.id === "serviceType") {
      const next = { serviceType: value };
      slide("forward", () => {
        setStepIndex(1);
        setAnswers(next);
        setMultiSel([]);
      });
    } else {
      advance({ ...answers, [step.id]: value });
    }
  }

  function submitCustomSingle() {
    const val = customInput.trim();
    if (!val) return;
    choose(val);
  }

  function toggleMulti(value: string) {
    setMultiSel((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function addCustomToMulti() {
    const val = customInput.trim();
    if (!val || multiSel.includes(val)) return;
    setMultiSel((prev) => [...prev, val]);
    setCustomInput("");
  }

  function confirmMulti() {
    advance({ ...answers, [step.id]: multiSel.length ? multiSel.join(", ") : "None" });
  }

  function goBack() {
    if (stepIndex === 0) return;
    slide("back", () => {
      setStepIndex((i) => i - 1);
      setMultiSel([]);
      if (stepIndex === 1) {
        setAnswers({});
      }
    });
  }

  const slideClass = animating
    ? direction === "forward"
      ? "opacity-0 -translate-x-6"
      : "opacity-0 translate-x-6"
    : "opacity-100 translate-x-0";

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Step {stepIndex + 1} of {totalSteps}
          </span>
          <span className="text-xs font-bold text-accent">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step card */}
      <div className={`transition-all duration-260 ease-in-out ${slideClass}`}>
        {/* Icon + question */}
        <div className="mb-7">
          <div className="w-12 h-12 rounded-2xl bg-accent/8 flex items-center justify-center text-accent mb-4">
            {step.icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {step.question}
          </h3>
          {step.kind === "multi" && (
            <p className="text-sm text-slate-400 mt-1">Select all that apply.</p>
          )}
        </div>

        {/* Single-choice grid */}
        {step.kind === "single" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {step.options.map((opt) => {
                const selected = answers[step.id] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    className={`relative rounded-2xl border-2 px-4 py-4 text-sm font-semibold text-left transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5 ${
                      selected
                        ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {selected && <span className="absolute top-2.5 right-3 text-white/80 text-xs">✓</span>}
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitCustomSingle()}
                placeholder="Or type your own answer…"
                className="flex-1 bg-[#F3F4F6] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
              />
              <button
                onClick={submitCustomSingle}
                disabled={!customInput.trim()}
                className="rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white disabled:opacity-30 hover:bg-accent-light transition-colors"
              >
                Go
              </button>
            </div>
          </>
        )}

        {/* Multi-choice grid */}
        {step.kind === "multi" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[...step.options, ...multiSel.filter((v) => !step.options.includes(v))].map((opt) => {
                const selected = multiSel.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleMulti(opt)}
                    className={`relative rounded-2xl border-2 px-4 py-4 text-sm font-semibold text-left transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5 ${
                      selected
                        ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {selected && <span className="absolute top-2.5 right-3 text-white/80 text-xs">✓</span>}
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustomToMulti()}
                placeholder="Add your own item…"
                className="flex-1 bg-[#F3F4F6] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
              />
              <button
                onClick={addCustomToMulti}
                disabled={!customInput.trim()}
                className="rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white disabled:opacity-30 hover:bg-accent-light transition-colors"
              >
                Add
              </button>
            </div>
            <button
              onClick={confirmMulti}
              className="mt-4 w-full bg-accent text-white font-bold text-sm py-4 rounded-xl hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.98]"
            >
              {multiSel.length === 0 ? "Skip →" : `Continue with ${multiSel.length} selected →`}
            </button>
          </>
        )}
      </div>

      {/* Back button */}
      {stepIndex > 0 && (
        <button
          onClick={goBack}
          className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back
        </button>
      )}
    </div>
  );
}
