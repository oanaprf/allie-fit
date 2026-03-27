"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ro" ? "en" : "ro");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center">
            <span className="text-black font-bold text-sm">AF</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-wide group-hover:text-[#C9A84C] transition-colors">
            Allie<span className="text-[#C9A84C]">Fit</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-sm text-zinc-300 hover:text-[#C9A84C] transition-colors tracking-wide"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 px-2.5 py-1.5 rounded"
          >
            {i18n.language === "ro" ? "EN" : "RO"}
          </button>
          <a
            href="#contact"
            className="bg-[#C9A84C] hover:bg-[#b8943e] text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            {t("nav.bookNow")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0d0d]/98 backdrop-blur-md border-t border-zinc-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-zinc-300 hover:text-[#C9A84C] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleLang}
              className="text-xs text-zinc-400 border border-zinc-700 px-3 py-2 rounded"
            >
              {i18n.language === "ro" ? "EN" : "RO"}
            </button>
            <a
              href="#contact"
              className="bg-[#C9A84C] text-black text-sm font-semibold px-5 py-2.5 rounded-full"
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
