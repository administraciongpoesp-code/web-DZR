import { cn } from "@/lib/utils";

// Mismo trazo del rayo que ya usa el logo de DZR (lucide "Zap", 24x24),
// reutilizado aquí como textura en vez de un ícono suelto.
const ZAP_PATH =
  "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z";

interface RayPatternProps {
  /** Único por instancia — el patrón SVG necesita un id sin colisiones en la página. */
  id: string;
  className?: string;
}

/**
 * Textura repetible de rayos para secciones de fondo claro: el mismo trazo
 * del logo DZR, en gris muy claro y baja opacidad, para que el blanco no se
 * vea tan plano sin competir con el contenido.
 *
 * Uso: colocar como primer hijo de un contenedor `relative overflow-hidden`,
 * y el contenido real encima con `relative z-10`.
 */
export function RayPattern({ id, className }: RayPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-dezara-mist/[0.07]", className)}
    >
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
          <path d={ZAP_PATH} fill="currentColor" transform="translate(24 26) scale(1.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
