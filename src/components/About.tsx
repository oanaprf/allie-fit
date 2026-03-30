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
    <section
      id="about"
      className="relative overflow-hidden py-0"
    >
      {/* ── Diagonal purple block ── */}
      <div
        className="relative bg-[#970092] geo-line"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          paddingTop: "10vw",
          paddingBottom: "10vw",
        }}
      >
        {/* Geometric circle — decorative, top right */}
        <div
          className="absolute top-0 right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
          style={{ border: "80px solid #ffffff" }}
        />

        {/* Thin diagonal line accent */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "30%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            transform: "rotate(-3deg) scaleX(1.2)",
            transformOrigin: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="text-white">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/40" />
                <span className="text-white/60 text-xs font-700 tracking-[0.25em] uppercase">
                  About Me
                </span>
              </div>

              {/* Giant decorative letter */}
              <div className="relative mb-2">
                <span
                  className="absolute -top-8 -left-4 text-[8rem] font-black text-white/5 leading-none select-none pointer-events-none"
                  aria-hidden
                >
                  A
                </span>
                <h2 className="relative text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-tight tracking-tight">
                  {t("about.title")}
                </h2>
              </div>

              <div className="space-y-4 mt-8 text-white/75 text-sm leading-relaxed font-300">
                <p>{t("about.description1")}</p>
                <p>{t("about.description2")}</p>
                <p>{t("about.description3")}</p>
              </div>

              {/* Reason pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
                {reasons.map((r, i) => (
                  <div
                    key={r.title}
                    className="relative bg-white/8 border border-white/15 px-4 py-4 overflow-hidden"
                    style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                  >
                    <span className="absolute top-2 right-3 text-[10px] font-black text-white/20 tracking-widest">
                      0{i + 1}
                    </span>
                    <h4 className="font-700 text-white text-sm mb-1">{r.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — diagonal image composition */}
            <div className="relative h-[380px] lg:h-[500px]">
              {/* Image 1 — large, clipped */}
              <div
                className="absolute top-0 right-0 w-[72%] h-[85%] overflow-hidden shadow-2xl"
                style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%)" }}
              >
                <Image
                  src="/images/img-about-me-1.jpg"
                  alt="Allie Fit trainer"
                  fill
                  className="object-cover"
                  sizes="35vw"
                />
              </div>

              {/* Image 2 — smaller, floating, rotated */}
              <div
                className="absolute bottom-0 left-0 w-[42%] h-[52%] float-card overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
                  transform: "rotate(-2deg)",
                }}
              >
                <Image
                  src="/images/img-about-me-2.jpg"
                  alt="Allie Fit studio"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute top-1/2 left-[38%] z-10 bg-white float-card px-4 py-3 text-center"
                style={{ transform: "translateY(-50%) rotate(1.5deg)" }}
              >
                <div className="text-xl font-black text-[#970092]">5+</div>
                <div className="text-[10px] uppercase tracking-widest text-[#585454] font-600">Ani exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
