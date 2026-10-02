import Image from "next/image";

import { Logo } from "@/components/logo";
import { RayPattern } from "@/components/ray-pattern";
import { SectionHeading } from "@/components/section-heading";
import { SPONSORED_TEAMS } from "@/lib/constants";

export function SponsorshipSection() {
  return (
    <section
      id="sponsorship-section"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <RayPattern id="sponsorship-pattern" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="DZR × Alacranes de Durango"
            title="Una alianza que viste con orgullo a Durango"
            description="DZR diseña y confecciona el uniforme oficial de Alacranes de Durango, equipo participante en la Liga de Expansión MX. 
            Para DZR, esta alianza representa la oportunidad de mostrar una vez más, el compromiso y la calidad que siempre ha ofrecido a cada uno de sus clientes.
            Nos sentimos orgullos de vestir a los Alacranes de Durango."
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
