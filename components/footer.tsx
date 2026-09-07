import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { CONTACT, NAV_LINKS, SITE, buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dezara-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo showSlogan />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
            <SocialLinks className="mt-6" tone="light" />
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.08em] text-white">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.08em] text-white">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                <a href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dezara-red" aria-hidden />
                <span>
                  {CONTACT.addressPrimary.line1}, {CONTACT.addressPrimary.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} DZR. Todos los derechos reservados.</p>
          <p>{SITE.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
