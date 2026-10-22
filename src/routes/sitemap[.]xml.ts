import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const PATHS = ["/", "/menu", "/paket", "/consultant", "/paket-usaha-kopi-tanpa-royalti", "/modal-usaha-kopi-5-juta", "/usaha-kopi-booth"];

function sitemapXml() {
  const urls = PATHS.map(
    (p) =>
      `  <url><loc>${SITE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
