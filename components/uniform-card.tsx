"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shirt } from "lucide-react";

import { buildWhatsAppLink, WHATSAPP_MESSAGES, PRODUCT_LINES } from "@/lib/constants";

type ProductLine = (typeof PRODUCT_LINES)[number];

interface UniformCardProps {
  line: ProductLine;
  index?: number;
}

export function UniformCard({ line, index = 0 }: UniformCardProps) {
  const image = "image" in line ? line.image : undefined;
  const imageAlt = "imageAlt" in line ? line.imageAlt : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-dezara-mist/15 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <Link href={`/uniformes#${line.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-dezara-fog">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? line.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-dezara-mist">
            <Shirt className="h-12 w-12" aria-hidden />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold uppercase tracking-wide text-dezara-ink">
          <Link href={`/uniformes#${line.slug}`} className="hover:text-dezara-red">
            {line.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-dezara-mist">{line.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {line.items.slice(0, 4).map((item) => (
            <li
              key={item}
              className="rounded-full bg-dezara-fog px-3 py-1 text-xs font-medium text-dezara-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href={buildWhatsAppLink(WHATSAPP_MESSAGES.uniformes)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-dezara-red hover:text-dezara-red-dark"
        >
          Solicitar cotización
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>
      </div>
    </motion.div>
  );
}
