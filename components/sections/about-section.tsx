
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SITE, TRUSTED_LOGOS, UNVERIFIED_STATS } from "@/lib/constants";

const LOGO_TRACK = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden bg-white py-20 text-dezara-ink sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-red-600/[0.04] blur-[100px]"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-dezara-red sm:text-xs">
              <span className="h-px w-9 bg-dezara-red" />
              Nosotros
            </p>

            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.98] tracking-[0.02em] sm:text-5xl lg:text-6xl">
              La fábrica detrás de cada{" "}
              <span className="text-dezara-red">prenda</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-dezara-mist sm:text-base sm:leading-8 lg:ml-auto">
            {SITE.description}
          </p>
        </motion.div>

        {/* Estadísticas existentes */}
        <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4">
          {UNVERIFIED_STATS.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden border border-dezara-ink/10 bg-[#f7f7f7] p-6 transition-colors hover:border-dezara-red/40 sm:p-8 lg:p-10"
            >
              <span className="absolute right-0 top-0 h-1 w-12 bg-dezara-red transition-all duration-300 group-hover:w-full" />

              <p className="font-display text-4xl leading-none text-dezara-red sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>

              <p className="mt-4 text-xs font-black uppercase leading-relaxed tracking-[0.1em] text-dezara-ink sm:text-sm">
                {stat.label}
              </p>

              {!stat.verified && (
                <p className="mt-3 text-[9px] leading-4 text-dezara-mist">
                  Cifra a verificar con el cliente
                </p>
              )}
            </motion.article>
          ))}
        </div>

        {/* Clientes */}
        <div className="mt-16 border-t border-dezara-ink/10 pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-dezara-red">
                Confianza y colaboración
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.02em] sm:text-3xl">
                Clientes que confían en DZR
              </h3>
            </div>

            <ArrowUpRight
              className="hidden h-6 w-6 text-dezara-red sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Lista accesible */}
      <ul className="sr-only">
        {TRUSTED_LOGOS.map((client) => (
          <li key={client.name}>{client.name}</li>
        ))}
      </ul>

      {/* Carrusel de logotipos */}
      {TRUSTED_LOGOS.length > 0 && (
        <div
          className="relative mt-8 overflow-hidden border-y border-dezara-ink/10 py-5 sm:mt-10 sm:py-7"
          aria-hidden="true"
        >
          <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-12">
            {LOGO_TRACK.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center sm:h-20 sm:w-40"
              >
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt=""
                    width={150}
                    height={60}
                    sizes="160px"
                    className="max-h-14 w-auto max-w-full object-contain sm:max-h-16"
                  />
                ) : (
                  <span className="max-w-full text-center text-[9px] font-bold uppercase leading-relaxed text-dezara-ink/60 sm:text-[10px]">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
