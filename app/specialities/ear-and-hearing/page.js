import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "ear-and-hearing");

export const metadata = buildPageMetadata({
  title: "Ear Surgery, Tympanoplasty & Cochlear Implants | Dr. Radhamadhab Sahu",
  description:
    "Comprehensive otology and neurotology in Bhubaneswar: Endoscopic tympanoplasty for eardrum perforation, cholesteatoma surgery, mastoidectomy, and cochlear/BAHA implants.",
  pathname: "/specialities/ear-and-hearing",
  keywords: [
    "ear doctor Bhubaneswar",
    "tympanoplasty surgery Odisha",
    "cochlear implant Bhubaneswar",
    "cholesteatoma surgery",
    "hearing loss specialist Bhubaneswar",
  ],
});

export default function EarAndHearingPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
