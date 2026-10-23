"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Clock,
  Calendar,
  ChevronDown,
  Building2,
  Stethoscope,
  ShieldAlert,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSpecialtiesDropdownOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Specialities",
      href: "/specialities",
      hasDropdown: true,
      subLinks: [
        { name: "All Specialities", href: "/specialities" },
        { name: "Skull Base Surgery", href: "/specialities/skull-base-surgery" },
        { name: "Sinus & Nasal Care (FESS)", href: "/specialities/sinus-and-nasal-care" },
        { name: "Ear & Hearing (Otology)", href: "/specialities/ear-and-hearing" },
        { name: "Head & Neck Surgery", href: "/specialities/head-and-neck-surgery" },
        { name: "Voice & Laryngeal Disorders", href: "/specialities/voice-and-laryngeal-disorders" },
        { name: "Sleep & Snoring Disorders", href: "/specialities/sleep-related-ent-disorders" },
      ],
    },
    { name: "Research & Media", href: "/research" },
    { name: "Patient Resources", href: "/patient-resources" },
    { name: "Clinic Brochure", href: "/brochure" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Clinical Notification Bar */}
      <div className="bg-[#0B2545] text-slate-100 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4">
        <div className="medical-container flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-200 truncate min-w-0">
            <Building2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">SUM Ultimate Medicare OPD: 9:30 AM – 5:30 PM (Mon–Sat)</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs shrink-0">
            <a
              href={DOCTOR.clinic.telLink}
              className="inline-flex items-center gap-1 text-teal-300 hover:text-white font-semibold transition-colors"
              title="Call Clinic Direct"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>Clinic: {DOCTOR.clinic.telephoneDisplay}</span>
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <a
              href={DOCTOR.hospital.telLink}
              className="hidden md:inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
              title="Hospital EPABX"
            >
              <span>Hospital: {DOCTOR.hospital.telephoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="medical-container py-2.5 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand / Doctor Identity */}
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0B2545] text-white flex items-center justify-center font-serif text-base sm:text-lg font-bold shadow-xs group-hover:bg-[#14746F] transition-colors shrink-0">
            DR
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-xl font-bold tracking-tight text-[#0B2545] leading-tight group-hover:text-[#14746F] transition-colors truncate">
              Dr. Radhamadhab Sahu
            </span>
            <span className="text-[10px] sm:text-xs text-slate-600 font-medium tracking-normal truncate">
              Senior Consultant &amp; HOD · ENT &amp; Skull Base
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                  onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#0B2545] bg-slate-100 font-semibold"
                        : "text-slate-700 hover:text-[#0B2545] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu */}
                  {specialtiesDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 pt-2 shadow-lg rounded-xl z-50">
                      <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-xl divide-y divide-slate-100">
                        <div className="pb-1.5 px-2 pt-1">
                          <Link
                            href="/specialities"
                            className="text-xs font-semibold text-[#14746F] hover:underline"
                          >
                            Explore All Specialities →
                          </Link>
                        </div>
                        <div className="pt-1.5 space-y-0.5">
                          {link.subLinks.slice(1).map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#0B2545] rounded-md transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#0B2545] bg-slate-100 font-semibold"
                    : "text-slate-700 hover:text-[#0B2545] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B2545] text-white text-xs sm:text-sm font-semibold hover:bg-[#14746F] transition-all shadow-xs hover:shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="sm:hidden px-3 py-1.5 rounded-lg bg-[#0B2545] text-white text-xs font-semibold"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative bg-white w-full max-w-sm ml-auto h-[calc(100vh-96px)] overflow-y-auto p-6 shadow-2xl flex flex-col justify-between border-l border-slate-200">
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Navigation
                </p>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-slate-100 text-[#0B2545] font-semibold"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 pl-2 border-l border-slate-200 space-y-1 my-1">
                        {link.subLinks.slice(1).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#0B2545]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Quick Contacts
                </p>
                <a
                  href={DOCTOR.clinic.telLink}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100 text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#14746F]" />
                    <span>Clinic Call</span>
                  </span>
                  <span className="font-semibold text-[#0B2545]">{DOCTOR.clinic.telephoneDisplay}</span>
                </a>

                <a
                  href={DOCTOR.hospital.telLink}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100 text-xs font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0B2545]" />
                    <span>SUMUM EPABX</span>
                  </span>
                  <span className="font-semibold text-[#0B2545]">{DOCTOR.hospital.telephoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white text-sm font-semibold hover:bg-[#14746F] transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
