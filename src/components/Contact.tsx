"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1e1e1e]/20 focus:border-[#970092] px-0 py-3 text-[#1e1e1e] placeholder-[#585454]/50 text-sm outline-none transition-colors font-400";

  const contactItems = [
    { label: t("contact.phone"), value: "+40 700 000 000" },
    { label: t("contact.email"), value: "contact@alliefit.ro" },
    { label: t("contact.location"), value: t("contact.locationValue") },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Diagonal pale block */}
      <div
        className="relative bg-[#f1e8f1] geo-line py-32 px-6 lg:px-16"
        style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Geometric line top-right */}
        <div
          className="absolute top-16 right-0 w-64 h-64 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(151,0,146,0.1) 40%, rgba(151,0,146,0.1) 41%, transparent 41%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#970092]" />
                <span className="text-[#970092] text-xs font-700 tracking-[0.25em] uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-[#1e1e1e] leading-tight tracking-tight mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-[#585454] text-base leading-relaxed mb-12 font-300">
                {t("contact.subtitle")}
              </p>

              {/* Contact lines */}
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-px h-10 bg-[#970092]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#970092] font-700">
                        {item.label}
                      </div>
                      <div className="text-[#1e1e1e] font-600 mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-12 flex gap-3">
                {["Instagram", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-700 tracking-widest uppercase text-[#970092] border border-[#970092] px-5 py-2.5 hover:bg-[#970092] hover:text-white transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — ultra-clean form */}
            <div className="relative">
              {/* Floating card effect */}
              <div className="bg-white float-card p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-[#970092] flex items-center justify-center mx-auto mb-6"
                      style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-[#1e1e1e] mb-2">Mesaj trimis!</h3>
                    <p className="text-[#585454] text-sm">Te vom contacta în cel mai scurt timp.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h3 className="text-lg font-black text-[#1e1e1e] tracking-tight">
                      {t("contact.formTitle")}
                    </h3>
                    <input type="text" placeholder="Numele tău" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                    <input type="email" placeholder="Adresa de email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    <input type="tel" placeholder="Număr de telefon" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    <textarea placeholder="Mesajul tău..." rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} />
                    <button
                      type="submit"
                      className="group mt-2 w-full bg-[#970092] hover:bg-[#570057] text-white font-700 text-sm py-4 tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
                      style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
                    >
                      {t("contact.cta")}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
