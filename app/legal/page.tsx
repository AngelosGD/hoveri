import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Aviso legal · Hoveri",
  description: "Aviso legal del proyecto Hoveri.",
};

const SECTIONS = [
  {
    title: "Titularidad",
    body: "Hoveri es un proyecto de codigo abierto mantenido por AngelosDev. Este sitio tiene fines informativos y de distribucion de la libreria de iconos animados.",
  },
  {
    title: "Propiedad intelectual",
    body: "El diseño del sitio, los textos y los iconos originales pertenecen al proyecto Hoveri. Las marcas de terceros mencionadas pertenecen a sus respectivos titulares.",
  },
  {
    title: "Uso correcto",
    body: "No puedes usar el nombre Hoveri ni su identidad visual de forma que confunda a los usuarios sobre el origen oficial del proyecto.",
  },
  {
    title: "Enlaces externos",
    body: "El sitio puede contener enlaces a servicios de terceros. No controlamos su contenido ni somos responsables de sus politicas.",
  },
  {
    title: "Contacto legal",
    body: "Cualquier consulta legal puede dirigirse a angelde9919@gmail.com.",
  },
];

export default function AvisoLegal() {
  return (
    <LegalPage
      kicker="Oficial"
      title="Aviso"
      accent="legal."
      intro="Informacion legal sobre el proyecto Hoveri, su titularidad y las condiciones de uso del sitio."
      updated="Ultima actualizacion · Septiembre 2026"
      sections={SECTIONS}
    />
  );
}
