"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Compass,
  Layers,
  Map as MapIcon,
  Maximize2,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function RealisticMapViewer() {
  const [activeTab, setActiveTab] = useState("satellite"); // 'satellite' | 'street' | 'interactive'
  const [selectedLocation, setSelectedLocation] = useState("hospital"); // 'hospital' | 'clinic'

  return (
    <div className="space-y-6">
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#14746F] flex items-center gap-1.5 mb-1">
            <Compass className="w-4 h-4 shrink-0" />
            <span>Digital Cartography &amp; Location Guide</span>
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-[#0B2545]">
            Realistic Map Views &amp; Navigation Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            View detailed satellite aerial navigation, street-level road cartography, or open direct turn-by-turn GPS directions.
          </p>
        </div>

        {/* Location selector pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 bg-slate-100 p-1 sm:p-1.5 rounded-xl text-xs font-semibold w-full md:w-auto">
          <button
            type="button"
            onClick={() => setSelectedLocation("hospital")}
            className={`px-3 py-2 sm:py-1.5 rounded-lg transition-all text-center ${
              selectedLocation === "hospital"
                ? "bg-[#0B2545] text-white shadow-xs"
                : "text-slate-700 hover:text-[#0B2545]"
            }`}
          >
            SUM Ultimate Medicare (K-8)
          </button>
          <button
            type="button"
            onClick={() => setSelectedLocation("clinic")}
            className={`px-3 py-2 sm:py-1.5 rounded-lg transition-all text-center ${
              selectedLocation === "clinic"
                ? "bg-[#14746F] text-white shadow-xs"
                : "text-slate-700 hover:text-[#0B2545]"
            }`}
          >
            Dr. Radhamadhab Clinic (K8/118)
          </button>
        </div>
      </div>

      {/* Main Map Presentation Card */}
      <div className="medical-card p-3 sm:p-6 bg-white border-2 border-slate-200 shadow-md space-y-3 sm:space-y-4">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 border-b border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-[#0B2545] text-xs sm:text-sm">
              {selectedLocation === "hospital"
                ? "SUM Ultimate Medicare, Ghatikia / Kalinga Nagar"
                : "Dr. Radhamadhab ENT and Cancer Clinic, K8/118 Ghatikia"}
            </span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <span className="text-slate-500 text-[11px] sm:text-xs">Bhubaneswar, Odisha 751003</span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("satellite")}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                activeTab === "satellite"
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3 h-3 text-[#14746F] shrink-0" />
              <span>Satellite</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("street")}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                activeTab === "street"
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MapIcon className="w-3 h-3 text-[#14746F] shrink-0" />
              <span>Road Map</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("interactive")}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                activeTab === "interactive"
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Live Embed</span>
            </button>
          </div>
        </div>

        {/* Map Canvas / Viewer Frame */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner group">
          {activeTab === "satellite" && (
            <div className="relative w-full h-full">
              <Image
                src={
                  selectedLocation === "hospital"
                    ? "/images/map-sum-ultimate-medicare.jpg"
                    : "/images/map-clinic-kalinga-nagar.jpg"
                }
                alt={
                  selectedLocation === "hospital"
                    ? "Satellite GPS Map of SUM Ultimate Medicare, Ghatikia Main Road"
                    : "Digital Map of Dr. Radhamadhab ENT and Cancer Clinic"
                }
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              {/* Overlay Landmark Pin Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 text-white shadow-lg text-xs flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500 animate-bounce" />
                <div>
                  <span className="font-bold block">
                    {selectedLocation === "hospital"
                      ? "SUM Ultimate Medicare (K-8)"
                      : "Dr. Radhamadhab Clinic (K8/118)"}
                  </span>
                  <span className="text-[10px] text-slate-300">
                    Ghatikia Main Road · Kalinga Nagar, BBSR
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "street" && (
            <div className="relative w-full h-full">
              <Image
                src={
                  selectedLocation === "clinic"
                    ? "/images/map-clinic-kalinga-nagar.jpg"
                    : "/images/map-sum-ultimate-medicare.jpg"
                }
                alt="Road cartography navigation map"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 text-slate-900 shadow-lg text-xs flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#14746F]" />
                <div>
                  <span className="font-bold text-[#0B2545] block">
                    Street Navigation Cartography
                  </span>
                  <span className="text-[10px] text-slate-600">
                    Approaching via Ghatikia Main Road / Kalinga Nagar
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "interactive" && (
            <iframe
              title="Interactive Location Map"
              src={
                selectedLocation === "hospital"
                  ? "https://maps.google.com/maps?q=SUM+Ultimate+Medicare+Kalinga+Nagar+Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  : "https://maps.google.com/maps?q=Ghatikia+Main+Road+Kalinga+Nagar+Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              }
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}

          {/* Bottom GPS Action Banner */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <a
              href={
                selectedLocation === "hospital"
                  ? DOCTOR.hospital.mapsUrl
                  : DOCTOR.clinic.mapsUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-900 text-xs font-bold shadow-lg transition-transform active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5 text-[#14746F]" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Travel Times & Commute Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#14746F] flex items-center justify-center font-bold text-xs shrink-0">
              10m
            </span>
            <div>
              <strong className="text-[#0B2545] block font-semibold">From Khandagiri Square</strong>
              <span className="text-slate-500 text-[11px]">Via Khandagiri – Chandaka Road</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#14746F] flex items-center justify-center font-bold text-xs shrink-0">
              20m
            </span>
            <div>
              <strong className="text-[#0B2545] block font-semibold">From Biju Patnaik Airport (BBI)</strong>
              <span className="text-slate-500 text-[11px]">Via Siripur &amp; Kalinga Nagar</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#14746F] flex items-center justify-center font-bold text-xs shrink-0">
              25m
            </span>
            <div>
              <strong className="text-[#0B2545] block font-semibold">From BBSR Railway Station</strong>
              <span className="text-slate-500 text-[11px]">Via NH-16 / Fire Station Square</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
