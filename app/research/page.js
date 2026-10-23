import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Newspaper,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
import { PublicationCard, MediaCard, ConferenceCard } from "@/components/ResearchCard";
import { DOCTOR } from "@/lib/doctor";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Research, Publications & Media Coverage | Dr. Radhamadhab Sahu",
  description:
    "Peer-reviewed medical publications, conference presentations at AOICON, and verified media coverage including The New Indian Express feature on international endoscopic surgery.",
  pathname: "/research",
  keywords: [
    "Dr Radhamadhab Sahu publications",
    "ENT research Bhubaneswar",
    "SUM Ultimate Medicare media coverage",
    "AOICON Dr Radhamadhab Sahu",
    "endoscopic skull base literature",
  ],
});

export default function ResearchPage() {
  const breadcrumbItems = [{ name: "Research & Media", url: "/research" }];

  return (
    <div className="bg-[#FDFBF7]">
      {/* Top Header */}
      <section className="bg-white border-b border-slate-200 py-4 sm:py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-2 sm:mt-3 space-y-2 sm:space-y-3">
            <span className="medical-badge">
              Verified Academic Literature &amp; News
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Publications, Conferences &amp; Media
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu’s clinical leadership is actively documented through peer-reviewed medical journals, national conference faculty participation, and accredited medical journalism.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-8 sm:py-16 lg:py-20">
        <div className="medical-container space-y-10 sm:space-y-16">
          {/* Section 1: Verified Media Coverage */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-[#14746F]" />
                  <span>Accredited Media Coverage</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Reported clinical milestones and international patient surgical outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl">
              {DOCTOR.mediaCoverage.map((media, idx) => (
                <MediaCard key={idx} media={media} />
              ))}
            </div>
          </div>

          {/* Section 2: Peer-Reviewed Scientific Publications */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#14746F]" />
                  <span>Peer-Reviewed Journal Publications</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Research indexed on PubMed, NCBI, and ResearchGate covering otology, skull base interventions, and infectious diseases.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOCTOR.publications.map((pub, idx) => (
                <PublicationCard key={idx} publication={pub} />
              ))}
            </div>
          </div>

          {/* Section 3: National Conference Presentations (AOICON & SKULLBASECON) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#14746F]" />
                  <span>National Conference Presentations &amp; Faculty Roles</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Invited keynote faculty, panelist, and session chair at the Skull Base Surgery Society of India and AOI national conventions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOCTOR.academicPresentations.map((conf, idx) => (
                <ConferenceCard key={idx} conference={conf} />
              ))}
            </div>
          </div>

          {/* Section 4: Conclave Honors & Awards Photographic Showcase */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <span className="medical-badge">
                National Accreditations &amp; Trophies
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                Faculty Felicitations &amp; Conclave Honors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Visual record of national otolaryngology honours presented to Dr. Radhamadhab Sahu across leading surgical conventions in India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs group">
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/dr-sahu-aoi-odisha-state-award.jpg"
                    alt="Dr. Radhamadhab Sahu receiving gold memento at 46th Annual Conference AOI Odisha State Chapter"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Odisha State Chapter
                  </div>
                </div>
                <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-sm font-bold text-[#0B2545]">
                    46th AOI Odisha State Award
                  </h4>
                  <p className="text-xs text-slate-600 leading-tight">
                    Gold memento felicitation on stage at the 46th Annual Conference of the Association of Otolaryngologists of India, Odisha State Chapter.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs group">
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/dr-sahu-phonocon-2025-award.jpg"
                    alt="Dr. Radhamadhab Sahu receiving award at PHONOCON 2025 Mayfair Lagoon Bhubaneswar"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    National Phonosurgery
                  </div>
                </div>
                <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-sm font-bold text-[#0B2545]">
                    PHONOCON 2025 Felicitation
                  </h4>
                  <p className="text-xs text-slate-600 leading-tight">
                    Conclave award presentation at Mayfair Lagoon, Bhubaneswar (07-09 Feb 2025) honoring advanced phonosurgical expertise.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs group">
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/dr-sahu-fess-sinus-cme-award.jpg"
                    alt="Dr. Radhamadhab Sahu receiving award at AOI Endoscopic Sinus Surgery CME"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-teal-300 font-semibold border border-slate-700">
                    Rhinology &amp; FESS CME
                  </div>
                </div>
                <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                  <h4 className="text-sm font-bold text-[#0B2545]">
                    AOI Sinus Surgery CME Award
                  </h4>
                  <p className="text-xs text-slate-600 leading-tight">
                    Stage honor at the AOI State CME on &ldquo;Recent Updates on Endoscopic Sinus Surgery &amp; Allergic Rhinitis&rdquo; (12 July 2025).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Transparency Notice */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#14746F] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-slate-600">
              <strong className="text-[#0B2545] font-semibold block">
                Verification &amp; Academic Integrity Note
              </strong>
              <p>
                All publication entries above are verified against PubMed and scientific journal databases. In adherence to medical truthfulness, no honorary appointments, unverified clinical stats, or manufactured metrics are published on this domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
