import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Wind,
  Ear,
  Stethoscope,
  Mic2,
  Moon,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  HelpCircle,
  FileText,
  Phone,
  Newspaper,
  BookOpen,
  Award,
} from "lucide-react";
import Hero from "@/components/Hero";
import DoctorProfile from "@/components/DoctorProfile";
import SpecialtyCard from "@/components/SpecialtyCard";
import AppointmentCTA from "@/components/AppointmentCTA";
import FAQ from "@/components/FAQ";
import PatientReviews from "@/components/PatientReviews";
import { MediaCard, PublicationCard, ConferenceCard } from "@/components/ResearchCard";
import { DOCTOR } from "@/lib/doctor";
import { SPECIALTIES } from "@/lib/specialties";

export const metadata = {
  title: "Dr. Radhamadhab Sahu | Senior ENT & Skull Base Surgeon, Bhubaneswar",
  description:
    "Official website of Dr. Radhamadhab Sahu, Senior Consultant & HOD of ENT & Skull Base Surgery at SUM Ultimate Medicare and Dr. Radhamadhab ENT and Cancer Clinic, Bhubaneswar, Odisha.",
};

const homeFaqs = [
  {
    question: "Where does Dr. Radhamadhab Sahu consult patients in Bhubaneswar?",
    answer:
      "Dr. Sahu consults across two clinical locations in Kalinga Nagar, Bhubaneswar: (1) Outpatient OPD and inpatient surgical care at SUM Ultimate Medicare (Monday to Saturday, 9:30 AM to 5:30 PM), and (2) Evening specialist consultations at Dr. Radhamadhab ENT and Cancer Clinic (K8/118, Ghatikia Main Road, Kalinga Nagar).",
  },
  {
    question: "How do I schedule an appointment with Dr. Sahu?",
    answer:
      "For consultations at SUM Ultimate Medicare, you can call the hospital appointment desk at +91 0674 3 500 500 or book online through the official hospital portal. For private clinic consultations at Ghatikia Main Road, please call +91 97167 72703 in advance to schedule your evening appointment slot.",
  },
  {
    question: "What is minimally invasive endoscopic skull base surgery?",
    answer:
      "Endoscopic skull base surgery is an advanced surgical technique where specialized high-definition endoscopes are passed through the natural nasal passages to reach the base of the brain and pituitary gland. This approach eliminates external facial incisions, eliminates brain retraction, and significantly shortens recovery time.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring all previous medical documentation, including CT or MRI scan films/CDs (such as Brain, Paranasal Sinus, or Neck scans), prior hearing tests (Pure Tone Audiometry), endoscopy records, and a list of all current medications.",
  },
  {
    question: "Does Dr. Sahu treat pediatric ENT conditions and perform cochlear implants?",
    answer:
      "Yes. Dr. Sahu evaluates pediatric patients with chronic tonsillitis, adenoid hypertrophy, recurrent ear infections (otitis media), speech delay, and congenital profound sensorineural hearing loss requiring Cochlear Implantation or BAHA evaluation.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Institutional Affiliation Bar */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="medical-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>
                <strong className="text-[#0B2545] font-semibold">Active Hospital Affiliation:</strong> Senior Consultant &amp; Head of Department at <strong>SUM Ultimate Medicare</strong> (Quaternary Care Multi-Super Specialty Hospital, Bhubaneswar).
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-400 hidden lg:inline">|</span>
              <span className="font-semibold text-[#14746F]">NABH &amp; NABL Accredited Quaternary Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Specialities Overview */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]">
        <div className="medical-container">
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <span className="medical-badge">
              Clinical Specialities &amp; Surgical Domains
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Specialized Care Across Comprehensive ENT &amp; Skull Base Disorders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              From advanced microscopic ear procedures to complex endoscopic skull base and scarless neck interventions, care is tailored through rigorous diagnostic investigation and minimally invasive surgical principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPECIALTIES.map((specialty) => (
              <SpecialtyCard key={specialty.slug} specialty={specialty} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/specialities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-50 hover:text-[#0B2545] hover:border-slate-400 transition-colors shadow-xs"
            >
              <span>View Comprehensive Clinical Directory &amp; Diagnostic Pathways</span>
              <ArrowRight className="w-4 h-4 text-[#14746F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Clinical Precision: Endoscopic Technology & Facilities */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="medical-badge">
                Technology &amp; Surgical Corridors
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
                Advanced Endoscopic Technology &amp; Surgical Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Modern otolaryngology has progressed from large open surgical incisions to ultra-precise, magnified endoscopic corridor techniques. Utilizing state-of-the-art rigid endoscopes, optical neuronavigation, micro-debriders, and low-temperature coblation systems, Dr. Sahu delivers interventions with minimal tissue trauma and faster recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-[#14746F] uppercase">Anterior &amp; Lateral Corridors</span>
                  <p className="text-xs text-slate-600 leading-normal">
                    Direct access to pituitary, clivus, and anterior cranial fossa via endonasal routes without external incisions.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-[#14746F] uppercase">Scarless Thyroidectomy (TOETVA)</span>
                  <p className="text-xs text-slate-600 leading-normal">
                    Complete scar-free neck outcomes through inner oral mucosal vestibular access.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-video">
                <Image
                  src="/images/dr-sahu-clinic-office-awards.jpg"
                  alt="Dr. Radhamadhab Sahu Consultation Chamber & Honors Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-xs p-3 rounded-xl text-white text-xs">
                  <p className="font-semibold text-teal-300">Consultation Chamber &amp; Honors Suite</p>
                  <p className="text-slate-300 text-[11px]">
                    Equipped with advanced diagnostic ENT instrumentation at Ghatikia Main Road, Bhubaneswar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Doctor Biography & Career Section */}
      <DoctorProfile detailed={false} />

      {/* 6. Verified Media & Publications Spotlight */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="medical-container">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="medical-badge">
              Verified Case Coverage &amp; Medical Literature
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Published Research &amp; Clinical Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu’s clinical work is grounded in verifiable peer-reviewed literature, national academic presentations, and published surgical milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Media Highlight (Cameroon SC Judge Case) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Verified News Coverage
              </p>
              {DOCTOR.mediaCoverage.map((item, idx) => (
                <MediaCard key={idx} media={item} />
              ))}
            </div>

            {/* Selected Peer-Reviewed Publication */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Selected Medical Literature
              </p>
              {DOCTOR.publications.slice(0, 2).map((pub, idx) => (
                <PublicationCard key={idx} publication={pub} />
              ))}

              <div className="pt-2 text-right">
                <Link
                  href="/research"
                  className="text-xs font-bold text-[#14746F] hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Academic Publications &amp; Conferences →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Patient Reviews & Chamber Outcomes */}
      <PatientReviews />

      {/* 8. Patient Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="medical-container max-w-4xl">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4FA] text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#14746F]" />
              <span>Patient Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear, transparent answers about consultations, surgical procedures, and appointment scheduling.
            </p>
          </div>

          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* 8. Full Appointment & Consultation CTA */}
      <AppointmentCTA variant="full" />
    </div>
  );
}
