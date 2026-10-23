import Image from "next/image";
import Link from "next/link";
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
  AlertCircle,
  Calendar,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RealisticMapViewer from "@/components/RealisticMapViewer";
import { DOCTOR } from "@/lib/doctor";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact & Appointments | Dr. Radhamadhab Sahu (Bhubaneswar)",
  description:
    "Consultation schedules, addresses, and telephone appointment details for Dr. Radhamadhab Sahu at SUM Ultimate Medicare and Dr. Radhamadhab ENT & Cancer Clinic, Bhubaneswar.",
  pathname: "/contact",
  keywords: [
    "Dr Radhamadhab Sahu contact",
    "SUM Ultimate Medicare ENT appointment",
    "Dr Radhamadhab ENT and Cancer Clinic phone",
    "ENT clinic Ghatikia Bhubaneswar",
    "ENT doctor phone number Bhubaneswar",
  ],
});

export default function ContactPage() {
  const breadcrumbItems = [{ name: "Contact & Appointments", url: "/contact" }];

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Header */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-3 space-y-3">
            <span className="medical-badge">
              Clinical Access &amp; Locations
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight">
              Contact &amp; Appointment Scheduling
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu sees patients at two distinct clinical centers in Kalinga Nagar, Bhubaneswar. Please review the consultation hours and direct telephone numbers below to connect with the right desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Body */}
      <section className="py-14 sm:py-20">
        <div className="medical-container space-y-12">
          {/* Important Notice Regarding Appointments */}
          <div className="p-5 rounded-2xl bg-[#EDF4FA] border border-[#D5E5F2] flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#0B2545] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <strong className="text-[#0B2545] font-semibold block">
                Direct Telephone &amp; Portal Booking Notice:
              </strong>
              <p>
                In compliance with patient care integrity, we do not utilize automated dummy forms that falsely claim an appointment is booked. Appointments must be confirmed directly with the hospital desk or the clinic reception using the verified telephone lines below.
              </p>
            </div>
          </div>

          {/* Dual Locations & Details with Realistic Map Thumbnails */}
          <ContactDetails />

          {/* Clinic Interior & Consultation Environment Showcase */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <span className="medical-badge">
                Consultation Facility Tour
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                Inside Dr. Radhamadhab Sahu’s Consultation Chamber
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                Experience the patient-centered clinical consultation suite at Ghatikia Main Road, Kalinga Nagar — equipped with diagnostic otology units, high-magnification loupes, and national surgical recognitions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Image 1: Full Chamber & Awards */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/clinic-head-silhouette-awards-wall.jpg"
                    alt="Dr. Radhamadhab Sahu consultation chamber and head silhouette awards wall"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Consultation Room
                  </div>
                </div>
                <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#0B2545]">
                    Head Silhouette Honors Wall
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Iconic head silhouette honors wall &amp; patient consultation desk at Ghatikia clinic.
                  </p>
                </div>
              </div>

              {/* Image 2: Official Practice Brochure */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-slate-900">
                  <Image
                    src="/images/clinic-official-brochure.jpg"
                    alt="Official printed brochure of E.N.T. & Cancer Super-Speciality Clinic"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Official Care Guide
                  </div>
                </div>
                <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#0B2545]">
                    Official Clinic Brochure
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Printed practice brochure detailing 17 symptoms, 22 procedures, and active hours.
                  </p>
                </div>
              </div>

              {/* Image 3: National Faculty Honors */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/clinic-national-honors-awards.jpg"
                    alt="National otolaryngology surgical honors and conclave trophies"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    National Recognition
                  </div>
                </div>
                <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#0B2545]">
                    Faculty Honors &amp; Conclaves
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    MENTCON, AOICON, Jewels of Odisha, and ENT Conclave citations.
                  </p>
                </div>
              </div>

              {/* Image 4: Google Maps Verified Banner */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/google-maps-clinic-banner.jpg"
                    alt="Official Google Maps verified clinic listing card"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Google Maps Verified
                  </div>
                </div>
                <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#0B2545]">
                    Verified Practice Profile
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Verified listing at K8 Kalinga Nagar with 4.9★ rating from 980+ patient reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic Digital Map Viewer Section */}
          <RealisticMapViewer />
        </div>
      </section>
    </div>
  );
}
