"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Layers,
  ShieldCheck,
  Star,
} from "lucide-react";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { SPONSORED_TEAMS } from "@/lib/constants";

const HERO_BACKGROUND = "/images/inicio_estadio.jpg";
const HERO_PLAYERS = "/images/alacranes/alacranes20.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100vh+40px)] overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          className="scale-105 object-cover blur-[3px]"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-red-950/5 mix-blend-multiply" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="absolute right-[34%] top-0 z-[2] h-[150px] w-[80px] -skew-x-[14deg] bg-red-600/85" />

      <div className="absolute right-[4%] top-[58%] z-[2] h-[260px] w-[65px] -skew-x-[12deg] bg-red-600/75" />

      <div className="absolute bottom-0 left-[5%] z-[2] h-[2px] w-[380px] bg-red-600/70" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh+40px)] max-w-[1500px] items-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-[650px]"
          >
            <h1 className="mt-6 font-black uppercase leading-[0.98] tracking-[-0.02em] sm:mt-0">
              <span className="block text-[clamp(2.5rem,11vw,5.4rem)]">
                El nuevo uniforme de
              </span>

              <span className="block text-[clamp(2.5rem,11vw,5.4rem)]">
                <span className="text-red-600">Alacranes</span>{" "}
                de Durango
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-base leading-7 text-white/85 sm:text-lg">
              El jersey oficial fabricado por DZR para Alacranes de Durango,
              equipo de la Liga de Expansión MX. Diseño, confección y
              calidad, de principio a fin.
            </p>

            <div className="mt-9 grid max-w-[620px] grid-cols-3 gap-1 sm:gap-4">
              <div className="flex min-w-0 items-center gap-1 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-600 bg-black/35 sm:h-12 sm:w-12">
                  <Layers className="h-3.5 w-3.5 text-red-500 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase leading-3 sm:text-[11px] sm:leading-4">
                    Materiales
                  </p>

                  <p className="text-[7px] font-bold uppercase leading-[0.65rem] text-white/70 sm:text-[10px] sm:leading-4">
                    Ligeros y transpirables
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-1 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-600 bg-black/35 sm:h-12 sm:w-12">
                  <ShieldCheck className="h-3.5 w-3.5 text-red-500 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase leading-3 sm:text-[11px] sm:leading-4">
                    Diseño
                  </p>

                  <p className="text-[7px] font-bold uppercase leading-[0.65rem] text-white/70 sm:text-[10px] sm:leading-4">
                    Personalizado
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-1 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-600 bg-black/35 sm:h-12 sm:w-12">
                  <Star className="h-3.5 w-3.5 text-red-500 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase leading-3 sm:text-[11px] sm:leading-4">
                    Fabricación
                  </p>

                  <p className="text-[7px] font-bold uppercase leading-[0.65rem] text-white/70 sm:text-[10px] sm:leading-4">
                    Profesional
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <WhatsAppButton />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]"
          >
            <div className="absolute right-[5%] top-[7%] z-[3] h-[82%] w-[82%] rounded-[26px] border border-white/15" />

            <div className="absolute right-[2%] top-[4%] z-[3] h-[87%] w-[82%] rounded-[26px] border border-white/10" />

            <div className="absolute right-[5%] top-[-2%] z-[4] h-[135px] w-[88px] -skew-x-[14deg] bg-red-600/85" />

            <div className="relative z-10 h-[490px] w-full max-w-[700px] overflow-hidden rounded-[25px] border border-white/25 bg-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:h-[560px] lg:h-[630px]">
              <Image
                src={HERO_PLAYERS}
                alt="Jugadores de Alacranes de Durango con el uniforme oficial"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />
            </div>

            <div className="absolute right-[8%] top-[8%] z-30">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Orgullo
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Duranguense
              </p>

              <div className="mt-3 h-[2px] w-14 bg-red-600" />
            </div>

            <div className="absolute bottom-[3%] right-[-1%] z-30 flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 px-5 py-3 shadow-xl backdrop-blur-md">
              <div className="relative h-12 w-12 shrink-0 rounded-full bg-white p-1">
                <Image
                  src={SPONSORED_TEAMS.primary.crest}
                  alt={SPONSORED_TEAMS.primary.crestAlt}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/65">
                  Socio comercial oficial de
                </p>

                <p className="text-xs font-black uppercase tracking-[0.08em]">
                  Alacranes de Durango
                </p>
              </div>
            </div>

            <div className="absolute bottom-[4%] left-[1%] z-[20] h-[100px] w-[35px] -skew-x-[14deg] bg-red-600" />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sponsorship-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Explorar
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20">
          <ArrowDown className="h-4 w-4" />
        </div>
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-red-600/70" />
    </section>
  );
}