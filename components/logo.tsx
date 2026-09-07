import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
}

// Relación de aspecto real del archivo oficial (3642x1370).
const LOGO_ASPECT_RATIO = 3642 / 1370;

/**
 * Wordmark oficial de DZR, logo-dzr-red.png — versión en rojo de
 * marca (misma silueta que logo-dzr.png, recoloreada a partir de su canal
 * alfa) para que destaque tanto sobre fondos oscuros (Navbar/Footer) como
 * claros (sponsorship-section).
 */
export function Logo({ className, showSlogan = false }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col leading-none select-none", className)}>
      <span className="relative h-8 sm:h-9" style={{ aspectRatio: LOGO_ASPECT_RATIO }}>
        <Image
          src="/images/placeholders/logo-dzr-red.png"
          alt="DZR"
          fill
          priority
          sizes="200px"
          className="object-contain object-left"
        />
      </span>
      {showSlogan ? (
        <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-dezara-red">
          Vestimos tu pasión
        </span>
      ) : null}
    </span>
  );
}
