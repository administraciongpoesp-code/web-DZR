import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "dark" | "light";
  showSlogan?: boolean;
}

/**
 * Wordmark de Dezara recreado en código (no hay vector disponible del logo
 * oficial). Reproduce fielmente el lockup del brochure: "DE" + rayo rojo +
 * "ZARA", con el slogan oficial debajo.
 */
export function Logo({ className, tone = "dark", showSlogan = false }: LogoProps) {
  const textColor = tone === "dark" ? "text-dezara-ink" : "text-white";
  return (
    <span className={cn("inline-flex flex-col leading-none select-none", className)}>
      <span className={cn("inline-flex items-center font-display text-2xl italic", textColor)}>
        DE
        <Zap className="h-6 w-5 -mx-0.5 fill-dezara-red text-dezara-red" strokeWidth={1} />
        ZARA
      </span>
      {showSlogan ? (
        <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-dezara-red">
          Vestimos tu pasión
        </span>
      ) : null}
    </span>
  );
}
