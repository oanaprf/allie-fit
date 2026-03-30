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
    "w-full bg-white border border-[#f1e8f1] focus:border-[#970092] rounded-xl px-4 py-3.5 text-[#1e1e1e] placeholder-[#585454]/50 text-sm outline-none transition-colors";

  return (
    <section id="contact" className="bg-[#f1e8f1] py-20 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#970092] mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-[#585454] text-lg mb-10">{t("contact.subtitle")}</p>

            <div className="flex flex-col gap-5">
              {[
                { label: t("contact.phone"), value: "+40 700 000 000" },
                { label: t("contact.email"), value: "contact@alliefit.ro" },
                { label: t("contact.location"), value: t("contact.locationValue") },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#970092]/10">
                  <div className="w-2 h-2 rounded-full bg-[#970092] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#585454] uppercase tracking-wider">{item.label}</div>
                    <div className="text-[#1e1e1e] font-semibold mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {["Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="border border-[#970092] text-[#970092] hover:bg-[#970092] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#f1e8f1]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#970092]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#970092]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">Mesaj trimis!</h3>
                <p className="text-[#585454]">Te vom contacta în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">{t("contact.formTitle")}</h3>
                <input type="text" placeholder="Numele tău" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                <input type="email" placeholder="Adresa de email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                <input type="tel" placeholder="Număr de telefon" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                <textarea placeholder="Mesajul tău..." rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`} />
                <button type="submit"
                  className="w-full bg-[#970092] hover:bg-[#570057] text-white font-bold py-4 rounded-xl transition-colors mt-2">
                  {t("contact.cta")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
