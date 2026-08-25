import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderMediaProps {
  label: string;
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Marcador visual explícito para material fotográfico pendiente (ej. el
 * jersey real de Alacranes de Durango). Nunca debe sustituirse por una
 * imagen de stock/mockup genérica haciéndola pasar por el producto real —
 * ver CLAUDE.md §3 y §5.
 */
export function PlaceholderMedia({ label, className, tone = "dark" }: PlaceholderMediaProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — fotografía pendiente de confirmar con el cliente`}
      className={cn(
        "relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border-2 border-dashed p-8 text-center",
        tone === "dark"
          ? "border-white/20 bg-dezara-black text-white/70"
          : "border-dezara-mist/40 bg-dezara-fog text-dezara-mist",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 12px)",
        }}
        aria-hidden
      />
      <ImageOff className="h-10 w-10 shrink-0" aria-hidden />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-dezara-red">Foto pendiente</p>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
}
