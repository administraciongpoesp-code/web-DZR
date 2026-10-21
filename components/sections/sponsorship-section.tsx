"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ShieldCheck } from "lucide-react";

import { SITE, SPONSORED_TEAMS } from "@/lib/constants";

export function SponsorshipSection() {
  return (
    <section
      id="sponsorship-section"
      className="relative isolate overflow-hidden bg-neutral-950 py-20 text-white sm:py-28 lg:py-36"
    >
      {/* Fondo y acentos de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.7%, #ffffff 50%, transparent 50.3%)",
          backgroundSize: "54px 54px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-red-700/15 blur-[120px]"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Identidad visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
              <span className="h-px w-9 bg-red-600" />
              DZR × Alacranes de Durango
            </p>

            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[1.08] sm:text-5xl lg:text-6xl">
              Una alianza que viste con orgullo a{" "}
              <span className="text-red-600">Durango</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              {SITE.description}
            </p>

            <div className="mt-9 flex items-center gap-3 border-l-2 border-red-600 py-1 pl-4">
              <ShieldCheck className="h-5 w-5 shrink-0 text-red-500" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/80 sm:text-sm">
                Proveedor oficial de Alacranes de Durango
              </p>
            </div>
          </motion.div>

          {/* Escudos y relación entre ambas marcas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-white/10 sm:-inset-7" />

            <div className="relative grid min-h-[280px] grid-cols-[1fr_auto_1fr] items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-10 sm:min-h-[340px] sm:gap-8 sm:px-10 sm:py-14">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-24 bg-red-600 sm:w-32"
              />

              {/* Logo DZR */}
              <div className="flex min-w-0 flex-col items-center text-center">
                <div className="flex h-24 w-full items-center justify-center sm:h-32">
                  <Image
                    src="/images/placeholders/logo-dzr-red.png"
                    alt="DZR"
                    width={260}
                    height={100}
                    sizes="(min-width: 640px) 260px, 38vw"
                    className="max-h-full w-full object-contain"
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
                  Diseño y fabricación
                </p>
              </div>

              {/* Símbolo de colaboración */}
              <div className="flex flex-col items-center gap-3">
                <span className="h-8 w-px bg-white/20 sm:h-12" />
                <span className="text-sm font-black text-red-500 sm:text-lg">
                  ×
                </span>
                <span className="h-8 w-px bg-white/20 sm:h-12" />
              </div>

              {/* Escudo del equipo */}
              <div className="flex min-w-0 flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white p-3 shadow-[0_0_45px_rgba(200,16,46,0.12)] sm:h-32 sm:w-32 sm:p-4">
                  <Image
                    src={SPONSORED_TEAMS.primary.crest}
                    alt={SPONSORED_TEAMS.primary.crestAlt}
                    fill
                    sizes="128px"
                    className="object-contain p-3 sm:p-4"
                  />
                </div>

                <p className="mt-5 max-w-40 text-[10px] font-black uppercase leading-relaxed tracking-wide text-white sm:text-xs">
                  {SPONSORED_TEAMS.primary.name}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 h-1 w-24 bg-red-600 sm:w-32" />
            </div>

            <div className="relative mt-5 flex items-center justify-between gap-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-[10px]">
                Orgullo duranguense
              </p>

              <a
                href="#jersey-gallery"
                className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75 transition-colors hover:text-red-500 sm:text-xs"
              >
                Conoce el uniforme
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}