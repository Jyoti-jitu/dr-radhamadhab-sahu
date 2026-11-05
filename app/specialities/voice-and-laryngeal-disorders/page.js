import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "voice-and-laryngeal-disorders");

export const metadata = buildPageMetadata({
  title: "Voice Specialist in Bhubaneswar & Phonosurgery | Dr. Radhamadhab Sahu",
  description:
    "Consult foremost Voice Specialist in Bhubaneswar & Laryngologist in Odisha Dr. Radhamadhab Sahu. Advanced phonomicrosurgery, vocal cord polyp excision, hoarseness treatment, and laser larynx surgery.",
  pathname: "/specialities/voice-and-laryngeal-disorders",
  keywords: [
    "Voice Specialist in Bhubaneswar",
    "Phonomicrosurgery in Odisha",
    "Laryngologist Odisha",
    "vocal cord surgery Bhubaneswar",
    "Doctor for persistent hoarseness Bhubaneswar",
    "laser laryngeal surgery Odisha",
  ],
});

export default function VoiceAndLaryngealDisordersPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
