import { InstagramIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { SOCIAL } from "@/lib/constants";

export function SocialSection() {
  return (
    <section className="bg-dezara-fog py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center shadow-sm sm:p-16">
          <InstagramIcon className="h-10 w-10 text-dezara-red" />
          <SectionHeading
            align="center"
            title="Síguenos"
            description={`Fotos de producción, uniformes entregados y novedades de la alianza con Alacranes de Durango, en ${SOCIAL.instagram.label}.`}
          />
          <SocialLinks tone="dark" />
        </div>
      </div>
    </section>
  );
}
