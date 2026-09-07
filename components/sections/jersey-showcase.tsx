"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Layers, ShieldCheck, Wind } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FABRIC, SPONSORED_TEAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type JerseyView = { id: "frontal" | "posterior"; label: string; src: string };

const VIEWS: readonly JerseyView[] = [
  { id: "frontal", label: "Vista frontal", src: "/images/uniformes/vista-frontal.webp" },
  { id: "posterior", label: "Vista posterior", src: "/images/uniformes/vista-posterior.webp" },
];

export function JerseyShowcase() {
  const [view, setView] = useState<JerseyView["id"]>("frontal");

  return (
    <section id="jersey-showcase" className="bg-dezara-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lanzamiento oficial"
          title="El nuevo uniforme de Alacranes de Durango"
          description="El jersey oficial fabricado por DZR para Alacranes de Durango, equipo de la Liga de Expansión MX. Diseño, confección y control de calidad, de principio a fin."
          tone="light"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 p-1">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setView(v.id)}
                  className={cn(
                    "rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-colors",
                    view === v.id ? "bg-dezara-red text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {(() => {
                    const currentView = VIEWS.find((v) => v.id === view)!;
                    return currentView.src ? (
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-dezara-black">
                        <Image
                          src={currentView.src}
                          alt={`Jersey oficial de ${SPONSORED_TEAMS.primary.name}, ${currentView.label.toLowerCase()}, fabricado por DZR`}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                          priority={currentView.id === "frontal"}
                        />
                      </div>
                    ) : (
                      <PlaceholderMedia
                        label={`Jersey Alacranes de Durango — ${currentView.label}`}
                        tone="dark"
                      />
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-white">Detalles del kit</h3>
              <p className="text-white/70">
                El uniforme completo de fútbol de DZR incluye playera, short y medias.{" "}
                <span className="text-white/40">
                  [Verificar con el cliente si el kit oficial de Alacranes conserva exactamente esta misma
                  composición.]
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-3 flex items-center gap-3">
                <Wind className="h-5 w-5 text-dezara-red" aria-hidden />
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                  Tela {FABRIC.name} — {FABRIC.composition}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{FABRIC.description}</p>
            </div>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-dezara-red" aria-hidden />
                Escudo de {SPONSORED_TEAMS.primary.name} bordado/estampado con acabado de competición.
              </li>
              <li className="flex items-start gap-3">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-dezara-red" aria-hidden />
                Costuras y acabados de confección propia, bajo el mismo control de calidad de todas las líneas
                DZR.
              </li>
            </ul>

            <WhatsAppButton message="jersey" label="Preguntar por el jersey de Alacranes" className="self-start" />
          </div>
        </div>
      </div>
    </section>
  );
}
