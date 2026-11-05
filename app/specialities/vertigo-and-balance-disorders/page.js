import SpecialtyDetailView from "@/components/SpecialtyDetailView";
import { SPECIALTIES } from "@/lib/specialties";
import { buildPageMetadata } from "@/lib/seo";

const specialty = SPECIALTIES.find(
  (s) => s.slug === "vertigo-and-balance-disorders"
);

export const metadata = buildPageMetadata({
  title:
    "Best Vertigo Specialist in Bhubaneswar | Dizziness & Balance Care | Dr. Radhamadhab Sahu",
  description:
    "Consult leading Vertigo Specialist in Bhubaneswar Dr. Radhamadhab Sahu. Expert diagnosis and treatment for BPPV, Meniere's disease, labyrinthitis, vestibular migraine & dizzy spells at SUM Ultimate Medicare.",
  pathname: "/specialities/vertigo-and-balance-disorders",
  keywords: [
    "Best Vertigo Specialist in Bhubaneswar",
    "Vertigo doctor in Bhubaneswar",
    "BPPV treatment Bhubaneswar",
    "Dizziness doctor in Odisha",
    "Balance disorder specialist Bhubaneswar",
    "Meniere's disease treatment Odisha",
    "vestibular rehabilitation Bhubaneswar",
    "Epley maneuver specialist Bhubaneswar",
  ],
});

export default function VertigoAndBalanceDisordersPage() {
  return <SpecialtyDetailView specialty={specialty} />;
}

