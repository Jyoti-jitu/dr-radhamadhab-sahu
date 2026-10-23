"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="medical-card border border-slate-200 overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-bold text-[#0B2545] leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#14746F] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
