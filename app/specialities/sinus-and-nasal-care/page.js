import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "sinus-and-nasal-care");

export const metadata = buildPageMetadata({
  title:
    "Best Sinus Surgeon in Bhubaneswar | Sinus Specialist | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Sinus Specialist in Bhubaneswar & Best Sinus Surgeon in Odisha Dr. Radhamadhab Sahu. Advanced FESS for chronic sinusitis, septoplasty, balloon sinuplasty & nasal polyps.",
  pathname: "/specialities/sinus-and-nasal-care",
  keywords: [
    "Best Sinus Surgeon in Bhubaneswar",
    "Sinus Specialist in Bhubaneswar",
    "Best Rhinology Specialist in Odisha",
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
