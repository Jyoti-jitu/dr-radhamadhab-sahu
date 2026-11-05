import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  BookOpen,
  Info,
  ShieldCheck,
  Stethoscope,
  ExternalLink,
  UserCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentCTA from "@/components/AppointmentCTA";
import { DOCTOR } from "@/lib/doctor";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Patient Resources & ENT Educational Guides | Dr. Radhamadhab Sahu",
  description:
    "Evidence-based clinical guides by Dr. Radhamadhab Sahu on chronic sinusitis, deviated nasal septum, hearing loss, voice hoarseness, sleep apnea, and endoscopic skull base surgery in Bhubaneswar.",
  pathname: "/patient-resources",
  keywords: [
    "Doctor for chronic sinusitis in Bhubaneswar",
    "ENT doctor for hearing loss in Bhubaneswar",
    "sinusitis patient guide",
    "deviated septum symptoms",
    "when to see an ENT doctor in Bhubaneswar",
  ],
});

const articles = [
  {
    id: "sinusitis",
    title: "Understanding Chronic Sinusitis: Causes, Symptoms & Modern Care",
    category: "Rhinology & Sinus Health",
    readTime: "5 min read",
    datePublished: "2024-03-15",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-fess-sinus-cme-award.jpg",
    imageAspect: "aspect-[3/4] sm:aspect-[4/5]",
    imagePosition: "object-top",
    imageCaption: "Dr. Radhamadhab Sahu honored on stage at the AOI State CME on Endoscopic Sinus Surgery (FESS) & Allergic Rhinitis.",
    imageBadge: "Sinus Surgery CME",
    summary:
      "What causes paranasal sinus blockage, when medical therapies suffice, and how Functional Endoscopic Sinus Surgery (FESS) restores natural sinus ventilation without external incisions.",
    content: [
      "The human skull contains four paired paranasal sinus air cavities: maxillary, ethmoid, frontal, and sphenoid. In healthy individuals, these produce mucus that traps dust and pathogens, which micro-cilia constantly sweep through narrow ostia into the nasal cavity.",
      "When chronic inflammation, allergy, or anatomical obstruction blocks these narrow drainage pathways, mucus stagnates. Bacteria or fungi proliferate, leading to persistent facial heaviness, purulent nasal discharge, hyposmia (loss of smell), and chronic headaches.",
      "While initial episodes are treated medically with saline irrigations and intranasal steroid sprays, refractory cases lasting beyond 12 weeks often benefit from Functional Endoscopic Sinus Surgery (FESS). FESS uses optical cameras through the nostrils to widen natural drainage channels while preserving healthy mucosa.",
    ],
    keyTakeaways: [
      "Symptoms lasting longer than 12 weeks indicate chronic rhinosinusitis, requiring formal endoscopic evaluation.",
      "Routine over-the-counter decongestant nasal drops (e.g. xylometazoline) should NEVER be used for more than 5 consecutive days to prevent rhinitis medicamentosa (rebound congestion).",
      "Modern FESS utilizes dissolvable bio-absorbable spacers, avoiding painful traditional packing removal.",
    ],
    references: [
      "Rosenfeld RM, Piccirillo JF, Chandrasekhar SS, et al. Clinical practice guideline (update): adult sinusitis. Otolaryngol Head Neck Surg. 2015;152(2 Suppl):S1-S39.",
      "Fokkens WJ, Lund VJ, Hopkins C, et al. European Position Paper on Rhinosinusitis and Nasal Polyps 2020 (EPOS 2020). Rhinology. 2020;58(Suppl S29):1-464.",
      "Orlandi RR, Kingdom TT, Smith TL, et al. International consensus statement on allergy and rhinology: rhinosinusitis 2021. Int Forum Allergy Rhinol. 2021;11(3):213-739.",
    ],
  },
  {
    id: "deviated-septum",
    title: "Deviated Nasal Septum (DNS) & Chronic Nasal Obstruction",
    category: "Nasal Airway",
    readTime: "4 min read",
    datePublished: "2024-03-15",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-national-conference-lectern.jpg",
    imageCaption: "Dr. Radhamadhab Sahu delivering an invited lecture on endoscopic septoplasty and airway reconstruction corridors.",
    imageBadge: "Airway Surgery Faculty",
    summary:
      "How a deviated midline septum disrupts nasal airflow, causes unilateral congestion, and how endoscopic septoplasty straightens the cartilage with minimal recovery time.",
    content: [
      "The nasal septum is the cartilage and bone partition separating the left and right nasal airways. In many individuals, trauma during birth, childhood sports, or natural developmental spurts causes the septum to deviate significantly to one side.",
      "A deviated septum restricts laminar airflow, forcing mouth-breathing, dry mouth on waking, disrupted sleep, snoring, and compensatory enlargement (hypertrophy) of the opposite inferior turbinate.",
      "Endoscopic Septoplasty is a minimally invasive surgical procedure performed entirely inside the nostrils. Under microscopic magnification, the surgeon straightens and re-aligns the deviated cartilage without any external marks, bruising, or alterations to the external shape of the nose.",
    ],
    keyTakeaways: [
      "Septoplasty is an internal functional procedure; it does not change the external shape of your nose unless combined with rhinoplasty.",
      "Most patients resume light desk work within 3 to 5 days following endoscopic septoplasty.",
    ],
    references: [
      "Illum P. Septoplasty and compensatory inferior turbinate hypertrophy: long-term results after surgical treatment. Rhinology. 1997;35(2):89-92.",
      "American Academy of Otolaryngology–Head and Neck Surgery. Clinical Consensus Statement: Septoplasty with or without Inferior Turbinate Reduction. 2015.",
    ],
  },
  {
    id: "when-to-consult",
    title: "When Should You Consult an ENT Specialist? 7 Red Flag Symptoms",
    category: "Clinical Guidance",
    readTime: "4 min read",
    datePublished: "2024-03-15",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/clinic-head-silhouette-awards-wall.jpg",
    imageCaption: "Distinctive head-silhouette awards wall and surgical honours inside Dr. Radhamadhab Sahu's clinic in Bhubaneswar.",
    imageBadge: "Consultation Chamber",
    summary:
      "Learn which ear, nose, throat, and neck symptoms warrant prompt specialist evaluation rather than continued self-medication.",
    content: [
      "Many mild ENT symptoms resolve within a week or two. However, certain persistent or progressive signs indicate underlying structural, neurological, or neoplastic processes requiring expert otolaryngology investigation.",
      "1. Persistent Hoarseness: Any change in voice lasting more than 3 weeks requires video laryngoscopy to examine the vocal folds.",
      "2. Unilateral Clear Watery Nasal Discharge: Fluid that drips from only one nostril when bending forward may represent cerebrospinal fluid (CSF leak) from the skull base.",
      "3. Asymmetric Hearing Loss or Sudden Deafness: Sudden loss of hearing in one ear is a medical emergency requiring immediate steroids within 48 to 72 hours for best recovery.",
      "4. Unilateral Ear Pain with Normal Ear Canal: Referred otalgia may originate from an underlying tonsillar, tongue base, or laryngeal pathology.",
      "5. Painless Firm Neck Lump: Any new lump in the neck that persists beyond 2 to 3 weeks must be evaluated with ultrasound and fine needle aspiration cytology (FNAC).",
      "6. Severe Snoring with Breathing Pauses: Choking awakenings and unrefreshing sleep signify Obstructive Sleep Apnea, which stresses cardiovascular function.",
      "7. Chronic Ear Drainage: Foul-smelling ear discharge suggests chronic suppurative otitis media or cholesteatoma requiring surgical eradication.",
    ],
    keyTakeaways: [
      "Early consultation prevents chronic complications and allows less invasive endoscopic interventions.",
    ],
    references: [
      "Stachler RJ, Francis DO, Schwartz SR, et al. Clinical Practice Guideline: Hoarseness (Dysphonia) (Update). Otolaryngol Head Neck Surg. 2018;158(1_suppl):S1-S42.",
      "Chandrasekhar SS, Tsai Do BS, Schwartz SR, et al. Clinical Practice Guideline: Sudden Hearing Loss (Update). Otolaryngol Head Neck Surg. 2019;161(1_suppl):S1-S45.",
      "Ziu E, et al. Adult Skull Base Cerebrospinal Fluid Leaks. StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023.",
    ],
  },
  {
    id: "hearing-difficulties",
    title: "Understanding Ear Symptoms: Perforations, Cholesteatoma & Implants",
    category: "Otology & Hearing",
    readTime: "6 min read",
    datePublished: "2024-03-15",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-patient-abhishek-rao.jpg",
    imageCaption: "Long-term hearing restoration: Patient Abhishek Rao with Dr. Sahu at 2-year post-mastoidectomy follow-up.",
    imageBadge: "Verified Clinical Follow-Up",
    summary:
      "A guide to eardrum repair (tympanoplasty), cholesteatoma risks, and how cochlear and bone-anchored hearing aids restore auditory connection.",
    content: [
      "The ear is divided into the external canal, the middle ear cleft containing the three smallest bones in the human body (malleus, incus, and stapes), and the delicate fluid-filled inner ear (cochlea).",
      "Chronic ear infections often cause a hole (perforation) in the tympanic membrane (eardrum). A perforation compromises hearing and permits water and bacteria to enter the middle ear, triggering recurrent drainage. Tympanoplasty reconstructs the eardrum using natural graft tissue (temporalis fascia or tragal cartilage), sealing the ear and restoring hearing.",
      "When bone-eroding skin cyst tissue (cholesteatoma) develops inside the mastoid air cells, it can erode the hearing bones and facial nerve. Timely mastoidectomy eradicates this disease and preserves inner ear function.",
      "For individuals with profound sensorineural deafness non-responsive to hearing aids, modern Cochlear Implants bypass damaged hair cells to stimulate the auditory nerve directly.",
    ],
    keyTakeaways: [
      "Never let water enter an ear with a known eardrum perforation; use cotton soaked in petroleum jelly during showers.",
      "Simultaneous same-day bilateral tympanoplasty can repair both ears in a single sitting under expert hands.",
    ],
    references: [
      "Nieman CL, Oh ES, Lin FR. Evaluation and Management of Conductive Hearing Loss in Adults. JAMA. 2021;326(10):966-967.",
      "American Academy of Otolaryngology–Head and Neck Surgery. Clinical Practice Guideline: Tympanostomy Tubes in Children (Update). 2022.",
    ],
  },
  {
    id: "skull-base-guide",
    title: "What is Endoscopic Skull Base Surgery? A Patient's Primer",
    category: "Skull Base Surgery",
    readTime: "6 min read",
    datePublished: "2024-03-15",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-eboss-skullbase-faculty.jpg",
    imageAspect: "aspect-[3/4] sm:aspect-[4/5]",
    imagePosition: "object-top",
    imageCaption: "Dr. Radhamadhab Sahu serving as expert faculty at EBOSS 2.0 (Endoscopic Ear & Skull Base Surgery).",
    imageBadge: "EBOSS 2.0 Faculty",
    summary:
      "How surgeons access deep pituitary tumors, clival chordomas, and cranial base leaks through the nostrils without opening the skull.",
    content: [
      "The skull base is the complex floor of the cranial cavity supporting the brain and pierced by critical cranial nerves and major arteries. Historically, reaching tumors located here required large craniotomies, external facial incisions, and extensive brain retraction.",
      "Over the past two decades, high-definition optical endoscopes have revolutionized skull base surgery. By entering through the nostrils and traversing the sphenoid sinus, surgeons gain direct panoramic access to the sella turcica (pituitary gland), clivus, and anterior cranial fossa.",
      "Using optical neuronavigation, micro-doppler probes, and specialized angled instruments, tumors like pituitary macroadenomas and chordomas are removed with high precision, minimizing blood loss and hospital stay.",
    ],
    keyTakeaways: [
      "Endoscopic endonasal approaches leave zero external facial incisions.",
      "Post-operative care emphasizes strict avoidance of nose-blowing or heavy lifting to allow the skull base flap to heal securely.",
    ],
    references: [
      "Hadad G, Bassagasteguy L, Carrau RL, et al. A novel reconstructive technique after endoscopic expanded endonasal approaches: vascular pedicle nasoseptal flap. Laryngoscope. 2006;116(10):1882-1886.",
      "Snyderman CH, Pant H, Carrau RL, Prevedello D, Gardner P, Kassam AB. What are the limits of endoscopic endonasal skull base surgery? Tech Vasc Interv Radiol. 2006;9(4):152-160.",
    ],
  },
  {
    id: "head-neck-thyroid",
    title: "Thyroid Nodules, Salivary Gland Stones & Scarless Surgery",
    category: "Head & Neck Surgery",
    readTime: "6 min read",
    datePublished: "2024-04-10",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-patient-deepak-barik.jpg",
    imageCaption: "Dr. Radhamadhab Sahu with post-operative patient Deepak Kumar Barik and family following successful head & neck lesion excision.",
    imageBadge: "Head & Neck Outcomes",
    summary:
      "When thyroid swellings require ultrasound FNAC, how Transoral Endoscopic Thyroidectomy (TOETVA) removes nodules without neck scars, and micro-sialoendoscopy for salivary stones.",
    content: [
      "Thyroid nodules are common, but every solitary or dominant swelling requires systematic evaluation with high-resolution neck ultrasound and Fine Needle Aspiration Cytology (FNAC) to distinguish benign colloids from malignant papillary carcinomas.",
      "For eligible patients with benign or indeterminate thyroid nodules, Transoral Endoscopic Thyroidectomy Vestibular Approach (TOETVA) offers a pioneering surgical alternative. Operating through three small puncture incisions hidden on the inner side of the lower lip, the thyroid is excised completely without leaving any visible surgical cut on the front of the neck.",
      "Similarly, obstructive mealtime swelling under the jaw or in the cheek is often caused by salivary stones (sialolithiasis). With diagnostic and interventional sialoendoscopy, miniature endoscopes measure just 1.3 mm, allowing surgeons to locate and extract stones while preserving natural salivary flow.",
    ],
    keyTakeaways: [
      "Over 90% of thyroid nodules are benign, but ultrasound FNAC is mandatory to establish cytological safety.",
      "TOETVA leaves zero neck scars, making it an excellent option for cosmetically conscious patients with nodules under 4–5 cm.",
      "Sialoendoscopy saves the salivary gland from traditional surgical excision in the majority of stone cases.",
    ],
    references: [
      "Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133.",
      "Anuwong A, Ketwong K, Yongchaiyud P, et al. Transoral Endoscopic Thyroidectomy Vestibular Approach (TOETVA): From First-in-Human to International Adoption. World J Surg. 2018;42(2):464-475.",
      "Marchal F, Dulguerov P. Sialendoscopy: new engine in salivary duct surgery. Arch Otolaryngol Head Neck Surg. 2003;129(8):830-834.",
    ],
  },
  {
    id: "voice-and-sleep",
    title: "Understanding Hoarseness, Vocal Cord Polyps & Obstructive Sleep Apnea",
    category: "Voice & Sleep Health",
    readTime: "5 min read",
    datePublished: "2024-04-20",
    dateModified: "2026-10-23",
    author: DOCTOR.name,
    authorBioUrl: "/about",
    medicalReviewer: `${DOCTOR.name}, ${DOCTOR.qualifications}`,
    image: "/images/dr-sahu-phonocon-2025-award.jpg",
    imageCaption: "Dr. Radhamadhab Sahu receiving national honors at PHONOCON 2025 for voice and phonosurgical contributions.",
    imageBadge: "Phonosurgery Faculty",
    summary:
      "When voice changes warrant video laryngostroboscopy, how phonomicrosurgery preserves vocal fold layers, and how sleep apnea is treated when CPAP fails.",
    content: [
      "Voice hoarseness persisting for more than three weeks is never normal. While acute laryngitis resolves with vocal rest and hydration, persistent breathiness, pitch breaks, or strain may signify benign vocal cord nodules, polyps, or early laryngeal dysplasia requiring high-definition stroboscopy.",
      "Phonomicrosurgery uses cold microscopic micro-instruments to excise benign vocal fold lesions while strictly preserving the delicate gelatinous lamina propria, restoring natural mucosal wave oscillations and vocal endurance.",
      "In sleep medicine, loud habitual snoring paired with witnessed gasping or unrefreshing sleep indicates Obstructive Sleep Apnea (OSA). When patients cannot tolerate CPAP masks, Drug-Induced Sleep Endoscopy (DISE) accurately maps the site of airway collapse, guiding targeted low-temperature coblation pharyngoplasty or multi-level surgical airway widening.",
    ],
    keyTakeaways: [
      "Hoarseness lasting longer than 3 weeks is a red flag requiring fiberoptic laryngeal examination.",
      "Vocal surgery requires 48 to 72 hours of total voice rest followed by guided speech therapy for optimal vocal recovery.",
      "Sleep apnea stresses cardiac and vascular health; surgical airway widening offers lasting relief for CPAP-intolerant patients.",
    ],
    references: [
      "Stachler RJ, Francis DO, Schwartz SR, et al. Clinical Practice Guideline: Hoarseness (Dysphonia) (Update). Otolaryngol Head Neck Surg. 2018;158(1_suppl):S1-S42.",
      "De Vito A, Carrasco Llatas M, Vanni A, et al. European position paper on drug-induced sleep endoscopy: 2017 update. Clin Otolaryngol. 2018;43(6):1541-1552.",
      "Kapur VK, Auckley DH, Chowdhuri S, et al. Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea. J Clin Sleep Med. 2017;13(3):479-504.",
    ],
  },
];

