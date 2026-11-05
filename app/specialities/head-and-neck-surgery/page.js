import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find((s) => s.slug === "head-and-neck-surgery");

export const metadata = buildPageMetadata({
  title: "Head and Neck Surgeon in Bhubaneswar & Thyroid Care | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Head and Neck Surgeon in Bhubaneswar & Head and Neck Cancer Surgeon in Odisha Dr. Radhamadhab Sahu. Pioneer of scarless thyroid surgery (TOETVA), parotidectomy, and sialoendoscopy.",
  pathname: "/specialities/head-and-neck-surgery",
  keywords: [
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
