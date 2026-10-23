import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generatePhysicianSchema, generateClinicSchema } from "@/lib/seo";
import { Phone, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://drradhamadhabsahu.com"),
  title: {
    default: "Dr. Radhamadhab Sahu | Senior ENT & Skull Base Surgeon Bhubaneswar",
    template: "%s | Dr. Radhamadhab Sahu",
  },
  description:
    "Dr. Radhamadhab Sahu is Senior Consultant & HOD of ENT and Skull Base Surgery at SUM Ultimate Medicare and Dr. Radhamadhab ENT and Cancer Clinic, Bhubaneswar, Odisha.",
  keywords: [
    "Dr Radhamadhab Sahu",
    "ENT specialist in Bhubaneswar",
    "Skull base surgeon in Bhubaneswar",
    "Dr Radhamadhab ENT and Cancer Clinic",
    "SUM Ultimate Medicare ENT doctor",
    "Endoscopic sinus surgery Bhubaneswar",
    "Ear specialist Odisha",
  ],
  authors: [{ name: "Dr. Radhamadhab Sahu" }],
  creator: "Dr. Radhamadhab Sahu",
  publisher: "Dr. Radhamadhab ENT and Cancer Clinic",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://drradhamadhabsahu.com",
  },
  openGraph: {
    title: "Dr. Radhamadhab Sahu | ENT & Skull Base Surgery",
    description:
      "Senior Consultant & HOD, Department of ENT and Skull Base Surgery at SUM Ultimate Medicare, Bhubaneswar. Specialized care for skull base, sinus, ear, and head-and-neck disorders.",
    url: "https://drradhamadhabsahu.com",
    siteName: "Dr. Radhamadhab Sahu Medical Practice",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://drradhamadhabsahu.com/images/dr-radhamadhab-sahu.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Radhamadhab Sahu - Senior ENT and Skull Base Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Radhamadhab Sahu | ENT & Skull Base Surgery",
    description:
      "Senior Consultant & HOD of ENT & Skull Base Surgery at SUM Ultimate Medicare, Bhubaneswar.",
    images: ["https://drradhamadhabsahu.com/images/dr-radhamadhab-sahu.jpg"],
  },
};

export default function RootLayout({ children }) {
  const physicianSchema = generatePhysicianSchema();
  const clinicSchema = generateClinicSchema();

  return (
    <html lang="en" className={`${plusJakarta.variable} font-sans`}>
      <head>
        {/* Physician JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        {/* MedicalClinic JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 antialiased selection:bg-[#E6F4F3] selection:text-[#0B2545]">
        <Header />

        <main className="flex-1" id="main-content">
          {children}
        </main>

        <Footer />

        {/* Discreet Mobile Floating Appointment Action */}
        <div className="fixed bottom-4 right-4 z-40 sm:hidden flex items-center gap-2">
          <a
            href={DOCTOR.clinic.telLink}
            className="p-3.5 rounded-full bg-[#14746F] text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center"
            aria-label="Call clinic directly"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="/contact"
            className="px-4 py-3 rounded-full bg-[#0B2545] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-teal-300" />
            <span>Book Visit</span>
          </a>
        </div>
      </body>
    </html>
  );
}
