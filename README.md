# Dr. Radhamadhab Sahu — ENT & Skull Base Surgery Website

Production-quality medical website for **Dr. Radhamadhab Sahu** (Senior Consultant & Head of Department, ENT and Skull Base Surgery at SUM Ultimate Medicare and Consultant at Dr. Radhamadhab ENT and Cancer Clinic, Bhubaneswar, Odisha, India).

Built with Next.js (App Router, JavaScript), React, Tailwind CSS, and Lucide React. Adheres strictly to high-standard editorial medical aesthetics, accessible contrast, technical SEO, and medical accuracy guidelines.

---

## 1. Project Architecture & Technology Stack

* **Framework:** Next.js (App Router)
* **Language:** JavaScript (ES6+ / React 19)
* **Styling:** Tailwind CSS (Custom Medical Design Tokens)
* **Icons:** Lucide React
* **Typography:** Plus Jakarta Sans (Google Fonts via `next/font`)
* **Optimization:** Next.js Image Component with responsive srcsets

```
app/
├── layout.js                     # Root layout with schemas, header, footer, & mobile quick action
├── page.js                       # Comprehensive homepage
├── about/page.js                 # Detailed biography, verified education & career timeline
├── specialities/
│   ├── page.js                   # Clinical specialities directory overview
│   ├── skull-base-surgery/       # Minimally invasive endoscopic skull base procedures
│   ├── sinus-and-nasal-care/     # FESS, septoplasty & rhinologic care
│   ├── ear-and-hearing/          # Endoscopic otology, tympanoplasty, cochlear implants
│   ├── head-and-neck-surgery/    # TOETVA scarless thyroid surgery & oncology
│   ├── voice-and-laryngeal-disorders/ # Phonomicrosurgery, laser voice interventions
│   └── sleep-related-ent-disorders/   # DISE evaluation & OSA airway reconstruction
├── research/page.js              # Peer-reviewed journal papers, AOICON conferences & press
├── patient-resources/page.js     # Evidence-based medical educational articles for patients
├── contact/page.js               # Verified clinic & hospital locations, timings & map embeds
├── privacy-policy/page.js        # Medical data confidentiality and patient privacy terms
├── disclaimer/page.js            # Medical advisory, non-diagnostic notice & legal boundaries
├── sitemap.js                    # Dynamic XML sitemap generator
└── robots.js                     # Search engine crawler directives
components/
├── Header.js                     # Responsive medical header with mobile navigation drawer
├── Footer.js                     # Quaternary hospital credentials & legal/emergency footer
├── Hero.js                       # Editorial hero with authentic portrait & verified badges
├── AppointmentCTA.js             # Dual care pathway booking component (SUMUM & Clinic)
├── SpecialtyCard.js              # Reusable specialty preview card
├── SpecialtyDetailView.js        # Comprehensive specialty detail page template
├── DoctorProfile.js              # Biography card with education & mentorship timeline
├── ResearchCard.js               # Publications, media coverage & conference card components
├── ContactDetails.js             # Two-tier hospital vs clinic contact information
├── FAQ.js                        # Accessible accordion component
└── Breadcrumbs.js                # Accessible breadcrumbs navigation
lib/
├── doctor.js                     # Centralized, verified physician & hospital dataset
├── specialties.js                # Verified procedures, symptoms & diagnostic pathways
└── seo.js                        # Metadata builders & JSON-LD schema generators
public/images/
├── dr-radhamadhab-sahu.jpg       # Authentic official hospital portrait of Dr. Sahu
├── sum-ultimate-medicare.jpg     # Quaternary hospital facility visual
├── ent-clinic-suite.jpg          # Modern otolaryngology examination & video-endoscopy suite
└── skull-base-anatomy.jpg        # Clean scientific medical illustration of cranial base
RESEARCH.md                       # Comprehensive dossier of verified sources, facts & resolution
ASSETS.md                         # Digital media provenance, resolutions & licensing record
```

---

## 2. Key Verified Clinical Credentials

* **Full Name:** Dr. Radhamadhab Sahu
* **Qualifications:** MBBS (S.C.B. Medical College & Hospital, Cuttack), DNB (Otorhinolaryngology, VMMC & Safdarjung Hospital, New Delhi)
* **Super-Specialized Training:** 3-Year Advanced Neurosurgery Training for Skull Base Surgery (Endoscopic Brain Surgery) at VMMC & Safdarjung Hospital, New Delhi
* **Senior Collaboration:** Practiced alongside Padmashree Dr. (Prof.) V.S. Mehta at Paras Hospital, Gurgaon
* **Current Roles:**
  * Senior Consultant & Head of Department, ENT & Skull Base Surgery, SUM Ultimate Medicare, Bhubaneswar
  * Consultant ENT Surgeon, Dr. Radhamadhab ENT and Cancer Clinic, Ghatikia Main Road, Bhubaneswar
* **Verified Hospital Phone:** `+91 0674 3 500 500` (OPD Hours: Mon–Sat, 9:30 AM – 5:30 PM)
* **Verified Clinic Phone:** `+91 97167 72703` (Evening Consultations by Appointment)

---

## 3. Installation & Local Development

### Prerequisites
* Node.js v18.18+ or v20+ or v22+
* npm, pnpm, or yarn

### Steps
1. Clone or navigate to the repository directory:
   ```bash
   cd /Users/apple/Desktop/RADHAMADHAB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 4. Production Build & Validation

To test production optimization, static rendering, and route type correctness:

```bash
npm run build
npm run start
```

---

## 5. SEO & Structured Data (JSON-LD)

The website implements Schema.org structured data on all pages:
* **Physician Schema:** Name, medicalSpecialty, alumniOf, worksFor, address, telephone, sameAs citations.
* **MedicalClinic Schema:** Clinic location, address, telephone.
* **MedicalWebPage & BreadcrumbList:** Hierarchical navigation and page classification.
* **Open Graph & Twitter Cards:** Complete social preview metadata.

---

## 6. Medical Ethics & Privacy Compliance

* **No Synthetic Physician Faces:** No AI-generated portrait is passed off as the doctor. Dr. Sahu’s authentic photograph is sourced from his official SUM Ultimate Medicare clinician profile.
* **No Manufactured Reviews:** No fabricated patient quotes, fake star ratings, or invented surgery counts.
* **Transparent Booking Pathway:** Direct `tel:` links to verified hospital and clinic desks; no nonfunctional forms that mislead patients into thinking appointments are confirmed.
