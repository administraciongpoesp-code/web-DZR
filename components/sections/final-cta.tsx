"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CTAButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FinalCta() {
  return (
    <section
      id="cotizar"
      className="relative isolate overflow-hidden bg-dezara-red py-20 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 -z-10 h-80 w-80 rotate-12 border-[40px] border-black/[0.08] sm:h-[450px] sm:w-[450px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-2 w-1/3 bg-black/20"
      />

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
        >
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase text-white/70 sm:text-xs">
              <span className="h-px w-9 bg-white" />
              DZR · Diseño y fabricación
            </p>

            <h2 className="text-balance text-4xl font-black uppercase leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl">
              ¿Quieres un uniforme con la misma calidad que el de Alacranes de
              Durango?
            </h2>

            <div className="mt-7 h-1 w-20 bg-black sm:w-28" />
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:min-w-[220px] lg:flex-col">
            <CTAButton
              href="/contacto"
              variant="primary"
              size="lg"
              className="min-h-12 justify-center bg-dezara-black px-6 text-white hover:bg-black/80"
            >
              Cotiza tu uniforme
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </CTAButton>

            <WhatsAppButton
              size="lg"
              label="Escríbenos por WhatsApp"
              variant="outline"
              className="min-h-12 justify-center border-white/50 bg-transparent px-6 text-white hover:bg-white hover:text-dezara-red"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}