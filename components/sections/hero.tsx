"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SPONSORED_TEAMS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-dezara-black text-white">
      {/* Fondo: placeholder controlado — se reemplaza por foto/video real del
          equipo Alacranes en cuanto el cliente lo proporcione. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(229,41,46,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(229,41,46,0.15), transparent 40%), linear-gradient(180deg, #050505 0%, #0b0b0c 55%, #0b0b0c 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-lg">
            <Image
              src={SPONSORED_TEAMS.primary.crest}
              alt={SPONSORED_TEAMS.primary.crestAlt}
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="h-8 w-px bg-white/20" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Patrocinador oficial de
            <br />
            <span className="text-sm text-white">{SPONSORED_TEAMS.primary.name}</span>
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Vestimos tu <span className="text-dezara-red">pasión</span>.
          <br />
          Hoy, la de Alacranes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base text-white/70 sm:text-lg"
        >
          Dezara, fábrica de uniformes de Durango, viste al equipo de fútbol
          profesional Alacranes de Durango — {SPONSORED_TEAMS.primary.league}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <CTAButton href="#jersey-showcase" size="lg">
            Ver el uniforme
          </CTAButton>
          <WhatsAppButton size="lg" message="jersey" label="Cotizar por WhatsApp" />
        </motion.div>
      </div>

      <motion.a
        href="#jersey-showcase"
        aria-label="Ver el uniforme de Alacranes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-6 right-6 z-10 hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/70 hover:text-white sm:flex"
      >
        <ArrowDown className="h-5 w-5" aria-hidden />
      </motion.a>
    </section>
  );
}
