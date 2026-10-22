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

const title = "Usaha Kopi Booth Pinggir Jalan — Siap Jualan";
const description =
  "Mulai usaha kopi booth di pinggir jalan dengan booth portable + branding Benice Coffee. Peralatan lengkap, resep terstandar, didampingi sampai buka.";
const PATH = "/usaha-kopi-booth";

const FAQS = [
  [
    "Berapa ukuran booth untuk pinggir jalan?",
    "Paket usaha kopi booth tersedia dari booth portable yang ringkas sampai Neon Box untuk lokasi yang lebih permanen. Ceritakan lokasi incaran Anda ke konsultan — kami bantu pilihkan ukuran yang pas.",
  ],
  [
    "Apakah booth mudah dipindah-pindah?",
    "Ya. Booth portable dirancang bongkar-pasang untuk lokasi pinggir jalan — cocok untuk titik ramai seperti dekat kampus, pasar, atau area nongkrong.",
  ],
  [
    "Bagaimana soal listrik dan air di lokasi?",
    "Kebutuhan listrik tergantung paket dan lokasi jualan. Konsultan kami membantu menyesuaikan setup peralatan dengan kondisi lokasi Anda — konsultasinya gratis via WhatsApp.",
  ],
  [
    "Apakah dapat pelatihan meracik kopi?",
    "Dapat. Setiap paket usaha kopi booth termasuk resep terstandar, pelatihan operasional, dan SOP — jadi rasa konsisten walau Anda baru pertama kali jualan kopi.",
  ],
] as const;

export const Route = createFileRoute("/usaha-kopi-booth")({
  head: () => ({
    meta: socialMeta({ title, description, path: PATH, image: "/og/booth.jpg" }),
    links: [canonicalLink(PATH)],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(serviceSchema()),
      jsonLdScript(faqSchema(FAQS)),
    ],
  }),
  component: BoothPage,
});

function BoothPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 text-center sm:pt-20">
        <Reveal>
          <p className="text-[11px] tracking-tight text-muted-foreground">
            Booth portable + branding, bongkar-pasang
          </p>
          <h1 className="display mx-auto mt-3 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
            Usaha Kopi Booth <em className="italic">Pinggir Jalan</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            Usaha kopi booth di pinggir jalan adalah cara termurah punya titik jualan sendiri.
            Booth portable + branding Benice Coffee, peralatan lengkap, resep terstandar — tinggal
            pilih titik ramai dan mulai jualan.
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
              Kenapa <em className="italic">Booth?</em>
            </>,
          ]}
        />
        <Reveal
          delay={0.08}
          className="mx-auto mt-5 max-w-xl text-center text-[13px] leading-relaxed text-muted-foreground"
        >
          Sewa ruko mahal dan terikat. Usaha kopi booth di pinggir jalan memberi Anda mobilitas —
          pindah mengikuti keramaian, mulai dari Paket Hemat Rp 3,45 juta, tanpa royalti.
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <div className="hairline rounded-[18px] bg-card p-5 sm:p-6">
            {[
              ["Booth portable + branding full", "Termasuk"],
              ["Peralatan jualan lengkap", "Termasuk"],
              ["Bahan baku awal + packaging", "Termasuk"],
              ["Resep terstandar + pelatihan", "Termasuk"],
              ["Mulai dari", "Rp 3.450.000"],
              ["Royalti bulanan", "Rp 0"],
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
            Cari Titik <em className="italic">Ramai?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Usaha kopi booth hidup dari lokasi. Konsultan kami bantu analisis titik di kota-kota
            ini — gratis.
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
            Lihat pilihan booth tiap paket
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
