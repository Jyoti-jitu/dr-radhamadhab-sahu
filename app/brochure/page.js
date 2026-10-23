import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldAlert,
  Stethoscope,
  FileText,
  ArrowRight,
  ExternalLink,
  Building2,
  Award,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DOCTOR } from "@/lib/doctor";

export const metadata = {
  title: "Official Practice Brochure • Ghatikia, Bhubaneswar | Dr. Radhamadhab Sahu",
  description:
    "Official clinical practice brochure of Dr. Radhamadhab Sahu at K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar. Detailing 17 symptoms, 22 super-speciality procedures, consultation schedule, and clinic directions.",
  alternates: {
    canonical: "https://drradhamadhabsahu.com/brochure",
  },
  openGraph: {
    title: "Official Practice Brochure • E.N.T. & Cancer Super-Speciality Clinic",
    description:
      "Official practice brochure of Dr. Radhamadhab Sahu detailing 17 symptoms, 22 super-speciality procedures, and consultation timings in Ghatikia, Bhubaneswar.",
    url: "https://drradhamadhabsahu.com/brochure",
    images: [
      {
        url: "/images/clinic-official-brochure.jpg",
        width: 1088,
        height: 1445,
        alt: "Official Clinical Practice Brochure - Dr. Radhamadhab Sahu",
      },
    ],
  },
};

