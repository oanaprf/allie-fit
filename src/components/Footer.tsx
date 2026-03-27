"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center">
                <span className="text-black font-bold text-xs">AF</span>
              </div>
              <span className="text-white font-semibold text-base">
                Allie<span className="text-[#C9A84C]">Fit</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Servicii</h4>
            <ul className="flex flex-col gap-2">
              {[
                t("nav.personalTraining"),
                t("nav.yoga"),
                t("nav.functionalTraining"),
                t("nav.transformations"),
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-zinc-500 hover:text-[#C9A84C] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500">
              <li>contact@alliefit.ro</li>
              <li>+40 700 000 000</li>
              <li>București, România</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {year} Allie Fit. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              {t("footer.links.privacy")}
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              {t("footer.links.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
