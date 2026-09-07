import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SPONSORED_TEAMS } from "@/lib/constants";

const GALLERY_SLOTS = [
  { label: "Vista frontal", src: "/images/uniformes/vista-frontal.webp" },
  { label: "Vista posterior", src: "/images/uniformes/vista-posterior.webp" },
  { label: "Detalle del escudo", src: "/images/uniformes/detalle-escudo.webp" },
  { label: "Detalle de la tela", src: "/images/uniformes/detalle-tela.webp" },
  { label: "Uniforme completo", src: "/images/uniformes/uniforme-completo.webp" },
  { label: "En cancha", src: "/images/uniformes/en-cancha.webp" },
] as const;

/**
 * Galería ampliada del uniforme de Alacranes de Durango. Usa la fotografía
 * real del jersey provista por el cliente (public/images/uniformes); si en
 * el futuro falta alguna vista, cae de nuevo en PlaceholderMedia en vez de
 * mostrar una imagen genérica.
 */
export function JerseyGallery() {
  return (
    <section className="bg-dezara-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SPONSORED_TEAMS.primary.name}
          title="Todos los ángulos del uniforme"
          description="Una galería completa del jersey oficial fabricado por DZR: vistas, detalles y acabados."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_SLOTS.map(({ label, src }) =>
            src ? (
              <div
                key={label}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/10 bg-dezara-black"
              >
                <Image
                  src={src}
                  alt={`Jersey oficial de ${SPONSORED_TEAMS.primary.name}, ${label.toLowerCase()}, fabricado por DZR`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : (
              <PlaceholderMedia key={label} label={label} tone="dark" className="aspect-[4/5]" />
            ),
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton message="jersey" label="Preguntar por el jersey de Alacranes" />
        </div>
      </div>
    </section>
  );
}
