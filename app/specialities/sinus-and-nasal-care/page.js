import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "sinus-and-nasal-care");

export const metadata = buildPageMetadata({
  title: "Sinus Specialist in Bhubaneswar & Rhinology Care | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Sinus Specialist in Bhubaneswar & Rhinology Specialist in Odisha Dr. Radhamadhab Sahu. Advanced FESS for chronic sinusitis, septoplasty, balloon sinuplasty, and nasal polyps.",
  pathname: "/specialities/sinus-and-nasal-care",
  keywords: [
    "Sinus Specialist in Bhubaneswar",
    "Rhinology Specialist in Odisha",
    "Doctor for chronic sinusitis in Bhubaneswar",
    "FESS surgery Odisha",
    "deviated septum surgery Bhubaneswar",
    "nasal polyps specialist Bhubaneswar",
  ],
});

export default function SinusAndNasalCarePage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
