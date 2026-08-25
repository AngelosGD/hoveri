import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      nombre?: string;
      idea?: string;
      motion?: string;
      categoria?: string;
    };

    const nombre = (body.nombre ?? "").trim();
    const idea = (body.idea ?? "").trim();
    const motion = (body.motion ?? "").trim();
    const categoria = (body.categoria ?? "").trim();

    if (!nombre || !idea) {
      return NextResponse.json(
        { error: "Faltan el nombre del icono o la descripción." },
        { status: 400 },
      );
    }

    if (!CONTACT_EMAIL) {
      return NextResponse.json(
        { error: "Email de contacto no configurado." },
        { status: 500 },
      );
    }

    const text =
      `Nombre del icono: ${nombre}\n` +
      `Qué representa / idea: ${idea}\n` +
      (motion ? `Movimiento sugerido: ${motion}\n` : "") +
      (categoria ? `Categoría sugerida: ${categoria}\n` : "");

    const { error } = await resend.emails.send({
      from: "hoveri <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      subject: `[hoveri] Sugerencia de icono: ${nombre}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo. Inténtalo de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Suggest error:", err);
    return NextResponse.json(
      { error: "Error inesperado al enviar la sugerencia." },
      { status: 500 },
    );
  }
}