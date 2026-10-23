import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function DoctorProfile({ detailed = false }) {
  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="medical-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column: Authentic Conference Keynote Visual & Quick Credentials */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 group">
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/dr-sahu-national-conference-lectern.jpg"
                  alt="Dr. Radhamadhab Sahu delivering keynote presentation on minimally invasive skull base surgery at conference lectern"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700 flex items-center gap-1.5 shadow-xs">
                  <Award className="w-3 h-3 text-teal-400 shrink-0" />
                  <span>Invited Faculty Keynote Speaker</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-5 bg-white border-t border-slate-200 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    {DOCTOR.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#14746F]">
                    {DOCTOR.qualifications}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Senior Consultant &amp; Head of Department, ENT &amp; Skull Base Surgery
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#14746F] shrink-0" />
                  <span>SUM Ultimate Medicare &amp; Private Clinic</span>
                </div>
              </div>
            </div>

            {/* Verified Clinical Focus Highlights */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                Specialized Surgical Focus
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                {DOCTOR.clinicalHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B2545] font-semibold">{hl.label}: </strong>
                      <span className="text-slate-600">{hl.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Detailed Career Background & Education */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2.5 sm:space-y-3">
              <span className="medical-badge">
                Verified Credentials &amp; Background
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
                Pioneering Minimally Invasive ENT &amp; Skull Base Surgery in Odisha
              </h2>
              <p className="text-xs sm:text-base text-slate-700 leading-relaxed pt-1">
                Dr. Radhamadhab Sahu is a Senior Consultant and Head of the Department of ENT and Skull Base Surgery at SUM Ultimate Medicare, Bhubaneswar. With over 17 years of clinical and surgical experience and more than 800 skull base surgeries performed for patients from over 20 countries, he is nominated for the prestigious Bharat Pratibha Sammaan Award in Healthcare &amp; Medicine.
              </p>
            </div>

            {/* Surgical Training & Career Journey */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                After completing his MBBS from the historic <strong>S.C.B. Medical College &amp; Hospital, Cuttack (2002&ndash;2008)</strong>, Dr. Sahu pursued postgraduate surgical residency in Otorhinolaryngology (DNB ENT) at <strong>Vardhman Mahavir Medical College (VMMC) &amp; Safdarjung Hospital, New Delhi</strong>.
              </p>
              <p>
                Recognizing the critical need for advanced cranial base surgical expertise, he developed a rare dual expertise by undergoing <strong>three years of dedicated Neurosurgery training in Skull Base Surgery (2012&ndash;2015)</strong> at Safdarjung Hospital. He subsequently served as an independent consultant for Endoscopic Skull Base Surgery with internationally renowned neurosurgeon <strong>Padmashree Dr. (Prof.) V. S. Mehta</strong> at Paras Hospital, Gurgaon.
              </p>
              <p>
                Dr. Sahu has introduced several pioneering procedures for the first time in Odisha, including Transoral Endoscopic Thyroid Surgery (TOETVA), Balloon Eustachian Tuboplasty (BET), Endoscopic Transnasal Trigeminal Schwannoma Excision, Sialendoscopy, and Endoscopic Transoral Submandibular Gland Excision.
              </p>
            </div>

            {/* Education & Training Timeline */}
            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#14746F] shrink-0" />
                <span>Medical Education &amp; Surgical Fellowships</span>
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {DOCTOR.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 relative pl-5 before:absolute before:left-2 before:top-5 before:bottom-0 before:w-0.5 before:bg-[#14746F]/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <p className="text-xs sm:text-sm font-bold text-[#0B2545]">
                        {edu.degree}
                      </p>
                      <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#14746F]">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-600 pt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {!detailed && (
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2545] hover:text-[#14746F] transition-colors"
                >
                  <span>Read Full Biography &amp; Surgical Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
