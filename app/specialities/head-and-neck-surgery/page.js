import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "head-and-neck-surgery");

export const metadata = buildPageMetadata({
  title:
    "Best Head and Neck Surgeon in Bhubaneswar | Thyroid & Cancer Care | Dr. Radhamadhab Sahu",
  description:
    "Consult the best Head and Neck Surgeon in Bhubaneswar & ENT Cancer Surgeon in Odisha Dr. Radhamadhab Sahu. Pioneer of scarless thyroid surgery (TOETVA), parotidectomy & sialoendoscopy.",
  pathname: "/specialities/head-and-neck-surgery",
  keywords: [
    "Best Head and Neck Surgeon in Bhubaneswar",
    "Best ENT Cancer Surgeon in Odisha",
    "Head and Neck Surgeon in Bhubaneswar",
    "Head and Neck Cancer Surgeon in Odisha",
    "Thyroid Surgery Specialist in Bhubaneswar",
    "TOETVA scarless thyroid surgery",
    "salivary gland surgeon Bhubaneswar",
    "parotidectomy specialist Odisha",
  ],
});

export default function HeadAndNeckSurgeryPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}
