import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Wind,
  Ear,
  Stethoscope,
  Mic2,
  Moon,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecialtyCard from "@/components/SpecialtyCard";
import AppointmentCTA from "@/components/AppointmentCTA";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Clinical Specialities & Surgical Procedures | Dr. Radhamadhab Sahu",
  description:
    "Comprehensive ENT & Skull Base specialities: Endoscopic Skull Base Surgery, Sinus Care & FESS, Ear & Hearing (Otology), Scarless Thyroidectomy (TOETVA), Voice Surgery, and Sleep Apnea Care in Bhubaneswar.",
  pathname: "/specialities",
});

export default function SpecialitiesPage() {
  const breadcrumbItems = [{ name: "Specialities", url: "/specialities" }];

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Header */}
      <section className="bg-white border-b border-slate-200 py-4 sm:py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-2 sm:mt-3 space-y-2 sm:space-y-3">
            <span className="medical-badge">
              Comprehensive Surgical Directory
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Clinical Specialities &amp; Surgical Care
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu provides specialized surgical and diagnostic interventions across six dedicated otolaryngology and cranial base disciplines. Every clinical recommendation is guided by evidence-based medicine and anatomical preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="py-8 sm:py-16 lg:py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {SPECIALTIES.map((specialty) => (
              <SpecialtyCard key={specialty.slug} specialty={specialty} />
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic & Technology Guarantee Section with Authentic Clinic Photography */}
      <section className="py-8 sm:py-16 bg-white border-y border-slate-200">
        <div className="medical-container space-y-6 sm:space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-2.5 sm:space-y-3">
            <span className="medical-badge">
              Diagnostic Standards
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Diagnostic Precision Before Surgical Recommendation
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Surgery is recommended only when conservative medical management has been exhausted or when structural pathology clearly mandates operative intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Step 1: In-office endoscopic examination */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/50 transition-all group">
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/clinic-national-honors-awards.jpg"
                  alt="Dr. Radhamadhab Sahu Clinical Suite & Practice Credentials"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  Step 1: Clinical Diagnostic Suite
                </div>
              </div>
              <div className="p-5 space-y-2 bg-white border-t border-slate-100">
                <h3 className="text-base font-bold text-[#0B2545]">
                  1. High-Definition Endoscopy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In-office zero-degree and angled rigid HD endoscopes to visually map the sinonasal cavities, Eustachian tubes, and vocal fold dynamics without discomfort.
                </p>
              </div>
            </div>

            {/* Step 2: Skull base and temporal bone imaging */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/50 transition-all group">
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/skull-base-anatomy.jpg"
                  alt="Thin-Cut Cranial Base and Paranasal Sinus CT MRI Protocol Mapping"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  Step 2: Anatomical Mapping
                </div>
              </div>
              <div className="p-5 space-y-2 bg-white border-t border-slate-100">
                <h3 className="text-base font-bold text-[#0B2545]">
                  2. Thin-Cut Protocol Imaging
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-Resolution CT (HRCT) of the temporal bone and paranasal sinuses, paired with 3T MRI neuronavigation to outline safe surgical corridors.
                </p>
              </div>
            </div>

            {/* Step 3: Clinical Consultation & Audiological Profiling */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/50 transition-all group">
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-patient-consultation.jpg"
                  alt="Doctor Discussing Symptoms and Pure Tone Audiometry Profile with Patient"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  Step 3: Specialist Evaluation
                </div>
              </div>
              <div className="p-5 space-y-2 bg-white border-t border-slate-100">
                <h3 className="text-base font-bold text-[#0B2545]">
                  3. Audiological &amp; Sleep Profiling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Formal Pure Tone Audiometry (PTA), tympanometry, and overnight sleep apnea polysomnography to objectively document functional deficit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
