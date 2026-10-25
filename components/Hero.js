import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  GraduationCap,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Subtle background architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0B2545 1px, transparent 1px), radial-gradient(#0B2545 1px, #ffffff 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
        aria-hidden="true"
      />

      <div className="medical-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Editorial Medical Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF4FA] border border-[#D5E5F2] text-[#0B2545] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#14746F] animate-pulse" />
                <span>ENT &amp; Skull Base Surgery</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-[1.2]">
              Pioneering Endoscopic ENT &amp;{" "}
              <span className="text-[#14746F] block sm:inline">
                Skull Base Surgery
              </span>{" "}
              in Eastern India.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Senior Consultant &amp; Head of Department at SUM Ultimate Medicare, Bhubaneswar. With over 17 years of clinical and surgical experience, Dr. Radhamadhab Sahu has performed more than 800 complex skull base surgeries for patients from over 20 countries, introducing transformative scarless and minimally invasive procedures for the first time in Odisha.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#0B2545] text-white font-semibold text-sm sm:text-base hover:bg-[#14746F] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/specialities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:text-[#0B2545] hover:border-slate-400 transition-all duration-200 text-center"
              >
                <span>Explore Specialities &amp; Surgeries</span>
                <ArrowRight className="w-4 h-4 text-[#14746F]" />
              </Link>
            </div>

            {/* Factual Credential Badges (Strictly Verified Facts Only) */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B2545] block">800+ Skull Base Surgeries</span>
                  <span className="text-slate-600">Patients treated from 20+ countries</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B2545] block">Senior Consultant &amp; HOD</span>
                  <span className="text-slate-600">SUM Ultimate Medicare, Bhubaneswar</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B2545] block">Dual ENT &amp; Neurosurgery</span>
                  <span className="text-slate-600">VMMC &amp; Safdarjung Hospital, New Delhi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Physician Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Backing decorative architectural frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-slate-200 via-teal-100/40 to-slate-100 -z-10 transform rotate-1" />

              <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={DOCTOR.portraitUrl}
                    alt={DOCTOR.portraitAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-top"
                  />
                  {/* Subtle verified overlay pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 text-[11px] font-semibold text-[#0B2545] flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>Verified Clinician</span>
                  </div>
                </div>

                {/* Sub-caption underneath portrait */}
                <div className="pt-4 pb-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h2 className="text-lg font-bold text-[#0B2545]">
                      {DOCTOR.name}
                    </h2>
                    <span className="text-xs font-semibold text-[#14746F]">
                      {DOCTOR.qualifications}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Senior Consultant &amp; Head of Department, ENT &amp; Skull Base Surgery
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    SUM Ultimate Medicare &amp; Dr. Radhamadhab ENT and Cancer Clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
