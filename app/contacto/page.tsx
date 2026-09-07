import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SocialLinks } from "@/components/social-links";
import { CONTACT, SOCIAL, buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cotiza tu uniforme con DZR: WhatsApp, correo, formulario de contacto y ubicación en Durango, México.",
};

const mapQuery = encodeURIComponent(
  `${CONTACT.addressPrimary.line1}, ${CONTACT.addressPrimary.line2}`,
);

export default function ContactoPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-dezara-mist/15 bg-dezara-black pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contacto"
            title="Coticemos tu uniforme"
            description="Cuéntanos qué necesitas y te respondemos por correo o WhatsApp. También puedes escribirnos directamente."
            tone="light"
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-dezara-ink">Formulario</h2>
            <ContactForm />
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-dezara-ink">
                Contacto directo
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-dezara-red" aria-hidden />
                  <div>
                    <a
                      href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-dezara-ink hover:text-dezara-red"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                    <p className="text-sm text-dezara-mist">WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-dezara-red" aria-hidden />
                  <div>
                    <a href={`mailto:${CONTACT.email}`} className="font-medium text-dezara-ink hover:text-dezara-red">
                      {CONTACT.email}
                    </a>
                    <p className="text-sm text-dezara-mist">Correo electrónico</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-dezara-red" aria-hidden />
                  <div>
                    <p className="font-medium text-dezara-ink">
                      {CONTACT.addressPrimary.line1}
                      <br />
                      {CONTACT.addressPrimary.line2}
                    </p>
                    <p className="text-sm text-dezara-mist">Oficina y planta — Durango, Dgo.</p>
                  </div>
                </li>
                {!CONTACT.addressSecondary.verified ? (
                  <li className="flex items-start gap-3 opacity-60">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-dezara-mist" aria-hidden />
                    <div>
                      <p className="font-medium text-dezara-ink">
                        {CONTACT.addressSecondary.line1}
                        <br />
                        {CONTACT.addressSecondary.line2}
                      </p>
                      <p className="text-sm text-dezara-mist">
                        [Dirección secundaria del brochure — vigencia sin confirmar]
                      </p>
                    </div>
                  </li>
                ) : null}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton />
                <SocialLinks tone="dark" />
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-dezara-mist/15">
              <iframe
                title="Ubicación de DZR en Durango, México"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
