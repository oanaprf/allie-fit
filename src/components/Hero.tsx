"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#fdfafd] overflow-hidden flex flex-col justify-center"
    >
      {/* ── Geometric background overlays ── */}
      {/* Large diagonal stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, #fdfafd 0%, #fdfafd 55%, #f1e8f1 55%, #f1e8f1 100%)",
        }}
      />

      {/* Floating circle — top right */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(151,0,146,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Thin diagonal rule */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "58%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(151,0,146,0.15) 30%, rgba(151,0,146,0.15) 70%, transparent 100%)",
          transform: "rotate(-6deg) scaleX(1.4)",
          transformOrigin: "center",
        }}
      />

      {/* Floating dot cluster — bottom left */}
      <div className="absolute bottom-24 left-8 pointer-events-none hidden md:block">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#970092]"
            style={{
              width: 4,
              height: 4,
              opacity: 0.2,
              top: `${Math.floor(i / 3) * 16}px`,
              left: `${(i % 3) * 16}px`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16 pt-32 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-8rem)]">

          {/* Left column — typography */}
          <div className="flex flex-col justify-center py-12 lg:py-0 lg:pr-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#970092]" />
              <span className="text-[#970092] text-xs font-700 tracking-[0.25em] uppercase">
                Studio de Fitness
              </span>
            </div>

            {/* Headline — oversized, diagonal rhythm */}
            <h1 className="font-black leading-[0.9] tracking-tight text-[#1e1e1e] mb-8">
              <span className="block text-[clamp(3rem,8vw,6rem)]">{t("hero.title")}</span>
              <span
                className="block text-[clamp(3rem,8vw,6rem)] text-[#970092] italic font-extrabold"
                style={{ transform: "skewX(-3deg)", display: "inline-block" }}
              >
                {t("hero.titleAccent")}
              </span>
            </h1>

            {/* Logo — floating with depth */}
            <div className="my-8 self-start">
              <div
                className="float-card rounded-2xl bg-white p-4 inline-block"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <Image
                  src="/images/Logo-allie-shadow.png"
                  alt="Allie Fit"
                  width={140}
                  height={56}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#585454] text-base lg:text-lg leading-relaxed max-w-md mb-10 font-300">
              {t("hero.subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-[#970092] text-white font-bold text-sm px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-[#570057]"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)" }}
              >
                {t("hero.cta")}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-[#970092] border-b border-[#970092]/30 hover:border-[#970092] pb-0.5 transition-colors"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>

          {/* Right column — diagonal image stack */}
          <div className="relative h-[420px] lg:h-[calc(100vh-8rem)] flex items-end pb-0">
            {/* Back image — offset & clipped */}
            <div
              className="absolute top-12 right-0 w-[58%] h-[72%] overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/img-home-2.jpg"
                alt="Allie Fit Training"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>

            {/* Front image — larger, floating card */}
            <div
              className="absolute bottom-0 left-0 w-[62%] h-[75%] float-card overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/img-home-1.jpg"
                alt="Allie Fit Studio"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>

            {/* Floating stat pill */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 float-card bg-white rounded-2xl px-5 py-3 text-center"
              style={{ transform: "translate(-50%,-50%) rotate(2deg)" }}
            >
              <div className="text-2xl font-black text-[#970092]">200+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#585454] font-600">Clienți</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#970092]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#970092]/40" />
      </div>
    </section>
  );
}
