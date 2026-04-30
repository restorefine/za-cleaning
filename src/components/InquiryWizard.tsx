"use client";

import { useState } from "react";

// ── Public types ──────────────────────────────────────────────
export interface InquiryAnswers {
  serviceType: string;
  // Q2-Q5: property rooms
  bedrooms?: string;
  bathrooms?: string;
  livingAreas?: string;
  kitchen?: string;
  // Q6: carpet
  carpetCleaning?: string;
  carpetAreas?: string;
  // Q7: windows
  windowCleaning?: string;
  // Q8: appliances
  applianceCleaning?: string;
  appliances?: string;
  // Q9: extra areas
  additionalAreas?: string;
  // Q10: furnished
  furnished?: string;
  // Q11: pressure washing
  pressureWashingNeeded?: string;
  pressureWashSurfaces?: string;
  // Q12-Q13
  otherServices?: string;
  propertyCondition?: string;
  // Standalone service fields
  carpetItems?: string;
  area?: string;
  premisesType?: string;
  // Date
  preferredDate?: string;
}

interface Props {
  onComplete: (answers: InquiryAnswers) => void;
}

// ── Step shape ────────────────────────────────────────────────
type StepKind = "single" | "multi" | "date";

interface Step {
  id: keyof InquiryAnswers;
  question: string;
  subtitle?: string;
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
  window: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM3.75 12h16.5M12 3.75v16.5" />
    </svg>
  ),
  furnished: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  premises: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  condition: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  date: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
};

// ── Step definitions ──────────────────────────────────────────

// Q2
const BEDROOMS_STEP: Step = {
  id: "bedrooms",
  question: "What size is the property?",
  kind: "single",
  options: [
    "Studio Flat",
    "1 Bed Flat / House",
    "2 Bed Flat / House",
    "3 Bed Flat / House",
    "4 Bed Flat / House",
    "5 Bed House",
    "6 Bed House",
    "7 Bed House",
    "8+ Bed House",
  ],
  icon: Icon.property,
};

// Q3
const BATHROOMS_STEP: Step = {
  id: "bathrooms",
  question: "How many bathrooms / toilets?",
  subtitle: "If a bathroom and toilet are combined, count it as one.",
  kind: "single",
  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
  icon: Icon.bathroom,
};

// Q4
const LIVING_AREAS_STEP: Step = {
  id: "livingAreas",
  question: "How many living rooms?",
  kind: "single",
  options: ["1", "2", "3", "4", "5"],
  icon: Icon.property,
};

// Q5
const KITCHEN_STEP: Step = {
  id: "kitchen",
  question: "How many kitchens?",
  kind: "single",
  options: ["1", "2", "3", "4", "5"],
  icon: Icon.premises,
};

// Q6 — gate
const CARPET_CLEANING_STEP: Step = {
  id: "carpetCleaning",
  question: "Professional carpet cleaning?",
  kind: "single",
  options: ["Yes please", "No, just hoovering"],
  icon: Icon.carpet,
};

// Q6a — only shown if "Yes please"
const CARPET_AREAS_STEP: Step = {
  id: "carpetAreas",
  question: "How many carpet areas need cleaning?",
  kind: "single",
  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
  icon: Icon.carpet,
};

// Q7
const WINDOW_CLEANING_STEP: Step = {
  id: "windowCleaning",
  question: "How many external windows need cleaning?",
  kind: "single",
  options: ["None", "1–5", "6–10", "11–15", "16–20", "20+"],
  icon: Icon.window,
};

// Q8 — gate
const APPLIANCE_CLEANING_STEP: Step = {
  id: "applianceCleaning",
  question: "Do you need appliances cleaned?",
  subtitle: "Oven, washing machine, fridge, etc.",
  kind: "single",
  options: ["Yes", "No"],
  icon: Icon.appliances,
};

// Q8a — only shown if "Yes"
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

// Q9
const ADDITIONAL_AREAS_STEP: Step = {
  id: "additionalAreas",
  question: "Any additional areas to clean?",
  subtitle: "Select all that apply or skip if none.",
  kind: "multi",
  options: ["Study", "Box Room", "Conservatory", "Utility Room", "Garage", "Loft / Storage Room"],
  icon: Icon.area,
};

