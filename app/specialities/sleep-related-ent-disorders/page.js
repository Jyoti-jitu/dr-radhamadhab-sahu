import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "sleep-related-ent-disorders");

export const metadata = buildPageMetadata({
  title: "Sleep Apnea & Snoring Surgery in Bhubaneswar | Dr. Radhamadhab Sahu",
  description:
    "Comprehensive upper airway evaluation and surgical solutions for obstructive sleep apnea (OSA) and chronic snoring: Drug-induced sleep endoscopy (DISE) and coblation pharyngoplasty in Bhubaneswar.",
  pathname: "/specialities/sleep-related-ent-disorders",
  keywords: [
    "snoring doctor Bhubaneswar",
    "sleep apnea surgery Odisha",
    "DISE sleep endoscopy Bhubaneswar",
    "coblation UPPP",
    "OSA specialist Odisha",
  ],
});

export default function SleepRelatedENTDisordersPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
