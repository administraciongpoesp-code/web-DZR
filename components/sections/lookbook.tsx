"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { GALLERY_ITEMS } from "@/lib/constants";

export function Lookbook() {
  return (
    <section className="bg-dezara-fog py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lookbook"
          title="Otros equipos, la misma pasión"
          description="Además de Alacranes de Durango, Dezara viste equipos y clubes de fútbol, básquetbol, béisbol y voleibol en todo Durango."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.figure
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-dezara-black"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 16vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="block text-xs font-bold uppercase tracking-wide text-white">{item.title}</span>
                <span className="block text-[0.65rem] text-white/70">{item.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
