import {
  Phone,
  MapPin,
  Clock,
  Building2,
  Stethoscope,
  ExternalLink,
  Navigation,
  FileCheck,
  ShieldAlert,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function ContactDetails() {
  return (
    <div className="space-y-12">
      {/* Two Location Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hospital: SUM Ultimate Medicare */}
        <div className="medical-card p-6 sm:p-8 border-2 border-slate-200 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF4FA] text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Quaternary Care Center</span>
              </span>
              <h3 className="text-2xl font-bold text-[#0B2545]">
                SUM Ultimate Medicare
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Department of ENT and Skull Base Surgery
              </p>
            </div>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">Hospital Address:</strong>
                <p className="text-slate-600">
                  K-8, Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">OPD Timings:</strong>
                <p className="text-slate-600">
                  9:30 AM to 5:30 PM (Monday – Saturday)
                </p>
                <p className="text-[11px] text-slate-500">
                  *Closed on Sundays and hospital public holidays
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">Appointment Desk &amp; EPABX:</strong>
                <a
                  href={DOCTOR.hospital.telLink}
                  className="text-[#14746F] font-bold text-base hover:underline block"
                >
                  {DOCTOR.hospital.telephoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={DOCTOR.hospital.telLink}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white text-xs sm:text-sm font-semibold hover:bg-[#14746F] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hospital Desk</span>
            </a>

            <a
              href={DOCTOR.hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#14746F]" />
              <span>Directions</span>
            </a>
          </div>
        </div>

        {/* Private Clinic: Dr. Radhamadhab ENT and Cancer Clinic */}
        <div className="medical-card p-6 sm:p-8 border-2 border-slate-200 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4F3] text-[#14746F] text-xs font-bold uppercase tracking-wider mb-2">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Private Consultation Clinic</span>
              </span>
              <h3 className="text-2xl font-bold text-[#0B2545]">
                Dr. Radhamadhab ENT and Cancer Clinic
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Personalized Consultation &amp; Second Opinions
              </p>
            </div>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">Clinic Address:</strong>
                <p className="text-slate-600">
                  K8/118, Ghatikia Main Road, Kalinga Nagar, Bhubaneswar, Odisha 751003
                </p>
                <p className="text-[11px] text-slate-500">
                  (Near Ghatikia Main Road / Mahalaxmi Vihar / IGKC Road area)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">Clinic Consultation Hours:</strong>
                <p className="text-slate-600">
                  Evening Consultation Sessions (Monday – Saturday)
                </p>
                <p className="text-[11px] text-amber-700 font-medium">
                  *Please call prior to arriving to confirm active clinic timing and slot.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B2545] block font-semibold">Clinic Telephone:</strong>
                <a
                  href={DOCTOR.clinic.telLink}
                  className="text-[#14746F] font-bold text-base hover:underline block"
                >
                  {DOCTOR.clinic.telephoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={DOCTOR.clinic.telLink}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14746F] text-white text-xs sm:text-sm font-semibold hover:bg-[#0F5E59] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic to Book</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr.+Radhamadhab+ENT+and+Cancer+Clinic+Ghatikia+Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#14746F]" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Patient Checklist & Protocol */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
        <h4 className="text-lg font-bold text-[#0B2545] flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-[#14746F]" />
          <span>Patient Checklist for Your Consultation</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
          <div className="space-y-1.5">
            <strong className="text-[#0B2545] block font-semibold">1. Diagnostic Scans</strong>
            <p>
              Bring physical films and digital CD/flash-drive copies of all previous CT PNS, Brain/Pituitary MRI, or Neck scans.
            </p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-[#0B2545] block font-semibold">2. Hearing &amp; Endoscopy Records</strong>
            <p>
              Carry prior Pure Tone Audiometry (PTA) audiograms, tympanometry graphs, or video-endoscopy photographs if previously performed.
            </p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-[#0B2545] block font-semibold">3. Medical History &amp; Medications</strong>
            <p>
              Prepare a list of all current prescription medicines, nasal sprays, inhalers, blood-thinners, and relevant allergy history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
