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

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
