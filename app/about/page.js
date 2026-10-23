import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  FileText,
  Stethoscope,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
import { DOCTOR } from "@/lib/doctor";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Dr. Radhamadhab Sahu | Qualifications, Training & Biography",
  description:
    "Biography, medical qualifications, and specialized surgical training of Dr. Radhamadhab Sahu, Senior Consultant & HOD of ENT and Skull Base Surgery at SUM Ultimate Medicare, Bhubaneswar.",
  pathname: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [{ name: "About the Doctor", url: "/about" }];

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Breadcrumb Header */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-2">
            <span className="medical-badge">
              Physician Biography &amp; Surgical Background
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mt-2">
              Dr. Radhamadhab Sahu
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Senior Consultant &amp; Head of Department, ENT &amp; Skull Base Surgery
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography & Credential Grid */}
      <section className="py-14 sm:py-20">
        <div className="medical-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Authentic Portrait & Key Facts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={DOCTOR.portraitUrl}
                    alt={DOCTOR.portraitAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 text-[11px] font-semibold text-[#0B2545] flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>Official Hospital Portrait</span>
                  </div>
                </div>

                <div className="p-4 space-y-2 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-[#0B2545]">
                    {DOCTOR.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#14746F]">
                    {DOCTOR.qualifications}
                  </p>
                  <p className="text-xs text-slate-600">
                    Senior Consultant &amp; HOD, SUM Ultimate Medicare
                  </p>
                </div>
              </div>

              {/* Verified Facts Sidebar */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-2">
                  At A Glance
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-slate-500 block">Primary Hospital:</span>
                    <strong className="text-slate-800 font-semibold">
                      SUM Ultimate Medicare, Bhubaneswar
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Private Practice:</span>
                    <strong className="text-slate-800 font-semibold">
                      Dr. Radhamadhab ENT and Cancer Clinic, Ghatikia
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Verified Experience:</span>
                    <strong className="text-slate-800 font-semibold">
                      {DOCTOR.experienceYearsText}
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Specialized Neurosurgery Fellowship:</span>
                    <strong className="text-slate-800 font-semibold">
                      VMMC &amp; Safdarjung Hospital, New Delhi (3 Years)
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-500 block">Clinical Expertise:</span>
                    <p className="text-slate-700 leading-normal pt-0.5">
                      Minimally Invasive Skull Base Surgery, Endoscopic Brain Surgery, FESS, TOETVA Scarless Thyroidectomy, Cochlear Implants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: In-Depth Narrative Biography */}
            <div className="lg:col-span-7 space-y-10">
              {/* Introduction Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h2 className="text-2xl font-bold text-[#0B2545] tracking-tight">
                  Professional Journey &amp; Surgical Philosophy
                </h2>
                <p>
                  Dr. Radhamadhab Sahu is an internationally recognized specialist in Otorhinolaryngology, Head &amp; Neck Oncology, and Endoscopic Skull Base Surgery. Serving as the Senior Consultant and Head of Department at SUM Ultimate Medicare in Bhubaneswar, he has played a pivotal role in establishing advanced minimally invasive skull base and endoscopic ear surgery programs in Odisha and Eastern India.
                </p>
                <p>
                  Dr. Sahu’s clinical philosophy centers upon <strong>anatomical preservation</strong> and <strong>minimally invasive access</strong>. Rather than employing disfiguring facial incisions or traumatic cranial bone flaps, he utilizes high-definition endoscopic corridors through the natural nasal cavity to address pituitary adenomas, anterior skull base malignancies, and complex cerebrospinal fluid leaks.
                </p>
                <p>
                  In head and neck care, he pioneered scarless transoral thyroid surgery (TOETVA), allowing patients with thyroid disease to achieve complete surgical cure without visible neck scars.
                </p>
              </div>

              {/* Education & Academic Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0B2545] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#14746F]" />
                  <span>Academic Qualifications &amp; Specialized Fellowships</span>
                </h3>

                <div className="space-y-4">
                  {DOCTOR.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs relative pl-6 before:absolute before:left-2 before:top-6 before:bottom-0 before:w-0.5 before:bg-[#14746F]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="text-base font-bold text-[#0B2545]">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-semibold text-slate-500">
                          {edu.location}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#14746F]">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior Mentorship & Neurosurgical Skull Base Collaboration */}
              <div className="p-6 rounded-2xl bg-[#E6F4F3]/60 border border-teal-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#14746F] uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Neurosurgical Skull Base Mentorship</span>
                </div>
                <h4 className="text-lg font-bold text-[#0B2545]">
                  Collaboration with Padmashree Dr. (Prof.) V.S. Mehta
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  During his surgical career in the National Capital Region, Dr. Sahu served as an independent consultant for Endoscopic Skull Base Surgery working directly with Padmashree Dr. (Prof.) V.S. Mehta, former Head of Neurosurgery at AIIMS New Delhi and Director of Neurosciences at Paras Hospital, Gurgaon. This extensive multidisciplinary skull base experience bridged the interface between otolaryngology and advanced neurosurgery.
                </p>
              </div>

              {/* Areas of Verified Clinical Focus */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B2545] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#14746F]" />
                  <span>Primary Clinical &amp; Surgical Interests</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Endoscopic Endonasal Pituitary &amp; Clival Skull Base Surgeries</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Endoscopic CSF Rhinorrhea Fistula Repair &amp; Skull Base Flaps</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Transoral Endoscopic Thyroidectomy (TOETVA Scarless Approach)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Simultaneous Bilateral Tympanoplasty &amp; Endoscopic Otology</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Cochlear Implantation &amp; BAHA Auditory Implants</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0 mt-0.5" />
                    <span>Functional Endoscopic Sinus Surgery (FESS) &amp; Sleep Apnea Surgery</span>
                  </div>
                </div>
              </div>

              {/* Research & Publications Link */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-[#0B2545]">
                    Academic Contributions &amp; Publications
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Explore peer-reviewed journal papers and national conference faculty roles.
                  </p>
                </div>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#14746F] transition-colors shrink-0"
                >
                  <span>View Publications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
