"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation();
  const reasons = t("about.reasons", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="bg-[#970092] py-20 px-5 md:px-[10%] w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left — text */}
          <div className="flex-1 text-white">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#ffffff80] mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-[#ffffffbf] leading-relaxed mb-4">{t("about.description1")}</p>
            <p className="text-[#ffffffbf] leading-relaxed mb-4">{t("about.description2")}</p>
            <p className="text-[#ffffffbf] leading-relaxed mb-8">{t("about.description3")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="bg-[#ffffff15] rounded-xl p-4 border border-[#ffffff20]">
                  <h4 className="font-bold text-white mb-1">{reason.title}</h4>
                  <p className="text-sm text-[#ffffffbf]">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — images */}
          <div className="flex-1 flex gap-3 md:gap-4 min-h-[280px] md:min-h-[360px] lg:min-h-[420px]">
            <div className="relative flex-[2] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/img-about-me-1.jpg"
                alt="About Allie Fit"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <div className="relative flex-[1] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/img-about-me-2.jpg"
                alt="About Allie Fit"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
