import { SectionHeading } from "@/components/section-heading";
import { UniformGallery } from "@/components/uniform-gallery";
import { CTAButton } from "@/components/cta-button";

export function UniformPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Qué fabricamos"
            title="Uniformes para cada industria"
            description="De la cancha a la línea de producción: deportivos, industriales, médicos y corporativos, todos con el mismo estándar de diseño y confección."
          />
          <CTAButton href="/uniformes" variant="secondary" className="shrink-0">
            Ver todas las líneas
          </CTAButton>
        </div>

        <div className="mt-14">
          <UniformGallery />
        </div>
      </div>
    </section>
  );
}
