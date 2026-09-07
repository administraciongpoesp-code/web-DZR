"use client";

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
  return (
    <motion.a
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20",
        "md:bottom-8 md:right-8",
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
}
