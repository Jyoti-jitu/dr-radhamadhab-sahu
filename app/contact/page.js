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

          {/* Realistic Digital Map Viewer Section */}
          <RealisticMapViewer />
        </div>
      </section>
    </div>
  );
}
