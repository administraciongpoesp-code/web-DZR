"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { CLIENTS, SITE, UNVERIFIED_STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16">
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-dezara-mist">
            Clientes que confían en Dezara
          </h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-dezara-ink/70">
            {CLIENTS.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
