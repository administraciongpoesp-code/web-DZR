"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PenTool, ShieldCheck, ShirtIcon, Users } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

const ICONS = [Users, PenTool, ShirtIcon, ShieldCheck, ClipboardCheck];

export function ProcessSection() {
  return (
    <section className="bg-dezara-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Cómo trabajamos" title="Nuestro proceso" tone="light" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="absolute right-4 top-4 text-3xl font-display text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="h-8 w-8 text-dezara-red" aria-hidden />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
