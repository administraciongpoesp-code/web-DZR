import { CTAButton } from "@/components/cta-button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function FinalCta() {
  return (
    <section className="bg-dezara-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl uppercase sm:text-4xl md:text-5xl">
          ¿Listo para vestir a tu equipo o empresa?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-white/70">
          Cotiza tu uniforme deportivo, industrial, médico o corporativo con Dezara. Diseño, confección y control
          de calidad de principio a fin.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton size="lg" />
          <CTAButton href="/contacto" variant="outline" size="lg">
            Ir al formulario
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
