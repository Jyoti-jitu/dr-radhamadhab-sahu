import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "sleep-related-ent-disorders");

export const metadata = buildPageMetadata({
  title: "Sleep Apnea ENT Specialist in Bhubaneswar & Snoring Surgery | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Sleep Apnea ENT Specialist & Snoring Surgery Specialist in Odisha Dr. Radhamadhab Sahu. Advanced drug-induced sleep endoscopy (DISE), coblation pharyngoplasty, and airway surgery.",
  pathname: "/specialities/sleep-related-ent-disorders",
  keywords: [
    "Sleep Apnea ENT Specialist",
    "Snoring Surgery Specialist Odisha",
    "DISE sleep endoscopy Bhubaneswar",
    "ENT doctor for obstructive sleep apnea",
    "coblation UPPP Bhubaneswar",
    "sleep apnea treatment Odisha",
  ],
});

export default function SleepRelatedENTDisordersPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
