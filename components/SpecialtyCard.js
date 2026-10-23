import Image from "next/image";
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
  const cardImage = specialty.featuredMedia?.imageUrl || specialty.heroImage;

  return (
    <article className="medical-card overflow-hidden flex flex-col justify-between group hover:border-[#14746F]/50 transition-all duration-300 shadow-xs hover:shadow-md">
      <div>
        {/* Photo Banner */}
        {cardImage && (
          <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
            <Image
              src={cardImage}
              alt={specialty.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              className={`object-cover ${specialty.featuredMedia?.imagePosition || specialty.imagePosition || "object-center"} group-hover:scale-104 transition-transform duration-500`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs text-[#0B2545] flex items-center justify-center shadow-xs">
              <IconComponent className="w-5 h-5 text-[#14746F]" />
            </div>
            <div className="absolute bottom-2.5 right-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
              {specialty.eyebrow}
            </div>
          </div>
        )}

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#0B2545] group-hover:text-[#14746F] transition-colors">
              <Link href={`/specialities/${specialty.slug}`} className="focus:outline-hidden">
                {specialty.title}
              </Link>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              {specialty.shortDescription}
            </p>
          </div>

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
      </div>

      {/* Link to detail page */}
      <div className="px-6 pb-6 pt-2">
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