// Q10
const FURNISHED_STEP: Step = {
  id: "furnished",
  question: "Is the property furnished?",
  kind: "single",
  options: ["Yes — Furnished", "No — Unfurnished"],
  icon: Icon.furnished,
};

// Q11 — gate
const PRESSURE_WASHING_NEEDED_STEP: Step = {
  id: "pressureWashingNeeded",
  question: "Pressure washing needed?",
  subtitle: "High jet wash for outside areas.",
  kind: "single",
  options: ["Yes", "No"],
  icon: Icon.area,
};

// Q11a — only shown if "Yes"
const PRESSURE_WASH_SURFACES_STEP: Step = {
  id: "pressureWashSurfaces",
  question: "What do you need pressure washed?",
  kind: "multi",
  options: ["Patio", "Driveway", "Garden", "Balcony", "Fences", "Decks", "Pavement", "House Siding", "Walls", "Other"],
  icon: Icon.area,
};

// Q12
const OTHER_SERVICES_STEP: Step = {
  id: "otherServices",
  question: "Any other services needed?",
  subtitle: "A separate quote will be sent for any selected.",
  kind: "multi",
  options: [
    "Garden Maintenance",
    "External Window Cleaning",
    "Rubbish Removal",
    "Fumigation",
    "Decluttering",
    "Handyman Services",
  ],
  icon: Icon.addons,
};

// Q13
const PROPERTY_CONDITION_STEP: Step = {
  id: "propertyCondition",
  question: "What is the property condition?",
  subtitle: "Helps us select the right team and plan the clean.",
  kind: "single",
  options: ["Good", "Average", "Poor"],
  icon: Icon.condition,
};

// Date — always last
const DATE_STEP: Step = {
  id: "preferredDate",
  question: "When would you like this done?",
  kind: "date",
  options: [],
  icon: Icon.date,
};

