"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Disc,
  Footprints,
  Goal,
  Route,
  Shirt,
  X,
  type LucideIcon,
} from "lucide-react";

import { PlaceholderMedia } from "@/components/placeholder-media";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { OUR_PRODUCTS } from "@/lib/constants";

const ICONS: Record<(typeof OUR_PRODUCTS)[number]["slug"], LucideIcon> = {
  futbol: Goal,
  basquetbol: Disc,
  rutas: Route,
  carreras: Footprints,
  "conjunto-deportivo": Shirt,
};

export function OurProducts() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openProduct =
    OUR_PRODUCTS.find((product) => product.slug === openSlug) ?? null;

  useEffect(() => {
    if (!openProduct) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSlug(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openProduct]);

  return (
    <section
      id="productos"
      className="relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        {/* Encabezado */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
              <span className="h-px w-9 bg-red-600" />
              Catálogo
            </p>

            <h2 className="text-balance text-4xl font-black uppercase leading-[1.12] sm:text-5xl lg:text-6xl">
              Nuestros <span className="text-red-600">productos</span>
            </h2>
          </div>

          <Link
            href="/uniformes"
            className="group inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-red-600 hover:text-white sm:text-xs"
          >
            Ver todos los uniformes
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Tarjetas de productos */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {OUR_PRODUCTS.map((product, index) => {
            const Icon = ICONS[product.slug];
            const cover = product.images[0];

            return (
              <motion.button
                key={product.slug}
                type="button"
                onClick={() => setOpenSlug(product.slug)}
                aria-haspopup="dialog"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative flex aspect-[4/5] min-w-0 flex-col justify-end overflow-hidden border border-white/10 bg-neutral-900 text-left transition-colors hover:border-red-600/70"
              >
                {cover ? (
                  <Image
                    src={cover.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      className="h-12 w-12 text-white/20"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center border border-white/25 bg-black/40 text-[9px] font-bold text-white backdrop-blur-sm sm:left-4 sm:top-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 p-3 sm:p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center border border-red-600/60 bg-black/50 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white sm:h-9 sm:w-9">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <h3 className="text-[11px] font-black uppercase leading-snug text-white sm:text-sm">
                    {product.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-white/50 transition-colors group-hover:text-red-400 sm:text-[9px]">
                    Ver galería
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </motion.button>
            );
          })}

          <Link
            href="/uniformes"
            className="group flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-white/25 bg-white/[0.025] px-3 text-center transition-colors hover:border-red-600 hover:bg-red-600/5"
          >
            <div className="flex h-12 w-12 items-center justify-center border border-white/20 transition-colors group-hover:border-red-600 group-hover:bg-red-600">
              <ArrowUpRight className="h-5 w-5" />
            </div>
            <span className="mt-4 text-xs font-black uppercase tracking-wide">
              Y más
            </span>
          </Link>
        </div>
      </div>

      {/* Galería emergente */}
      <AnimatePresence>
        {openProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Ejemplos de ${openProduct.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
            onClick={() => setOpenSlug(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto border border-white/15 bg-neutral-950 p-5 text-white shadow-2xl sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5 sm:mb-8">
                <div>
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-red-500">
                    Catálogo DZR
                  </p>
                  <h3 className="text-2xl font-black uppercase sm:text-3xl">
                    {openProduct.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenSlug(null)}
                  aria-label="Cerrar galería"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {openProduct.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {openProduct.images.map((image, index) => (
                    <div
                      key={image.src}
                      className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-neutral-900"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 30vw, 45vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-5">
                  <PlaceholderMedia
                    label={`Ejemplo de ${openProduct.title}`}
                    tone="light"
                    className="aspect-video"
                  />

                  <p className="max-w-2xl text-sm leading-7 text-white/60">
                    Aún no tenemos fotografía propia de esta línea publicada.
                    Escríbenos y con gusto te mostramos ejemplos reales.
                  </p>

                  <WhatsAppButton
                    size="sm"
                    message="uniformes"
                    label={`Preguntar por ${openProduct.title.toLowerCase()}`}
                  />
                </div>
              )}

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  DZR · Diseño y fabricación de uniformes
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}