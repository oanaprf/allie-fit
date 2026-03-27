"use client";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#1a1a1a]" />

      {/* Decorative gold accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-8">
          <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
          {t("hero.title")}
          <br />
          <span className="text-[#C9A84C]">{t("hero.titleAccent")}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg lg:text-xl leading-relaxed mb-12">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-black font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
          >
            {t("hero.cta")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-[#C9A84C] text-zinc-300 hover:text-[#C9A84C] font-semibold px-8 py-4 rounded-full text-base transition-all"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "200+", label: "Clienți activi" },
            { value: "5+", label: "Ani experiență" },
            { value: "3", label: "Tipuri de clase" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#C9A84C]">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9A84C]/50" />
        <div className="w-1 h-1 bg-[#C9A84C]/50 rounded-full animate-bounce" />
      </div>
    </section>
  );
}
