import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "skull-base-surgery");

export const metadata = buildPageMetadata({
  title: "Skull Base Surgeon in Odisha & Endoscopic Surgery | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Skull Base Surgeon in Odisha & Endoscopic Skull Base Surgery specialist Dr. Radhamadhab Sahu. Advanced pituitary tumor surgery, CSF leak repair, and clival chordoma care in Bhubaneswar.",
  pathname: "/specialities/skull-base-surgery",
  keywords: [
    "Skull Base Surgeon in Odisha",
    "Endoscopic Skull Base Surgery India",
    "Pituitary Tumor Surgery in Bhubaneswar",
    "Experienced skull base surgeon in Odisha",
    "Endoscopic pituitary surgery specialist in India",
    "CSF leak repair Bhubaneswar",
  ],
});

export default function SkullBaseSurgeryPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
