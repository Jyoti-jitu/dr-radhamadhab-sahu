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
  Award,
} from "lucide-react";
import Hero from "@/components/Hero";
import SurgicalMilestones from "@/components/SurgicalMilestones";
import ClinicBrochureCareGuide from "@/components/ClinicBrochureCareGuide";
import DoctorProfile from "@/components/DoctorProfile";
import SpecialtyCard from "@/components/SpecialtyCard";
import AppointmentCTA from "@/components/AppointmentCTA";
import FAQ from "@/components/FAQ";
import PatientReviews from "@/components/PatientReviews";
import { DOCTOR } from "@/lib/doctor";
import { SPECIALTIES } from "@/lib/specialties";

export const metadata = {
  title: {
    absolute:
      "Dr. Radhamadhab Sahu | ENT Specialist & Skull Base Surgeon in Bhubaneswar",
  },
  description:
    "Consult Dr. Radhamadhab Sahu, ENT and Skull Base Surgeon in Bhubaneswar, specializing in advanced ENT care, sinus disorders, ear surgery and head & neck conditions.",
  keywords: [
    "Best ENT Doctor in Bhubaneswar",
    "Best ENT Specialist in Bhubaneswar",
    "Best ENT Surgeon in Bhubaneswar",
    "Top ENT Doctor in Bhubaneswar",
    "Experienced ENT Specialist in Bhubaneswar",
    "Dr Radhamadhab Sahu",
    "Dr. Radhamadhab Sahu ENT",
    "Skull Base Surgeon in Odisha",
    "Best Skull Base Surgeon in Odisha",
    "Best Head and Neck Surgeon in Bhubaneswar",
    "Best Sinus Surgeon in Bhubaneswar",
    "Best Ear Specialist in Bhubaneswar",
    "Best Hearing Loss Doctor in Bhubaneswar",
    "Best Vertigo Specialist in Bhubaneswar",
    "ENT Specialist Near Me",
    "ENT Doctor in Kalinga Nagar",
    "ENT Specialist near Ghatikia",
    "ENT Surgeon near AIIMS Bhubaneswar",
    "ENT Specialist in Khandagiri",
    "Where to consult an ENT specialist in Bhubaneswar",
  ],
  alternates: {
    canonical: "https://drradhamadhabsahu.com",
  },
  openGraph: {
    title:
      "Dr. Radhamadhab Sahu | ENT Specialist & Skull Base Surgeon in Bhubaneswar",
    description:
      "Consult Dr. Radhamadhab Sahu, ENT and Skull Base Surgeon in Bhubaneswar, specializing in advanced ENT care, sinus disorders, ear surgery and head & neck conditions.",
    url: "https://drradhamadhabsahu.com",
    siteName: "Dr. Radhamadhab Sahu Medical Practice",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://drradhamadhabsahu.com/images/dr-radhamadhab-sahu.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Radhamadhab Sahu - Senior ENT and Skull Base Surgeon, Bhubaneswar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Radhamadhab Sahu | ENT Specialist & Skull Base Surgeon in Bhubaneswar",
    description:
      "Consult Dr. Radhamadhab Sahu, ENT and Skull Base Surgeon in Bhubaneswar, specializing in advanced ENT care, sinus disorders, ear surgery and head & neck conditions.",
    images: ["https://drradhamadhabsahu.com/images/dr-radhamadhab-sahu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const homeFaqs = [
  {
    question: "Who is an ENT specialist in Bhubaneswar?",
    answer:
      "Dr. Radhamadhab Sahu, MBBS, DNB (Otorhinolaryngology/ENT), is a Senior Consultant and Head of the Department of ENT & Skull Base Surgery at SUM Ultimate Medicare and founder of Dr. Radhamadhab ENT and Cancer Clinic. With over 17 years of surgical experience and 3 years of specialized neurosurgical skull base training at Safdarjung Hospital, New Delhi, he provides comprehensive care for ear, nose, throat, head & neck, and cranial base conditions.",
  },
  {
    question: "Where can I consult Dr. Radhamadhab Sahu in Bhubaneswar?",
    answer:
      "Dr. Sahu consults across two accessible locations in Bhubaneswar: (1) Outpatient OPD and surgical admissions at SUM Ultimate Medicare, Kalinga Nagar (Monday to Saturday, 9:30 AM – 5:30 PM), and (2) E.N.T. & Cancer Super-Speciality Clinic at K8/118, Ghatikia Main Road (close to AIIMS Bhubaneswar and Khandagiri) during morning sessions (Mon–Sat, 8:00 AM – 11:00 AM), evening sessions (Mon–Sat, 6:00 PM – 9:00 PM), and Sunday morning clinics (8:00 AM – 12:30 PM).",
  },
  {
    question: "What conditions does an ENT specialist treat?",
    answer:
      "An ENT specialist (otorhinolaryngologist) diagnoses and treats disorders of the ears (hearing loss, eardrum perforations, ear discharge, tinnitus, vertigo), nose and sinuses (chronic sinusitis, nasal polyps, deviated septum, allergies), throat and voice (chronic hoarseness, tonsillitis, vocal polyps), head and neck (thyroid nodules, salivary stones, neck masses), and complex skull base disorders (pituitary tumours, CSF leaks).",
  },
  {
    question: "When should I consult an ENT surgeon?",
    answer:
      "You should consult an ENT surgeon when symptoms do not improve with routine medications, including nasal obstruction persisting over 3 months, recurrent ear drainage, hoarseness lasting longer than 3 weeks, visible neck or thyroid swellings, sudden dizziness, or severe snoring with witnessed sleep choking.",
  },
  {
    question: "What is skull base surgery and why is it performed?",
    answer:
      "Skull base surgery treats complex lesions at the junction between the brain and facial sinuses. Using high-definition 4K endoscopes through the natural nostrils, Dr. Sahu accesses and removes pituitary adenomas, chordomas, and repairs CSF leaks without external facial incisions or brain retraction, ensuring significantly faster recovery.",
  },
  {
    question: "When is sinus surgery (FESS) recommended for chronic sinusitis?",
    answer:
      "Functional Endoscopic Sinus Surgery (FESS) is recommended when chronic sinusitis or nasal polyposis fails to resolve with medical therapies (steroid rinses, antihistamines) and high-resolution CT imaging shows blocked sinus ostia (ventilation pathways). FESS re-establishes natural drainage while preserving healthy mucosa.",
  },
  {
    question: "Which doctor should I consult for hearing loss and ear discharge?",
    answer:
      "You should consult an otologist / ear surgeon. Dr. Radhamadhab Sahu provides specialized microscopic and endoscopic ear examinations, Pure Tone Audiometry, tympanoplasty for eardrum perforation closure, mastoidectomy for cholesteatoma, and advanced hearing implant evaluations (Cochlear Implants and BAHA).",
  },
  {
    question: "What are the modern treatment options for chronic sinusitis?",
    answer:
      "Modern treatment follows a stepwise approach: initial medical therapy according to EPOS 2020 international guidelines, followed by minimally invasive endoscopic sinus surgery (FESS) or balloon sinuplasty to reopen natural drainage pathways without external cuts.",
  },
  {
    question: "How can I book an ENT consultation in Bhubaneswar?",
    answer:
      "To schedule a consultation at SUM Ultimate Medicare, call the hospital desk at +91 0674 3 500 500. For private clinic consultations at Ghatikia Main Road, call or WhatsApp +91 97167 72703 for appointment slots.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Institutional Affiliation Bar */}
      <section className="bg-white py-5 sm:py-6 border-b border-slate-200">
        <div className="medical-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>
                <strong className="text-[#0B2545] font-semibold">Dr. Radhamadhab Sahu</strong> &ndash; Senior Consultant &amp; Head of Department &ndash; ENT and Skull Base Surgery, Bhubaneswar, Odisha at <strong>SUM Ultimate Medicare</strong> &amp; <strong>Dr. Radhamadhab ENT and Cancer Clinic</strong>.
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs shrink-0">
              <span className="text-slate-400 hidden lg:inline">|</span>
              <span className="font-semibold text-[#14746F]">NABH &amp; NABL Accredited Quaternary Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Surgical Milestones & State Firsts */}
      <SurgicalMilestones />

      {/* 4. Clinical Specialities Overview */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]">
        <div className="medical-container">
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <span className="medical-badge">
              Clinical Specialities &amp; Surgical Care
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Ear, Nose and Throat Conditions Treated
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
                Advanced ENT and Skull Base Surgical Expertise
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

            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[16/10]">
                <Image
                  src="/images/clinic-head-silhouette-awards-wall.jpg"
                  alt="Dr. Radhamadhab Sahu Consultation Chamber & Head Silhouette Awards Wall"
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

              {/* In-Office Diagnostic Desk Setup */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <Image
                    src="/images/dr-sahu-cme-award-presentation.jpg"
                    alt="Dr. Radhamadhab Sahu receiving surgical honours at State ENT CME"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded text-[10px] text-teal-300 font-semibold truncate">
                    State Surgical CME Honor
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <Image
                    src="/images/dr-sahu-aoi-odisha-state-award.jpg"
                    alt="Dr. Radhamadhab Sahu receiving AOI Odisha State Surgical Honors"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded text-[10px] text-teal-300 font-semibold truncate">
                    AOI State Surgical Honor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. E.N.T. & Cancer Super-Speciality Clinic Official Practice Brochure & Care Guide */}
      <ClinicBrochureCareGuide />

      {/* 6. Doctor Biography & Career Section */}
      <DoctorProfile detailed={false} />



      {/* 7. Clinical Environment & Surgical Leadership Gallery */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="medical-container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              <span className="medical-badge">
                Clinical Environment &amp; Surgical Practice
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
                Inside the Consultation Chamber &amp; Surgical Conclaves
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Authentic photographic documentation from Dr. Radhamadhab Sahu’s consultation rooms at Ghatikia Main Road, patient follow-up reviews, and his national skull base surgical keynotes.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#14746F] hover:underline shrink-0"
            >
              <span>Explore Doctor&apos;s Full Biography &amp; Practice →</span>
            </Link>
          </div>

          {/* Bharat Pratibha Sammaan Feature Highlight */}
          <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/60 via-white to-slate-50 p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Award Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-amber-300/60 shadow-xl aspect-[16/10] bg-slate-900 group">
                  <Image
                    src="/images/awardtaking.jpeg"
                    alt="Dr. Radhamadhab Sahu receiving the Bharat Pratibha Sammaan from Hon'ble Smt. Meenakshi Lekhi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Bharat Pratibha Sammaan</span>
                  </div>
                </div>
              </div>

              {/* Award Citation & Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>National Honor Conferment</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight leading-snug">
                  Conferment of the &ldquo;Bharat Pratibha Sammaan&rdquo;
                </h3>

                <blockquote className="relative p-4 sm:p-5 rounded-2xl bg-white border border-amber-100 shadow-xs">
                  <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed font-serif">
                    &ldquo;As the Chairperson of the Selection Committee of the Bharat Pratibha Sammaan Council, I hereby confer upon you the <span className="font-semibold text-[#0B2545] not-italic">Bharat Pratibha Sammaan</span>, to be presented by <span className="font-semibold text-[#0B2545] not-italic">Hon&apos;ble Smt. Meenakshi Lekhi</span>, Former Union Minister of State for External Affairs and Culture, in recognition of your outstanding contribution to Medicine.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs text-slate-500 font-sans font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Chairperson, Selection Committee · Bharat Pratibha Sammaan Council</span>
                  </footer>
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conferred upon Dr. Radhamadhab Sahu for his distinguished contributions to skull base and endoscopic sinus surgery, surgical mentorship, and advancing modern minimally invasive healthcare in Eastern India.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photo 1: Patient Consultation */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-patient-consultation.jpg"
                  alt="Clinical Second Opinion and Airway Consultation with Dr. Radhamadhab Sahu"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  Patient Consultation
                </div>
              </div>
              <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  Airway &amp; Endoscopy Review
                </h3>
                <p className="text-xs text-slate-600 leading-tight">
                  In-depth clinical second opinion and symptom mapping in private chamber.
                </p>
              </div>
            </div>

            {/* Photo 2: SKULLBASECON 2025 Keynote */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src="/images/dr-sahu-skullbasecon-2025.jpg"
                  alt="Dr. Radhamadhab Sahu presenting Keynote Address at SKULLBASECON 2025 Chennai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  National Keynote
                </div>
              </div>
              <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  SKULLBASECON 2025 Keynote
                </h3>
                <p className="text-xs text-slate-600 leading-tight">
                  Presenting jugular foramen surgery at The Leela Palace, Chennai.
                </p>
              </div>
            </div>

            {/* Photo 3: Pediatric Recovery */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-pediatric-patients-chamber.jpg"
                  alt="Pediatric Ear Reconstructive Recovery Follow-up with Dr. Sahu"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  Pediatric Care
                </div>
              </div>
              <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  Pediatric Ear Recovery
                </h3>
                <p className="text-xs text-slate-600 leading-tight">
                  Smiles during post-operative review for young reconstructive ear patients.
                </p>
              </div>
            </div>

            {/* Photo 4: State AOI Honors */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#14746F]/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/dr-sahu-aoi-odisha-state-award.jpg"
                  alt="Dr. Radhamadhab Sahu receiving gold memento at 46th Annual Conference AOI Odisha State Chapter"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                  State AOI Honor
                </div>
              </div>
              <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                <h3 className="text-sm font-bold text-[#0B2545]">
                  46th AOI Odisha State Award
                </h3>
                <p className="text-xs text-slate-600 leading-tight">
                  Gold memento felicitation for state leadership in advanced skull base &amp; ENT surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Verified Patient Reviews & Chamber Outcomes */}
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