export default function PatientResourcesPage() {
  const breadcrumbItems = [{ name: "Patient Resources", url: "/patient-resources" }];

  const patientResourcesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Patient Resources & ENT Educational Guides",
    description:
      "Evidence-based clinical guides on chronic sinusitis, deviated nasal septum, hearing loss, voice hoarseness, sleep apnea, and endoscopic skull base surgery.",
    url: `${SITE_URL}/patient-resources`,
    author: {
      "@id": `${SITE_URL}/#physician`,
    },
    publisher: {
      "@id": `${SITE_URL}/#clinic`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((art, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Article",
          headline: art.title,
          description: art.summary,
          datePublished: art.datePublished,
          dateModified: art.dateModified,
          author: {
            "@id": `${SITE_URL}/#physician`,
          },
          publisher: {
            "@id": `${SITE_URL}/#clinic`,
          },
          citation: art.references,
        },
      })),
    },
  };

  return (
    <div className="bg-[#FDFBF7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(patientResourcesSchema) }}
      />
      {/* Top Header */}
      <section className="bg-white border-b border-slate-200 py-4 sm:py-8">
        <div className="medical-container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-2 sm:mt-3 space-y-2 sm:space-y-3">
            <span className="medical-badge">
              Patient Education &amp; Clinical Literacy
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Patient Resources &amp; Guides
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Empowering patients and families with verified medical knowledge. These educational articles are written from an evidence-based clinical perspective to help you understand your symptoms and prepare for specialist consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Guide Navigation Directory */}
      <section className="py-5 sm:py-8 bg-slate-50 border-b border-slate-200">
        <div className="medical-container">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
              Quick Topic Directory (Select to Jump)
            </span>
            <span className="text-xs text-[#14746F] font-semibold hidden sm:inline">
              7 Evidence-Based Clinical Primers Across 5 Pillars
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 sm:gap-4">
            {articles.map((art) => (
              <a
                key={art.id}
                href={`#${art.id}`}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:border-[#14746F] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 240px"
                    className={`object-cover ${art.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1 left-1.5 right-1.5 text-white text-[9px] sm:text-[10px] font-semibold truncate">
                    {art.category}
                  </div>
                </div>
                <div className="p-2 sm:p-3 space-y-1">
                  <h3 className="text-[11px] sm:text-xs font-bold text-[#0B2545] group-hover:text-[#14746F] transition-colors line-clamp-2 leading-tight">
                    {art.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#14746F] flex items-center gap-0.5 pt-0.5 sm:pt-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-8 sm:py-16 lg:py-20">
        <div className="medical-container">
          <div className="space-y-6 sm:space-y-10">
            {articles.map((art) => (
              <article
                key={art.id}
                id={art.id}
                className="medical-card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 scroll-mt-28 border border-slate-200 shadow-sm rounded-2xl sm:rounded-3xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#14746F] bg-teal-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-teal-100">
                    {art.category}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {art.readTime} &bull; Educational Guide
                  </span>
                </div>

                {/* Author & Verification Byline */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>Author:</span>
                    <Link
                      href={art.authorBioUrl}
                      className="font-bold text-[#0B2545] hover:text-[#14746F] hover:underline"
                    >
                      {art.author}
                    </Link>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">&bull;</span>
                  <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>
                      Reviewed by: <strong>{art.medicalReviewer}</strong>
                    </span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">&bull;</span>
                  <div className="text-[11px] text-slate-500">
                    Updated: {art.dateModified}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* Left Column: Narrative & Content */}
                  <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h2 className="text-lg sm:text-2xl font-bold text-[#0B2545] tracking-tight leading-snug">
                        {art.title}
                      </h2>
                      <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
                        {art.summary}
                      </p>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                      {art.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Key Takeaways Card */}
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#14746F]" />
                        <span>Clinical Pearls &amp; Key Takeaways</span>
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {art.keyTakeaways.map((point, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Peer-Reviewed Scientific References */}
                    {art.references && art.references.length > 0 && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
                        <p className="font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#14746F]" />
                          <span>Scientific References &amp; Clinical Guidelines</span>
                        </p>
                        <ol className="list-decimal pl-4 space-y-1 text-slate-600 leading-relaxed">
                          {art.references.map((ref, rIdx) => (
                            <li key={rIdx}>{ref}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Medical Educational Advisory Disclaimer */}
                    <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-[11px] text-amber-900/90 leading-relaxed flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        <strong>Clinical Advisory:</strong> This resource is authored by Dr. Radhamadhab Sahu for patient health literacy and evidence-based education. It does not replace individualized clinical consultation, fiberoptic endoscopy, or radiologic assessment.
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Visual Photo Card */}
                  <div className="lg:col-span-5 space-y-4">
                    {art.image && (
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                        <div className={`relative ${art.imageAspect || "aspect-[16/10] sm:aspect-[4/3]"} w-full bg-slate-900 overflow-hidden`}>
                          <Image
                            src={art.image}
                            alt={art.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 420px"
                            className={`object-cover ${art.imagePosition || "object-center"}`}
                          />
                          <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold border border-slate-700">
                            {art.imageBadge}
                          </div>
                        </div>
                        <div className="p-4 bg-white border-t border-slate-100">
                          <p className="text-xs text-slate-600 leading-relaxed italic">
                            {art.imageCaption}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="p-4 rounded-xl bg-[#EDF4FA] border border-[#D5E5F2] text-xs text-slate-700 space-y-2">
                      <strong className="text-[#0B2545] font-semibold flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-[#14746F]" />
                        <span>Have Symptoms of this Condition?</span>
                      </strong>
                      <p className="text-[11px] text-slate-600">
                        Evaluations are conducted with advanced high-definition endoscopy at SUM Ultimate Medicare and Dr. Radhamadhab ENT and Cancer Clinic.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-bold text-[#14746F] hover:underline text-xs"
                      >
                        <span>Schedule Clinical Review →</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
                  <span>
                    Medical Reviewer: Dr. Radhamadhab Sahu (Senior Consultant &amp; HOD)
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-bold text-[#0B2545] hover:text-[#14746F]"
                  >
                    <span>Schedule an Evaluation for this condition →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <AppointmentCTA variant="compact" />
    </div>
  );
}
