import type { Metadata } from "next";
import IconCard from "@/components/icon-card";
import { getIconCount, ICON_LIST } from "@/icons/data";

export const metadata: Metadata = {
  title: "Iconos - hoveri",
  description: "Todos los iconos animados de la librería hoveri.",
};

export default function IconsPage() {
  const iconCount = getIconCount();

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl">
            Librería de iconos
          </h1>
          <p className="mt-3 max-w-lg text-base leading-7 text-zinc-600">
            {iconCount} iconos animados y prontos para usar. Pasa el mouse por
            cada uno para ver su movimiento.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {ICON_LIST.map((icon) => (
              <IconCard key={icon.file} file={icon.file} name={icon.name} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}