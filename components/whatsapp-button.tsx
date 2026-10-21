"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends Pick<ButtonProps, "variant" | "size" | "className"> {
  message?: keyof typeof WHATSAPP_MESSAGES;
  label?: string;
  /** Número en formato E.164 sin "+" (ej. "526188129511"). Por defecto, el de DZR. */
  phoneNumber?: string;
}

export function WhatsAppButton({
  message = "general",
  label = "Cotizar por WhatsApp",
  variant = "whatsapp",
  size = "default",
  className,
  phoneNumber,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES[message], phoneNumber)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}

/** Botón flotante persistente para mobile/desktop, con entrada animada sutil. */
export function FloatingWhatsAppButton() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setHasScrolled(window.scrollY > 120);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <motion.a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      initial={false}
      animate={
        hasScrolled
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.6, y: 12, pointerEvents: "none" }
      }
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20",
        "md:hidden",
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
}
