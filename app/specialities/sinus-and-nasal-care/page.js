import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "sinus-and-nasal-care");

export const metadata = buildPageMetadata({
  title: "Endoscopic Sinus Surgery (FESS) & Septoplasty | Dr. Radhamadhab Sahu",
  description:
    "Expert sinus and nasal care in Bhubaneswar: Functional Endoscopic Sinus Surgery (FESS), septoplasty for deviated septum, turbinate coblation, and nasal polyposis treatment.",
  pathname: "/specialities/sinus-and-nasal-care",
  keywords: [
    "sinus surgery Bhubaneswar",
    "FESS surgery Odisha",
    "deviated septum surgery Bhubaneswar",
    "turbinate reduction",
    "chronic sinusitis treatment",
  ],
});

export default function SinusAndNasalCarePage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
