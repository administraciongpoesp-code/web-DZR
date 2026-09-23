import type { Metadata } from "next";
import { Handshake, Layers, Palette, ShieldCheck, Sparkles } from "lucide-react";

import { RayPattern } from "@/components/ray-pattern";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { OurProducts } from "@/components/sections/our-products";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Asesoría de diseño, confección personalizada, bordado, sublimación y DTF, alianzas con marcas líderes y control de calidad. Conoce los servicios de DZR.",
};

const SERVICES = [
  {
    icon: Palette,
    title: "Asesoría de diseño",
    description:
      "Asesoría de diseño para la fabricación y elaboración de prendas personalizadas, con el fin de satisfacer las necesidades específicas de cada cliente.",
  },
  {
    icon: Layers,
    title: "Experiencia completa",
    description: "Otorgamos al cliente una experiencia completa desde el diseño, la confección y la venta.",
  },
  {
    icon: Sparkles,
    title: "Personalización",
    description: "Bordado de alta calidad, sublimación de alta calidad y DTF para dar identidad a cada prenda.",
  },
  {
    icon: Handshake,
    title: "Alianzas comerciales",
    description:
      "Contamos con alianzas comerciales con diversas marcas importantes y de prestigio, nacional e internacional, para complementar nuestro servicio.",
  },
  {
    icon: ShieldCheck,
    title: "Control de calidad y postventa",
    description: "Producimos bajo control de calidad y damos servicio postventa para un mejor servicio.",
  },
] as const;

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-dezara-mist/15 bg-dezara-black pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Del diseño a la entrega"
            description="DZR ofrece un servicio integral: asesoría, diseño, confección, personalización y control de calidad, respaldado por alianzas con marcas de prestigio."
            tone="light"
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <RayPattern id="servicios-grid-pattern" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-xl border border-dezara-mist/15 bg-white p-8 shadow-sm">
                <service.icon className="h-8 w-8 text-dezara-red" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-bold uppercase tracking-wide text-dezara-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dezara-mist">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurProducts />

      <section className="bg-dezara-red py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl uppercase sm:text-4xl">¿Tienes un proyecto en mente?</h2>
          <p className="mt-4 text-white/80">Cuéntanos qué necesitas y te ayudamos a diseñarlo, confeccionarlo y entregarlo.</p>
          <WhatsAppButton size="lg" variant="outline" className="mt-8" />
        </div>
      </section>
    </div>
  );
}
