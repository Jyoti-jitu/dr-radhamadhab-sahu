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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Medical Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF4FA] border border-[#D5E5F2] text-[#0B2545] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#14746F] animate-pulse" />
              <span>ENT &amp; SKULL BASE SURGERY</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-[1.15]">
              Specialist ENT Care.{" "}
              <span className="text-[#14746F] block sm:inline">
                Thoughtful Diagnosis.
              </span>{" "}
              Advanced Surgical Expertise.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Learn about Dr. Radhamadhab Sahu, his clinical expertise, and available ENT and skull-base care in Bhubaneswar. Providing advanced endoscopic minimally invasive surgical care for cranial base, sinus, hearing, and scarless head-and-neck conditions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2545] text-white font-semibold text-sm sm:text-base hover:bg-[#14746F] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>

              <Link
                href="/specialities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:text-[#0B2545] hover:border-slate-400 transition-all duration-200"
              >
                <span>Explore Specialities</span>
                <ArrowRight className="w-4 h-4 text-[#14746F]" />
              </Link>
            </div>

            {/* Factual Credential Badges (Strictly Verified Facts Only) */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0B2545] block">Senior Consultant &amp; HOD</span>
                  <span className="text-slate-600">SUM Ultimate Medicare, Bhubaneswar</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0B2545]">3-Year Skull Base Neurosurgery Training</span>
                  <span className="text-slate-600 block">VMMC &amp; Safdarjung Hospital, New Delhi</span>
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
