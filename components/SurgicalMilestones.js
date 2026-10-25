import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  Stethoscope,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function SurgicalMilestones({ page = "home" }) {
  return (
    <section
      id="citation"
      className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="medical-container relative">
        {/* Main Milestones Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0B2545] via-[#103A6B] to-[#0B2545] text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 border border-teal-300/30 text-teal-200 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                  <span>Clinical Leadership &bull; State &ndash; Odisha</span>
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Surgical Milestones &amp; Landmark State Firsts
                </h2>
                <p className="text-teal-100/90 text-xs sm:text-base font-medium">
                  Dr. Radhamadhab Sahu &bull; Senior Consultant &amp; Head of Department, ENT &amp; Skull Base Surgery
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dual-trained across Otorhinolaryngology and Cranial Base Neurosurgery at VMMC &amp; Safdarjung Hospital, New Delhi. Dedicated to scarless, minimally invasive anatomical preservation for patients across India and abroad.
                </p>
              </div>

              {/* Institution Badge */}
              <div className="shrink-0 self-start md:self-center">
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xs shadow-inner">
                  <div className="w-12 h-12 rounded-xl bg-[#14746F] flex items-center justify-center text-white font-black text-xl shadow-md shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-bold text-teal-300 uppercase tracking-widest">
                      SUM Ultimate Medicare
                    </span>
                    <span className="block text-xs sm:text-sm font-extrabold text-white">
                      Bhubaneswar, Odisha
                    </span>
                    <span className="block text-[10px] text-slate-300">
                      NABH &bull; NABL Accredited
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics & Content Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 sm:space-y-12 bg-white">
            {/* 4 Key Numerical Accomplishments */}
            <div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-xl font-bold text-[#0B2545]">
                  Certified Surgical Impact &amp; Global Patient Reach
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Documented operative metrics across 17+ years of specialized surgical practice.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    800+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14746F]">
                    Skull Base Surgeries
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                    Endoscopic anterior &amp; lateral cranial base procedures
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14746F]">
                    Countries Treated
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                    International patients traveling to Bhubaneswar
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    17+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14746F]">
                    Years Experience
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                    Clinical and advanced operative surgery
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-[#14746F]/50 transition-colors">
                  <div className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">
                    5
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14746F]">
                    Odisha Firsts
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                    Pioneering procedures introduced in the state
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed 5 Odisha Firsts, Dual Expertise, Orations & Distinctions (rendered on About Page) */}
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
                        className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-teal-400 hover:bg-white transition-all space-y-2 group shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#14746F] uppercase tracking-wide bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                            {item.category}
                          </span>
                          <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
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
                        <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wide bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                          Rare Dual Expertise
                        </span>
                        <GraduationCap className="w-4 h-4 text-teal-300" />
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
                      <Award className="w-4 h-4 text-teal-600" />
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

                {/* Footer on About page */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                  <span className="text-slate-500">
                    Pioneering surgical milestones &bull; Dedicated to anatomical preservation &bull; SUM Ultimate Medicare, Bhubaneswar
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#14746F] text-white text-xs font-semibold transition-colors shadow-xs"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>Schedule Clinical Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* Landing page compact footer */}
            {page !== "about" && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                <span className="text-slate-600 font-medium">
                  State-level breakthroughs &bull; 5 procedures pioneered in Odisha &bull; National orations &amp; distinctions
                </span>
                <Link
                  href="/about#citation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#14746F] transition-colors shrink-0 shadow-xs"
                >
                  <span>Explore 5 Landmark Odisha Firsts on About Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
