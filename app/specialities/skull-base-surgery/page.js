import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "skull-base-surgery");

export const metadata = buildPageMetadata({
  title:
    "Best Skull Base Surgeon in Odisha | Endoscopic Surgery | Dr. Radhamadhab Sahu",
  description:
    "Consult the best Skull Base Surgeon in Odisha & leading Endoscopic Skull Base Surgery specialist Dr. Radhamadhab Sahu. Over 800 skull base operations, pituitary tumor surgery, CSF leak repair & clival chordoma care in Bhubaneswar.",
  pathname: "/specialities/skull-base-surgery",
  keywords: [
    "Best Skull Base Surgeon in Odisha",
    "Best Skull Base Specialist in Bhubaneswar",
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