// Standalone service steps
const CARPET_ITEMS_STEP: Step = {
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
  question: "Roughly, what is the area size to be pressure washed?",
  subtitle: "Give an estimate — we'll measure on the day if booked.",
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

// ── Dynamic step builder for all residential services ─────────
const DOMESTIC_SERVICES = new Set([
  "End of Tenancy Cleaning",
  "Deep Cleaning",
  "After Builders",
  "Carpet & Upholstery",
  "Appliances Cleaning",
  "Pressure Washing",
  "Other",
]);

function getDomesticSteps(answers: Partial<InquiryAnswers>): Step[] {
  const steps: Step[] = [
    BEDROOMS_STEP,           // Q2
    BATHROOMS_STEP,          // Q3
    LIVING_AREAS_STEP,       // Q4
    KITCHEN_STEP,            // Q5
    CARPET_CLEANING_STEP,    // Q6
  ];

  if (answers.carpetCleaning === "Yes please") {
    steps.push(CARPET_AREAS_STEP); // Q6a
  }

  steps.push(WINDOW_CLEANING_STEP);      // Q7
  steps.push(APPLIANCE_CLEANING_STEP);   // Q8

  if (answers.applianceCleaning === "Yes") {
    steps.push(APPLIANCES_STEP);   // Q8a
  }

  steps.push(ADDITIONAL_AREAS_STEP);     // Q9
  steps.push(FURNISHED_STEP);            // Q10
  steps.push(PRESSURE_WASHING_NEEDED_STEP); // Q11

  if (answers.pressureWashingNeeded === "Yes") {
    steps.push(PRESSURE_WASH_SURFACES_STEP); // Q11a
  }

  steps.push(OTHER_SERVICES_STEP);       // Q12
  steps.push(PROPERTY_CONDITION_STEP);   // Q13
  steps.push(DATE_STEP);

  return steps;
}

// ── Static flows for non-domestic services ────────────────────
const STATIC_SERVICE_FLOW: Record<string, Step[]> = {
  "Carpet & Upholstery": [CARPET_ITEMS_STEP, DATE_STEP],
  "Appliances Cleaning": [APPLIANCES_STEP, DATE_STEP],
  "Pressure Washing":    [PRESSURE_WASH_SURFACES_STEP, AREA_STEP, DATE_STEP],
  "Commercial Cleaning": [PREMISES_STEP, DATE_STEP],
  "Other":               [DATE_STEP],
};

const ALL_SERVICES = [
  "End of Tenancy Cleaning",
  "Deep Cleaning",
  "After Builders",
  "Carpet & Upholstery",
  "Appliances Cleaning",
  "Pressure Washing",
  "Commercial Cleaning",
  "Other",
];

function getServiceSteps(answers: Partial<InquiryAnswers>): Step[] {
  const service = answers.serviceType;
  if (!service) return [];
  if (DOMESTIC_SERVICES.has(service)) return getDomesticSteps(answers);
  return STATIC_SERVICE_FLOW[service] ?? [DATE_STEP];
}

const SERVICE_STEP: Step = {
  id: "serviceType",
  question: "What service do you require?",
  kind: "single",
  options: ALL_SERVICES,
  icon: Icon.service,
};

// ── Component ─────────────────────────────────────────────────
export default function InquiryWizard({ onComplete }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<InquiryAnswers>>({});
  const [multiSel, setMultiSel] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [dateVal, setDateVal] = useState("");
  const [pendingSingle, setPendingSingle] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const serviceSteps = getServiceSteps(answers);
  const totalSteps = 1 + serviceSteps.length;
  const step: Step = stepIndex === 0 ? SERVICE_STEP : serviceSteps[stepIndex - 1];
  const progress = (stepIndex / totalSteps) * 100;

  function slide(dir: "forward" | "back", cb: () => void) {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => { cb(); setAnimating(false); setCustomInput(""); setDateVal(""); setPendingSingle(null); }, 260);
  }

  function advance(next: Partial<InquiryAnswers>) {
    const nextSteps = getServiceSteps(next);
    const nextTotal = 1 + nextSteps.length;
    if (stepIndex < nextTotal - 1) {
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
      if (stepIndex === 1) setAnswers({});
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
          {step.subtitle ? (
            <p className="text-sm text-slate-400 mt-1">{step.subtitle}</p>
          ) : step.kind === "multi" ? (
            <p className="text-sm text-slate-400 mt-1">Select all that apply.</p>
          ) : null}
        </div>

        {/* Single-choice grid */}
        {step.kind === "single" && (() => {
          const effectiveSel = pendingSingle ?? (answers[step.id] as string | undefined) ?? null;
          return (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {step.options.map((opt) => {
                  const selected = effectiveSel === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setPendingSingle(opt)}
                      className={`relative rounded-2xl border-2 px-4 py-4 text-sm font-semibold text-left transition-all duration-200 ${
                        selected
                          ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                          : "border-slate-200 bg-white text-slate-700 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5"
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
              {effectiveSel && (
                <button
                  onClick={() => choose(effectiveSel)}
                  className="mt-4 w-full bg-accent text-white font-bold text-sm py-4 rounded-xl hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.98]"
                >
                  Next →
                </button>
              )}
            </>
          );
        })()}

        {/* Date picker */}
        {step.kind === "date" && (
          <div className="flex flex-col gap-4">
            <input
              type="date"
              value={dateVal}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDateVal(e.target.value)}
              className="w-full bg-[#F3F4F6] rounded-2xl px-5 py-4 text-base text-slate-800 outline-none border-2 border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all cursor-pointer"
            />
            <button
              onClick={() => {
                if (!dateVal) return;
                const [y, m, d] = dateVal.split("-");
                const label = new Date(+y, +m - 1, +d).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                });
                advance({ ...answers, preferredDate: label });
              }}
              disabled={!dateVal}
              className="w-full bg-accent text-white font-bold text-sm py-4 rounded-xl hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {dateVal ? "Confirm Date →" : "Pick a date above"}
            </button>
            <button
              onClick={() => advance({ ...answers, preferredDate: "Flexible / Not sure" })}
              className="text-sm text-slate-400 hover:text-accent transition-colors text-center"
            >
              I'm flexible — no preference
            </button>
          </div>
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
                    className={`relative rounded-2xl border-2 px-4 py-4 text-sm font-semibold text-left transition-all duration-200 ${
                      selected
                        ? "border-accent bg-accent text-white shadow-md shadow-accent/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5"
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
