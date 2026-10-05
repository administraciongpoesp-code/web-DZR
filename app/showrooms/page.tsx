import type { Metadata } from "next";
import { ClipboardCheck, MapPin, Navigation, PackageCheck, Phone, Truck, type LucideIcon } from "lucide-react";

import { RayPattern } from "@/components/ray-pattern";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SHOWROOMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Showrooms",
  description:
    "Puntos de entrega, recolección y levantamiento de pedido de DZR en Durango. Encuentra el punto más cercano para tu uniforme.",
};

const SERVICE_ICONS: Record<(typeof SHOWROOMS)[number]["services"][number], LucideIcon> = {
  "Entrega": Truck,
  "Recolección": PackageCheck,
  "Levantamiento de pedido": ClipboardCheck,
};

export default function ShowroomsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-dezara-mist/15 bg-dezara-black pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Showrooms"
            title="Puntos de entrega y recolección en Durango"
            description="Conoce los puntos dentro de la ciudad donde puedes entregar, recoger o levantar tu pedido con DZR — para que acceder a tu uniforme sea siempre lo más cercano posible."
            tone="light"
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <RayPattern id="showrooms-pattern" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {SHOWROOMS.map((showroom) => {
              const mapQuery = encodeURIComponent(`${showroom.address.line1}, ${showroom.address.line2}`);
              const whatsappNumber = showroom.phone ? `52${showroom.phone.replace(/\s/g, "")}` : undefined;

              return (
                <div
                  key={showroom.slug}
                  className="overflow-hidden rounded-xl border border-dezara-mist/15 bg-white shadow-sm"
                >
                  <div className="aspect-[16/9] w-full bg-dezara-fog">
                    <iframe
                      title={`Ubicación de ${showroom.name}`}
                      src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-dezara-ink">{showroom.name}</h3>
                    <p className="mt-3 flex items-start gap-2 text-sm text-dezara-mist">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                      <span>
                        {showroom.address.line1}
                        <br />
                        {showroom.address.line2}
                      </span>
                    </p>

                    {showroom.phone ? (
                      <p className="mt-2 flex items-center gap-2 text-sm text-dezara-mist">
                        <Phone className="h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                        <a
                          href={`tel:+52${showroom.phone.replace(/\s/g, "")}`}
                          className="transition-colors hover:text-dezara-red"
                        >
                          {showroom.phone}
                        </a>
                      </p>
                    ) : null}

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {showroom.services.map((service) => {
                        const Icon = SERVICE_ICONS[service];
                        return (
                          <li
                            key={service}
                            className="flex items-center gap-1.5 rounded-full border border-dezara-mist/20 bg-dezara-fog px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-dezara-ink"
                          >
                            <Icon className="h-3.5 w-3.5 text-dezara-red" aria-hidden />
                            {service}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-dezara-mist/30 px-4 py-2 text-xs font-bold uppercase tracking-wide text-dezara-ink transition-colors hover:border-dezara-red hover:text-dezara-red"
                      >
                        <Navigation className="h-4 w-4" aria-hidden />
                        Cómo llegar
                      </a>
                      <WhatsAppButton
                        size="sm"
                        message="showroom"
                        label="Coordinar por WhatsApp"
                        phoneNumber={whatsappNumber}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
 
          </div>
        </div>
      </section>

      <section className="bg-dezara-black py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl uppercase sm:text-4xl">¿Dónde te queda mejor recibir tu pedido?</h2>
          <p className="mt-4 text-white/70">
            Cuéntanos tu ubicación y coordinamos contigo el punto de entrega, recolección o levantamiento más
            conveniente.
          </p>
          <WhatsAppButton size="lg" message="showroom" className="mt-8" />
        </div>
      </section>
    </div>
  );
}
