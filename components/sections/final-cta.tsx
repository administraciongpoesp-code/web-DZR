import { CTAButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FinalCta() {
  return (
    <section className="bg-dezara-red py-24 text-white sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl uppercase sm:text-4xl md:text-5xl">
          ¿Quieres un uniforme con la misma calidad que el de Alacranes de Durango?
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contacto" variant="primary" size="lg" className="bg-dezara-black text-white hover:bg-black/85">
            Cotiza tu uniforme
          </CTAButton>
          <WhatsAppButton size="lg" label="Escríbenos por WhatsApp" variant="outline" />
        </div>
      </div>
    </section>
  );
}
