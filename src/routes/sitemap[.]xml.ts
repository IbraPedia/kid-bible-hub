import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://bibliayawatoto.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="sw" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
  <url>
    <loc>${BASE_URL}/en</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="sw" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
