"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { WhatsAppButton } from "@/components/whatsapp-button";

const GALLERY_IMAGES = [
  {
    src: "/images/alacranes/alacranes15.jpg",
    alt: "Vista frontal del uniforme de Alacranes de Durango",
    label: "Vista frontal",
    number: "01",
  },
  {
    src: "/images/alacranes/alacranes10.jpg",
    alt: "Vista posterior del uniforme de Alacranes de Durango",
    label: "Vista posterior",
    number: "02",
  },
  {
    src: "/images/alacranes/alacranes3.jpg",
    alt: "Detalle del escudo del uniforme",
    label: "Detalle del escudo",
    number: "03",
  },
  {
    src: "/images/alacranes/alacranes9.jpg",
    alt: "Detalle de la tela del uniforme",
    label: "Detalle de la tela",
    number: "04",
  },
  {
    src: "/images/alacranes/alacranes16.jpg",
    alt: "Uniforme completo de Alacranes de Durango",
    label: "Uniforme completo",
    number: "05",
  },
  {
    src: "/images/alacranes/alacranes13.jpg",
    alt: "Uniforme de Alacranes de Durango en cancha",
    label: "En cancha",
    number: "06",
  },
];

export function JerseyGallery() {
  return (
    <section
      id="jersey-gallery"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
              <span className="h-px w-9 bg-red-600" />
              DZR / Alacranes
            </p>

            <h2 className="text-balance text-4xl font-black uppercase leading-[1.12] sm:text-5xl lg:text-6xl">
              Todos los ángulos del{" "}
              <span className="text-red-600">uniforme</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Una galería completa del jersey oficial fabricado por DZR:
              vistas, detalles y acabados.
            </p>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            06 Fotografías
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative min-w-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-neutral-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute left-3 top-3 border border-white/25 bg-black/40 px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
                  {image.number}
                </span>

                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-5">
                  <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.02em] text-white sm:text-sm">
                    {image.label}
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-red-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </figcaption>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-white/55">
            Diseño, confección y calidad, de principio a fin.
          </p>

          <WhatsAppButton
            size="lg"
            message="jersey"
            label="Preguntar por el jersey de Alacranes"
            className="min-h-12"
          />
        </div>
      </div>
    </section>
  );
}