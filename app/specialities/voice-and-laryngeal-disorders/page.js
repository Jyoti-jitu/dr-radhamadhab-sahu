import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "voice-and-laryngeal-disorders");

export const metadata = buildPageMetadata({
  title: "Voice Disorders & Phonomicrosurgery in Bhubaneswar | Dr. Radhamadhab Sahu",
  description:
    "Expert care for hoarseness, vocal cord polyps, vocal nodules, and laryngeal disorders in Bhubaneswar: Phonomicrosurgery, laser laryngeal surgery, and injection laryngoplasty.",
  pathname: "/specialities/voice-and-laryngeal-disorders",
  keywords: [
    "voice specialist Bhubaneswar",
    "hoarseness treatment Odisha",
    "vocal cord surgery Bhubaneswar",
    "phonomicrosurgery",
    "laryngologist Odisha",
  ],
});

export default function VoiceAndLaryngealDisordersPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
