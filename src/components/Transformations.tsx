"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const images = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/img-transformations-${i + 1}.${i + 1 === 16 ? "jpeg" : "jpg"}`,
}));

export default function Transformations() {
  const { t } = useTranslation();

  return (
    <section
      id="transformations"
      className="relative bg-[#fdfafd] overflow-hidden py-32 px-6 lg:px-16"
    >
      {/* Diagonal top fade from About */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(151,0,146,0.04), transparent)",
        }}
      />

      {/* Subtle geometric overlay — large circle */}
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: "2px solid rgba(151,0,146,0.06)" }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: "2px solid rgba(151,0,146,0.06)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#970092]" />
              <span className="text-[#970092] text-xs font-700 tracking-[0.25em] uppercase">
                {t("transformations.eyebrow")}
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black text-[#1e1e1e] leading-tight tracking-tight">
              {t("transformations.title")}
            </h2>
          </div>
          <p className="text-[#585454] max-w-xs text-sm leading-relaxed font-300 lg:text-right">
            {t("transformations.subtitle")}
          </p>
        </div>

        {/* Dynamic masonry-style grid with diagonal accents */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map(({ id, src }, idx) => {
            // Every 7th card is taller for visual rhythm
            const isTall = idx % 7 === 3;
            return (
              <div
                key={id}
                className={`group relative overflow-hidden bg-[#f1e8f1] float-card ${
                  isTall ? "row-span-2" : ""
                }`}
                style={{
                  aspectRatio: isTall ? "3/5" : "3/4",
                  clipPath:
                    idx % 3 === 0
                      ? "polygon(0 0, 100% 0, 100% 92%, 6% 100%)"
                      : idx % 3 === 1
                      ? "polygon(0 0, 94% 0, 100% 8%, 100% 100%, 0 100%)"
                      : "none",
                }}
              >
                <Image
                  src={src}
                  alt={`Transformation ${id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#970092]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Number label on hover */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-700 tracking-widest">
                    #{String(id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#f1e8f1] pt-10">
          <p className="text-[#585454] text-sm font-300">
            Vrei să fii următoarea transformare de succes?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#970092] text-white font-bold text-sm px-8 py-4 hover:bg-[#570057] transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)" }}
          >
            Începe acum
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
