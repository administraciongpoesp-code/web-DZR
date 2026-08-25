"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const textColor = tone === "dark" ? "text-dezara-ink" : "text-white";
  const descColor = tone === "dark" ? "text-dezara-mist" : "text-white/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-dezara-red">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("text-balance text-3xl uppercase sm:text-4xl md:text-5xl", textColor)}>{title}</h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", descColor)}>{description}</p>
      ) : null}
    </motion.div>
  );
}
