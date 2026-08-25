import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  tone?: "dark" | "light";
}

export function SocialLinks({ className, tone = "light" }: SocialLinksProps) {
  const base =
    tone === "light"
      ? "border-white/20 text-white hover:bg-white hover:text-dezara-black"
      : "border-dezara-black/20 text-dezara-black hover:bg-dezara-black hover:text-white";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={SOCIAL.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Facebook de Dezara: ${SOCIAL.facebook.label}`}
        className={cn("flex h-11 w-11 items-center justify-center rounded-full border transition-colors", base)}
      >
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a
        href={SOCIAL.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram de Dezara: ${SOCIAL.instagram.label}`}
        className={cn("flex h-11 w-11 items-center justify-center rounded-full border transition-colors", base)}
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
