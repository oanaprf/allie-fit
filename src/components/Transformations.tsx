"use client";

import { useTranslation } from "react-i18next";

const transformations = [
  {
    name: "Maria",
    duration: "3 luni",
    result: "-12 kg",
    program: "Antrenamente Personale",
    quote: "Am reușit să îmi transform corpul și să câștig încredere în mine. Recomand cu toată inima!",
  },
  {
    name: "Andrei",
    duration: "6 luni",
    result: "+8 kg masă musculară",
    program: "Antrenamente Personale",
    quote: "Programul personalizat a fost exact ce aveam nevoie. Rezultatele au depășit așteptările.",
  },
  {
    name: "Elena",
    duration: "4 luni",
    result: "Flexibilitate +70%",
    program: "Yoga",
    quote: "Yoga cu Lidia mi-a schimbat viața. Mă simt mai echilibrată și mai energică ca niciodată.",
  },
  {
    name: "Cristian",
    duration: "5 luni",
    result: "-8 kg / +forță",
    program: "Functional Training",
    quote: "Clasele de functional training sunt intense și eficiente. Am văzut progres rapid și real.",
  },
];

export default function Transformations() {
  const { t } = useTranslation();

  return (
    <section id="transformations" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Povești de succes
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
            {t("transformations.title")}
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-lg">
            {t("transformations.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((item) => (
            <div
              key={item.name}
              className="group bg-[#181818] border border-zinc-800 hover:border-[#C9A84C]/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#a07830] flex items-center justify-center text-black font-bold text-lg">
                {item.name[0]}
              </div>

              {/* Result badge */}
              <div className="inline-flex">
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">
                  {item.result}
                </span>
              </div>

              {/* Quote */}
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>

              {/* Footer */}
              <div className="border-t border-zinc-800 pt-4">
                <div className="font-semibold text-white text-sm">{item.name}</div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  {item.program} · {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">Vrei să fii următorul succes?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
          >
            Începe transformarea ta
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
