import Link from "next/link";
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
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-3 space-y-3">
            <span className="medical-badge">
              Verified Academic Literature &amp; News
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight">
              Publications, Conferences &amp; Media
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu’s clinical leadership is actively documented through peer-reviewed medical journals, national conference faculty participation, and accredited medical journalism.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-14 sm:py-20">
        <div className="medical-container space-y-16">
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

          {/* Section 3: National Conference Presentations (AOICON) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#14746F]" />
                  <span>National Conference Presentations &amp; Faculty Roles</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Invited faculty, panelist, and session chair at the Association of Otolaryngologists of India (AOI) national conventions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {DOCTOR.academicPresentations.map((conf, idx) => (
                <ConferenceCard key={idx} conference={conf} />
              ))}
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
