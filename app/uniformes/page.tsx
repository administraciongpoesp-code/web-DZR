import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { MEDICAL_FABRICS, PRODUCT_LINES, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Uniformes",
  description:
    "Uniformes deportivos, industriales, médicos y corporativos fabricados por Dezara en Durango. Diseño, confección y control de calidad a la medida de cada cliente.",
};

export default function UniformesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-dezara-mist/15 bg-dezara-black py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catálogo"
            title="Uniformes para cada necesidad"
            description="Cuatro líneas de producto, un mismo estándar de diseño y confección: deportivos, industriales, médicos y corporativos."
            tone="light"
          />
        </div>
      </section>

      {PRODUCT_LINES.map((line, index) => {
        const image = "image" in line ? line.image : undefined;
        const imageAlt = "imageAlt" in line ? line.imageAlt : undefined;
        const reversed = index % 2 === 1;

        return (
          <section
            key={line.slug}
            id={line.slug}
            className={cn("scroll-mt-24 py-20 sm:py-24", index % 2 === 0 ? "bg-white" : "bg-dezara-fog")}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={cn(reversed && "lg:order-2")}>
                  {image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={imageAlt ?? line.title}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderMedia label={`Línea ${line.title}`} tone="light" className="aspect-[4/3]" />
                  )}
                </div>

                <div className={cn(reversed && "lg:order-1")}>
                  <h2 className="text-3xl uppercase text-dezara-ink sm:text-4xl">{line.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-dezara-mist">{line.description}</p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                    {line.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-dezara-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {line.slug === "medicos" ? (
                    <div className="mt-8 overflow-x-auto rounded-lg border border-dezara-mist/20">
                      <table className="w-full min-w-[320px] text-left text-sm">
                        <caption className="sr-only">Composición de telas para el área de salud</caption>
                        <thead className="bg-dezara-fog text-xs uppercase tracking-wide text-dezara-mist">
                          <tr>
                            <th scope="col" className="px-4 py-3">
                              Tela
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Composición
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {MEDICAL_FABRICS.map((fabric, i) => (
                            <tr key={`${fabric.name}-${i}`} className="border-t border-dezara-mist/10">
                              <td className="px-4 py-3 font-medium text-dezara-ink">{fabric.name}</td>
                              <td className="px-4 py-3 text-dezara-mist">{fabric.composition}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  <WhatsAppButton message="uniformes" label="Solicitar cotización" className="mt-8" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
