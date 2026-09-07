import type { ReactNode } from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function CTAButton({ href, children, variant = "primary", size = "default", className }: CTAButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  // Ancla dentro de la misma página (ej. "#jersey-showcase"): se usa un <a>
  // nativo en vez de <Link>, que solo hace scroll-to-hash cuando la URL
  // cambia. Con <Link>, si ya se navegó una vez a ese hash, un segundo click
  // no vuelve a hacer scroll porque la URL no cambia.
  const isHashLink = href.startsWith("#");

  if (isExternal || isHashLink) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}
