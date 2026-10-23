import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  Stethoscope,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  FileText,
  Calendar,
  Building2,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function ClinicBrochureCareGuide() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="medical-container">
        {/* Main Super-Speciality Clinic Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xl overflow-hidden">
          {/* Header Banner with Small Brochure Preview */}
          <div className="bg-[#0B2545] text-white p-4 sm:p-6 lg:p-10 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="max-w-3xl space-y-2.5 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Official Practice Brochure &bull; Ghatikia, Bhubaneswar</span>
                </div>
                <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                  E.N.T. &amp; Cancer <span className="text-teal-300">Super-Speciality Clinic</span>
                </h2>
                <div className="inline-block px-3 py-1 rounded-lg bg-teal-900/60 border border-teal-500/40 text-[11px] sm:text-sm font-bold text-teal-200 uppercase tracking-widest">
                  Skull Base Surgery Head &amp; Neck Cancer Center
                </div>
                <p className="text-xs sm:text-sm text-slate-300 pt-0.5 max-w-2xl leading-relaxed">
                  Official clinical practice brochure of Dr. Radhamadhab Sahu at K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                  <a
                    href="/images/ent-cancer-clinic-care-poster.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
                  >
                    <FileText className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>See ENT &amp; Cancer Clinic Care Poster</span>
                  </a>
                  <Link
                    href="/brochure"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all w-full sm:w-auto text-center"
                  >
                    <span>Full Brochure Page &rarr;</span>
                  </Link>
                  <a
                    href={DOCTOR.clinic.telLink}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all w-full sm:w-auto text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                    <span>Call: {DOCTOR.clinic.telephoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Small Preview of Brochure */}
              <div className="shrink-0 flex flex-col items-center gap-2 pt-2 lg:pt-0">
                <a
                  href="/images/ent-cancer-clinic-care-poster.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-teal-400/50 shadow-2xl bg-slate-900 transition-all hover:scale-105 hover:border-teal-300"
                  title="Click to see full ENT & Cancer Clinic Care Poster"
                >
                  <Image
                    src="/images/clinic-official-brochure.jpg"
                    alt="Small preview of official ENT & Cancer Clinic Care Poster"
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                      Click to View
                    </span>
                    <span className="text-[9px] text-white">Full Poster</span>
                  </div>
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-slate-950/80 backdrop-blur-xs px-1.5 py-0.5 rounded text-[8px] font-bold text-teal-300 text-center truncate border border-teal-500/30">
                    Clinic Brochure
                  </div>
                </a>
                <span className="text-[10px] text-slate-300 font-medium tracking-wide">
                  Small Preview &bull; Click to Enlarge
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-10 bg-white">
            {/* Top Doctor Profile & Schedule Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              {/* Doctor Details */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#14746F] shrink-0 shadow-md bg-slate-100">
                  <Image
                    src={DOCTOR.portraitUrl}
                    alt={DOCTOR.portraitAlt}
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-lg sm:text-2xl font-black text-[#0B2545]">
                    {DOCTOR.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#14746F]">
                    MBBS, DNB ENT (VMMC &amp; Safdarjung Hospital, New Delhi)
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1 pt-1">
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

              {/* Consultation Timings Board (Reproduced directly from the brochure) */}
              <div className="lg:col-span-5 w-full">
                <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0B2545] text-white space-y-3 shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                        Consultation Timings
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                      Official Schedule
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                      <span className="block text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase">
                        MON &ndash; SAT (MORNING)
                      </span>
                      <span className="block text-sm sm:text-lg font-black text-teal-300">
                        8 AM &ndash; 11 AM
                      </span>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                      <span className="block text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase">
                        MON &ndash; SAT (EVENING)
                      </span>
                      <span className="block text-sm sm:text-lg font-black text-teal-300">
                        6 PM &ndash; 9 PM
                      </span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                    <span className="block text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase">
                      SUNDAY (MORNING)
                    </span>
                    <span className="block text-sm sm:text-lg font-black text-amber-300">
                      8 AM &ndash; 12:30 PM
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-1 pt-1 text-[11px] text-slate-300 text-center sm:text-left">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>K8/118 Ghatikia Main Road</span>
                    </span>
                    <a
                      href={DOCTOR.clinic.telLink}
                      className="font-bold text-teal-300 hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 shrink-0" />
                      <span>{DOCTOR.clinic.telephoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-Column Grid: Symptoms vs. Advanced Care Spectrum */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: 17 Symptoms Checklist */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 space-y-4">
                <div className="border-b border-slate-200 pb-3 space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Clinical Consultation Indicators</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545] leading-snug">
                    Consult Dr. RADHAMADHAB SAHU If You Have The Following Symptoms:
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Documented symptom directory from the official printed clinic brochure.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {DOCTOR.clinic.brochureSymptoms.map((symptom, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-800 hover:border-[#14746F] transition-colors"
                    >
                      <span className="w-4 h-4 rounded-full bg-teal-50 text-[#14746F] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                        {idx + 1}
                      </span>
                      <span className="font-medium">{symptom}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={DOCTOR.clinic.telLink}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#14746F] transition-colors shadow-sm text-center"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Symptom Evaluation</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 22 Advanced Care Services */}
              <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 space-y-4 shadow-sm">
                <div className="border-b border-slate-200 pb-3 space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14746F] uppercase tracking-wide">
                    <Stethoscope className="w-4 h-4 text-[#14746F] shrink-0" />
                    <span>Super-Speciality Procedures</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545] leading-snug">
                    ADVANCED CARE &ndash; Surgical &amp; Interventional Directory
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Comprehensive procedural spectrum offered at the Skull Base Surgery Head &amp; Neck Cancer Center.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DOCTOR.clinic.brochureAdvancedCare.map((procedure, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/80 text-xs text-slate-800 hover:bg-teal-50/50 hover:border-teal-300 transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0B2545]">{procedure}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      Original printed clinic brochure issued by <strong>Dr. Radhamadhab Sahu</strong>.
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 font-bold text-[#14746F] hover:underline flex items-center gap-1"
                  >
                    <span>View Map &amp; Clinic Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Authentic Printed Brochure Preview Bar */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
                <div className="relative w-14 h-18 sm:w-16 sm:h-20 rounded-lg overflow-hidden border border-slate-700 shrink-0 bg-slate-800 shadow-md">
                  <Image
                    src="/images/clinic-official-brochure.jpg"
                    alt="Authentic printed brochure of E.N.T. & Cancer Super-Speciality Clinic"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest block">
                    Authentic Documentation
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Verified Printed Clinic Brochure
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    E.N.T. &amp; Cancer Super-Speciality Clinic &bull; K8/118 Ghatikia Main Road, Kalinga Nagar, Bhubaneswar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
                <a
                  href="/images/ent-cancer-clinic-care-poster.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs text-center transition-colors shadow-xs"
                >
                  See ENT &amp; Cancer Clinic Care Poster &rarr;
                </a>
                <Link
                  href="/brochure"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs text-center transition-colors"
                >
                  Full Brochure Page
                </Link>
                <a
                  href={DOCTOR.clinic.telLink}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs text-center transition-colors"
                >
                  Call: {DOCTOR.clinic.telephoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
