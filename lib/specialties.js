/**
 * Verified clinical specialities and surgical procedures offered by Dr. Radhamadhab Sahu.
 * Formatted for patient education, transparent symptom guidance, and medical accuracy.
 */

export const SPECIALTIES = [
  {
    slug: "skull-base-surgery",
    title: "Skull Base Surgery",
    eyebrow: "Minimally Invasive Neurosurgical ENT",
    heroImage: "/images/dr-sahu-eboss-skullbase-faculty.jpg",
    featuredMedia: {
      imageUrl: "/images/dr-sahu-skullbasecon-2025.jpg",
      title: "Keynote Lecture: Endoscope-Assisted Management of Jugular Foramen Tumors",
      caption: "Dr. Radhamadhab Sahu presenting intraoperative endoscopic techniques for jugular foramen and lateral skull base tumors at SKULLBASECON 2025 (26th Annual Conference of the Skull Base Surgery Society of India, The Leela Palace, Chennai).",
      badge: "SKULLBASECON 2025 Keynote Presentation",
    },
    shortDescription:
      "Advanced endoscopic endonasal and lateral approaches accessing deep cranial and pituitary pathologies without facial incisions or brain retraction.",
    fullDescription:
      "Dr. Radhamadhab Sahu completed 3 years of specialized neurosurgical skull base training at Safdarjung Hospital, New Delhi, and practiced alongside renowned neurosurgeon Dr. V.S. Mehta. He specializes in minimally invasive endoscopic corridor surgery through the natural nasal cavities, eliminating cranial incisions and offering faster recovery for complex cranial base tumors and CSF leaks.",
    procedures: [
      {
        name: "Endoscopic Transsphenoidal Pituitary Surgery",
        detail: "Complete resection of pituitary adenomas and macroadenomas through the nostrils using high-definition endoscopes with neuronavigation.",
      },
      {
        name: "Clival Chordoma & Craniopharyngioma Excision",
        detail: "Extended endoscopic anterior skull base resection of midline retroclival and suprasellar tumors.",
      },
      {
        name: "Endoscopic CSF Rhinorrhea Repair",
        detail: "High-precision multi-layered reconstruction of skull base defect leaks using vascularized nasoseptal flaps (Hadad-Bassagasteguy flap).",
      },
      {
        name: "Lateral Skull Base & CP Angle Tumors",
        detail: "Trans-labyrinthine and infratemporal approaches for vestibular schwannomas (acoustic neuromas) and glomus jugulare tumors.",
      },
      {
        name: "Juvenile Nasopharyngeal Angiofibroma (JNA)",
        detail: "Minimally invasive endoscopic vascular tumor excision with preoperative embolization support.",
      },
      {
        name: "Maxillofacial Trauma & Skull Base Reconstruction",
        detail: "Restoration of orbital floor, cribriform, and sphenoid fractures following high-velocity trauma.",
      },
    ],
    symptoms: [
      "Watery, salt-tasting fluid continually dripping from one nostril, aggravated by bending forward (CSF leak)",
      "Unexplained visual field deficits or progressive peripheral vision loss",
      "Persistent, deep cranial headaches non-responsive to conventional analgesia",
      "Hormonal irregularities (elevated prolactin, unexplained cortisol or growth hormone alterations)",
      "Unilateral facial numbness, tingling, or hearing loss",
    ],
    diagnosticPathway: [
      {
        step: "1. High-Resolution CT & 3T MRI",
        detail: "Thin-cut navigation protocol CT scans of skull base coupled with contrast-enhanced MRI to map tumor vascularity and neural borders.",
      },
      {
        step: "2. Rigid Diagnostic Endoscopy",
        detail: "Micro-endoscopic visualization of the sphenoethmoidal recess and cribriform plate to pinpoint bone defects.",
      },
      {
        step: "3. Beta-2 Transferrin Confirmation",
        detail: "Specific laboratory fluid assay to definitively confirm cerebrospinal fluid in suspicious nasal secretions.",
      },
      {
        step: "4. Multidisciplinary Skull Base Board",
        detail: "Coordinated review with neurosurgery, neuroradiology, and endocrinology teams for optimal operative planning.",
      },
    ],
    faqs: [
      {
        question: "How does endoscopic skull base surgery differ from traditional open craniotomy?",
        answer:
          "Endoscopic skull base surgery utilizes the natural corridor of the nasal cavities and sphenoid sinuses. By using HD cameras and specialized angled micro-instruments, surgeons can reach the pituitary gland and base of the brain directly from below, avoiding major skin incisions, bone flaps, and traumatic brain retraction.",
      },
      {
        question: "How long is the typical hospital stay after endoscopic pituitary surgery?",
        answer:
          "Most patients stay in the hospital for 3 to 5 days for close monitoring of fluid balance, electrolyte levels, and nasal healing. Recovery is generally much faster than open cranial surgery.",
      },
      {
        question: "What precautions are essential after a CSF leak repair?",
        answer:
          "Patients must avoid nose-blowing, heavy lifting, straining during bowel movements, and using straws for at least 4 to 6 weeks to avoid intracranial pressure spikes while the healing flap adheres firmly.",
      },
    ],
  },
  {
    slug: "sinus-and-nasal-care",
    title: "Sinus and Nasal Care",
    eyebrow: "Rhinology & Endoscopic Sinus Surgery (FESS)",
    heroImage: "/images/dr-sahu-national-conference-lectern.jpg",
    featuredMedia: {
      imageUrl: "/images/dr-sahu-fess-sinus-cme-award.jpg",
      title: "AOI State CME on Endoscopic Sinus Surgery (FESS) & Allergic Rhinitis",
      caption: "Dr. Radhamadhab Sahu receiving state honors on stage at the AOI CME on Recent Updates on Endoscopic Sinus Surgery (FESS) and Allergic Rhinitis.",
      badge: "AOI Sinus Surgery FESS CME Award",
    },
    shortDescription:
      "Comprehensive management of chronic rhinosinusitis, nasal polyposis, deviated nasal septum, and allergic airway diseases with state-of-the-art endoscopic technology.",
    fullDescription:
      "Persistent nasal blockage, chronic headaches, and recurrent sinus infections severely impact sleep and daily energy. Dr. Radhamadhab Sahu provides evidence-based medical therapies and precise surgical correction including Functional Endoscopic Sinus Surgery (FESS), septoplasty, and turbinate reduction with zero external incisions.",
    procedures: [
      {
        name: "Functional Endoscopic Sinus Surgery (FESS)",
        detail: "Targeted clearance of diseased sinus tissue, opening blocked osteomeatal complexes while preserving healthy physiological mucosa.",
      },
      {
        name: "Endoscopic Septoplasty",
        detail: "High-definition endoscopic straightening of the deviated nasal septum (DNS) with minimal mucosal elevation and rapid healing.",
      },
      {
        name: "Coblation / Radiofrequency Turbinate Reduction",
        detail: "Volumetric reduction of hypertrophied inferior turbinates to permanently relieve severe chronic nasal congestion.",
      },
      {
        name: "Balloon Sinuplasty",
        detail: "Gentle dilation of sinus ostia using high-pressure micro-balloons for select recurrent sinus conditions.",
      },
      {
        name: "Endoscopic Resection of Sinonasal Inverted Papilloma",
        detail: "Meticulous microscopic eradication of premalignant papillomas with clear margins to prevent recurrence.",
      },
    ],
    symptoms: [
      "Chronic nasal congestion or inability to breathe through one or both nostrils",
      "Persistent facial pressure, heaviness across forehead and cheekbones",
      "Thick yellow or green post-nasal drip requiring frequent throat clearing",
      "Decreased sense of smell (hyposmia) or taste",
      "Recurrent sinus infections requiring repeated antibiotic courses",
    ],
    diagnosticPathway: [
      {
        step: "1. Diagnostic Nasal Endoscopy (DNE)",
        detail: "Painless in-clinic visualization with ultra-fine HD endoscope to inspect sinus ostia, polyps, and septal spurs.",
      },
      {
        step: "2. Non-Contrast CT of Paranasal Sinuses (CT PNS)",
        detail: "High-definition coronal and axial computed tomography to map sinus anatomy and osteomeatal drainage pathways.",
      },
      {
        step: "3. Allergy & Mucosal Profile",
        detail: "Clinical evaluation for allergic rhinitis, fungal sinusitis, or environmental triggers contributing to mucosal edema.",
      },
    ],
    faqs: [
      {
        question: "Is endoscopic sinus surgery painful?",
        answer:
          "FESS is performed under general anesthesia, ensuring complete comfort during the procedure. Post-operatively, patients typically experience mild pressure and stuffiness rather than sharp pain, easily managed with prescribed analgesics.",
      },
      {
        question: "Are nasal packings always necessary?",
        answer:
          "Modern techniques prioritize dissolvable, bio-absorbable hemostatic dressings or dissolvable spacer gels, significantly reducing or eliminating the discomfort previously associated with traditional gauze packing removal.",
      },
      {
        question: "When should I consider surgery for a deviated septum?",
        answer:
          "Septoplasty is considered when nasal obstruction persists despite conservative medical management (nasal steroid sprays, antihistamines) and meaningfully interferes with breathing, exercise, or restorative sleep.",
      },
    ],
  },
  {
    slug: "ear-and-hearing",
    title: "Ear and Hearing Care",
    eyebrow: "Otology, Neurotology & Auditory Implants",
    heroImage: "/images/dr-sahu-patient-abhishek-rao.jpg",
    featuredMedia: {
      imageUrl: "/images/dr-sahu-pediatric-patients-chamber.jpg",
      title: "Pediatric Otology & Reconstructive Ear Surgery",
      caption: "Compassionate pediatric ear care: Dr. Radhamadhab Sahu with young post-operative patients following reconstructive ear and skull base surgery at clinical follow-up in Bhubaneswar.",
      badge: "Pediatric Otology Outcomes",
    },
    shortDescription:
      "Expert microsurgical and endoscopic management of eardrum perforations, chronic otitis media, cholesteatoma, hearing loss, and vestibular disorders.",
    fullDescription:
      "From childhood recurrent ear infections to complex adult hearing restoration, Dr. Sahu offers advanced endoscopic ear surgery, same-day bilateral tympanoplasty, and advanced hearing implant programs (Cochlear Implants and BAHA) backed by published clinical outcomes.",
    procedures: [
      {
        name: "Endoscopic Tympanoplasty / Myringoplasty",
        detail: "Transcanal microscopic or endoscopic eardrum repair without external post-auricular incisions, utilizing tragal cartilage or temporalis fascia.",
      },
      {
        name: "Simultaneous Bilateral Same-Day Tympanoplasty",
        detail: "Pioneered single-sitting bilateral eardrum repair utilizing tragal cartilage harvested from one ear, minimizing surgical sessions.",
      },
      {
        name: "Mastoidectomy for Cholesteatoma",
        detail: "Meticulous microscopic eradication of aggressive cholesteatoma disease with hearing chain ossicular reconstruction (PORP/TORP).",
      },
      {
        name: "Cochlear Implants (CI) & Auditory Brainstem Implants",
        detail: "Surgical placement of advanced electrode arrays for severe-to-profound sensorineural deafness in pediatric and adult patients.",
      },
      {
        name: "Bone-Anchored Hearing Systems (BAHA)",
        detail: "Direct bone conduction implants for conductive hearing loss, single-sided deafness, or microtia.",
      },
      {
        name: "Balloon Eustachian Tuboplasty (BET)",
        detail: "Endoscopic balloon dilation of the dysfunctional Eustachian tube to relieve chronic negative middle ear pressure.",
      },
    ],
    symptoms: [
      "Frequent or chronic discharge from the ear, especially after water exposure",
      "Progressive hearing reduction, difficulty following conversations in social noise",
      "Ringing, buzzing, or hissing sounds in one or both ears (tinnitus)",
      "Recurrent vertigo, dizziness, or sensation that surroundings are spinning",
      "Sensation of blocked ear that pops or clicks repeatedly",
    ],
    diagnosticPathway: [
      {
        step: "1. Video Otoscopy & Microscopic Exam",
        detail: "Magnified inspection of the tympanic membrane, retraction pockets, perforation size, and middle ear mucosa.",
      },
      {
        step: "2. Pure Tone Audiometry (PTA) & Impedance",
        detail: "Formal hearing assessment to differentiate conductive from sensorineural hearing loss and quantify air-bone gaps.",
      },
      {
        step: "3. HRCT Temporal Bone",
        detail: "Sub-millimeter imaging to evaluate the ossicular chain, mastoid air cells, facial nerve canal, and tegmen tympani.",
      },
    ],
    faqs: [
      {
        question: "Can an eardrum perforation heal on its own without surgery?",
        answer:
          "Small traumatic perforations often heal spontaneously within 6 to 8 weeks if kept dry. However, chronic perforations resulting from long-standing infections usually require tympanoplasty to restore hearing and protect against recurrent middle ear infections.",
      },
      {
        question: "What is the recovery period following tympanoplasty?",
        answer:
          "Patients typically resume desk work within 5 to 7 days. Strict water precautions (keeping the ear dry during baths) and avoiding air travel or strenuous lifting are maintained for 4 to 6 weeks until graft healing is confirmed.",
      },
    ],
  },
  {
    slug: "head-and-neck-surgery",
    title: "Head and Neck Surgery & Oncology",
    eyebrow: "Surgical Oncology & Scarless Thyroidectomy",
    heroImage: "/images/dr-sahu-aoicon-stage-felicitation.jpg",
    featuredMedia: {
      imageUrl: "/images/dr-sahu-patient-deepak-barik.jpg",
      title: "Oral Cavity & Head and Neck Surgical Case Outcome",
      caption: "Dr. Radhamadhab Sahu with patient Deepak Kumar Barik and family following successful excision of a chronic oral cavity lesion and verified benign biopsy confirmation in his consultation chamber.",
      badge: "Verified Clinical Case Outcome",
    },
    shortDescription:
      "Comprehensive evaluation and surgical treatment of thyroid disorders, salivary gland diseases, head and neck tumors, and benign neck masses.",
    fullDescription:
      "Dr. Sahu brings extensive surgical expertise in head and neck oncology, including pioneering Transoral Endoscopic Thyroidectomy Vestibular Approach (TOETVA) — a revolutionary procedure that leaves zero visible scars on the neck by operating through the inner lower lip.",
    procedures: [
      {
        name: "Transoral Endoscopic Thyroidectomy (TOETVA)",
        detail: "Complete scarless thyroid surgery performed via three small puncture incisions hidden inside the lower oral vestibule.",
      },
      {
        name: "Sialoendoscopy & Salivary Gland Preservation",
        detail: "Micro-endoscopic navigation into salivary ducts to remove stones (sialolithiasis) and dilate strictures without removing the gland.",
      },
      {
        name: "Parotidectomy with Facial Nerve Preservation",
        detail: "Superficial and total parotidectomy for benign and malignant salivary neoplasms with continuous intraoperative facial nerve monitoring.",
      },
      {
        name: "Head & Neck Oncologic Resection & Neck Dissection",
        detail: "Radical and selective lymph node dissections for oral cavity, pharyngeal, and laryngeal malignancies with reconstructive planning.",
      },
      {
        name: "Excision of Congenital Neck Masses",
        detail: "Precise surgical removal of thyroglossal duct cysts (Sistrunk procedure) and branchial cleft anomalies.",
      },
    ],
    symptoms: [
      "A noticeable, painless lump or swelling in the front or side of the neck",
      "Painful swelling under the jaw or in front of the ear, particularly while eating",
      "Persistent difficulty swallowing (dysphagia) or feeling of food sticking",
      "Unexplained hoarseness lasting more than 3 weeks",
      "Ulceration on the tongue, gums, or inner cheek that does not heal within two weeks",
    ],
    diagnosticPathway: [
      {
        step: "1. Clinical Palpation & Endoscopy",
        detail: "Meticulous manual examination of neck nodal stations, thyroid gland, oral cavity, and flexible fiberoptic laryngoscopy.",
      },
      {
        step: "2. High-Frequency Ultrasound & FNAC",
        detail: "Ultrasound-guided Fine Needle Aspiration Cytology to accurately determine benign vs malignant cytology.",
      },
      {
        step: "3. Contrast CT / MRI Neck",
        detail: "Cross-sectional imaging to assess depth of invasion, vascular encasement, and lymph node metastasis.",
      },
    ],
    faqs: [
      {
        question: "Who is an ideal candidate for scarless transoral thyroid surgery (TOETVA)?",
        answer:
          "TOETVA is suitable for patients with benign thyroid nodules, indeterminate nodules, or early papillary microcarcinomas, typically where nodule diameter is under 4-5 cm and there is no extensive thyroiditis or prior neck irradiation.",
      },
      {
        question: "How are salivary gland stones treated without removing the gland?",
        answer:
          "Through diagnostic and interventional sialoendoscopy, a sub-millimeter endoscope is inserted directly into the salivary duct opening in the mouth, allowing the surgeon to visualize, basket, or fragment stones while preserving normal gland salivary function.",
      },
    ],
  },
  {
    slug: "voice-and-laryngeal-disorders",
    title: "Voice and Laryngeal Disorders",
    eyebrow: "Phonosurgery, Laryngology & Laser Procedures",
    heroImage: "/images/dr-sahu-phonocon-2025-award.jpg",
    featuredMedia: {
      imageUrl: "/images/33f221af-f145-4de9-9881-8b1507349693.png",
      imagePosition: "object-top",
      title: "IAOHNS Scientific Address on Laryngeal and Airway Innovations",
      caption: "Dr. Radhamadhab Sahu delivering a keynote podium presentation on micro-laryngeal voice preservation, phonosurgical techniques, and airway reconstruction at the Indian Academy of Otorhinolaryngology Head and Neck Surgery (IAOHNS).",
      badge: "IAOHNS Keynote Speaker",
    },
    shortDescription:
      "Dedicated clinical and surgical care for hoarseness, vocal cord nodules, polyps, cysts, vocal cord paralysis, and professional voice users.",
    fullDescription:
      "Your voice is your fundamental tool for communication and professional identity. Dr. Radhamadhab Sahu offers advanced phonosurgical techniques and laser laryngeal interventions aimed at restoring vocal clarity, tone, and endurance while preserving the delicate layered structure of the vocal fold mucosa.",
    procedures: [
      {
        name: "Phonomicrosurgery for Benign Vocal Fold Lesions",
        detail: "Cold-instrument microscopic excision of vocal polyps, nodules, and cysts preserving the delicate layered lamina propria.",
      },
      {
        name: "Laser Laryngeal Surgery",
        detail: "CO2 and contact laser vaporization of laryngeal papillomatosis, vascular ectasias, and early laryngeal lesions.",
      },
      {
        name: "Vocal Fold Injection Laryngoplasty",
        detail: "In-clinic or operative injection of hyaluronic acid or calcium hydroxyapatite fillers to restore glottic closure in vocal cord paralysis.",
      },
      {
        name: "Thyroplasty Type I (Medialization)",
        detail: "Structural implant placement to permanently medialized a paralyzed vocal fold, restoring vocal projection and preventing aspiration.",
      },
    ],
    symptoms: [
      "Hoarseness or breathy voice persisting for more than two to three weeks",
      "Vocal fatigue after speaking for modest durations",
      "Loss of high vocal range or sudden pitch breaks",
      "Sensation of throat strain, ache, or lump in the throat (globus pharyngeus)",
      "Frequent choking or coughing while swallowing liquids",
    ],
    diagnosticPathway: [
      {
        step: "1. High-Definition Video Laryngostroboscopy",
        detail: "Specialized synchronized strobe lighting capturing slow-motion mucosal wave oscillations to identify micro-structural lesions.",
      },
      {
        step: "2. Acoustic & Aerodynamic Analysis",
        detail: "Objective digital recording measuring vocal shimmer, jitter, noise-to-harmonics ratio, and maximum phonation time.",
      },
    ],
    faqs: [
      {
        question: "Why is hoarseness persisting for more than 3 weeks considered a red flag?",
        answer:
          "While most voice changes are due to acute viral laryngitis or vocal strain, persistent hoarseness beyond 3 weeks must be evaluated with endoscopy to rule out vocal cord lesions, precancerous dysplasia, or early vocal cord malignancies.",
      },
      {
        question: "Does vocal surgery require absolute voice rest afterwards?",
        answer:
          "Yes, after phonomicrosurgery, patients typically observe complete voice rest for 48 to 72 hours, followed by guided relative voice rest and coordinated speech therapy to allow mucosal healing without scarring.",
      },
    ],
  },
  {
    slug: "sleep-related-ent-disorders",
    title: "Sleep-Related ENT Disorders & Snoring",
    eyebrow: "Airway Assessment & Obstructive Sleep Apnea Surgery",
    heroImage: "/images/clinic-head-silhouette-awards-wall.jpg",
    featuredMedia: {
      imageUrl: "/images/dr-sahu-patient-consultation.jpg",
      title: "Obstructive Sleep Apnea & Airway Clinical Evaluation",
      caption: "Clinical consultation and endoscopic airway assessment with Dr. Radhamadhab Sahu for patients presenting with chronic snoring and obstructive sleep apnea in Bhubaneswar.",
      badge: "Comprehensive Airway Consultation",
    },
    shortDescription:
      "Targeted anatomical evaluation and customized surgical airway procedures for loud habitual snoring and Obstructive Sleep Apnea (OSA).",
    fullDescription:
      "Obstructive Sleep Apnea is a serious medical condition that starves the body of oxygen during sleep, elevating cardiovascular risk and causing profound daytime fatigue. Dr. Sahu conducts multi-level anatomical airway evaluations to identify exact collapse sites and offer targeted surgical solutions for patients struggling with or unable to tolerate CPAP therapy.",
    procedures: [
      {
        name: "Drug-Induced Sleep Endoscopy (DISE)",
        detail: "Real-time endoscopic visualization of the upper airway under light pharmacological sedation to witness dynamic collapse patterns.",
      },
      {
        name: "Coblation-Assisted Pharyngoplasty / UPPP",
        detail: "Low-temperature plasma reshaping of the redundant soft palate, lateral pharyngeal walls, and tonsillar pillars to widen the airway.",
      },
      {
        name: "Multi-Level Airway Reconstruction",
        detail: "Synchronized treatment of nasal obstruction (septoplasty/turbinoplasty) and retro-palatal collapse in single or staged procedures.",
      },
      {
        name: "Base of Tongue Coblation Reduction",
        detail: "Channeling and volume reduction of the lingual tonsil and base of tongue tissue causing retroglottic hypopharyngeal obstruction.",
      },
    ],
    symptoms: [
      "Habitual loud snoring that disturbs bed partners",
      "Witnessed pauses in breathing or sudden gasping, choking arousals during sleep",
      "Severe morning tiredness, unrefreshing sleep, and morning headaches",
      "Daytime drowsiness while driving, working, or reading",
      "Difficulty tolerating or complying with CPAP machine therapy",
    ],
    diagnosticPathway: [
      {
        step: "1. Polysomnography (Overnight Sleep Study)",
        detail: "Comprehensive diagnostic recording of Apnea-Hypopnea Index (AHI), oxygen desaturation nadirs, and sleep architecture.",
      },
      {
        step: "2. Upper Airway Endoscopic Evaluation & Muller's Maneuver",
        detail: "Awake and sleep endoscopy to map airway resistance at the nose, palate, oropharynx, and base of tongue.",
      },
    ],
    faqs: [
      {
        question: "Can surgery cure snoring and sleep apnea?",
        answer:
          "Surgery is highly effective when anatomical obstructions (such as large tonsils, severe deviated septum, or elongated soft palate) are the primary drivers of airway collapse. Thorough diagnostic evaluation with a sleep study and DISE ensures the right surgical approach is selected.",
      },
      {
        question: "Is sleep apnea surgery painful to recover from?",
        answer:
          "Coblation and modern pharyngoplasty techniques use low-temperature radiofrequency rather than high-heat electrocautery, resulting in significantly lower post-operative discomfort, faster swallowing recovery, and minimal tissue thermal damage.",
      },
    ],
  },
];
