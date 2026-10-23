import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  ChevronRight,
  Stethoscope,
  Activity,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
import FAQ from "@/components/FAQ";
import { SPECIALTIES } from "@/lib/specialties";

export default function SpecialtyDetailView({ specialty }) {
  const breadcrumbItems = [
    { name: "Specialities", url: "/specialities" },
    { name: specialty.title, url: `/specialities/${specialty.slug}` },
  ];

  // Other specialities for internal navigation
  const otherSpecialties = SPECIALTIES.filter((s) => s.slug !== specialty.slug);

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Breadcrumb & Header Banner with Authentic Clinical Visual */}
      <section className="bg-white border-b border-slate-200 py-8 lg:py-10">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-8 space-y-3">
              <span className="medical-badge">
                {specialty.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight">
                {specialty.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {specialty.shortDescription}
              </p>
            </div>

            {/* Top Header Thumbnail Badge */}
            {specialty.heroImage && (
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-900 group">
                  <Image
                    src={specialty.heroImage}
                    alt={specialty.title}
                    fill
                    sizes="360px"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium flex items-center justify-between">
                    <span className="bg-[#14746F] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      Verified Procedure
                    </span>
                    <span className="text-teal-200 text-[10px]">Clinical Protocol</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Columns: Clinical Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* Clinical Overview Narrative */}
              <div className="medical-card p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Clinical Overview &amp; Surgical Philosophy
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {specialty.fullDescription}
                </p>
              </div>

              {/* Verified Surgical Photographic Spotlight */}
              {specialty.featuredMedia && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900">
                    <Image
                      src={specialty.featuredMedia.imageUrl}
                      alt={specialty.featuredMedia.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 760px"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B2545]/90 backdrop-blur-xs px-3 py-1 rounded-full text-white text-[11px] font-semibold border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                      <span>{specialty.featuredMedia.badge}</span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-2 bg-white border-t border-slate-100">
                    <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                      {specialty.featuredMedia.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {specialty.featuredMedia.caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Verified Surgical Procedures & Approaches */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#14746F] uppercase tracking-wider">
                    Surgical Capabilities
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                    Verified Surgical Procedures
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Procedures performed with advanced endoscopic visualization, optical guidance, and tissue-sparing techniques.
                  </p>
                </div>

                <div className="space-y-4">
                  {specialty.procedures.map((proc, idx) => (
                    <div
                      key={idx}
                      className="medical-card p-5 space-y-1.5 border-l-4 border-l-[#0B2545] hover:border-l-[#14746F] transition-all"
                    >
                      <h3 className="text-base font-bold text-[#0B2545]">
                        {proc.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {proc.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Symptoms & When to Seek Professional Evaluation */}
              <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-amber-950">
                    When Should You Seek Professional Evaluation?
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  If you or a family member experience any of the following persistent symptoms, a specialized examination by an otolaryngologist is strongly advised:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950">
                  {specialty.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                      <span className="leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic Pathway */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#14746F] uppercase tracking-wider">
                    Evidence-Based Protocol
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                    Diagnostic Pathway &amp; Preoperative Workup
                  </h2>
                </div>

                {/* Diagnostic Suite Visual Banner */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full bg-slate-100">
                    <Image
                      src="/images/dr-sahu-patient-consultation.jpg"
                      alt="Dr. Radhamadhab Sahu conducting clinical diagnostic airway consultation"
                      fill
                      sizes="(max-width: 1024px) 100vw, 760px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-teal-400" />
                        <span>High-Definition Clinical Diagnostic &amp; Airway Suite</span>
                      </span>
                      <span className="text-teal-200 text-[11px] hidden sm:inline">Endoscopic Evaluation</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialty.diagnosticPathway.map((diag, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs"
                    >
                      <h3 className="text-sm font-bold text-[#0B2545]">
                        {diag.step}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {diag.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="space-y-6 pt-4 border-t border-slate-200">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                    Frequently Asked Questions: {specialty.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Transparent medical guidance regarding recovery, precautions, and surgical pathways.
                  </p>
                </div>

                <FAQ items={specialty.faqs} />
              </div>
            </div>

            {/* Right 4 Columns: Sticky Consultation Box & Quick Internal Links */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Consultation Card with Authentic Chamber Preview */}
              <div className="medical-card p-0 bg-white border-2 border-[#0B2545]/20 shadow-md overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src="/images/clinic-head-silhouette-awards-wall.jpg"
                    alt="Dr. Radhamadhab Sahu Consultation Room and Head Silhouette Honors Wall"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Consultation Room &amp; Honors
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#14746F]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Specialist Consultation</span>
                    </span>
                    <h3 className="text-lg font-bold text-[#0B2545]">
                      Discuss Your Symptoms with Dr. Radhamadhab Sahu
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Evaluations available at SUM Ultimate Medicare and Dr. Radhamadhab ENT and Cancer Clinic, Bhubaneswar.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white text-xs sm:text-sm font-semibold hover:bg-[#14746F] transition-colors shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book an Evaluation</span>
                    </Link>

                    <a
                      href="tel:+919716772703"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
                    >
                      <span>Clinic Call: +91 97167 72703</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Specialities Menu */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider border-b border-slate-100 pb-2">
                  Other ENT Specialities
                </h4>
                <ul className="space-y-2 text-xs">
                  {otherSpecialties.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/specialities/${item.slug}`}
                        className="text-slate-600 hover:text-[#0B2545] hover:underline flex items-center justify-between py-1 group"
                      >
                        <span className="line-clamp-1">{item.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#14746F] group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medical Notice */}
              <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                <strong>Educational Notice:</strong> Information presented here is for patient education and does not replace in-person diagnostic examination.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
