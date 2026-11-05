import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "ear-and-hearing");

export const metadata = buildPageMetadata({
  title:
    "Best Ear Specialist in Bhubaneswar | Hearing Loss & Ear Surgery | Dr. Radhamadhab Sahu",
  description:
    "Leading Ear Specialist in Bhubaneswar & Ear Surgery Specialist in Odisha Dr. Radhamadhab Sahu. Advanced endoscopic tympanoplasty, cholesteatoma mastoidectomy, cochlear implants & hearing restoration.",
  pathname: "/specialities/ear-and-hearing",
  keywords: [
    "Best Ear Specialist in Bhubaneswar",
    "Best Hearing Loss Doctor in Bhubaneswar",
    "Ear Surgery Specialist in Odisha",
    "Cochlear Implant Surgeon in Bhubaneswar",
    "ENT doctor for hearing loss in Bhubaneswar",
    "tympanoplasty surgery Odisha",
    "cholesteatoma surgery Bhubaneswar",
  ],
});

export default function EarAndHearingPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
