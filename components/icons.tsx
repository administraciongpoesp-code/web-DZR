import type { SVGProps } from "react";

/**
 * lucide-react ya no incluye íconos de marca (Facebook, Instagram, etc.).
 * Se recrean aquí como SVG minimalistas para los enlaces de redes sociales.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.8h2.6l.4-3h-3v-1.93c0-.87.24-1.46 1.5-1.46h1.6V4.14C15.9 4.1 15.03 4 14 4c-2.15 0-3.62 1.31-3.62 3.72V10.2H7.8v3h2.58V21h3.12Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
