"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AwardsGallery({ awards = [] }) {
  const [selectedAwardIndex, setSelectedAwardIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const isModalOpen = selectedAwardIndex !== null;
  const currentAward = isModalOpen ? awards[selectedAwardIndex] : null;

  // Touch tracking for mobile swipe in modal
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openModal = (index) => {
    setSelectedAwardIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = useCallback(() => {
    setSelectedAwardIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  }, []);

  const nextAward = useCallback(() => {
    if (selectedAwardIndex === null) return;
    setSelectedAwardIndex((prev) => (prev + 1) % awards.length);
  }, [selectedAwardIndex, awards.length]);

  const prevAward = useCallback(() => {
    if (selectedAwardIndex === null) return;
    setSelectedAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, [selectedAwardIndex, awards.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextAward();
      if (e.key === "ArrowLeft") prevAward();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal, nextAward, prevAward]);

  // Mobile swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextAward();
    } else if (diff < -50) {
      prevAward();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="space-y-8">
      {/* Gallery Header Info & Stats Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#0B2545]">
              Verified Awards &amp; Felicitations Archive
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showing all <strong className="text-[#0B2545] font-semibold">{awards.length}</strong> authenticated national citations, trophies, and surgical honors.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end text-xs font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>58 Certified Mementos</span>
          </span>
        </div>
      </div>

      {/* Grid of All 58 Awards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {awards.map((award, index) => (
          <div
            key={award.id || award.filename}
            onClick={() => openModal(index)}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-amber-300/80 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-xs text-amber-300 text-[10px] sm:text-[11px] font-bold border border-slate-700 shadow-xs">
                <Award className="w-3 h-3 text-amber-400" />
                <span>Honor #{award.id}</span>
              </span>
            </div>

            {/* Hover Expand Icon */}
            <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs shadow-md flex items-center justify-center text-slate-800">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Award Image Container */}
            <div className="relative aspect-square w-full bg-slate-900/5 overflow-hidden p-3 flex items-center justify-center">
              <Image
                src={award.src}
                alt={award.alt}
                width={award.width}
                height={award.height}
                loading={index < 8 ? "eager" : "lazy"}
                priority={index < 4}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>

            {/* Footer Caption */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800 truncate text-[11px] sm:text-xs">
                Award &amp; Citation #{award.id}
              </span>
              <span className="text-[10px] text-teal-600 font-bold group-hover:translate-x-0.5 transition-transform">
                View &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && currentAward && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Award preview"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="w-full flex items-center justify-between pb-3 px-1 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">
                  Award {selectedAwardIndex + 1} of {awards.length}
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-300">
                  (Use &larr; &rarr; arrow keys or swipe to navigate)
                </span>
              </div>

              <button
                onClick={closeModal}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Close award viewer"
              >
                <X className="w-5 h-5 text-slate-800" />
              </button>
            </div>

            {/* Main Modal Image Box */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-white/15 flex items-center justify-center min-h-[350px] sm:min-h-[500px] max-h-[78vh] p-2 sm:p-4">
              <Image
                src={currentAward.src}
                alt={currentAward.alt}
                width={currentAward.width}
                height={currentAward.height}
                priority
                className="object-contain max-h-[74vh] w-auto h-auto max-w-full rounded-xl shadow-lg"
                sizes="(max-width: 1024px) 95vw, 1000px"
              />

              {/* Prev Button */}
              <button
                onClick={prevAward}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20 cursor-pointer shadow-lg"
                aria-label="Previous award"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextAward}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20 cursor-pointer shadow-lg"
                aria-label="Next award"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="pt-3 text-center text-xs text-slate-400">
              <span>Dr. Radhamadhab Sahu &bull; Advanced ENT &amp; Skull Base Surgery Felicitations</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
