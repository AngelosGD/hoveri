import type { Metadata } from "next";
import IconLibrary from "@/components/icon-library";

export const metadata: Metadata = {
  title: "Iconos - hoveri",
  description: "Todos los iconos animados de la librería hoveri.",
};

export default function IconsPage() {
  return <IconLibrary />;
}