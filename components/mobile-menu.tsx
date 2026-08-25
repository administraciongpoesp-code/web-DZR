"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-t border-white/10 bg-dezara-black md:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "rounded-md px-3 py-3 text-lg font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/5 hover:text-white",
                  pathname === link.href && "text-dezara-red",
                )}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-4 w-full justify-center" />
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
