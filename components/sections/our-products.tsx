"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Disc, Footprints, Goal, Route, Shirt, X, type LucideIcon } from "lucide-react";

import { PlaceholderMedia } from "@/components/placeholder-media";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { OUR_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<(typeof OUR_PRODUCTS)[number]["slug"], LucideIcon> = {
  futbol: Goal,
  basquetbol: Disc,
  rutas: Route,
  carreras: Footprints,
  "conjunto-deportivo": Shirt,
};

/**
 * "Nuestros productos" — reemplaza el bloque de marcas distribuidas por un
 * grid de tarjetas de las líneas deportivas que fabrica DZR. Cada tarjeta
 * abre una mini galería con ejemplos reales; las líneas sin fotografía
 * propia todavía muestran PlaceholderMedia en vez de una imagen inventada.
 */
export function OurProducts() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProduct = OUR_PRODUCTS.find((product) => product.slug === openSlug) ?? null;

  useEffect(() => {
    if (!openProduct) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSlug(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openProduct]);

  return (
    <section className="bg-dezara-fog py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Catálogo" title="Nuestros productos" align="left" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {OUR_PRODUCTS.map((product) => {
            const Icon = ICONS[product.slug];
            const cover = product.images[0];

            return (
              <button
                key={product.slug}
                type="button"
                onClick={() => setOpenSlug(product.slug)}
                aria-haspopup="dialog"
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg border border-dezara-mist/20 bg-white text-left shadow-sm transition-shadow hover:shadow-md"
              >
                {cover ? (
                  <Image
                    src={cover.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 16vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Icon className="absolute inset-0 m-auto h-9 w-9 text-dezara-mist/30" aria-hidden />
                )}
                <div
                  className={cn(
                    "relative z-10 flex items-center gap-2 p-3",
                    cover
                      ? "bg-gradient-to-t from-black/80 via-black/10 to-transparent text-white"
                      : "text-dezara-ink",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="text-xs font-bold uppercase tracking-wide sm:text-sm">{product.title}</span>
                </div>
              </button>
            );
          })}

          <Link
            href="/uniformes"
            className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-dezara-mist/30 bg-white text-dezara-ink transition-colors hover:border-dezara-red hover:text-dezara-red"
          >
            <ArrowUpRight className="h-6 w-6" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-wide sm:text-sm">Y más</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {openProduct ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Ejemplos de ${openProduct.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpenSlug(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-dezara-ink">{openProduct.title}</h3>
                <button
                  type="button"
                  onClick={() => setOpenSlug(null)}
                  aria-label="Cerrar galería"
                  className="shrink-0 rounded-full p-2 text-dezara-mist transition-colors hover:bg-dezara-fog hover:text-dezara-ink"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              {openProduct.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {openProduct.images.map((image) => (
                    <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-dezara-fog">
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 33vw, 50vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <PlaceholderMedia
                    label={`Ejemplo de ${openProduct.title}`}
                    tone="light"
                    className="aspect-video"
                  />
                  <p className="text-sm text-dezara-mist">
                    Aún no tenemos fotografía propia de esta línea publicada. Escríbenos y con gusto te mostramos
                    ejemplos reales.
                  </p>
                  <WhatsAppButton
                    size="sm"
                    message="uniformes"
                    label={`Preguntar por ${openProduct.title.toLowerCase()}`}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
