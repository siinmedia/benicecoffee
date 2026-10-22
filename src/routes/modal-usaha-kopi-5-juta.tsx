import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { ContactButtons } from "@/components/site/ContactButtons";
import { Reveal, SectionHeading } from "@/components/site/ui";
import {
  SERVICE_AREAS,
  canonicalLink,
  faqSchema,
  jsonLdScript,
  localBusinessSchema,
  serviceSchema,
  socialMeta,
} from "@/lib/seo";

const title = "Modal Usaha Kopi 5 Juta — Booth Lengkap Siap Jualan";
const description =
  "Modal usaha kopi 5 juta cukup untuk mulai. Paket Hemat Rp 3,45 jt & Portable Rp 4,99 jt: booth, peralatan, bahan baku, resep, dan training. Tanpa royalti.";
const PATH = "/modal-usaha-kopi-5-juta";

const FAQS = [
  [
    "Apakah modal usaha kopi 5 juta benar-benar cukup?",
    "Cukup. Paket Hemat Rp 3.450.000 dan Paket Portable Rp 4.990.000 sudah termasuk booth, peralatan, bahan baku awal, resep, SOP, dan pelatihan — sisa budget bisa dipakai untuk sewa lokasi dan operasional pertama.",
  ],
  [
    "Apa saja yang didapat dari paket di bawah 5 juta?",
    "Booth (Portable sudah termasuk booth + branding), peralatan jualan lengkap, perlengkapan packaging, bahan baku awal, apron dan perlengkapan operasional, daftar menu, SOP, dan pelatihan.",
  ],
  [
    "Berapa lama balik modal dengan modal 5 juta?",
    "Dengan penjualan 100 cup per hari dan profit Rp 3.000 per cup, laba bersih sekitar Rp 5,5 juta per bulan — modal usaha kopi 5 juta berpotensi kembali dalam 1–2 bulan tergantung lokasi.",
  ],
  [
    "Bisa bayar bertahap atau COD?",
    "Bisa. Tersedia full transfer, COD dengan DP 50%, atau marketplace untuk transaksi yang lebih nyaman.",
  ],
] as const;

export const Route = createFileRoute("/modal-usaha-kopi-5-juta")({
  head: () => ({
    meta: socialMeta({ title, description, path: PATH, image: "/og/modal-5-juta.jpg" }),
    links: [canonicalLink(PATH)],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(serviceSchema()),
      jsonLdScript(faqSchema(FAQS)),
    ],
  }),
  component: Modal5JutaPage,
});

function Modal5JutaPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 text-center sm:pt-20">
        <Reveal>
          <p className="text-[11px] tracking-tight text-muted-foreground">
            Mulai usaha kopi dengan budget terbatas
          </p>
          <h1 className="display mx-auto mt-3 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
            Modal Usaha Kopi <em className="italic">5 Juta</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            Modal usaha kopi 5 juta cukup untuk buka booth sendiri. Paket Hemat Rp 3,45 juta dan
            Paket Portable Rp 4,99 juta sudah lengkap — booth, peralatan, bahan baku, resep, dan
            pelatihan, tanpa royalti bulanan.
          </p>
          <div className="mt-7">
            <ContactButtons />
          </div>
        </Reveal>
      </section>

      <section className="pt-20 sm:pt-28">
        <SectionHeading
          lines={[
            <>
              Rincian Modal <em className="italic">5 Juta</em>
            </>,
          ]}
        />
        <Reveal
          delay={0.08}
          className="mx-auto mt-5 max-w-xl text-center text-[13px] leading-relaxed text-muted-foreground"
        >
          Tidak ada biaya siluman. Ini yang Anda dapat dengan modal usaha kopi 5 juta lewat Paket
          Portable — paket paling pas di angka segitu.
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <div className="hairline rounded-[18px] bg-card p-5 sm:p-6">
            {[
              ["Booth Portable + branding", "Termasuk"],
              ["Peralatan jualan lengkap", "Termasuk"],
              ["Bahan baku awal", "Termasuk"],
              ["Packaging + apron operasional", "Termasuk"],
              ["Resep, SOP, dan pelatihan", "Termasuk"],
              ["Royalti bulanan", "Rp 0"],
              ["Total paket", "Rp 4.990.000"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-2 border-b border-border py-3 text-[13px] last:border-0"
              >
                <p className="text-muted-foreground">{k}</p>
                <p className="shrink-0 font-medium">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Pricing />

      <section className="pt-20 text-center sm:pt-28">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.6vw,3.25rem)]">
            Buka di <em className="italic">Kotamu</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Modal usaha kopi 5 juta bisa jalan di mana saja. Konsultan kami bantu petakan lokasi di
            kota-kota ini.
          </p>
          <div className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((c) => (
              <span
                key={c}
                className="hairline rounded-full bg-card px-4 py-1.5 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="faq" className="pt-20 sm:pt-28">
        <SectionHeading
          lines={[
            <>
              Sering <em className="italic">Ditanyakan</em>
            </>,
          ]}
        />
        <div className="mx-auto mt-8 max-w-2xl">
          {FAQS.map(([q, a]) => (
            <Reveal key={q}>
              <div className="hairline mb-2 rounded-[14px] bg-card px-4 py-4">
                <p className="text-[13px] font-medium">{q}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col items-center gap-4">
          <ContactButtons />
          <Link to="/paket" className="story-link text-xs text-muted-foreground">
            Bandingkan semua paket
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
