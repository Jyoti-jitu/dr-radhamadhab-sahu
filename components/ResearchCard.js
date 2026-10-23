import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  Newspaper,
  Calendar,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";

export function PublicationCard({ publication }) {
  return (
    <article className="medical-card p-6 flex flex-col justify-between hover:border-[#14746F]/40 transition-all">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold text-[#14746F] uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{publication.journal}</span>
          </span>
          <span className="font-medium bg-slate-100 px-2.5 py-0.5 rounded-full">
            {publication.year}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#0B2545] leading-snug">
          {publication.title}
        </h3>

        <p className="text-xs text-slate-500 font-medium">
          Authors: {publication.authors}
        </p>

        <p className="text-xs text-slate-600 leading-relaxed pt-1">
          {publication.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          Peer-Reviewed Otolaryngology Literature
        </span>
        <a
          href={publication.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2545] hover:text-[#14746F]"
        >
          <span>PubMed / Index</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}

export function MediaCard({ media }) {
  return (
    <article className="medical-card p-6 sm:p-7 border-l-4 border-l-[#14746F] hover:border-[#14746F] transition-all">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold text-[#0B2545] flex items-center gap-1.5 uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-[#14746F]" />
            <span>{media.outlet}</span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{media.date}</span>
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0B2545] leading-snug">
          {media.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {media.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {media.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Verified Press Release &amp; Report
        </span>
        <a
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#14746F] hover:underline"
        >
          <span>Read Full Article on New Indian Express</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

export function ConferenceCard({ conference }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-[#0B2545]/40 transition-all shadow-xs flex flex-col justify-between">
      <div>
        {conference.imageUrl && (
          <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
            <Image
              src={conference.imageUrl}
              alt={conference.conference}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-teal-300 font-semibold flex items-center gap-1 border border-slate-700">
              <Award className="w-3 h-3 text-teal-400" />
              <span>National Conference Keynote</span>
            </div>
          </div>
        )}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#14746F] uppercase tracking-wide flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>{conference.role}</span>
            </span>
            <span className="text-slate-500 font-medium">
              {conference.location}
            </span>
          </div>

          <h4 className="text-base font-bold text-[#0B2545]">
            {conference.conference}
          </h4>

          <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1">
            <strong className="text-[#0B2545] block">Keynote Topic:</strong>
            <p className="italic">&ldquo;{conference.topic}&rdquo;</p>
          </div>

          {conference.organization && (
            <p className="text-[11px] text-slate-500">
              Organized under the aegis of {conference.organization}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
