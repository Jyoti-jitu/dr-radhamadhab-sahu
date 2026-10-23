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
import NominationCitation from "@/components/NominationCitation";
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Nominee &ndash; Bharat Pratibha Sammaan Award</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B2545] tracking-tight">
                  Professional Journey &amp; Surgical Philosophy
                </h2>
                <p>
                  Dr. Radhamadhab Sahu is a Senior Consultant and Head of the Department of ENT &amp; Skull Base Surgery at SUM Ultimate Medicare, Bhubaneswar. With over 17 years of clinical and surgical experience and more than 800 skull base operations performed for patients from over 20 countries, he is nominated for the Bharat Pratibha Sammaan Award in Healthcare &amp; Medicine in recognition of his pioneering contributions to advanced ENT and Skull Base Surgery.
                </p>
                <p>
                  Dr. Sahu’s clinical philosophy centers upon <strong>anatomical preservation</strong> and <strong>minimally invasive access</strong>. Rather than employing disfiguring facial incisions or traumatic cranial bone flaps, he utilizes high-definition endoscopic corridors through the natural nasal cavity to address pituitary adenomas, chordomas, trigeminal schwannomas, and complex cerebrospinal fluid leaks.
                </p>
                <p>
                  In head and neck care, he introduced <strong>five landmark procedures for the first time in Odisha</strong>: Transoral Endoscopic Thyroid Surgery (TOETVA), Balloon Eustachian Tuboplasty (BET), Endoscopic Transnasal Trigeminal Schwannoma Excision, Sialendoscopy, and Endoscopic Transoral Submandibular Gland Excision.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="/documents/nominee-dr-radhamadhab-sahu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-xs"
                  >
                    <FileText className="w-4 h-4 text-slate-950" />
                    <span>See Bharat Pratibha Sammaan Nomination PDF (NOMINEE - DR. RADHAMADHAB SAHU.pdf) &rarr;</span>
                  </a>
                </div>
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

              {/* National Faculty Honors & Conclave Recognitions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B2545] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#14746F]" />
                  <span>National Faculty Recognitions &amp; Trophies</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs group">
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src="/images/dr-sahu-aoi-odisha-state-award.jpg"
                        alt="Dr. Radhamadhab Sahu receiving gold memento at 46th Annual Conference AOI Odisha State Chapter"
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                        State Chapter Honor
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h4 className="text-xs font-bold text-[#0B2545]">
                        46th AOI Odisha State Award
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-tight">
                        Gold memento felicitation on stage recognizing surgical leadership in skull base &amp; ENT care.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs group">
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src="/images/dr-sahu-phonocon-2025-award.jpg"
                        alt="Dr. Radhamadhab Sahu receiving PHONOCON 2025 award at Mayfair Lagoon Bhubaneswar"
                        fill
                        sizes="(max-width: 640px) 100vw, 300px"
                        className="object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                        National Phonosurgery
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h4 className="text-xs font-bold text-[#0B2545]">
                        PHONOCON 2025 Award
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-tight">
                        Stage felicitation at Mayfair Lagoon, Bhubaneswar (07-09 Feb 2025) for voice surgery excellence.
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Official Bharat Pratibha Sammaan Award Nomination & State Firsts Citation */}
      <NominationCitation page="about" />

      {/* Clinical Environment & Surgical Leadership Gallery */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="medical-container space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="medical-badge">
              In The Clinic &amp; On The National Stage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Clinical Practice, Honors &amp; Academic Leadership
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Authentic photographic documentation from Dr. Radhamadhab Sahu’s consultation chamber at Ghatikia Main Road and his national keynote presentations across premier surgical forums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photo 1: EBOSS 2.0 Skull Base Faculty */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/40 transition-all group">
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/dr-sahu-eboss-skullbase-faculty.jpg"
                  alt="Dr. Radhamadhab Sahu serving as expert faculty at EBOSS 2.0 Endoscopic Ear and Skull Base Surgery"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
                  EBOSS 2.0 Faculty
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  Endoscopic Skull Base Faculty
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Invited faculty at EBOSS 2.0 for Endoscopic Ear and Skull Base Surgery symposium.
                </p>
              </div>
            </div>

            {/* Photo 2: IAOHNS Chennai 2026 Podium */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/40 transition-all group">
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/dr-sahu-iaohns-chennai-podium.jpg"
                  alt="Dr. Radhamadhab Sahu delivering podium address at IAOHNS Chennai 2026"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
                  IAOHNS Chennai 2026
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  National Podium Address
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Indian Academy of Otorhinolaryngology Head and Neck Surgery national address.
                </p>
              </div>
            </div>

            {/* Photo 3: AOICON National Stage Felicitation */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/40 transition-all group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-aoicon-stage-felicitation.jpg"
                  alt="Dr. Radhamadhab Sahu receiving national stage felicitation at 48th Annual Conference AOI"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
                  AOI Felicitation
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  National AOI Leadership
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Honored on the national stage by senior ENT dignitaries at the 48th Annual Conference.
                </p>
              </div>
            </div>

            {/* Photo 4: ISOCON Keynote Podium */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between shadow-xs hover:border-[#14746F]/40 transition-all group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-isocon-speaker-podium.jpg"
                  alt="Dr. Radhamadhab Sahu addressing delegates at ISOCON National Conference"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
                  ISOCON Convention
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  ISOCON Keynote Podium
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Presenting endoscopic skull base corridors at the Indian Society of Otology National Conference.
                </p>
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
