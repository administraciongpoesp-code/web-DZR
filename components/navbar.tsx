
"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-white/10 bg-black/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-black/20",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-14">
        <Link
          href="/"
          aria-label="Ir al inicio de DZR"
          className="relative z-10 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] text-white/65 transition-colors hover:text-white xl:text-xs",
                pathname === link.href && "text-red-500",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <WhatsAppButton size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/5 text-white transition-colors hover:border-red-600 hover:bg-red-600 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
