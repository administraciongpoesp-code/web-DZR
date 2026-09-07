import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { Logo } from "@/components/logo";
import { SPONSORED_TEAMS } from "@/lib/constants";

export function SponsorshipSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="DZR × Alacranes de Durango"
            title="Una alianza que viste con orgullo a Durango"
            description="DZR diseña, confecciona y entrega el uniforme oficial de Alacranes de Durango, equipo participante en la Liga de Expansión MX. Para DZR, esta alianza representa la oportunidad de mostrar, dentro y fuera de la cancha, la misma calidad de manufactura que ofrece a cada uno de sus clientes. Para Alacranes, es contar con un aliado local que entiende su identidad y responde con producción propia, hecha en Durango."
          />

          <div className="flex items-center justify-center gap-8 rounded-2xl border border-dezara-mist/20 bg-dezara-fog p-10 sm:p-14">
            <Logo className="scale-125" />
            <div className="h-16 w-px bg-dezara-mist/30" aria-hidden />
            <div className="flex h-24 w-24 items-center justify-center">
              <Image
                src={SPONSORED_TEAMS.primary.crest}
                alt={SPONSORED_TEAMS.primary.crestAlt}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
