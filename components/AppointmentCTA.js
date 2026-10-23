import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Building2,
  Stethoscope,
  ExternalLink,
  Clock,
  MapPin,
  FileText,
  AlertCircle,
  Navigation,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function AppointmentCTA({ variant = "full" }) {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-14 sm:py-20 border-t border-slate-200">
      <div className="medical-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4FA] text-[#0B2545] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#14746F]" />
            <span>Consultation &amp; Appointments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Schedule Your Clinical Consultation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Dr. Radhamadhab Sahu consults across two authorized clinical centers in Kalinga Nagar, Bhubaneswar. Choose your preferred care setting below to connect directly with the respective appointment desk.
          </p>
        </div>

        {/* Dual Care Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Hospital Outpatient & Surgeries (SUM Ultimate Medicare) */}
          <div className="medical-card p-6 sm:p-8 flex flex-col justify-between border-2 border-slate-200 hover:border-[#0B2545]/40 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-xl bg-[#EDF4FA] text-[#0B2545]">
                  <Building2 className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] bg-slate-100 px-3 py-1 rounded-full">
                  Quaternary Hospital OPD
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B2545]">
                  SUM Ultimate Medicare
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Department of ENT and Skull Base Surgery
                </p>
              </div>

              {/* Realistic Map Preview Badge */}
              <div className="relative aspect-[16/7] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <Image
                  src="/images/map-sum-ultimate-medicare.jpg"
                  alt="Satellite GPS Map of SUM Ultimate Medicare, Ghatikia"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-semibold bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded-md">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>K-8, Ghatikia Main Road</span>
                  </span>
                  <span className="text-teal-300">GPS Map</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Primary venue for comprehensive outpatient evaluations, in-hospital endoscopies, neurosurgical skull base surgeries, and inpatient surgical care.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                  <span>K-8, Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultation Hours:</strong> 9:30 AM – 5:30 PM (Monday – Saturday; Closed Sundays &amp; Public Holidays)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Hospital */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              <a
                href={DOCTOR.hospital.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white text-xs sm:text-sm font-semibold hover:bg-[#14746F] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hospital EPABX: {DOCTOR.hospital.telephoneDisplay}</span>
              </a>

              <a
                href={DOCTOR.hospital.officialBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                <span>Book on Hospital Portal / App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Private Specialist Clinic */}
          <div className="medical-card p-6 sm:p-8 flex flex-col justify-between border-2 border-slate-200 hover:border-[#14746F]/40 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-xl bg-[#E6F4F3] text-[#14746F]">
                  <Stethoscope className="w-6 h-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#14746F] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Private Clinic
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B2545]">
                  Dr. Radhamadhab ENT and Cancer Clinic
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Specialist Consultation &amp; Second Opinions
                </p>
              </div>

              {/* Realistic Map Preview Badge */}
              <div className="relative aspect-[16/7] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <Image
                  src="/images/map-clinic-kalinga-nagar.jpg"
                  alt="Realistic Road Map of Dr. Radhamadhab ENT and Cancer Clinic, Ghatikia"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-semibold bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded-md">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-teal-400" />
                    <span>Plot K8/118, Ghatikia Main Road</span>
                  </span>
                  <span className="text-teal-300">Street Map</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated private clinic for personalized ENT assessments, endoscopic examinations, post-operative surgical reviews, and surgical consultations.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                  <span>K8/118, Ghatikia Main Road, Kalinga Nagar, Bhubaneswar, Odisha 751003</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Consultation Hours:</strong> Evening Sessions (Prior telephone confirmation required)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Clinic */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              <a
                href={DOCTOR.clinic.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14746F] text-white text-xs sm:text-sm font-semibold hover:bg-[#0F5E59] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic Direct: {DOCTOR.clinic.telephoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                <span>View Full Directions &amp; Satellite Map</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Patient Appointment Instructions Box */}
        <div className="max-w-5xl mx-auto mt-10 p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#0B2545]">
            <FileText className="w-4 h-4 text-[#14746F]" />
            <span>Important Guidelines for Your Visit:</span>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            To ensure thorough evaluation, please bring all previous medical records, recent blood reports, radiological imaging films/CDs (CT scans or MRI scans of the brain, sinuses, or neck), and any existing audiometry / hearing tests.
          </p>
        </div>
      </div>
    </section>
  );
}
