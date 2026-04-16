"use client";

import { useState } from "react";

export interface InquiryAnswers {
  kitchens: string;
  livingRooms: string;
  bathrooms: string;
  propertySize: string;
  serviceType: string;
}

interface Props {
  onComplete: (answers: InquiryAnswers) => void;
}

const STEP_ICONS = [
  // Kitchen
  <svg key="kitchen" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
  </svg>,
  // Living room
  <svg key="living" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Bathroom
  <svg key="bathroom" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>,
  // Property size
  <svg key="property" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  // Service type
  <svg key="service" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
];

const STEPS = [
  {
    id: "kitchens",
    question: "How many kitchens need cleaning?",
    options: ["0", "1", "2", "3+"],
  },
  {
    id: "livingRooms",
    question: "How many living rooms need cleaning?",
    options: ["0", "1", "2", "3+"],
  },
  {
    id: "bathrooms",
    question: "How many bathrooms / toilets need cleaning?",
    options: ["0", "1", "2", "3", "4+"],
  },
  {
    id: "propertySize",
    question: "How big is the property?",
    options: ["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5+ Bedrooms"],
  },
  {
    id: "serviceType",
    question: "What cleaning service do you require?",
    options: [
      "End of Tenancy",
      "Deep Cleaning",
      "Regular Maintenance",
      "After Builders",
      "Office / Commercial",
      "Other",
    ],
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

export default function InquiryWizard({ onComplete }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<InquiryAnswers>>({});
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const step = STEPS[stepIndex];
  const progress = ((stepIndex) / STEPS.length) * 100;

  function choose(value: string) {
    const next = { ...answers, [step.id]: value };
    setAnswers(next);

    if (stepIndex < STEPS.length - 1) {
      advance(next);
    } else {
      onComplete(next as InquiryAnswers);
    }
  }

  function advance(current: Partial<InquiryAnswers>) {
    setDirection("forward");
    setAnimating(true);
    setTimeout(() => {
      setStepIndex((i) => i + 1);
      setAnswers(current);
      setAnimating(false);
    }, 260);
  }

  function goBack() {
    if (stepIndex === 0) return;
    setDirection("back");
    setAnimating(true);
    setTimeout(() => {
      setStepIndex((i) => i - 1);
      setAnimating(false);
    }, 260);
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
            Step {stepIndex + 1} of {STEPS.length}
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
      <div
        className={`transition-all duration-260 ease-in-out ${slideClass}`}
      >
        {/* Icon + question */}
        <div className="mb-7">
          <div className="w-12 h-12 rounded-2xl bg-accent/8 flex items-center justify-center text-accent mb-4">
            {STEP_ICONS[stepIndex]}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {step.question}
          </h3>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {step.options.map((opt) => {
            const selected = answers[step.id as StepId] === opt;
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
                {selected && (
                  <span className="absolute top-2.5 right-3 text-white/80 text-xs">✓</span>
                )}
                {opt}
              </button>
            );
          })}
        </div>
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
