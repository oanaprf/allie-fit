"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const transformationImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/img-transformations-${i + 1}.${i + 1 === 16 ? "jpeg" : "jpg"}`,
}));

export default function Transformations() {
  const { t } = useTranslation();

  return (
    <section id="transformations" className="bg-[#fdfafd] py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#970092] mb-2">
            {t("transformations.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e]">
            {t("transformations.title")}
          </h2>
          <p className="mt-3 text-[#585454] max-w-xl mx-auto">
            {t("transformations.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {transformationImages.map(({ id, src }) => (
            <div
              key={id}
              className="relative w-[calc(50%-8px)] sm:w-[calc(33%-11px)] md:w-[calc(25%-12px)] aspect-[3/4] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#f1e8f1]"
            >
              <Image
                src={src}
                alt={`Transformation ${id}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
