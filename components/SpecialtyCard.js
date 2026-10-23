import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Wind,
  Ear,
  Stethoscope,
  Mic2,
  Moon,
  ChevronRight,
} from "lucide-react";

// Icon mapping based on specialty slug
const iconMap = {
  "skull-base-surgery": Brain,
  "sinus-and-nasal-care": Wind,
  "ear-and-hearing": Ear,
  "head-and-neck-surgery": Stethoscope,
  "voice-and-laryngeal-disorders": Mic2,
  "sleep-related-ent-disorders": Moon,
};

export default function SpecialtyCard({ specialty }) {
  const IconComponent = iconMap[specialty.slug] || Stethoscope;

  return (
    <article className="medical-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#14746F]/40 transition-all duration-300">
      <div className="space-y-4">
        {/* Top Icon & Eyebrow */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#EDF4FA] text-[#0B2545] flex items-center justify-center group-hover:bg-[#14746F] group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            Specialist Care
          </span>
        </div>

        {/* Title */}
        <div>
          <p className="text-xs font-semibold text-[#14746F] uppercase tracking-wide">
            {specialty.eyebrow}
          </p>
          <h3 className="text-xl font-bold text-[#0B2545] mt-1 group-hover:text-[#14746F] transition-colors">
            <Link href={`/specialities/${specialty.slug}`} className="focus:outline-hidden">
              {specialty.title}
            </Link>
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {specialty.shortDescription}
        </p>

        {/* Selected Highlight Procedures */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          <p className="text-xs font-semibold text-slate-700">
            Selected Clinical Approaches:
          </p>
          <ul className="space-y-1">
            {specialty.procedures.slice(0, 3).map((proc, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-600 flex items-start gap-1.5"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{proc.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link to detail page */}
      <div className="pt-6 mt-4 border-t border-slate-100">
        <Link
          href={`/specialities/${specialty.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2545] group-hover:text-[#14746F] transition-colors"
        >
          <span>Read Clinical Details &amp; Indications</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
