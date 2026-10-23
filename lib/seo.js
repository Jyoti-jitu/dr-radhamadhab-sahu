/**
 * Centralized SEO & Structured Data (JSON-LD) configuration.
 * Complies with Google Healthcare guidelines and Schema.org specifications.
 */

import { DOCTOR } from "./doctor";

export const SITE_URL = "https://drradhamadhabsahu.com"; // Primary canonical domain placeholder
export const SITE_NAME = "Dr. Radhamadhab Sahu | ENT & Skull Base Surgery";

export const DEFAULT_KEYWORDS = [
  "Dr Radhamadhab Sahu Bhubaneswar",
  "Dr Radhamadhab ENT and Cancer Clinic",
  "ENT specialist in Bhubaneswar",
  "Skull base surgeon in Bhubaneswar",
  "Endoscopic sinus surgery in Bhubaneswar",
  "Ear and hearing specialist in Bhubaneswar",
  "Head and neck surgeon in Odisha",
  "ENT consultation in Kalinga Nagar",
  "Pituitary tumor surgery Bhubaneswar",
  "FESS sinus surgery Odisha",
  "TOETVA scarless thyroid surgery",
];

/**
 * Builds standard OpenGraph and Twitter metadata for any page
 */
export function buildPageMetadata({
  title,
  description,
  pathname = "",
  keywords = [],
  image = "/images/dr-radhamadhab-sahu.jpg",
}) {
  const fullTitle = `${title} | Dr. Radhamadhab Sahu`;
  const canonicalUrl = `${SITE_URL}${pathname}`;

  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generates verified Physician and MedicalClinic JSON-LD schema
 */
export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: DOCTOR.name,
    jobTitle: DOCTOR.title,
    description: DOCTOR.shortBio,
    image: `${SITE_URL}${DOCTOR.portraitUrl}`,
    url: SITE_URL,
    telephone: DOCTOR.clinic.telephone,
    medicalSpecialty: [
      "Otolaryngology",
      "Head and Neck Surgery",
      "Skull Base Surgery",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "S.C.B. Medical College & Hospital, Cuttack",
      },
      {
        "@type": "EducationalOrganization",
        name: "Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital, New Delhi",
      },
    ],
    worksFor: {
      "@type": "Hospital",
      name: DOCTOR.hospital.name,
      url: DOCTOR.hospital.officialBookingUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: DOCTOR.hospital.address,
        addressLocality: DOCTOR.hospital.city,
        addressRegion: DOCTOR.hospital.state,
        postalCode: DOCTOR.hospital.pincode,
        addressCountry: "IN",
      },
      telephone: DOCTOR.hospital.telephone,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: DOCTOR.clinic.address,
      addressLocality: DOCTOR.clinic.city,
      addressRegion: DOCTOR.clinic.state,
      postalCode: DOCTOR.clinic.pincode,
      addressCountry: "IN",
    },
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Skull Base Surgery",
      },
      {
        "@type": "MedicalProcedure",
        name: "Functional Endoscopic Sinus Surgery (FESS)",
      },
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Tympanoplasty & Otology",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transoral Endoscopic Thyroidectomy (TOETVA)",
      },
    ],
    sameAs: [
      DOCTOR.hospital.officialBookingUrl,
      "https://www.newindianexpress.com/states/odisha/2024/Mar/02/sumum-conducts-endoscopic-surgery-on-ex-cameroon-sc-judge",
      "https://www.healu360.com/doctor/dr-radhamadhab-sahu",
      "https://www.medibuddy.in/doctor-consultations/bhubaneswar/ent/dr-radhamadhab-345898",
    ],
  };
}

/**
 * Generates MedicalClinic schema for Dr. Radhamadhab ENT and Cancer Clinic
 */
export function generateClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: DOCTOR.clinic.name,
    image: `${SITE_URL}/images/ent-clinic-suite.jpg`,
    url: `${SITE_URL}/contact`,
    telephone: DOCTOR.clinic.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: DOCTOR.clinic.address,
      addressLocality: DOCTOR.clinic.city,
      addressRegion: DOCTOR.clinic.state,
      postalCode: DOCTOR.clinic.pincode,
      addressCountry: "IN",
    },
    medicalSpecialty: "Otolaryngology",
    physician: {
      "@id": `${SITE_URL}/#physician`,
    },
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generates Article schema for educational patient resources
 */
export function generateArticleSchema({ title, description, datePublished, pathname }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: description,
    url: `${SITE_URL}${pathname}`,
    datePublished: datePublished || "2024-03-15",
    author: {
      "@type": "Person",
      name: DOCTOR.name,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Radhamadhab ENT and Cancer Clinic",
      url: SITE_URL,
    },
  };
}