export default function BrochurePage() {
  const breadcrumbItems = [
    { name: "Official Clinic Brochure", url: "/brochure" },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Header Section - Medium, Clean & Spacious */}
      <section className="bg-gradient-to-b from-[#0B2545] to-[#081B33] text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Official Clinical Practice Brochure &bull; Ghatikia, Bhubaneswar</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              E.N.T. &amp; Cancer <span className="text-teal-300">Super-Speciality Clinic</span>
            </h1>
            <p className="inline-block px-3 py-1 rounded-md bg-teal-900/60 border border-teal-500/30 text-xs sm:text-sm font-semibold text-teal-200 uppercase tracking-wider">
              Skull Base Surgery Head &amp; Neck Cancer Center
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Official clinical brochure of Dr. Radhamadhab Sahu at K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar. Verified consultation hours, 17 clinical consultation indicators, and 22 advanced surgical care services.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
            <a
              href="/images/ent-cancer-clinic-care-poster.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg text-center"
            >
              <FileText className="w-4 h-4 text-slate-950 shrink-0" />
              <span>See Care Poster (High-Res)</span>
            </a>
            <a
              href={DOCTOR.clinic.telLink}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all text-center"
            >
              <Phone className="w-4 h-4 text-teal-300 shrink-0" />
              <span>Call Clinic: {DOCTOR.clinic.telephoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all text-center"
            >
              <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
              <span>Directions &amp; Map</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Spacious Content Canvas */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10">

        {/* Top Grid: Medium Document Preview & Doctor Profile + Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left Column: Medium Brochure Document Card */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#14746F] shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Original Printed Brochure
                  </span>
                </div>
                <span className="text-[10px] bg-teal-50 text-[#14746F] border border-teal-200 px-2 py-0.5 rounded font-bold">
                  Official Scan
                </span>
              </div>

              {/* Medium document frame */}
              <div className="relative aspect-[3/4] max-h-[380px] w-full mx-auto rounded-xl overflow-hidden bg-slate-900 border border-slate-200 group shadow-inner">
                <Image
                  src="/images/clinic-official-brochure.jpg"
                  alt="Official printed brochure of E.N.T. & Cancer Super-Speciality Clinic issued by Dr. Radhamadhab Sahu"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                  <a
                    href="/images/clinic-official-brochure.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-slate-900 font-bold text-xs shadow-md hover:bg-teal-50 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>Open Full Scan</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-[#0B2545] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#14746F] shrink-0" />
                  <span>E.N.T. &amp; Cancer Super-Speciality Clinic</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar 751003
                </p>
                <div className="pt-1.5 flex items-center justify-between text-[11px]">
                  <a
                    href="/images/clinic-official-brochure.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#14746F] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View Scan &rarr;</span>
                  </a>
                  <a
                    href={DOCTOR.clinic.telLink}
                    className="text-[#0B2545] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#14746F]" />
                    <span>{DOCTOR.clinic.telephoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Profile + Consultation Schedule */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">

            {/* Doctor Profile Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#14746F] shrink-0 shadow-sm bg-slate-100">
                  <Image
                    src={DOCTOR.portraitUrl}
                    alt={DOCTOR.portraitAlt}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-50 text-[#14746F] text-[10px] font-bold border border-teal-200">
                    <Award className="w-3 h-3 shrink-0" />
                    <span>Senior Consultant &amp; Head of Department</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    {DOCTOR.name}
                  </h2>
                  <p className="text-xs font-bold text-[#14746F]">
                    MBBS, DNB ENT (VMMC &amp; Safdarjung Hospital, New Delhi)
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1 pt-0.5">
                    <li className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                      <span>ENT &amp; Skull Base Surgeon, VMMC &amp; Safdarjung Hospital, New Delhi</span>
                    </li>
                    <li className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                      <span>Senior Consultant ENT &amp; Skull Base Surgery, Paras Healthcare Pvt. Ltd., Gurgaon</span>
                    </li>
                    <li className="flex items-center gap-1.5 justify-center sm:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                      <span>Senior Consultant &amp; HOD, ENT &amp; Skull Base Surgery, SUM Ultimate Medicare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consultation Timings Board */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0B2545] text-white space-y-3.5 shadow-md border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300">
                      Consultation Timings
                    </h3>
                    <p className="text-[9px] text-slate-400 tracking-wider uppercase">
                      Official Clinic Schedule &bull; Ghatikia
                    </p>
                  </div>
                </div>
                <span className="text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full font-bold">
                  Walk-in / Prior Booking
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 space-y-0.5">
                  <span className="block text-[10px] font-bold text-slate-300 uppercase">
                    MON &ndash; SAT (MORNING)
                  </span>
                  <span className="block text-base sm:text-lg font-black text-teal-300">
                    8 AM &ndash; 11 AM
                  </span>
                  <span className="block text-[9px] text-slate-400">Regular Outpatient Diagnostic OPD</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 space-y-0.5">
                  <span className="block text-[10px] font-bold text-slate-300 uppercase">
                    MON &ndash; SAT (EVENING)
                  </span>
                  <span className="block text-base sm:text-lg font-black text-teal-300">
                    6 PM &ndash; 9 PM
                  </span>
                  <span className="block text-[9px] text-slate-400">Evening Consultation &amp; Post-Op</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 space-y-0.5 text-center">
                <span className="block text-[10px] font-bold text-slate-300 uppercase">
                  SUNDAY (MORNING)
                </span>
                <span className="block text-base sm:text-lg font-black text-amber-300">
                  8 AM &ndash; 12:30 PM
                </span>
                <span className="block text-[9px] text-slate-400">Sunday Specialized Clinical Clinic</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-1 text-xs border-t border-slate-700/80 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>K8/118 Ghatikia Main Road, Kalinga Nagar</span>
                </div>
                <a
                  href={DOCTOR.clinic.telLink}
                  className="font-bold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1 text-xs"
                >
                  <Phone className="w-3 h-3" />
                  <span>{DOCTOR.clinic.telephoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Section: 17 Clinical Consultation Indicators - Spacious 3-Column Grid */}
        <section className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Clinical Consultation Indicators</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-[#0B2545]">
              Consult Dr. RADHAMADHAB SAHU If You Have The Following Symptoms:
            </h2>
            <p className="text-xs text-slate-500">
              Documented symptom directory from the official printed clinic brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {DOCTOR.clinic.brochureSymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 hover:border-[#14746F] hover:bg-teal-50/30 transition-all"
              >
                <span className="w-5 h-5 rounded-full bg-teal-100 text-[#14746F] font-black text-[10px] flex items-center justify-center shrink-0 border border-teal-300">
                  {idx + 1}
                </span>
                <span className="font-semibold text-slate-800 line-clamp-2">{symptom}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/70">
            <span className="text-amber-950 font-medium text-center sm:text-left">
              Experiencing any of these symptoms? Schedule an in-person evaluation with Dr. Radhamadhab Sahu.
            </span>
            <a
              href={DOCTOR.clinic.telLink}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B2545] hover:bg-[#14746F] text-white text-xs font-semibold transition-colors shrink-0 w-full sm:w-auto text-center"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>
        </section>

        {/* Section: 22 Advanced Care Services - Spacious 3-Column Grid */}
        <section className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3 space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14746F] uppercase tracking-wide">
              <Stethoscope className="w-4 h-4 text-[#14746F] shrink-0" />
              <span>Super-Speciality Procedures</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-[#0B2545]">
              ADVANCED CARE &ndash; Surgical &amp; Interventional Directory
            </h2>
            <p className="text-xs text-slate-500">
              Comprehensive procedural spectrum offered at the Skull Base Surgery Head &amp; Neck Cancer Center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {DOCTOR.clinic.brochureAdvancedCare.map((procedure, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 hover:bg-teal-50/50 hover:border-teal-300 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                <span className="font-semibold text-[#0B2545] leading-snug">
                  {procedure}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Verification & Direct Contact Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md border border-slate-800">
          <div className="flex items-center gap-3.5 w-full md:w-auto">
            <div className="relative w-12 h-16 sm:w-14 sm:h-18 rounded-lg overflow-hidden border border-slate-700 shrink-0 bg-slate-800">
              <Image
                src="/images/clinic-official-brochure.jpg"
                alt="Authentic printed brochure of E.N.T. & Cancer Super-Speciality Clinic"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider block">
                Verified Printed Practice Brochure
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                E.N.T. &amp; Cancer Super-Speciality Clinic
              </h3>
              <p className="text-[11px] text-slate-400">
                K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar. Tel: {DOCTOR.clinic.telephoneDisplay}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            <a
              href="/images/ent-cancer-clinic-care-poster.png"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs text-center transition-colors shadow-xs"
            >
              See Care Poster &rarr;
            </a>
            <a
              href={DOCTOR.clinic.telLink}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs text-center transition-colors"
            >
              Call Clinic Direct
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs text-center transition-colors"
            >
              View Map
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
