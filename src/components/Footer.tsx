"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#570057] text-white py-12 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/Logo-allie-shadow.png"
              alt="Allie Fit"
              width={120}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-[#ffffff80] text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Servicii</h4>
            <ul className="flex flex-col gap-2">
              {[t("nav.personalTraining"), t("nav.yoga"), t("nav.functionalTraining"), t("nav.transformations")].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="text-[#ffffff80] hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#ffffff80]">
              <li>contact@alliefit.ro</li>
              <li>+40 700 000 000</li>
              <li>București, România</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffffff20] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#ffffff60] text-xs">
            © {year} Allie Fit. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#ffffff60] hover:text-white text-xs transition-colors">{t("footer.links.privacy")}</a>
            <a href="#" className="text-[#ffffff60] hover:text-white text-xs transition-colors">{t("footer.links.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
