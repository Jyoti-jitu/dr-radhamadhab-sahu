"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const STORAGE_KEY = "honor_popup_seen";

const POPUP_SLIDES = [
  {
    src: "/images/honor.jpeg",
    alt: "Dr. Radhamadhab Sahu – Honor & Felicitation",
    width: 941,
    height: 1600,
    label: "Honors & Recognition",
  },
  {
    src: "/images/award.jpeg",
    alt: "Dr. Radhamadhab Sahu – Surgical Excellence Award",
    width: 1155,
    height: 1362,
    label: "Awards & Felicitations",
  },
  {
    src: "/images/certificate.jpeg",
    alt: "Dr. Radhamadhab Sahu – Board Certification & Fellowship",
    width: 1080,
    height: 1404,
    label: "Certifications & Credentials",
  },
];

export default function HonorPopup() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % POPUP_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + POPUP_SLIDES.length) % POPUP_SLIDES.length);
  }, []);

  // Automatic slide rotation every 3.5 seconds
  useEffect(() => {
    if (!visible || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % POPUP_SLIDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [visible, isPaused]);

  if (!visible) return null;

  const currentSlide = POPUP_SLIDES[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Awards and Honors"
    >
      {/* Popup Container */}
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Floating Close Button */}
        <button
          onClick={close}
          className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-slate-800" />
        </button>

        {/* Floating Category Badge & Slide Counter */}
        <div className="absolute top-2.5 left-3 sm:top-3 sm:left-4 z-20 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold shadow-md border border-white/20">
            {currentSlide.label}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] sm:text-[11px] font-bold shadow-md">
            {currentIndex + 1} / {POPUP_SLIDES.length}
          </span>
        </div>

        {/* Image Display Card */}
        <div className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900/90 shadow-2xl border border-white/10">
          <div className="relative w-full flex items-center justify-center min-h-[350px] sm:min-h-[460px] max-h-[78vh] sm:max-h-[82vh] p-1.5 sm:p-2">
            {POPUP_SLIDES.map((slide, idx) => (
              <div
                key={slide.src}
                className={`transition-opacity duration-500 ease-in-out flex items-center justify-center w-full h-full ${
                  idx === currentIndex
                    ? "opacity-100 relative z-10"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  priority={idx === 0 || idx === currentIndex}
                  className="rounded-xl object-contain max-h-[74vh] sm:max-h-[78vh] w-auto h-auto max-w-full shadow-lg"
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 460px, 512px"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-3 z-20">
          {POPUP_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-7 bg-white shadow-md"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
