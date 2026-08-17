import { readFile } from "node:fs/promises";
import path from "node:path";
import type { NextRequest } from "next/server";

const ICONS_DIR = path.join(process.cwd(), "icons");

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (!file || !/^[a-z0-9-]+$/.test(file)) {
    return Response.json({ error: "Nombre de icono inválido" }, { status: 400 });
  }

  const target = path.join(ICONS_DIR, `${file}.tsx`);
  if (!target.startsWith(ICONS_DIR)) {
    return Response.json({ error: "Nombre de icono inválido" }, { status: 400 });
  }

  try {
    const source = await readFile(target, "utf8");
    return Response.json({ source });
  } catch {
    return Response.json({ error: "Icono no encontrado" }, { status: 404 });
  }
}