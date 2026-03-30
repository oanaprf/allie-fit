"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.personalTraining", href: "#services" },
  { key: "nav.yoga", href: "#services" },
  { key: "nav.functionalTraining", href: "#services" },
  { key: "nav.transformations", href: "#transformations" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atHome, setAtHome] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setAtHome(window.scrollY < 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ro" ? "en" : "ro");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfafd]/95 backdrop-blur-md shadow-sm border-b border-[#f1e8f1]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo — hidden on top of home */}
        <a href="#home" className={`transition-opacity duration-300 ${atHome ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Image
            src="/images/Logo-allie-shadow.png"
            alt="Allie Fit"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-sm text-[#585454] hover:text-[#970092] transition-colors font-medium tracking-wide"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-[#585454] hover:text-[#970092] transition-colors">
            <Image
              src={i18n.language === "ro" ? "/images/img-ro-flag.png" : "/images/img-uk-flag.png"}
              alt={i18n.language === "ro" ? "RO" : "EN"}
              width={22}
              height={16}
              className="rounded-sm object-cover"
            />
            <span className="text-xs font-semibold">{i18n.language === "ro" ? "RO" : "EN"}</span>
          </button>
          <a
            href="#contact"
            className="bg-[#970092] hover:bg-[#570057] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            {t("nav.bookNow")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#970092] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-[#970092] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-[#970092] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#970092] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#fdfafd]/98 backdrop-blur-md border-t border-[#f1e8f1] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[#585454] hover:text-[#970092] transition-colors py-1 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-[#585454]">
              <Image
                src={i18n.language === "ro" ? "/images/img-ro-flag.png" : "/images/img-uk-flag.png"}
                alt={i18n.language === "ro" ? "RO" : "EN"}
                width={22}
                height={16}
                className="rounded-sm"
              />
              <span className="text-xs font-semibold">{i18n.language === "ro" ? "RO" : "EN"}</span>
            </button>
            <a
              href="#contact"
              className="bg-[#970092] text-white text-sm font-bold px-5 py-2.5 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.bookNow")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
