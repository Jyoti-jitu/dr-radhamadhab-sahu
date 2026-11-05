import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "ear-and-hearing");

export const metadata = buildPageMetadata({
  title: "Ear Surgery Specialist in Odisha & Cochlear Implants | Dr. Radhamadhab Sahu",
  description:
    "Leading Ear Surgery Specialist in Odisha & Cochlear Implant Surgeon in Bhubaneswar Dr. Radhamadhab Sahu. Endoscopic tympanoplasty, cholesteatoma mastoidectomy, vertigo, and hearing loss solutions.",
  pathname: "/specialities/ear-and-hearing",
  keywords: [
    "Ear Surgery Specialist in Odisha",
    "Cochlear Implant Surgeon in Bhubaneswar",
    "Vertigo Specialist in Bhubaneswar",
    "ENT doctor for hearing loss in Bhubaneswar",
    "tympanoplasty surgery Odisha",
    "cholesteatoma surgery Bhubaneswar",
  ],
});

export default function EarAndHearingPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
