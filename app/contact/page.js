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
  title: "Where to Consult & Book Appointments | Dr. Radhamadhab Sahu (Bhubaneswar)",
  description:
    "Where to consult Dr. Radhamadhab Sahu in Bhubaneswar: Consultation schedules, OPD timings, direct phone numbers, and addresses for SUM Ultimate Medicare and Dr. Radhamadhab ENT & Cancer Clinic, Ghatikia.",
  pathname: "/contact",
  keywords: [
    "Where to consult an ENT specialist in Bhubaneswar",
    "Dr Radhamadhab Sahu contact",
    "SUM Ultimate Medicare ENT appointment",
    "Dr Radhamadhab ENT and Cancer Clinic phone",
    "ENT clinic Ghatikia Bhubaneswar",
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

          {/* Local Clinical Neighborhood Directory & Geographic Clarity */}
          <div className="medical-card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl space-y-4">
            <div className="space-y-1.5">
              <span className="text-[11px] sm:text-xs font-bold text-[#14746F] uppercase tracking-wider">
                Geographic Accessibility &amp; Practice Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                Consulting Locations for Bhubaneswar &amp; Odisha Patients
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Dr. Radhamadhab Sahu serves patients seeking advanced otolaryngology, endoscopic sinus care (FESS), scarless thyroidectomy (TOETVA), otology, and minimally invasive skull base surgery across the capital region. For patients traveling from nearby residential and commercial hubs&mdash;including <strong>Kalinga Nagar, Ghatikia, Khandagiri, Nayapalli, Jayadev Vihar, Chandrasekharpur, and Patia</strong>&mdash;both clinical locations are strategically situated on the primary K-8 corridor of Ghatikia Main Road, avoiding central urban congestion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B2545] flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#14746F]" />
                  <span>SUM Ultimate Medicare (Quaternary Inpatient &amp; Day OPD)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Best suited for complex skull base admissions, surgical procedures under general anesthesia, cochlear implantations, pediatric airway foreign body emergencies, and comprehensive multi-specialty evaluations.
                </p>
                <div className="text-[11px] font-semibold text-[#0B2545]">
                  OPD Schedule: Mon &ndash; Sat: 9:30 AM &ndash; 5:30 PM
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B2545] flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-[#14746F]" />
                  <span>Dr. Radhamadhab ENT &amp; Cancer Clinic (Private Outpatient)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated morning and evening private consultation chamber for in-depth clinical reviews, rigid diagnostic nasal endoscopy, video stroboscopy voice evaluations, and scheduled surgical follow-ups.
                </p>
                <div className="text-[11px] font-semibold text-[#0B2545]">
                  Clinic Schedule: Mon &ndash; Sat: 8:00&ndash;11:00 AM &amp; 6:00&ndash;9:00 PM | Sun: 8:00 AM&ndash;12:30 PM
                </div>
              </div>
            </div>
          </div>

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

              {/* Image 2: Consultation & Diagnostic Suite */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/dr-sahu-patient-consultation.jpg"
                    alt="Dr. Radhamadhab Sahu conducting clinical diagnostic consultation in his chamber"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Clinical Consultation
                  </div>
                </div>
                <div className="p-3.5 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-xs font-bold text-[#0B2545]">
                    Consultation &amp; Diagnostic Suite
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Personalized diagnostic consultation and endoscopic symptom review with Dr. Radhamadhab Sahu.
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
