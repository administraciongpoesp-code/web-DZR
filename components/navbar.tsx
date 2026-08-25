"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-dezara-black/95 backdrop-blur supports-[backdrop-filter]:bg-dezara-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Ir al inicio de Dezara" className="shrink-0">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide text-white/75 transition-colors hover:text-white",
                pathname === link.href && "text-dezara-red",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
