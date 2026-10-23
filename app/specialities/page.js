import Link from "next/link";
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
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-3 space-y-3">
            <span className="medical-badge">
              Comprehensive Surgical Directory
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight">
              Clinical Specialities &amp; Surgical Care
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu provides specialized surgical and diagnostic interventions across six dedicated otolaryngology and cranial base disciplines. Every clinical recommendation is guided by evidence-based medicine and anatomical preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="py-14 sm:py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty) => (
              <SpecialtyCard key={specialty.slug} specialty={specialty} />
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic & Technology Guarantee Section */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="medical-container">
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Diagnostic Precision Before Surgical Recommendation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Surgery is recommended only when conservative medical management has been exhausted or when structural pathology clearly mandates operative intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B2545] text-sm block">1. High-Definition Endoscopy</span>
              <p className="text-slate-600">
                In-office zero-degree and angled rigid HD endoscopes to visually map the sinonasal cavities, Eustachian tubes, and vocal fold dynamics.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B2545] text-sm block">2. Thin-Cut Protocol Imaging</span>
              <p className="text-slate-600">
                High-Resolution CT of the temporal bone and paranasal sinuses, and 3T MRI with neuronavigation for safe cranial base corridors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <span className="font-bold text-[#0B2545] text-sm block">3. Audiological &amp; Sleep Profiling</span>
              <p className="text-slate-600">
                Formal Pure Tone Audiometry (PTA), tympanometry, and overnight polysomnography to objectively measure disease severity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
