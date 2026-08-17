import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hoveri.dev";
  const routes = [
    { url: base, priority: 1 },
    { url: `${base}/icons`, priority: 0.8 },
    { url: `${base}/como-se-hace`, priority: 0.7 },
    { url: `${base}/sugerir-icono`, priority: 0.7 },
    { url: `${base}/invitame-un-cafe`, priority: 0.5 },
  ] as const;

  return routes.map((r) => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
