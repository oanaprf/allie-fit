"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const services = [
  { key: "personalTraining", image: "/images/img-personal-training.jpg", num: "01" },
  { key: "groupClasses", image: "/images/img-group-classes.jpg", num: "02" },
  { key: "nutritionPlans", image: "/images/img-nutrition-plans.jpg", num: "03" },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="relative bg-[#fdfafd] py-32 px-6 lg:px-16 overflow-hidden"
    >
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-[#f1e8f1] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      {/* Background geometric grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#970092 1px, transparent 1px), linear-gradient(90deg, #970092 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Section label */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#970092]" />
              <span className="text-[#970092] text-xs font-700 tracking-[0.25em] uppercase">
                {t("services.eyebrow")}
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black text-[#1e1e1e] leading-tight tracking-tight">
              {t("services.title")}
            </h2>
          </div>
          <p className="text-[#585454] max-w-xs text-sm leading-relaxed font-300 lg:text-right">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ key, image, num }) => (
            <div key={key} className="float-card group relative bg-white overflow-hidden">
              {/* Image with diagonal clip */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
              >
                <Image
                  src={image}
                  alt={t(`services.${key}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#970092]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-7 pt-5">
                {/* Number + divider */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#970092] font-black text-xs tracking-widest">{num}</span>
                  <div className="flex-1 h-px bg-[#f1e8f1]" />
                </div>

                <h3 className="text-lg font-black text-[#1e1e1e] mb-2 tracking-tight">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-sm text-[#585454] leading-relaxed font-300">
                  {t(`services.${key}.description`)}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-700 text-[#970092] tracking-widest uppercase group/link"
                >
                  {t("services.learnMore")}
                  <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
