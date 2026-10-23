import Breadcrumbs from "@/components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy & Patient Confidentiality | Dr. Radhamadhab Sahu",
  description:
    "Patient privacy policy, medical confidentiality standards, and data handling ethics for Dr. Radhamadhab Sahu's medical website.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ name: "Privacy Policy", url: "/privacy-policy" }];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mt-3">
            Privacy Policy &amp; Data Ethics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="medical-container max-w-4xl">
          <div className="medical-card p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                1. Commitment to Patient Privacy
              </h2>
              <p>
                Dr. Radhamadhab Sahu and Dr. Radhamadhab ENT and Cancer Clinic are committed to upholding the highest standards of medical ethics, confidentiality, and data privacy in accordance with applicable medical council guidelines and Indian information technology laws.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                2. Information Collection
              </h2>
              <p>
                This informational website does not harvest, store, or sell private personal health records (PHR) or sensitive electronic medical data online. When you initiate a telephone call or book an appointment via authorized hospital channels, standard clinical registration data is collected securely by hospital reception desks strictly to facilitate clinical care.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                3. No Commercial Tracking or Third-Party Resale
              </h2>
              <p>
                We do not deploy invasive third-party ad networks or sell visitor browsing behavior to commercial data brokers. Standard, privacy-respecting server access logs may temporarily record anonymized IP addresses for cyber-security and uptime diagnostics.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                4. Medical Records &amp; Clinical Data Retention
              </h2>
              <p>
                Any physical or electronic clinical documents (e.g., CT/MRI films, pathology reports, audiograms) presented during in-person consultations are handled in strict compliance with medical confidentiality guidelines and stored in accredited hospital electronic health record systems.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                5. Contacting the Clinic Regarding Privacy
              </h2>
              <p>
                If you have inquiries regarding privacy practices or clinical records, please contact the clinic desk at +91 97167 72703 or write to SUM Ultimate Medicare at sumum_bbsr@soahospitals.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
