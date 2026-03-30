"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#570057] overflow-hidden">
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[#f1e8f1] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      {/* Geometric circle overlay */}
      <div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
        style={{ border: "100px solid #ffffff" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="float-card bg-white/10 inline-block p-3 mb-5"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
              <Image
                src="/images/Logo-allie-shadow.png"
                alt="Allie Fit"
                width={120}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-300 max-w-[200px]">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-px bg-white/40" />
              <h4 className="text-white/50 text-[10px] font-700 tracking-[0.25em] uppercase">Servicii</h4>
            </div>
            <ul className="space-y-2">
              {[t("nav.personalTraining"), t("nav.yoga"), t("nav.functionalTraining"), t("nav.transformations")].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors font-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-px bg-white/40" />
              <h4 className="text-white/50 text-[10px] font-700 tracking-[0.25em] uppercase">Contact</h4>
            </div>
            <ul className="space-y-2 text-sm text-white/60 font-300">
              <li>contact@alliefit.ro</li>
              <li>+40 700 000 000</li>
              <li>București, România</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs">
            © {year} Allie Fit. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            {[t("footer.links.privacy"), t("footer.links.terms")].map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
