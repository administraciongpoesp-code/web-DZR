"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { RayPattern } from "@/components/ray-pattern";
import { SectionHeading } from "@/components/section-heading";
import { SITE, TRUSTED_LOGOS, UNVERIFIED_STATS } from "@/lib/constants";

const LOGO_TRACK = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <RayPattern id="about-pattern" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Nosotros" title="La fábrica detrás de cada prenda" description={SITE.description} />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {UNVERIFIED_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-dezara-mist/15 bg-dezara-fog p-8 text-center"
            >
              <p className="font-display text-4xl text-dezara-red sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-dezara-ink">{stat.label}</p>
              {!stat.verified ? (
                <p className="mt-2 text-[0.65rem] uppercase tracking-wide text-dezara-mist">
                  Cifra a verificar con el cliente
                </p>
              ) : null}
            </motion.div>
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-sans text-xs font-bold uppercase tracking-[0.2em] text-dezara-mist">
          Clientes que confían en DZR
        </h3>

        {/* Lista real para lectores de pantalla — la pista animada de abajo
            duplica los logos para el loop visual y queda marcada como
            decorativa. */}
        <ul className="sr-only">
          {TRUSTED_LOGOS.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>

      <div
        className="relative z-10 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {LOGO_TRACK.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center sm:w-44"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={40}
                  className="max-h-20 w-auto object-contain"
                />
              ) : (
                <span className="w-full rounded-md border border-dezara-mist/20 bg-dezara-fog px-3 py-3 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-dezara-ink/70">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
