// Central SEO module — single source of truth for canonical host, OG, JSON-LD.
// Ganti host cukup via env VITE_SITE_URL, tanpa edit tiap route.
export const SITE_URL =
  (import.meta.env?.["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "") ??
  "https://benicecoffee.id";

export const SITE_NAME = "Benice Coffee";
export const DEFAULT_OG_IMAGE = "/og/default.jpg";
export const SITE_LOCALE = "id_ID";

// Kota layanan — dipakai ulang untuk section coverage + schema areaServed.
export const SERVICE_AREAS = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Semarang",
  "Yogyakarta",
  "Medan",
  "Makassar",
  "Denpasar",
] as const;

// Paket usaha — cerminkan Pricing.tsx agar schema offers tidak drift dari kartu visible.
export const PAKET_USAHA = [
  { name: "Paket Hemat", price: 3450000, note: "Paket awal Be Nice Coffee" },
  { name: "Paket Portable", price: 4990000, note: "Booth Portable + branding" },
  { name: "Paket Platinum", price: 7890000, note: "Booth Platinum" },
  { name: "Neon Box Premium", price: 22290000, note: "Booth Neon Box Premium" },
  { name: "Neon Box Luxury", price: 31590000, note: "Booth Neon Box Luxury" },
] as const;

export function canonicalLink(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}

type SocialOpts = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
};

export function socialMeta({ title, description, path, image, type = "website" }: SocialOpts) {
  const url = `${SITE_URL}${path}`;
  const absImage = `${SITE_URL}${image ?? DEFAULT_OG_IMAGE}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: absImage },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: absImage },
  ];
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json" as const, children: JSON.stringify(data) };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    servesCuisine: ["Coffee", "Beverages"],
    priceRange: "Rp 8.000 - Rp 25.000",
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "id",
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paket Usaha Benice Coffee",
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
    offers: PAKET_USAHA.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.note,
      price: p.price,
      priceCurrency: "IDR",
      url: `${SITE_URL}/paket`,
    })),
  };
}

// Schema jawaban harus teks yang visibly muncul di halaman — jangan pakai untuk
// halaman form (proposal/consultant) yang tidak punya Q&A visible.
export function faqSchema(items: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
