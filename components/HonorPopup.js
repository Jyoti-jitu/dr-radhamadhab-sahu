"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const STORAGE_KEY = "honor_popup_seen";
const SLIDE_DURATION = 5000; // 5 seconds per slide

const POPUP_SLIDES = [
  {
    src: "/images/honor.jpeg",
    alt: "Dr. Radhamadhab Sahu – Honor & Felicitation",
    width: 941,
    height: 1600,
    label: "Honors & Recognition",
  },
  {
    src: "/images/awardtaking.jpeg",
    alt: "Dr. Radhamadhab Sahu – Receiving Prestigious Award",
    width: 1579,
    height: 996,
    label: "Award Ceremony",
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
  const [timerKey, setTimerKey] = useState(0);

  // Touch tracking for mobile swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setTimerKey((k) => k + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % POPUP_SLIDES.length);
    setTimerKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + POPUP_SLIDES.length) % POPUP_SLIDES.length);
    setTimerKey((k) => k + 1);
  }, []);

  // 5-second automatic rotation
  useEffect(() => {
    if (!visible || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % POPUP_SLIDES.length);
      setTimerKey((k) => k + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [visible, isPaused, timerKey]);

  // Keyboard navigation (Esc to close, Arrow keys to navigate)
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, close, nextSlide, prevSlide]);

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
    if (diff > 45) {
      // Swiped left -> next slide
      nextSlide();
    } else if (diff < -45) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!visible) return null;

  const currentSlide = POPUP_SLIDES[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 select-none"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Awards and Honors Gallery"
    >
      {/* Popup Container */}
      <div
        className="relative w-full max-w-sm sm:max-w-lg md:max-w-xl flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Floating Close Button */}
        <button
          onClick={close}
          className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Close popup"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 text-slate-800" />
        </button>

        {/* Floating Category Badge & Slide Counter */}
        <div className="absolute top-3 left-3 sm:top-3.5 sm:left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold shadow-md border border-white/20">
            {currentSlide.label}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[10px] sm:text-[11px] font-bold shadow-md">
            {currentIndex + 1} / {POPUP_SLIDES.length}
          </span>
        </div>

        {/* Main Image Card */}
        <div className="relative w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10">
          {/* Top 5-Second Animated Progress Bar */}
          <div className="w-full h-1 bg-white/10 overflow-hidden relative z-20">
            <div
              key={timerKey}
              className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-300 animate-slide-progress"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>

          {/* Slides Container */}
          <div className="relative w-full flex items-center justify-center min-h-[340px] sm:min-h-[460px] max-h-[76vh] sm:max-h-[80vh] p-2 sm:p-2.5">
            {POPUP_SLIDES.map((slide, idx) => (
              <div
                key={slide.src}
                className={`transition-all duration-700 ease-in-out flex items-center justify-center w-full h-full ${
                  idx === currentIndex
                    ? "opacity-100 scale-100 relative z-10"
                    : "opacity-0 scale-98 absolute inset-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  priority
                  className="rounded-xl object-contain max-h-[72vh] sm:max-h-[76vh] w-auto h-auto max-w-full shadow-lg"
                  sizes="(max-width: 640px) 94vw, (max-width: 768px) 512px, 576px"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            aria-label="Previous image"
            title="Previous (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            aria-label="Next image"
            title="Next (Right arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-3 z-20">
          {POPUP_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-white shadow-md"
                  : "w-2 bg-white/35 hover:bg-white/70"
              }`}
              aria-label={`Go to photo ${index + 1}: ${slide.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
