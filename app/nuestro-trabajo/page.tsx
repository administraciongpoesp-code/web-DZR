import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nuestro trabajo",
  description:
    "Conoce algunos de los trabajos y proyectos realizados por DZR.",
};

const WORK_IMAGES = [
  {
    src: "/images/alacranes/alacranes1.jpg",
    alt: "Trabajo de DZR para Alacranes de Durango",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/conjuntos_deportivos/conjunto2.jpg",
    alt: "Uniforme personalizado de Alacranes",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol3.jpg",
    alt: "Uniforme de básquetbol fabricado por DZR",
    category: "Básquetbol",
  },
  {
    src: "/images/futbol/futbol3.jpg",
    alt: "Uniforme de fútbol fabricado por DZR",
    category: "Fútbol",
  },
  {
    src: "/images/carreras/carreras1.jpg",
    alt: "Playera para carreras fabricada por DZR",
    category: "Carreras",
  },

  {
    src: "/images/alacranes/alacranes7.jpg",
    alt: "Trabajo realizado por DZR para Alacranes",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol8.jpg",
    alt: "Uniforme personalizado de fútbol DZR",
    category: "Fútbol",
  },
  {
    src: "/images/basquetbol/basquetbol5.jpg",
    alt: "Trabajo de DZR en básquetbol",
    category: "Básquetbol",
  },
  {
    src: "/images/alacranes/alacranes4.jpg",
    alt: "Uniforme de Alacranes fabricado por DZR",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/carreras/carreras5.jpg",
    alt: "Playera deportiva personalizada DZR",
    category: "Carreras",
  },
  {
    src: "/images/futbol/futbol5.jpg",
    alt: "Trabajo de DZR en uniformes deportivos",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes12.jpg",
    alt: "Uniforme personalizado DZR",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol6.jpg",
    alt: "Uniforme deportivo de básquetbol DZR",
    category: "Básquetbol",
  },

  {
    src: "/images/futbol/futbol14.jpg",
    alt: "Trabajo de confección DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes10.jpg",
    alt: "Uniforme de Alacranes de Durango",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/carreras/carreras2.jpg",
    alt: "Trabajo de DZR para carreras deportivas",
    category: "Carreras",
  },
  {
    src: "/images/futbol/futbol11.jpg",
    alt: "Uniforme de fútbol personalizado DZR",
    category: "Fútbol",
  },

  {
    src: "/images/alacranes/alacranes5.jpg",
    alt: "Trabajo deportivo de DZR",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol7.jpg",
    alt: "Trabajo personalizado de DZR",
    category: "Básquetbol",
  },
  {
    src: "/images/futbol/futbol19.jpg",
    alt: "Trabajo de DZR en ropa deportiva",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes15.jpg",
    alt: "Trabajo deportivo realizado por DZR",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/carreras/carreras6.jpg",
    alt: "Trabajo realizado por DZR para carreras",
    category: "Carreras",
  },
  {
    src: "/images/futbol/futbol6.jpg",
    alt: "Uniforme de fútbol DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes3.jpg",
    alt: "Trabajo de DZR para Alacranes de Durango",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol4.jpg",
    alt: "Uniforme personalizado de básquetbol DZR",
    category: "Básquetbol",
  },

  {
    src: "/images/alacranes/alacranes18.jpg",
    alt: "Uniforme deportivo de Alacranes",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol17.jpg",
    alt: "Uniforme de fútbol DZR",
    category: "Fútbol",
  },
  {
    src: "/images/carreras/carreras7.jpg",
    alt: "Playera personalizada para carrera deportiva",
    category: "Carreras",
  },
  {
    src: "/images/alacranes/alacranes8.jpg",
    alt: "Uniforme deportivo DZR para Alacranes",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/futbol/futbol10.jpg",
    alt: "Trabajo de DZR en uniformes deportivos",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes14.jpg",
    alt: "Uniforme de Alacranes fabricado por DZR",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol1.jpg",
    alt: "Uniforme de básquetbol fabricado por DZR",
    category: "Básquetbol",
  },
  {
    src: "/images/alacranes/alacranes20.jpg",
    alt: "Uniforme fabricado por DZR para Alacranes",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/futbol/futbol12.jpg",
    alt: "Trabajo realizado por DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes6.jpg",
    alt: "Uniforme de Alacranes de Durango",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol15.jpg",
    alt: "Uniforme personalizado fabricado por DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes16.jpg",
    alt: "Uniforme personalizado de Alacranes",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/conjuntos_deportivos/conjunto1.jpg",
    alt: "Uniforme personalizado de Alacranes",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/basquetbol/basquetbol2.jpg",
    alt: "Uniforme de básquetbol fabricado por DZR",
    category: "Básquetbol",
  },
  {
    src: "/images/futbol/futbol7.jpg",
    alt: "Trabajo de confección deportiva DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes2.jpg",
    alt: "Uniforme de Alacranes de Durango fabricado por DZR",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol18.jpg",
    alt: "Uniforme deportivo personalizado DZR",
    category: "Fútbol",
  },

  {
    src: "/images/alacranes/alacranes11.jpg",
    alt: "Trabajo deportivo fabricado por DZR",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol13.jpg",
    alt: "Uniforme deportivo DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes17.jpg",
    alt: "Trabajo realizado por DZR",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/futbol/futbol16.jpg",
    alt: "Trabajo deportivo realizado por DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes19.jpg",
    alt: "Trabajo de DZR para Alacranes de Durango",
    category: "Alacranes de Durango",
  },
  {
    src: "/images/futbol/futbol9.jpg",
    alt: "Uniforme deportivo personalizado por DZR",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes13.jpg",
    alt: "Trabajo de DZR para Alacranes de Durango",
    category: "Alacranes de Durango",
  },

  {
    src: "/images/futbol/futbol2.jpg",
    alt: "Trabajo de DZR en uniformes de fútbol",
    category: "Fútbol",
  },
  {
    src: "/images/alacranes/alacranes9.jpg",
    alt: "Trabajo de DZR para Alacranes",
    category: "Alacranes de Durango",
  },
];

export default function NuestroTrabajoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">

        {/* =========================================================
            ENCABEZADO
            ========================================================= */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dezara-red">
            DZR
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-[0.02em] sm:text-5xl md:text-6xl">
            Nuestro trabajo
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Conoce algunos de nuestros trabajos y proyectos realizados.
            <br/>  
            Diseño, fabricación y detalles que forman parte de cada prenda.
          </p>
        </div>

        {/* =========================================================
            COLLAGE
            ========================================================= */}
        <div className="columns-2 gap-2 sm:columns-3 lg:columns-4">
          {WORK_IMAGES.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative mb-2 break-inside-avoid overflow-hidden bg-zinc-900"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Oscurecimiento sutil */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

              {/* Categoría */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}