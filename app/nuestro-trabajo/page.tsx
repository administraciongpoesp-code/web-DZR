import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro trabajo",
  description:
    "Conoce algunos de los trabajos y proyectos realizados por DZR.",
};

export default function NuestroTrabajoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dezara-red">
            DZR
          </p>

          <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Nuestro trabajo
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Conoce algunos de nuestros trabajos y proyectos realizados.
          </p>
        </div>
      </section>
    </main>
  );
}