import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";

// rate limit simple en memoria: 3 sugerencias por IP cada 10 min
const RATE_LIMIT = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT.get(ip);
  if (!entry || now > entry.reset) {
    RATE_LIMIT.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas sugerencias seguidas. Inténtalo más tarde." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as {
      nombre?: string;
      idea?: string;
      motion?: string;
      categoria?: string;
    };

    const nombre = (body.nombre ?? "").trim().slice(0, 80);
    const idea = (body.idea ?? "").trim().slice(0, 1000);
    const motion = (body.motion ?? "").trim().slice(0, 120);
    const categoria = (body.categoria ?? "").trim().slice(0, 60);

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