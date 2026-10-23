import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "skull-base-surgery");

export const metadata = buildPageMetadata({
  title: "Endoscopic Skull Base Surgery in Bhubaneswar | Dr. Radhamadhab Sahu",
  description:
    "Minimally invasive endoscopic skull base surgery for pituitary adenomas, chordomas, CSF leaks, and cranial base tumors by 3-year neurosurgery trained surgeon Dr. Radhamadhab Sahu.",
  pathname: "/specialities/skull-base-surgery",
  keywords: [
    "skull base surgery Bhubaneswar",
    "pituitary tumor surgery Odisha",
    "endoscopic brain surgery",
    "CSF leak repair Bhubaneswar",
    "chordoma surgeon Odisha",
  ],
});

export default function SkullBaseSurgeryPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
