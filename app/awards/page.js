import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
import AwardsGallery from "@/components/AwardsGallery";
import { AWARDS_GALLERY } from "@/lib/awards";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Awards, Honors & Surgical Felicitations | Dr. Radhamadhab Sahu",
  description:
    "Explore the complete gallery of 58+ verified national honors, state surgical awards, and conference felicitations conferred upon Dr. Radhamadhab Sahu, Senior ENT & Skull Base Surgeon.",
  pathname: "/awards",
  keywords: [
    "Dr Radhamadhab Sahu awards",
    "Bharat Pratibha Sammaan",
    "ENT surgical awards Odisha",
    "Skull base surgery felicitations",
    "AOICON Dr Radhamadhab Sahu",
    "SUM Ultimate Medicare doctor awards",
  ],
});

export default function AwardsPage() {
  const breadcrumbItems = [{ name: "Awards & Honors", url: "/awards" }];

  const awardsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Awards, Honors & Surgical Felicitations",
    description:
      "Complete gallery of 58+ verified national honors, state surgical awards, and conference felicitations conferred upon Dr. Radhamadhab Sahu.",
    url: `${SITE_URL}/awards`,
    author: {
      "@id": `${SITE_URL}/#physician`,
    },
    publisher: {
      "@id": `${SITE_URL}/#clinic`,
    },
  };

  return (
    <div className="bg-[#FDFBF7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsSchema) }}
      />
      {/* Header & Breadcrumb Section */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-10">
        <div className="medical-container space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4FA] border border-[#D5E5F2] text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#14746F]" />
              <span>Surgical Honors &amp; National Recognitions</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Awards, Felicitations &amp; Honors
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Radhamadhab Sahu&apos;s pioneering contributions to minimally invasive ENT and endoscopic skull base surgery have earned wide acclaim from national medical councils, state health ministers, and international surgical conclaves.
            </p>
          </div>

          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-lg sm:text-xl font-extrabold text-[#0B2545] block">
                58+
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs">
                Archived Mementos &amp; Citations
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-lg sm:text-xl font-extrabold text-[#14746F] block">
                National
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs">
                Bharat Pratibha Sammaan
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-lg sm:text-xl font-extrabold text-[#0B2545] block">
                800+
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs">
                Skull Base Surgeries
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-lg sm:text-xl font-extrabold text-[#14746F] block">
                20+ Countries
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs">
                International Patients Treated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Landmark Honor: Bharat Pratibha Sammaan */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="medical-container">
          <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
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

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B2545] tracking-tight leading-snug">
                  Conferment of the &ldquo;Bharat Pratibha Sammaan&rdquo;
                </h2>

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
        </div>
      </section>

      {/* Main Awards Gallery Archive (All 58 Images) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="medical-container">
          <AwardsGallery awards={AWARDS_GALLERY} />
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA variant="full" />
    </div>
  );
}

