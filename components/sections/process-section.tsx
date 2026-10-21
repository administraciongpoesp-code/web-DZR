"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  PenTool,
  ShieldCheck,
  Shirt,
  Users,
} from "lucide-react";

import { PROCESS_STEPS } from "@/lib/constants";

const ICONS = [Users, PenTool, Shirt, ShieldCheck, ClipboardCheck];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative isolate overflow-hidden bg-black py-20 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-red-700/15 blur-[120px]"
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
              <span className="h-px w-9 bg-red-600" />
              Cómo trabajamos
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Nuestro <span className="text-red-600">proceso</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/50 sm:text-base">
            Cada etapa forma parte del trabajo que hay detrás de cada prenda.
          </p>
        </motion.div>

        {/* Línea visual del proceso */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 lg:block"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICONS[index] ?? ClipboardCheck;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  className="group relative flex min-h-[270px] flex-col border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-red-600/60 hover:bg-white/[0.055] sm:p-6"
                >
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center border border-white/15 bg-black text-red-500 transition-colors duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <span className="font-display text-4xl text-white/15 transition-colors group-hover:text-red-600/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="max-w-[220px] text-base font-black uppercase leading-snug text-white sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div className="h-[2px] w-8 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-[10px]">
          <span className="h-px w-7 bg-red-600" />
          DZR · Diseño, confección y calidad
        </div>
      </div>
    </section>
  );
}