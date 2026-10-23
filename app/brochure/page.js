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
  Download,
  Building2,
  Award,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
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
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-b from-[#0B2545] to-[#081B33] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="medical-container relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Practice Brochure &bull; Ghatikia, Bhubaneswar</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              E.N.T. &amp; Cancer <span className="text-teal-300">Super-Speciality Clinic</span>
            </h1>
            <p className="inline-block px-3.5 py-1.5 rounded-lg bg-teal-900/60 border border-teal-500/40 text-xs sm:text-base font-bold text-teal-200 uppercase tracking-widest">
              Skull Base Surgery Head &amp; Neck Cancer Center
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Official clinical practice brochure of Dr. Radhamadhab Sahu at K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar. Detailing verified consultation hours, 17 diagnostic symptom indicators, and 22 advanced surgical care services.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={DOCTOR.clinic.telLink}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic: {DOCTOR.clinic.telephoneDisplay}</span>
            </a>
            <a
              href="/images/clinic-official-brochure.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <ExternalLink className="w-4 h-4 text-teal-300" />
              <span>View Full Brochure Image &rarr;</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-teal-300" />
              <span>View Map &amp; Clinic Directions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="medical-container space-y-12">

          {/* Top Grid: High-Res Original Poster Display + Doctor Qualifications & Timings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Column Left: Visual Master Poster Display */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#14746F]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                      Original Printed Clinic Brochure
                    </span>
                  </div>
                  <span className="text-[10px] bg-teal-50 text-[#14746F] border border-teal-200 px-2 py-0.5 rounded font-bold">
                    Official Scan
                  </span>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-200 group">
                  <Image
                    src="/images/clinic-official-brochure.jpg"
                    alt="Official printed brochure of E.N.T. & Cancer Super-Speciality Clinic issued by Dr. Radhamadhab Sahu"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <a
                      href="/images/clinic-official-brochure.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-teal-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-[#14746F]" />
                      <span>Open Full-Resolution Scan</span>
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <p className="font-semibold text-[#0B2545] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>E.N.T. &amp; Cancer Super-Speciality Clinic</span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar, Odisha 751003
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="/images/clinic-official-brochure.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#14746F] hover:underline font-bold text-[11px] inline-flex items-center gap-1"
                    >
                      <span>View Full Brochure Image &rarr;</span>
                    </a>
                    <a
                      href={DOCTOR.clinic.telLink}
                      className="text-[#0B2545] hover:underline font-bold text-[11px] inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#14746F]" />
                      <span>{DOCTOR.clinic.telephoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: Doctor Profile + Consultation Schedule */}
            <div className="lg:col-span-7 space-y-6">

              {/* Doctor Profile Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#14746F] shrink-0 shadow-md bg-slate-100">
                    <Image
                      src={DOCTOR.portraitUrl}
                      alt={DOCTOR.portraitAlt}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-[#14746F] text-[11px] font-bold border border-teal-200">
                      <Award className="w-3 h-3" />
                      <span>Senior Consultant &amp; Head of Department</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545]">
                      {DOCTOR.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-[#14746F]">
                      MBBS, DNB ENT (VMMC &amp; Safdarjung Hospital, New Delhi)
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                      <li className="flex items-center gap-2 justify-center sm:justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                        <span>ENT &amp; Skull Base Surgeon, VMMC &amp; Safdarjung Hospital, New Delhi</span>
                      </li>
                      <li className="flex items-center gap-2 justify-center sm:justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                        <span>Senior Consultant ENT &amp; Skull Base Surgery, Paras Healthcare Pvt. Ltd., Gurgaon</span>
                      </li>
                      <li className="flex items-center gap-2 justify-center sm:justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14746F] shrink-0" />
                        <span>Senior Consultant &amp; HOD, ENT &amp; Skull Base Surgery, SUM Ultimate Medicare</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consultation Timings Board (Reproduced verbatim from brochure) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0B2545] text-white space-y-5 shadow-xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-teal-300">
                        Consultation Timings
                      </h3>
                      <p className="text-[10px] text-slate-400 tracking-widest uppercase">
                        Official Schedule &bull; Ghatikia Clinic
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2.5 py-1 rounded-full font-bold">
                    Walk-in / Prior Booking
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-1 text-center">
                    <span className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                      MON &ndash; SAT (MORNING)
                    </span>
                    <span className="block text-xl sm:text-2xl font-black text-teal-300">
                      8 AM &ndash; 11 AM
                    </span>
                    <span className="block text-[10px] text-slate-400">Regular Outpatient Diagnostic OPD</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-1 text-center">
                    <span className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                      MON &ndash; SAT (EVENING)
                    </span>
                    <span className="block text-xl sm:text-2xl font-black text-teal-300">
                      6 PM &ndash; 9 PM
                    </span>
                    <span className="block text-[10px] text-slate-400">Evening Consultation &amp; Post-Op</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-1 text-center">
                  <span className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                    SUNDAY (MORNING)
                  </span>
                  <span className="block text-xl sm:text-2xl font-black text-amber-300">
                    8 AM &ndash; 12:30 PM
                  </span>
                  <span className="block text-[10px] text-slate-400">Sunday Specialized Clinical Clinic</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs border-t border-slate-700/80">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar</span>
                  </div>
                  <a
                    href={DOCTOR.clinic.telLink}
                    className="font-bold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1.5 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{DOCTOR.clinic.telephoneDisplay}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Two-Column Deep-Dive: 17 Symptoms vs 22 Procedures */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: 17 Symptoms Checklist */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-md">
              <div className="border-b border-slate-200 pb-4 space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>Clinical Consultation Indicators</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] leading-snug">
                  Consult Dr. RADHAMADHAB SAHU If You Have The Following Symptoms:
                </h3>
                <p className="text-xs text-slate-500">
                  Documented symptom directory from the official printed clinic brochure.
                </p>
              </div>

              <div className="space-y-2.5">
                {DOCTOR.clinic.brochureSymptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 hover:border-[#14746F] hover:bg-teal-50/30 transition-all"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-[#14746F] font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5 border border-teal-300">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-slate-800">{symptom}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={DOCTOR.clinic.telLink}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0B2545] hover:bg-[#14746F] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Symptom Evaluation</span>
                </a>
              </div>
            </div>

            {/* Right Column: 22 Advanced Care Services */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-md">
              <div className="border-b border-slate-200 pb-4 space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14746F] uppercase tracking-wide">
                  <Stethoscope className="w-4 h-4 text-[#14746F]" />
                  <span>Super-Speciality Procedures</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] leading-snug">
                  ADVANCED CARE &ndash; Surgical &amp; Interventional Directory
                </h3>
                <p className="text-xs text-slate-500">
                  Comprehensive procedural spectrum offered at the Skull Base Surgery Head &amp; Neck Cancer Center.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTOR.clinic.brochureAdvancedCare.map((procedure, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 hover:bg-teal-50/50 hover:border-teal-300 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#0B2545] leading-snug">
                      {procedure}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    Original printed clinic brochure issued by <strong>Dr. Radhamadhab Sahu</strong>.
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 font-bold text-[#14746F] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Map &amp; Clinic Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Authentic Printed Brochure Verification Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-slate-700 shrink-0 bg-slate-800 shadow-md">
                <Image
                  src="/images/clinic-official-brochure.jpg"
                  alt="Authentic printed brochure of E.N.T. & Cancer Super-Speciality Clinic"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">
                  Authentic Documentation
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Verified Printed Clinic Brochure
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  E.N.T. &amp; Cancer Super-Speciality Clinic &bull; K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href="/images/clinic-official-brochure.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm text-center transition-colors shadow-md"
              >
                View Full Brochure Image &rarr;
              </a>
              <a
                href={DOCTOR.clinic.telLink}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm text-center transition-colors"
              >
                Call Clinic: {DOCTOR.clinic.telephoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
}
