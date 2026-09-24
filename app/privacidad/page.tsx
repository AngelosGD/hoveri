import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Privacidad · Hoveri",
  description: "Como Hoveri maneja tu informacion, en palabras simples.",
};

const SECTIONS = [
  {
    title: "Que recopilamos",
    body: "Hoveri no requiere cuenta para navegar la libreria ni usar los ejemplos de codigo. Si nos contactas, recibimos la informacion que decides incluir en tu mensaje, como tu nombre y correo electronico.",
  },
  {
    title: "Como lo usamos",
    body: "Usamos los mensajes unicamente para responder, mejorar la libreria y entender que iconos son utiles. No vendemos informacion personal ni la usamos para publicidad no relacionada.",
  },
  {
    title: "Terceros",
    body: "No vendemos ni compartimos tu informacion con terceros para marketing. Si usamos servicios de infraestructura (por ejemplo hosting o email transaccional), solo reciben los datos minimos para funcionar.",
  },
  {
    title: "Cookies",
    body: "El sitio puede usar cookies tecnicas necesarias para su funcionamiento. No usamos cookies de terceros para rastrearte ni para publicidad comportamental.",
  },
  {
    title: "Tus derechos",
    body: "Puedes pedir acceso, correccion o eliminacion de tus datos escribiendonos. Responderemos en un plazo razonable.",
  },
  {
    title: "Contacto",
    body: "Si tienes dudas sobre esta politica, escribenos a angelde9919@gmail.com y con gusto te ayudamos.",
  },
];

export default function Privacidad() {
  return (
    <LegalPage
      kicker="La letra pequena"
      title="Privacidad,"
      accent="hecha simple."
      intro="Creemos que las politicas de privacidad deben ser legibles. Aqui va la version corta de como Hoveri maneja la informacion."
      updated="Ultima actualizacion · Septiembre 2026"
      sections={SECTIONS}
    />
  );
}
