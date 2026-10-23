import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "head-and-neck-surgery");

export const metadata = buildPageMetadata({
  title: "Head & Neck Surgery & Scarless Thyroid (TOETVA) | Dr. Radhamadhab Sahu",
  description:
    "Advanced head and neck surgical oncology in Bhubaneswar: Transoral Endoscopic Thyroidectomy Vestibular Approach (TOETVA), sialoendoscopy, parotidectomy, and neck mass evaluations.",
  pathname: "/specialities/head-and-neck-surgery",
  keywords: [
    "head and neck surgeon Odisha",
    "scarless thyroid surgery Bhubaneswar",
    "TOETVA Odisha",
    "salivary gland surgeon Bhubaneswar",
    "parotidectomy specialist",
  ],
});

export default function HeadAndNeckSurgeryPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
