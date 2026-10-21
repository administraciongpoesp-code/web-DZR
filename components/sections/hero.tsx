
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  ShieldCheck,
  Star,
} from "lucide-react";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { SPONSORED_TEAMS } from "@/lib/constants";

const HERO_SLIDES = [
  {
    src: "/images/alacranes/alacranes21.jpg",
    alt: "Jugadores de Alacranes de Durango",
  },
  {
    src: "/images/alacranes/alacranes22.jpg",
    alt: "Jugadores de Alacranes de Durango",
  },
  {
    src: "/images/alacranes/alacranes23.jpg",
    alt: "Jugadores de Alacranes de Durango",
  },
  {
    src: "/images/alacranes/alacranes24.jpg",
    alt: "Equipo de Alacranes de Durango en cancha",
  },
  {
    src: "/images/alacranes/alacranes25.jpg",
    alt: "Jugadores de Alacranes de Durango con su uniforme",
  },
];

const FEATURES = [
  {
    icon: Layers,
    title: "Materiales",
    description: "Ligeros y transpirables",
  },
  {
    icon: ShieldCheck,
    title: "Diseño",
    description: "Personalizado",
  },
  {
    icon: Star,
    title: "Fabricación",
    description: "Profesional",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[760px] overflow-hidden bg-black text-white lg:h-svh lg:min-h-0"
    >
      {/* Slider de fondo */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-black">
        {HERO_SLIDES.map((slide, index) => (
          <motion.div
            key={slide.src}
            initial={false}
            animate={{ opacity: activeSlide === index ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            aria-hidden="true"
            className="absolute inset-0 sm:translate-x-[8%] lg:translate-x-[18%] xl:translate-x-[22%]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className="object-cover object-[center_42%]"
            />
          </motion.div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050506_0%,#050506_17%,rgba(5,5,6,0.96)_29%,rgba(5,5,6,0.82)_40%,rgba(5,5,6,0.52)_52%,rgba(5,5,6,0.22)_64%,rgba(5,5,6,0.06)_76%,rgba(5,5,6,0)_88%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_48%,transparent_38%,rgba(0,0,0,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(5,5,6,0.72)_0%,rgba(5,5,6,0.14)_27%,transparent_62%,rgba(0,0,0,0.22)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_100%,rgba(200,16,46,0.22),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-[17%] -z-10 hidden h-[22rem] w-14 -rotate-[28deg] bg-dezara-red/90 sm:left-[27%] sm:top-[7%] sm:block sm:h-[34rem] sm:w-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-[22%] -z-10 hidden h-[19rem] w-3 -rotate-[28deg] bg-dezara-red/55 sm:left-[30%] sm:top-[8%] sm:block sm:h-[29rem] sm:w-4"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-[10%] -z-10 hidden h-[42rem] w-16 rotate-[28deg] bg-dezara-red/30 sm:block"
      />
      {/* Contenido principal */}
      <div className="relative mx-auto flex w-full min-w-0 min-h-[760px] max-w-[1720px] flex-col px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:h-full lg:min-h-0 lg:px-[5vw] lg:pb-16 lg:pt-24">
        {/* Socio comercial */}
        <div className="relative z-10 flex min-w-0 flex-col items-start gap-6 sm:gap-8 lg:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white p-1.5 shadow-[0_0_32px_rgba(255,255,255,0.16)] sm:h-14 sm:w-14">
              <Image
                src={SPONSORED_TEAMS.primary.crest}
                alt={SPONSORED_TEAMS.primary.crestAlt}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="border-l border-white/35 pl-4">
              <p className="text-[9px] font-medium uppercase leading-tight text-white sm:text-[10px]">
                Socio comercial oficial de
              </p>
              <p className="mt-1 text-xs font-black uppercase leading-tight text-white sm:text-sm">
                Alacranes de Durango
              </p>
            </div>
          </div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full min-w-0 max-w-[650px] text-[clamp(2.3rem,9vw,6.25rem)] font-black italic uppercase leading-[1] tracking-[-0.025em] text-white drop-shadow-[0_3px_24px_rgba(0,0,0,0.55)] sm:max-w-[700px] sm:text-[clamp(3.2rem,6.4vw,6.25rem)] sm:leading-[0.9]"
          >
            EL NUEVO
            <br />
            UNIFORME DE
            <br />
            <span className="text-dezara-red">ALACRANES</span> DE
            <br />
            DURANGO
          </motion.h1>
        </div>

        {/* Espacio central para apreciar a los jugadores */}
        <div className="min-h-[100px] flex-1 sm:min-h-[140px] lg:min-h-0" />

        {/* Descripción, características y botón */}
        <div className="relative z-10 grid w-full min-w-0 items-center gap-8 border-t border-white/20 py-7 lg:grid-cols-[1.1fr_1fr_1.1fr] lg:gap-7 lg:border-t-0 lg:py-0">
          <div className="max-w-[520px]">
            <p className="text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-[17px]">
              El jersey oficial fabricado por DZR para Alacranes de Durango,
              equipo de la Liga de Expansión MX. Diseño, confección y calidad,
              de principio a fin.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-9 bg-red-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                Orgullo duranguense
              </span>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:border-x lg:border-white/25 lg:px-6">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-red-600/80 bg-black/45 shadow-[0_0_24px_rgba(200,16,46,0.14)] sm:h-12 sm:w-12">
                  <Icon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-sans text-xs font-bold uppercase tracking-[0.06em] sm:text-sm">
                  {title}
                </p>

                <p className="mt-1 text-center font-sans text-xs leading-5 text-white sm:text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Botón de WhatsApp */}
          <div className="flex justify-start lg:justify-end">
            <WhatsAppButton
              size="lg"
              message="jersey"
              label="Preguntar por el jersey de Alacranes"
              className="min-h-14 w-full max-w-[430px] justify-center text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Flecha anterior */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/35 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-dezara-red hover:bg-dezara-red sm:left-7 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Flecha siguiente */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/35 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-dezara-red hover:bg-dezara-red sm:right-7 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores del slider */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-1.5 transition-all duration-300 ${
              activeSlide === index
                ? "w-9 bg-dezara-red"
                : "w-4 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-dezara-red/80" />
    </section>
  );
}
