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
    "w-full bg-[#181818] border border-zinc-700 focus:border-[#C9A84C] rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 text-sm outline-none transition-colors";

  return (
    <section id="contact" className="bg-[#0d0d0d] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
              Contact
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-zinc-400 text-lg mb-10">{t("contact.subtitle")}</p>

            <div className="flex flex-col gap-5">
              {[
                {
                  label: t("contact.phone"),
                  value: "+40 700 000 000",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                },
                {
                  label: t("contact.email"),
                  value: "contact@alliefit.ro",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: t("contact.location"),
                  value: t("contact.locationValue"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-3">
              {["Instagram", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-2 border border-zinc-700 hover:border-[#C9A84C] text-zinc-400 hover:text-[#C9A84C] text-sm px-4 py-2 rounded-full transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mesaj trimis!</h3>
                <p className="text-zinc-400">Te vom contacta în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white mb-2">Trimite-ne un mesaj</h3>
                <input
                  type="text"
                  placeholder="Numele tău"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Adresa de email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Număr de telefon"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  placeholder="Mesajul tău..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] hover:bg-[#b8943e] text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mt-2"
                >
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
