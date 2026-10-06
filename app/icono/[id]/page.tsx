import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { IconDetailPage } from "@/components/pages/IconDetailPage";
import { ICON_LIST } from "@/icons/library";

const findIcon = (id: string) => ICON_LIST.find((i) => i.id === id);

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const icon = findIcon(id);
  if (!icon) return { title: "Icono no encontrado · Hoveri" };
  return {
    title: `${icon.name} · Hoveri`,
    description: `Preview y codigo del icono animado ${icon.name} de la libreria Hoveri.`,
  };
}

export default async function IconoPage({ params }: Params) {
  const { id } = await params;
  const icon = findIcon(id);
  if (!icon) notFound();

  const source = await readFile(
    path.join(process.cwd(), "icons", `${icon.fileName}.tsx`),
    "utf8",
  );

  const meta = {
    id: icon.id,
    num: icon.num,
    name: icon.name,
    category: icon.category,
    fileName: icon.fileName,
    componentName: icon.componentName,
    baseDuration: icon.baseDuration,
  };

  return <IconDetailPage meta={meta} source={source} />;
}
