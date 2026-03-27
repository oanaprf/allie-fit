"use client";

import { useTranslation } from "react-i18next";

const serviceIcons = {
  personalTraining: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  yoga: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  functionalTraining: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>
  ),
};

type ServiceKey = "personalTraining" | "yoga" | "functionalTraining";

const services: ServiceKey[] = ["personalTraining", "yoga", "functionalTraining"];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Ce oferim
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white">{t("services.title")}</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-lg">{t("services.subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((key, index) => (
            <div
              key={key}
              className="group relative bg-[#181818] border border-zinc-800 hover:border-[#C9A84C]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A84C]/5"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-zinc-800 group-hover:text-[#C9A84C]/10 transition-colors select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] mb-6">
                {serviceIcons[key]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                {t(`services.${key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {t(`services.${key}.description`)}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {(t(`services.${key}.features`, { returnObjects: true }) as string[]).map(
                  (feature: string) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#C9A84C] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Află mai multe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
