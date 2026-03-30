"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-[#fdfafd] pt-10"
    >
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1e1e] leading-tight mb-6">
          {t("hero.title")}{" "}
          <span className="text-[#970092]">{t("hero.titleAccent")}</span>
        </h1>

        {/* Logo */}
        <div className="my-8 md:my-10 scale-[1.2] md:scale-[2] md:mt-16 md:mb-24">
          <Image
            src="/images/Logo-allie-shadow.png"
            alt="Allie Fit"
            width={160}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </div>

        {/* Description */}
        <p className="max-w-2xl text-[#585454] text-base md:text-lg leading-relaxed mb-8">
          {t("hero.subtitle")}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block bg-[#970092] hover:bg-[#570057] text-white font-bold text-base px-10 py-4 rounded-full transition-colors shadow-md hover:shadow-lg"
        >
          {t("hero.cta")}
        </a>

        {/* Two hero images */}
        <div className="flex w-full mt-16 gap-3 md:gap-5 max-h-[340px] md:max-h-[420px] overflow-hidden rounded-2xl shadow-lg">
          <div className="flex-1 relative">
            <Image
              src="/images/img-home-1.jpg"
              alt="Allie Fit Studio"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex-1 relative">
            <Image
              src="/images/img-home-2.jpg"
              alt="Allie Fit Training"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
