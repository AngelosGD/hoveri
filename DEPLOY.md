# Deploy: publicar hoveri como librería instalable

Cómo llevar los 500 iconos de la web a npm (`npm install hoveri`) y al registry de
shadcn (`npx shadcn add <url>/r/[icono].json`), y desplegar el sitio.

## Estado actual

- Los 500 iconos son componentes autónomos: solo importan `react`, `motion/react` y `./types`.
  Sin aliases `@/` → se pueden compilar y publicar tal cual.
- El nombre `hoveri` está **libre en npm** (verificado).
- `components/icon-card.tsx:20` ya copia `npx shadcn add https://hoveri.dev/r/${file}.json`,
  pero la ruta `/r/[icono].json` **no existe** → hay que crearla y actualizar el dominio.
- No hay build ni `exports` de paquete; el repo es solo una app Next.
- Dominios: `hoveri.dev` no resuelve (000). `hoveri.com` es dominio de parking en venta.
  → El deploy será en Vercel gratis (`https://hoveri.vercel.app`).
- Cuenta npm: disponible (hacer `npm login` al publicar).

## Fase 1 — Registry shadcn (sirve el código fuente)

1. **`app/r/[icon]/route.ts`**: sirve el registry-item JSON por icono:
   - `name`, `type: "registry:component"`, `dependencies: ["motion"]`
   - `files[0]`: `{ path: "components/ui/[icono].tsx", type: "registry:component", content: "<código fuente>" }`
     (leído del disco, igual que `app/api/icon-source`)
   - `files[1]`: `{ path: "components/ui/types.ts", type: "registry:lib", content: "<types.ts>" }`
     — necesario porque los iconos importan `./types`
2. **`app/r/registry.json/route.ts`**: catálogo con los 500 items (para `shadcn search`/namespaces).
3. **Probar local**: en una app de prueba con `shadcn init` →
   `npx shadcn@latest add http://localhost:3000/r/heart-icon.json` y verificar que anima.

## Fase 2 — Paquete npm `hoveri`

1. **`packages/hoveri/`** subpaquete (no toca la app Next):
   - `src/index.ts`: barrel que re-exporta los 500 iconos + tipos desde `../../icons/*`
   - `package.json`: `name: "hoveri"`, `peerDependencies: { react, motion }`,
     `sideEffects: false`, `files: ["dist"]`, `exports` con subpaths por icono (`hoveri/heart-icon`)
2. **Build con `tsup`**: multi-entry (index + cada icono), `--dts`, `--format esm,cjs`.
   Preserva el `"use client"` (esbuild mantiene directivas top-level).
3. **Probar local sin publicar**: `npm pack` → tarball → instalar en una app de prueba
   (`npm install ./hoveri-0.1.0.tgz`) → `import { HeartIcon } from "hoveri"` → verificar animación + typecheck.
4. **Publicar**: `npm login` + `npm publish`.

## Fase 3 — Deploy en Vercel + URLs finales

1. `vercel` en la raíz, proyecto nombrado `hoveri` → URL `https://hoveri.vercel.app` (verificar disponibilidad).
2. Centralizar el dominio en una constante/env (`NEXT_PUBLIC_SITE_URL`) y actualizar:
   - `components/icon-card.tsx` (comando shadcn)
   - `app/layout.tsx`, `robots.ts`, `sitemap.ts` (apuntan a `hoveri.dev`)
   - `README.md` (dice `hoveri.com`)
3. Verificación real: en app de prueba →
   `npx shadcn add https://hoveri.vercel.app/r/heart-icon.json` y `npm install hoveri`.

## Consideraciones

- Los iconos handcrafted (logos de marcas, letras, tabler) también se publican: son componentes React válidos.
- `motion` (^13) como peer dependency; `react` como peer amplio.
- El tarball de prueba evita publicar hasta que todo funcione.