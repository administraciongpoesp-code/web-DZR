import { ArrowUpRight } from "lucide-react";

import { InstagramIcon } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";
import { SOCIAL } from "@/lib/constants";

export function SocialSection() {
  return (
    <section
      id="redes-sociales"
      className="relative isolate overflow-hidden bg-neutral-950 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-red-700/15 blur-[110px]"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-1 w-24 bg-red-600 sm:w-36"
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <div className="mb-7 flex h-14 w-14 items-center justify-center border border-red-600/50 bg-red-600/10">
                <InstagramIcon className="h-7 w-7 text-red-500" />
              </div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
                DZR en redes
              </p>

              <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.98] tracking-[0.02em] sm:text-5xl lg:text-6xl">
                Síguenos
                <span className="text-red-600">.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Fotos de producción, uniformes entregados y novedades de la
                alianza con Alacranes de Durango, en {SOCIAL.instagram.label}.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:min-w-[250px] lg:items-end">
              <ArrowUpRight
                className="hidden h-8 w-8 text-red-500 lg:block"
                aria-hidden="true"
              />

              <SocialLinks tone="light" />

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                DZR · Durango, México
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 sm:mt-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
              Diseño · Confección · Calidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}