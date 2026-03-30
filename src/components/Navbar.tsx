"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.personalTraining", href: "#services" },
  { key: "nav.yoga", href: "#services" },
  { key: "nav.transformations", href: "#transformations" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setAtTop(y < 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => i18n.changeLanguage(i18n.language === "ro" ? "en" : "ro");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(151,0,146,0.08)] border-b border-[#f1e8f1]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20">

        {/* Logo — hides when at very top (hero shows its own floating logo) */}
        <a
          href="#home"
          className={`transition-all duration-300 ${atTop ? "opacity-0 pointer-events-none -translate-x-2" : "opacity-100 translate-x-0"}`}
        >
          <Image
            src="/images/Logo-allie-shadow.png"
            alt="Allie Fit"
            width={110}
            height={44}
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="relative text-[11px] font-700 tracking-[0.2em] uppercase text-[#585454] hover:text-[#970092] transition-colors group"
              >
                {t(link.key)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#970092] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-[10px] font-700 tracking-widest uppercase text-[#585454] hover:text-[#970092] transition-colors"
          >
            <Image
              src={i18n.language === "ro" ? "/images/img-ro-flag.png" : "/images/img-uk-flag.png"}
              alt={i18n.language === "ro" ? "RO" : "EN"}
              width={20}
              height={14}
              className="rounded-sm object-cover"
            />
            {i18n.language === "ro" ? "RO" : "EN"}
          </button>

          {/* CTA — clipped corner button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#970092] hover:bg-[#570057] text-white text-[10px] font-700 tracking-widest uppercase px-6 py-3 transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            {t("nav.bookNow")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 flex flex-col gap-[5px] group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-[#970092] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-[#970092] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "group-hover:w-6"}`} />
          <span className={`block w-6 h-[1.5px] bg-[#970092] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-white border-t border-[#f1e8f1] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[11px] font-700 tracking-[0.2em] uppercase text-[#585454] hover:text-[#970092] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-[#f1e8f1]">
            <button onClick={toggleLang} className="flex items-center gap-2 text-[10px] font-700 tracking-widest uppercase text-[#585454]">
              <Image
                src={i18n.language === "ro" ? "/images/img-ro-flag.png" : "/images/img-uk-flag.png"}
                alt=""
                width={20}
                height={14}
                className="rounded-sm"
              />
              {i18n.language === "ro" ? "RO" : "EN"}
            </button>
            <a
              href="#contact"
              className="bg-[#970092] text-white text-[10px] font-700 tracking-widest uppercase px-5 py-3"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.bookNow")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
