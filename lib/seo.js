/**
 * Centralized SEO & Structured Data (JSON-LD) configuration.
 * Complies with Google Healthcare guidelines and Schema.org specifications.
 */

import { DOCTOR } from "./doctor";

export const SITE_URL = "https://drradhamadhabsahu.com"; // Primary canonical domain placeholder
export const SITE_NAME = "Dr. Radhamadhab Sahu | ENT & Skull Base Surgery";

export const DEFAULT_KEYWORDS = [
  "Best ENT Doctor in Bhubaneswar",
  "Best ENT Specialist in Bhubaneswar",
  "Best ENT Surgeon in Bhubaneswar",
  "Top ENT Doctor in Bhubaneswar",
  "Experienced ENT Specialist in Bhubaneswar",
  "Dr Radhamadhab Sahu",
  "Dr. Radhamadhab Sahu ENT",
  "Skull Base Surgeon in Odisha",
  "Best Skull Base Surgeon in Odisha",
  "Best Skull Base Specialist in Bhubaneswar",
  "Best Head and Neck Surgeon in Bhubaneswar",
  "Best Sinus Surgeon in Bhubaneswar",
  "Sinus Specialist in Bhubaneswar",
  "Best Ear Specialist in Bhubaneswar",
  "Ear Surgery Specialist in Odisha",
  "Best Hearing Loss Doctor in Bhubaneswar",
  "Best Vertigo Specialist in Bhubaneswar",
  "Vertigo Specialist in Bhubaneswar",
  "Best ENT Cancer Surgeon in Odisha",
  "Best Rhinology Specialist in Odisha",
  "Cochlear Implant Surgeon in Bhubaneswar",
  "Endoscopic Skull Base Surgery India",
  "Pituitary Tumor Surgery in Bhubaneswar",
  "Thyroid Surgery Specialist in Bhubaneswar",
  "Sleep Apnea ENT Specialist",
  "ENT Specialist Near Me",
  "ENT Doctor in Kalinga Nagar",
  "ENT Specialist near Ghatikia",
  "ENT Surgeon near AIIMS Bhubaneswar",
  "ENT Specialist in Khandagiri",
  "Where to consult an ENT specialist in Bhubaneswar",
  "Dr Radhamadhab ENT and Cancer Clinic",
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
  // Ensure title includes the doctor suffix exactly once.
  // Using { absolute: fullTitle } ensures root layout's template does not re-append it.
  const fullTitle = title.includes("Dr. Radhamadhab Sahu")
    ? title
    : `${title} | Dr. Radhamadhab Sahu`;
  const canonicalUrl = `${SITE_URL}${pathname}`;

  return {
    title: { absolute: fullTitle },
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
 * Generates verified Physician JSON-LD schema with complete entity graph
 */
export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: DOCTOR.name,
    honorificPrefix: "Dr.",
    honorificSuffix: DOCTOR.qualifications,
    jobTitle: DOCTOR.fullTitle,
    description: DOCTOR.shortBio,
    image: `${SITE_URL}${DOCTOR.portraitUrl}`,
    url: SITE_URL,
    telephone: DOCTOR.clinic.telephone,
    medicalSpecialty: [
      "Otolaryngology",
      "Head and Neck Surgery",
      "Skull Base Surgery",
    ],
    knowsAbout: [
      "Endoscopic Skull Base Surgery",
      "Functional Endoscopic Sinus Surgery (FESS)",
      "Otology & Tympanoplasty",
      "Cochlear Implantation",
      "Transoral Endoscopic Thyroidectomy (TOETVA)",
      "Sialoendoscopy",
      "Obstructive Sleep Apnea Surgery",
      "Phonomicrosurgery",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "S.C.B. Medical College & Hospital, Cuttack",
        description: "MBBS (2002–2008)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital, New Delhi",
        description: "DNB (Otorhinolaryngology / ENT) & 3-Year Neurosurgery Skull Base Residency (2012–2015)",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical Degree",
        name: "MBBS",
        recognizedBy: {
          "@type": "Organization",
          name: "National Medical Commission (NMC) / Utkal University",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Postgraduate Specialist Qualification",
        name: "DNB (Otorhinolaryngology)",
        recognizedBy: {
          "@type": "Organization",
          name: "National Board of Examinations in Medical Sciences (NBEMS)",
        },
      },
    ],
    worksFor: {
      "@type": "Hospital",
      "@id": `${SITE_URL}/#hospital`,
      name: DOCTOR.hospital.name,
      url: DOCTOR.hospital.officialBookingUrl,
      parentOrganization: {
        "@type": "EducationalOrganization",
        name: "Siksha 'O' Anusandhan (SOA)",
      },
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
    memberOf: {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
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
        procedureType: "SurgicalProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Functional Endoscopic Sinus Surgery (FESS)",
        procedureType: "SurgicalProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Tympanoplasty & Mastoidectomy",
        procedureType: "SurgicalProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transoral Endoscopic Thyroidectomy (TOETVA)",
        procedureType: "SurgicalProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sialoendoscopy for Salivary Stones",
        procedureType: "NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cochlear Implantation & Auditory Rehabilitation",
        procedureType: "SurgicalProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Drug-Induced Sleep Endoscopy (DISE) & Coblation Pharyngoplasty",
        procedureType: "DiagnosticProcedure",
      },
    ],
    award: [
      "Bharat Pratibha Sammaan (Conferred by Bharat Pratibha Sammaan Council, presented by Hon'ble Smt. Meenakshi Lekhi, 2026)",
      "Dr. H. K. Kukreja Oration (41st Rajasthan AOICON, 2024)",
      "1st Prize, Prakash & Ved Monga Temporal Bone Dissection Competition (2011)",
      "Organising Secretary & Keynote Speaker, AOIBBCON (2024)",
    ],
    sameAs: [
      "https://maps.app.goo.gl/iyFUSCm5hVAiDjkn6",
      DOCTOR.hospital.officialBookingUrl,
      "https://www.newindianexpress.com/states/odisha/2024/Mar/02/sumum-conducts-endoscopic-surgery-on-ex-cameroon-sc-judge",
      "https://www.newindianexpress.com/cities/bhubaneswar/2023/Aug/08/cricket-ball-sized-tumour-removed-bysum-ultimate-medicare-doctors-in-bhubaneswar-2603078.html",
      "https://www.newindianexpress.com/bhubaneswar/2023/Oct/07/27-stones-removed-from-youngsters-salivary-gland-2621701.html",
      "https://www.prameyanews.com/10-month-old-baby-saved-after-custard-apple-seed-lodges-in-airway-at-sum-ultimate-medicare",
      "https://www.indiagazette.com/news/279409073/pratibha-sammaan-samaroh-2026-by-bharat-pratibha-sammaan-council-celebrates-india-grassroots-talent-in-new-delhi",
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
    alternateName: DOCTOR.clinic.registeredName,
    image: `${SITE_URL}/images/clinic-head-silhouette-awards-wall.jpg`,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.2798,
      longitude: 85.7765,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "12:30",
      },
    ],
    medicalSpecialty: "Otolaryngology",
    physician: {
      "@id": `${SITE_URL}/#physician`,
    },
  };
}

/**
 * Generates WebSite Schema with SearchAction for site discovery
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Dr. Radhamadhab Sahu | ENT & Skull Base Surgery",
    description:
      "Official practice and clinical portal of Dr. Radhamadhab Sahu, Senior Consultant & HOD of ENT and Skull Base Surgery in Bhubaneswar, Odisha.",
    publisher: {
      "@id": `${SITE_URL}/#physician`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items = []) {
  const fullList = [
    { name: "Home", url: "" },
    ...items.filter((i) => i.url !== "/" && i.url !== ""),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullList.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url.startsWith("/") ? item.url : item.url ? "/" + item.url : ""}`,
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
