import Link from "next/link";
import { Home, Phone, Stethoscope, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* 404 indicator */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E6F4F3] mb-2">
          <span className="text-3xl font-black text-[#14746F]">404</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable. Please use the links below to find what you
          need.
        </p>

        {/* Quick navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B2545] text-white text-sm font-semibold hover:bg-[#14746F] transition-colors"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <Link
            href="/specialities"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#14746F] hover:text-[#14746F] transition-colors"
          >
            <Stethoscope className="w-4 h-4" />
            View Specialities
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#14746F] hover:text-[#14746F] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Contact & Appointments
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#14746F] hover:text-[#14746F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            About Dr. Sahu
          </Link>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          If you followed a link that brought you here, please{" "}
          <Link href="/contact" className="underline hover:text-[#14746F]">
            contact us
          </Link>{" "}
          so we can fix it.
        </p>
      </div>
    </div>
  );
}

