import Breadcrumbs from "@/components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Medical Disclaimer & Legal Notice | Dr. Radhamadhab Sahu",
  description:
    "Medical advisory, educational purpose disclaimer, and clinical consultation boundaries for Dr. Radhamadhab Sahu's medical practice website.",
  pathname: "/disclaimer",
});

export default function DisclaimerPage() {
  const breadcrumbItems = [{ name: "Medical Disclaimer", url: "/disclaimer" }];

  return (
    <div className="bg-[#FDFBF7]">
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight mt-3">
            Medical Disclaimer &amp; Terms of Use
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
                1. Educational Nature of Website Content
              </h2>
              <p>
                All materials, articles, procedure overviews, illustrations, and symptom descriptions published on this website are provided solely for general public education, health awareness, and anatomical understanding.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                2. No Doctor-Patient Relationship Established Online
              </h2>
              <p>
                Browsing this website, reading educational content, or viewing procedure explanations does not create a formal doctor-patient relationship between you and Dr. Radhamadhab Sahu. A physician-patient relationship is established exclusively through formal clinical registration, medical history review, and in-person or telemedicine evaluation.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                3. Not a Substitute for Formal Medical Diagnosis
              </h2>
              <p>
                Information here should never be used to self-diagnose or substitute for an individualized clinical consultation, physical examination, endoscopy, or radiological evaluation by a qualified healthcare professional. Always consult a physician regarding specific symptoms or treatment plans.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                4. No Outcome Guarantees
              </h2>
              <p>
                In medicine and surgery, biological healing, surgical outcomes, and anatomical responses vary between individuals. No representation or guarantee of specific clinical success or therapeutic outcome is made or implied.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-[#0B2545]">
                5. Emergency Medical Situations
              </h2>
              <p>
                If you believe you have a life-threatening medical emergency (e.g., severe acute breathing difficulty, choking, massive nasal bleeding, or sudden neurological collapse), do not wait for a website response. Immediately call an ambulance or report to the nearest 24/7 hospital emergency center.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
