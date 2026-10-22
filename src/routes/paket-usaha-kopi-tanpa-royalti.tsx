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

const title = "Paket Usaha Kopi Tanpa Royalti — Untung 100% Milik Anda";
const description =
  "Paket usaha kopi tanpa royalti dari Benice Coffee. Sekali bayar, booth + peralatan + bahan baku + training. Tanpa fee bulanan, untung 100% milik Anda.";
const PATH = "/paket-usaha-kopi-tanpa-royalti";

const FAQS = [
  [
    "Apakah benar tidak ada royalti sama sekali?",
    "Benar. Paket usaha kopi tanpa royalti berarti Anda bayar sekali di awal dan tidak ada potongan omzet, fee bulanan, atau bagi hasil selamanya. Keuntungan penjualan 100% milik Anda.",
  ],
  [
    "Apakah ada biaya tersembunyi selain harga paket?",
    "Tidak ada. Harga paket sudah termasuk booth, peralatan, bahan baku awal, resep, SOP, dan pelatihan. Biaya di luar itu hanya operasional harian Anda sendiri seperti belanja bahan dan sewa lokasi.",
  ],
  [
    "Tanpa royalti, apakah support-nya tetap jalan?",
    "Tetap jalan. Tim kami mendampingi dari pemilihan paket, persiapan booth, sampai outlet beroperasi — termasuk konsultasi lokasi dan operasional via WhatsApp.",
  ],
  [
    "Paket mana yang paling cocok untuk pemula?",
    "Paket Hemat Rp 3.450.000 untuk modal paling kecil, atau Paket Portable Rp 4.990.000 kalau ingin booth portable + branding. Konsultan kami bantu pilihkan sesuai budget dan target lokasi Anda.",
  ],
] as const;

export const Route = createFileRoute("/paket-usaha-kopi-tanpa-royalti")({
  head: () => ({
    meta: socialMeta({ title, description, path: PATH, image: "/og/royalti.jpg" }),
    links: [canonicalLink(PATH)],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(serviceSchema()),
      jsonLdScript(faqSchema(FAQS)),
    ],
  }),
  component: TanpaRoyaltiPage,
});

function TanpaRoyaltiPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 text-center sm:pt-20">
        <Reveal>
          <p className="text-[11px] tracking-tight text-muted-foreground">
            Franchise kopi tanpa biaya bulanan
          </p>
          <h1 className="display mx-auto mt-3 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
            Paket Usaha Kopi <em className="italic">Tanpa Royalti</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            Kebanyakan franchise kopi memotong royalti 5–10% dari omzet Anda setiap bulan. Paket
            usaha kopi tanpa royalti dari Benice Coffee menghapus potongan itu — bayar sekali di
            awal, untung penjualan sepenuhnya milik Anda.
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
              Royalti Itu <em className="italic">Mahal</em>
            </>,
          ]}
        />
        <Reveal
          delay={0.08}
          className="mx-auto mt-5 max-w-xl text-center text-[13px] leading-relaxed text-muted-foreground"
        >
          Contoh hitungan: omzet Rp 9 juta per bulan dengan royalti 7% berarti Rp 630.000 melayang
          setiap bulan — Rp 7,5 juta per tahun. Dengan paket usaha kopi tanpa royalti, angka itu
          tetap masuk kantong Anda sebagai laba bersih.
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <div className="hairline rounded-[18px] bg-card p-5 sm:p-6">
            {[
              ["Bayar di awal", "Sekali, sesuai harga paket"],
              ["Royalti bulanan", "Rp 0 — selamanya"],
              ["Bagi hasil omzet", "Tidak ada"],
              ["Booth + peralatan + bahan baku awal", "Termasuk"],
              ["Resep, SOP, dan pelatihan", "Termasuk"],
              ["Pendampingan operasional", "Termasuk"],
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
            Didampingi di <em className="italic">8 Kota</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Konsultan kami membantu analisis lokasi paket usaha kopi tanpa royalti Anda di
            kota-kota berikut.
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
            Lihat semua paket usaha
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
