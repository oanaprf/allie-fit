"use client";

import { useTranslation } from "react-i18next";

const icons = [
  // Personalized
  <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>,
  // Certified
  <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
  // Results
  <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
  // Support
  <svg key="4" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
];

export default function About() {
  const { t } = useTranslation();
  const reasons = t("about.reasons", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-10 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A84C]/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
                  Allie Fit Studio
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Pasiunea noastră pentru fitness devine{" "}
                  <span className="text-[#C9A84C]">rezultatele tale</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  La Allie Fit credem că fiecare corp este unic și merită o abordare personalizată. De
                  aceea, fiecare program este creat special pentru tine — ținând cont de obiectivele,
                  nivelul de fitness și stilul tău de viață.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "200+", label: "Clienți transformați" },
                    { value: "100%", label: "Dedicare totală" },
                    { value: "3", label: "Programe specializate" },
                    { value: "5★", label: "Rating clienți" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0d0d0d] rounded-xl p-4 border border-zinc-800">
                      <div className="text-2xl font-bold text-[#C9A84C]">{s.value}</div>
                      <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — reasons */}
          <div>
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
              De ce noi
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("about.title")}
            </h2>
            <p className="text-zinc-400 text-lg mb-10">{t("about.subtitle")}</p>

            <div className="flex flex-col gap-6">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#181818] border border-zinc-800 hover:border-[#C9A84C]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center flex-shrink-0">
                    {icons[i]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{reason.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
