import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  FileText,
  Stethoscope,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function NominationCitation({ page = "home" }) {
  return (
    <section id="citation" className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/25 to-white border-b border-slate-200 overflow-hidden">
      {/* Decorative ambient background */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="medical-container relative">
        {/* Main Citation Container */}
        <div className="rounded-2xl sm:rounded-3xl border-2 border-amber-300/80 bg-white shadow-xl overflow-hidden">
          {/* Header Citation Ribbon */}
          <div className="bg-gradient-to-r from-[#0B2545] via-[#103A6B] to-[#0B2545] text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <Award className="w-56 h-56 text-amber-300" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Official Council Citation &bull; State &ndash; Odisha</span>
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Nominee &ndash; Dr. Radhamadhab Sahu
                </h2>
                <p className="text-amber-200/90 text-xs sm:text-base font-medium">
                  Citation for Bharat Pratibha Sammaan Award Nomination
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white">Category:</strong> Healthcare &amp; Medicine (ENT &amp; Skull Base Surgery)
                </p>

                {/* Direct Action Button to view PDF */}
                <div className="pt-2">
                  <a
                    href="/documents/nominee-dr-radhamadhab-sahu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0B2545] font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
                  >
                    <FileText className="w-4 h-4 text-[#0B2545] shrink-0" />
                    <span>See NOMINEE - DR. RADHAMADHAB SAHU.pdf</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Gold Emblem Shield */}
              <div className="shrink-0 self-start md:self-center">
                <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-b from-amber-400/20 to-amber-500/10 border border-amber-300/50 backdrop-blur-xs shadow-inner">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400 flex items-center justify-center text-[#0B2545] font-black text-lg sm:text-xl shadow-md shrink-0">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#0B2545]" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                      Bharat Pratibha
                    </span>
                    <span className="block text-xs sm:text-sm font-extrabold text-white">
                      Sammaan Council
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-amber-200/80">
                      National Recognition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Citation Body */}
          <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 bg-white">
            {/* Official Nomination Award Certificate Banner & PDF Access */}
            <div className="space-y-3">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-xl bg-slate-950 aspect-[2/1] w-full">
                <Image
                  src="/images/bharat-pratibha-healthcare-nominee-award.png"
                  alt="Bharat Pratibha Sammaan Award Nomination - Official Citation - Dr. Radhamadhab Sahu (Healthcare & Medicine: ENT & Skull Base Surgery)"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-contain"
                  priority
                />
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-300/40 text-[10px] sm:text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                  <span>Official Nomination Document</span>
                </div>
              </div>

              {/* Document Access Strip */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200/90 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-[#0B2545] truncate">
                      Official Nomination Record: NOMINEE - DR. RADHAMADHAB SAHU.pdf
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 line-clamp-1">
                      Council nomination filing for Bharat Pratibha Sammaan Award (Healthcare &amp; Medicine).
                    </p>
                  </div>
                </div>

                <a
                  href="/documents/nominee-dr-radhamadhab-sahu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#14746F] text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 w-full sm:w-auto text-center"
                >
                  <FileText className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>See Bharat Pratibha Sammaan Nomination PDF</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Introduction Quote */}
            <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-amber-50/50 border border-amber-200/80 relative">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-900 block">
                  Official Citation Narrative
                </span>
                <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-serif italic">
                  &ldquo;Dr. Radhamadhab Sahu is a Senior Consultant and Head of the Department of ENT &amp; Skull Base Surgery at Sum Ultimate Medicare, Bhubaneswar. With over 17 years of clinical and surgical experience, he has distinguished himself as one of India&apos;s foremost endoscopic skull base surgeons. He is nominated for the Bharat Pratibha Sammaan Award in the category of Healthcare &amp; Medicine, in recognition of his pioneering contributions to advanced ENT and Skull Base Surgery.&rdquo;
                </p>
              </div>
            </div>

            {/* 4 Key Numerical Accomplishments */}
            <div>
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-lg font-bold text-[#0B2545]">
                  Certified Surgical Impact &amp; Global Patient Reach
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600">
                  Documented operative metrics verified in the Bharat Pratibha Sammaan nomination record.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    800+
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-[#14746F]">
                    Skull Base Surgeries
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                    Endoscopic anterior &amp; lateral cranial base procedures
                  </p>
                </div>

                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    20+
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-[#14746F]">
                    Countries Treated
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                    International patients traveling to Bhubaneswar
                  </p>
                </div>

                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    17+
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-[#14746F]">
                    Years Experience
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                    Clinical and advanced operative surgery
                  </p>
                </div>

                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    5
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-[#14746F]">
                    Odisha Firsts
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                    Pioneering procedures introduced in the state
                  </p>
                </div>
              </div>
            </div>

            {/* The Detailed 5 Odisha Firsts, Dual Expertise, Orations & Distinctions are rendered ONLY on About Page */}
            {page === "about" && (
              <>
                {/* Pioneered for the First Time in Odisha Grid */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14746F]">
                        Surgical Innovations
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                        Landmark Procedures Introduced for the First Time in Odisha
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      State-level surgical breakthroughs
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {DOCTOR.firstInOdisha.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all space-y-2 group shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#14746F] uppercase tracking-wide bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                            {item.category}
                          </span>
                          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            Odisha 1st
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#14746F] transition-colors leading-snug">
                          {item.procedure}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}

                    {/* Card 6: Dual Training & Neurosurgical Mentorship */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#103A6B] text-white space-y-2 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wide bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                          Rare Dual Expertise
                        </span>
                        <GraduationCap className="w-4 h-4 text-amber-300" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        ENT + 3-Year Neurosurgical Skull Base Residency
                      </h4>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        VMMC &amp; Safdarjung Hospital, New Delhi, followed by independent cranial base practice with <strong>Padmashree Dr. (Prof.) V. S. Mehta</strong> at Paras Hospital.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Academic Orations & Civil Recognitions */}
                <div className="pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545]">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span>Prestigious Orations &amp; Academic Honors</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">Dr. H. K. Kukreja Oration:</strong> Delivered at the 41st Rajasthan AOICON in 2024.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">1st Prize Winner:</strong> Prakash and Ved Monga Temporal Bone Dissection Competition (2011).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">AOIBBCON 2024:</strong> Organising Secretary in Bhubaneswar, keynote speaker on Advanced Skull Base Surgery &amp; live surgical demonstrator.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545]">
                      <ShieldCheck className="w-4 h-4 text-[#14746F]" />
                      <span>State, Civil &amp; Cultural Distinctions</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">State Felicitations:</strong> Recipient of <em>Utkal Gaurav Samman</em>, <em>Debadutta Samman</em>, and <em>Vikas Odia Samman</em>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">Odia Gaurav Samman:</strong> Conferred in Mumbai (2023) for pioneering national healthcare contributions.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0B2545]">International Research:</strong> Published scientific research in indexed journals including <em>Auris Nasus Larynx</em>.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Official Citation filing footer on About page */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                  <span className="text-slate-500">
                    Official Citation filed with the Bharat Pratibha Sammaan Council &bull; State &ndash; Odisha
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/documents/nominee-dr-radhamadhab-sahu.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shrink-0 shadow-xs"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>See NOMINEE PDF</span>
                    </a>
                    <Link
                      href="/contact"
                      className="font-bold text-[#14746F] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Schedule Clinical Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* Landing page compact footer with link to full citation */}
            {page !== "about" && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                <span className="text-slate-600 font-medium">
                  State-level breakthroughs &bull; 5 procedures pioneered in Odisha &bull; National orations
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/documents/nominee-dr-radhamadhab-sahu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shrink-0 shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>See NOMINEE PDF</span>
                  </a>
                  <Link
                    href="/about#citation"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#14746F] transition-colors shrink-0 shadow-xs"
                  >
                    <span>Explore 5 Landmark Odisha Firsts on About Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
