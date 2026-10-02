"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Wind,
} from "lucide-react";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { FABRIC, SPONSORED_TEAMS } from "@/lib/constants";

const JERSEY_IMAGE = "/images/alacranes/alacranes20.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-dezara-black text-white"
    >
      {/* =========================================================
          FONDO BLURRY
          ========================================================= */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src={JERSEY_IMAGE}
          alt=""
          fill
          sizes="100vw"
          priority
          className="scale-110 object-cover opacity-35 blur-2xl"
          aria-hidden
        />

        {/* Oscurece la fotografía */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hace que el lado izquierdo sea más oscuro para el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />

        {/* Degradado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* =========================================================
          TEXTURA / GRID
          ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden
      />

      {/* Glow rojo */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-dezara-red/15 blur-[120px]"
        aria-hidden
      />

      {/* Glow verde */}
      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden
      />

      {/* =========================================================
          CONTENIDO
          ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              COLUMNA IZQUIERDA
              ===================================================== */}
          <div>
            {/* Proveedor oficial */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1.5 shadow-lg sm:h-14 sm:w-14">
                <Image
                  src={SPONSORED_TEAMS.primary.crest}
                  alt={SPONSORED_TEAMS.primary.crestAlt}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="h-9 w-px bg-white/20" aria-hidden />

              <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.25em] text-white/60 sm:text-xs">
                Proveedor oficial de
                <br />
                <span className="text-xs text-white sm:text-sm">
                  {SPONSORED_TEAMS.primary.name}
                </span>
              </p>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-dezara-red" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dezara-red sm:text-xs">
                Lanzamiento oficial
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl"
            >
              El nuevo uniforme de{" "}
              <span className="text-dezara-red">Alacranes</span>{" "}
              de Durango
            </motion.h1>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base lg:text-lg"
            >
              El jersey oficial fabricado por DZR para Alacranes de Durango,
              equipo de la Liga de Expansión MX. Diseño, confección y control
              de calidad, de principio a fin.
            </motion.p>

            {/* ===================================================
                BENEFICIOS
                =================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dezara-red/50 bg-black/30">
                  <Layers
                    className="h-4 w-4 text-dezara-red"
                    aria-hidden
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                    Materiales
                  </p>
                  <p className="text-[11px] font-black uppercase text-white">
                    Alta calidad
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dezara-red/50 bg-black/30">
                  <ShieldCheck
                    className="h-4 w-4 text-dezara-red"
                    aria-hidden
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                    Diseño
                  </p>
                  <p className="text-[11px] font-black uppercase text-white">
                    Personalizado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dezara-red/50 bg-black/30">
                  <Wind
                    className="h-4 w-4 text-dezara-red"
                    aria-hidden
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                    Fabricación
                  </p>
                  <p className="text-[11px] font-black uppercase text-white">
                    Profesional
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                INFORMACIÓN DE TELA
                =================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7 max-w-xl rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dezara-red/10">
                  <Wind
                    className="h-4 w-4 text-dezara-red"
                    aria-hidden
                  />
                </div>

                <h2 className="text-xs font-black uppercase tracking-[0.16em] text-white">
                  Tela {FABRIC.name} — {FABRIC.composition}
                </h2>
              </div>

              <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
                {FABRIC.description}
              </p>
            </motion.div>

            {/* ===================================================
                DETALLES
                =================================================== */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-xl space-y-3 text-xs text-white/65 sm:text-sm"
            >
              <li className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red"
                  aria-hidden
                />

                <span>
                  Escudo de{" "}
                  <strong className="font-semibold text-white">
                    {SPONSORED_TEAMS.primary.name}
                  </strong>{" "}
                  bordado/estampado con acabado de competición.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Layers
                  className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red"
                  aria-hidden
                />

                <span>
                  Costuras y acabados de confección propia, bajo el mismo
                  control de calidad de las líneas DZR.
                </span>
              </li>
            </motion.ul>

            {/* ===================================================
                CTA
                =================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-7"
            >
              <WhatsAppButton
                size="lg"
                message="jersey"
                label="Preguntar por el jersey de Alacranes"
              />
            </motion.div>
          </div>

          {/* =====================================================
              COLUMNA DERECHA — FOTO
              ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Glow rojo */}
            <div
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-dezara-red/20 blur-3xl"
              aria-hidden
            />

            {/* Barras rojas decorativas */}
            <div
              className="absolute -left-3 top-12 h-32 w-8 -rotate-12 bg-dezara-red sm:-left-5 sm:h-44 sm:w-10"
              aria-hidden
            />

            <div
              className="absolute -bottom-4 -right-3 h-36 w-8 rotate-12 bg-dezara-red sm:-right-5 sm:h-48 sm:w-10"
              aria-hidden
            />

            {/* Marcos */}
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-[1.5rem] border border-dezara-red/30"
              aria-hidden
            />

            <div
              className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.5rem] border border-white/10"
              aria-hidden
            />

            {/* =================================================
                FOTO PRINCIPAL
                ================================================= */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/15 bg-black shadow-2xl shadow-black/60">
              <Image
                src={JERSEY_IMAGE}
                alt={`Jersey oficial de ${SPONSORED_TEAMS.primary.name}, fabricado por DZR`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10" />

              {/* Badge superior */}
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur-md">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
                  Jersey oficial
                </span>
              </div>

              {/* Texto inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="mb-2 text-[9px] font-black uppercase tracking-[0.3em] text-dezara-red">
                      DZR × Alacranes
                    </p>

                    <p className="text-2xl font-black uppercase leading-[0.9] text-white sm:text-3xl">
                      Orgullo
                      <br />
                      duranguense
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md">
                    <ArrowUpRight
                      className="h-5 w-5 text-white"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                BADGE PROVEEDOR
                ================================================= */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-black/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
                <Image
                  src={SPONSORED_TEAMS.primary.crest}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Proveedor oficial de
                </p>

                <p className="text-[10px] font-black uppercase tracking-wide text-white">
                  {SPONSORED_TEAMS.primary.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          INDICADOR DE SCROLL
          ========================================================= */}
      <motion.a
        href="#sponsorship-section"
        aria-label="Continuar al siguiente contenido"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: {
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-6 right-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white/70 backdrop-blur-md hover:text-white sm:flex"
      >
        <ArrowDown className="h-5 w-5" aria-hidden />
      </motion.a>
    </section>
  );
}