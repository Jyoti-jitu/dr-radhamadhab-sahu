import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ShieldAlert,
  GraduationCap,
  Award,
  ChevronRight,
  Building2,
  ExternalLink,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";
import { SPECIALTIES } from "@/lib/specialties";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#081B33] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="medical-container">
        {/* Emergency Alert Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-100 font-semibold">Medical Emergency Notice:</strong> If you or a loved one is experiencing acute airway distress, foreign body choking, massive epistaxis (nose bleeding), or sudden neurological deficit, please proceed directly to the 24/7 Emergency Care Center at SUM Ultimate Medicare or dial hospital emergency.
            </p>
          </div>
          <a
            href={`tel:${DOCTOR.hospital.ambulanceTelephone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency: {DOCTOR.hospital.ambulanceTelephone}</span>
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Clinician Profile */}
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold text-white tracking-tight">
                Dr. Radhamadhab Sahu
              </p>
              <p className="text-xs text-teal-300 font-medium">
                MBBS, DNB (Otorhinolaryngology / ENT)
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Senior Consultant &amp; Head of Department, ENT &amp; Skull Base Surgery
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Internationally recognized ENT and Endoscopic Skull Base Surgeon with 3 years of specialized neurosurgical skull base training at Safdarjung Hospital, New Delhi. Dedicated to patient-first, evidence-grounded surgical care.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" />
                <span>SCB Medical College &amp; VMMC Safdarjung Hospital</span>
              </div>
            </div>
          </div>

          {/* Column 2: Speciality Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Clinical Specialities
            </p>
            <ul className="space-y-2.5 text-xs">
              {SPECIALTIES.map((spec) => (
                <li key={spec.slug}>
                  <Link
                    href={`/specialities/${spec.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{spec.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/specialities"
                  className="text-teal-400 hover:text-teal-300 font-semibold pt-1 inline-block"
                >
                  View All Clinical Capabilities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Care Locations */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Consultation Centers
            </p>
            <div className="space-y-4 text-xs">
              {/* Hospital */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>SUM Ultimate Medicare</span>
                </p>
                <p className="text-slate-400">
                  K-8, Kalinga Nagar, Ghatikia, Bhubaneswar, 751003
                </p>
                <p className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>9:30 AM – 5:30 PM (Mon–Sat)</span>
                </p>
                <a
                  href={DOCTOR.hospital.telLink}
                  className="text-teal-300 hover:underline inline-flex items-center gap-1 font-medium pt-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>EPABX: {DOCTOR.hospital.telephoneDisplay}</span>
                </a>
              </div>

              {/* Private Clinic */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <p className="font-semibold text-white">
                  Dr. Radhamadhab ENT &amp; Cancer Clinic
                </p>
                <p className="text-slate-400">
                  K8/118, Ghatikia Main Road, Kalinga Nagar, Bhubaneswar
                </p>
                <p className="text-slate-400">
                  Evening Consultations by Appointment
                </p>
                <a
                  href={DOCTOR.clinic.telLink}
                  className="text-teal-300 hover:underline inline-flex items-center gap-1 font-medium pt-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Direct: {DOCTOR.clinic.telephoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links & Patient Support */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Patient Care &amp; Trust
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Biography &amp; Career History
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Academic Papers &amp; Media Coverage
                </Link>
              </li>
              <li>
                <Link href="/patient-resources" className="hover:text-white transition-colors">
                  Patient Health Resources &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="hover:text-white transition-colors">
                  Official Practice Brochure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Appointment Desk &amp; Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy &amp; Data Ethics
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={DOCTOR.hospital.officialBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-800/80 hover:bg-teal-700 text-teal-100 font-medium transition-colors"
                >
                  <span>Hospital Profile &amp; App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Medical Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>Medical Notice:</strong> Information on this website is prepared for general public health awareness, anatomical education, and clinical transparency. It does not replace individualized clinical examination, diagnosis, or personalized therapeutic recommendations by a licensed medical practitioner. No outcome is guaranteed, and medical treatment choices depend upon specific diagnostic examinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <p>
              &copy; {currentYear} Dr. Radhamadhab Sahu · All clinical credentials verified via SUM Ultimate Medicare and peer-reviewed surgical registries.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
                Medical Disclaimer
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Contact &amp; Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
