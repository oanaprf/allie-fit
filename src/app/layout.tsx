import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/providers/I18nProvider";

export const metadata: Metadata = {
  title: "Allie Fit — Studio de Fitness Premium în București",
  description:
    "Antrenamente personale, yoga și functional training personalizate pentru rezultate reale. Transformă-ți corpul și mintea cu Allie Fit.",
  keywords: "fitness, antrenamente personale, yoga, functional training, bucuresti, allie fit",
  openGraph: {
    title: "Allie Fit — Studio de Fitness Premium",
    description: "Transformă-ți corpul și mintea cu antrenamente personalizate.",
    type: "website",
    url: "https://alliefit.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0d0d0d]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
