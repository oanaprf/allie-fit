"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const services = [
  {
    key: "personalTraining",
    image: "/images/img-personal-training.jpg",
  },
  {
    key: "groupClasses",
    image: "/images/img-group-classes.jpg",
  },
  {
    key: "nutritionPlans",
    image: "/images/img-nutrition-plans.jpg",
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-[#fdfafd] py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#970092] mb-2">
            {t("services.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e]">{t("services.title")}</h2>
          <p className="mt-3 text-[#585454] max-w-xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-evenly gap-10">
          {services.map(({ key, image }) => (
            <div
              key={key}
              className="group w-full sm:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#f1e8f1]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={t(`services.${key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e1e1e] mb-2">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-sm text-[#585454] leading-relaxed">
                  {t(`services.${key}.description`)}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-semibold text-[#970092] hover:text-[#570057] transition-colors"
                >
                  {t("services.learnMore")} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
