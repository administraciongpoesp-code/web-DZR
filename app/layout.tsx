import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "DZR",
    template: "%s | DZR",
  },

  description:
    "DZR es una fábrica de uniformes en Durango especializada en uniformes deportivos, industriales, médicos y corporativos, con diseño y confección a la medida.",

  keywords: [
    "DZR",
    "uniformes Durango",
    "fábrica de uniformes en Durango",
    "uniformes personalizados",
    "uniformes deportivos",
    "uniformes industriales",
    "uniformes médicos",
    "uniformes corporativos",
    "fabricación de uniformes",
    "confección de uniformes",
  ],

  authors: [{ name: "DZR" }],

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: "DZR",
    title: "DZR",
    description:
      "Fábrica de uniformes en Durango. Uniformes deportivos, industriales, médicos y corporativos con diseño y confección a la medida.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DZR",
    description:
      "Fábrica de uniformes en Durango. Uniformes deportivos, industriales, médicos y corporativos.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${anton.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-dezara-red focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido principal
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />

        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}