"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  Building2,
  Award,
} from "lucide-react";
import { DOCTOR } from "@/lib/doctor";

export default function PatientReviews() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-200">
      <div className="medical-container">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF4FA] text-[#0B2545] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#14746F]" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Real Patient Reviews &amp; Clinical Outcomes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Authentic, publicly verified feedback from Google Maps patient reviews, photographed directly in Dr. Radhamadhab Sahu’s consultation chamber in Bhubaneswar following successful treatments.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0B2545]">5.0 / 5.0 Rating</span>
            <span className="text-slate-300">•</span>
            <a
              href="https://maps.app.goo.gl/iyFUSCm5hVAiDjkn6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#14746F] hover:underline inline-flex items-center gap-1"
            >
              <span>Google Maps Verified Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DOCTOR.patientReviews.map((rev) => (
            <article
              key={rev.id}
              className="medical-card overflow-hidden flex flex-col justify-between border-2 border-slate-200 hover:border-[#14746F]/50 transition-all shadow-sm"
            >
              <div className="space-y-4">
                {/* Authentic Chamber Photograph (Faces completely preserved) */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden group">
                  <Image
                    src={rev.chamberImage}
                    alt={rev.caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />

                  {/* Chamber Awards / Setting watermark */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold flex items-center gap-1 border border-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    <span>In-Chamber Follow-up</span>
                  </div>

                  {/* Expand Screenshot Trigger */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(rev.fullScreenshot)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-white/90 text-slate-800 hover:bg-white text-xs shadow-xs transition-transform active:scale-90"
                    title="View full verified Google Maps review card"
                    aria-label="View verified review screenshot"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute bottom-2 left-3 right-3 text-white text-[11px] leading-tight">
                    <span className="font-semibold block truncate">{rev.caption}</span>
                  </div>
                </div>

                {/* Review Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#0B2545] flex items-center gap-1.5">
                        <span>{rev.patientName}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#14746F] shrink-0" />
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {rev.date}
                      </span>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Clinical Procedure Tag */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#EDF4FA] border border-[#D5E5F2] text-[#0B2545] text-[11px] font-semibold">
                    {rev.procedure}
                  </div>

                  {/* Quote */}
                  <div className="relative pt-1">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{rev.reviewText}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <a
                  href={rev.mapsReviewUrl || "https://maps.app.goo.gl/iyFUSCm5hVAiDjkn6"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-600 hover:text-[#0B2545] flex items-center gap-1"
                >
                  <span>{rev.verifiedPlatform}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedImage(rev.fullScreenshot)}
                  className="font-bold text-[#14746F] hover:underline flex items-center gap-1"
                >
                  <span>View Review Card</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Ethical Verification Disclosure */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center justify-between flex-wrap gap-3">
          <p>
            * These reviews and chamber photographs reflect genuine patient experiences shared publicly on Google Maps for Dr. Radhamadhab Sahu’s practice in Bhubaneswar. Individual surgical results depend upon unique diagnosis and pathology.
          </p>
          <a
            href="https://maps.app.goo.gl/iyFUSCm5hVAiDjkn6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14746F] font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View All Reviews on Google Maps (Dr. Radhamadhab Sahu)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Fullscreen Screenshot Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-white text-xs">
              <span className="font-semibold text-slate-200">
                Verified Google Maps Review &amp; Chamber Photograph
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage}
                alt="Full Google Maps Review Screenshot"
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
