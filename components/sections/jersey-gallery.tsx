import { SectionHeading } from "@/components/section-heading";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SPONSORED_TEAMS } from "@/lib/constants";

const GALLERY_SLOTS = [
  "Vista frontal",
  "Vista posterior",
  "Detalle del escudo",
  "Detalle de la tela",
  "Uniforme completo",
  "En cancha",
] as const;

/**
 * Galería ampliada del uniforme de Alacranes de Durango. No existe todavía
 * fotografía real del jersey (ni en el brochure ni en el sitio anterior de
 * Dezara) — los 6 espacios quedan marcados y listos para recibir las fotos
 * oficiales en cuanto el cliente las proporcione. Ver PlaceholderMedia.
 */
export function JerseyGallery() {
  return (
    <section className="bg-dezara-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={SPONSORED_TEAMS.primary.name}
          title="Todos los ángulos del uniforme"
          description="Una galería completa del jersey oficial fabricado por Dezara: vistas, detalles y acabados."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_SLOTS.map((label) => (
            <PlaceholderMedia key={label} label={label} tone="dark" className="aspect-[4/5]" />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton message="jersey" label="Preguntar por el jersey de Alacranes" />
        </div>
      </div>
    </section>
  );
}
