import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Terminos y condiciones · Hoveri",
  description: "Condiciones de uso de la libreria Hoveri.",
};

const SECTIONS = [
  {
    title: "Uso de la libreria",
    body: "Hoveri te da una licencia limitada, no exclusiva y sin costo para usar, copiar y modificar los iconos animados en proyectos personales y comerciales, siempre que no revendas la libreria tal cual.",
  },
  {
    title: "Atribucion",
    body: "No es obligatorio pero se agradece mencionar Hoveri. Si publicas una version modificada de los iconos, no hagas pasar ese trabajo como el proyecto oficial.",
  },
  {
    title: "Contribuciones y sugerencias",
    body: "Al sugerir un icono nos das permiso para usar esa idea dentro de la libreria. No transferimos la propiedad de tu mensaje a terceros.",
  },
  {
    title: "Limitacion de responsabilidad",
    body: "La libreria se ofrece tal cual, sin garantias de ningun tipo. No somos responsables de danos derivados del uso o la imposibilidad de uso del proyecto.",
  },
  {
    title: "Cambios",
    body: "Podemos actualizar estos terminos. Los cambios importantes se reflejaran en la fecha de ultima actualizacion de esta pagina.",
  },
  {
    title: "Contacto",
    body: "Dudas sobre estos terminos: angelde9919@gmail.com.",
  },
];

export default function Terminos() {
  return (
    <LegalPage
      kicker="Las reglas"
      title="Terminos,"
      accent="sin letra chica."
      intro="Condiciones claras para usar Hoveri en tus proyectos. Escrito para que se entienda a la primera."
      updated="Ultima actualizacion · Septiembre 2026"
      sections={SECTIONS}
    />
  );
}
