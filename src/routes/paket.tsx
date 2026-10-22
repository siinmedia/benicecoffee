import { createFileRoute, Link } from "@tanstack/react-router";
import { canonicalLink, jsonLdScript, localBusinessSchema, serviceSchema, socialMeta } from "@/lib/seo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { JoinSteps } from "@/components/site/JoinSteps";
import { Testimonials } from "@/components/site/Testimonials";
import { Arrow, Pill, Reveal } from "@/components/site/ui";

const title = "Paket Usaha Benice Coffee — 5 Pilihan Mulai Rp 4,9 Juta";
const description =
  "Bandingkan lima paket usaha Benice Coffee: Starter Cup, Daily Brew, Signature, Grand Kiosk, dan Master Area. Booth, alat, bahan baku, resep, dan training termasuk.";

export const Route = createFileRoute("/paket")({
  head: () => ({
    meta: socialMeta({ title, description, path: "/paket", image: "/og/paket.jpg" }),
    links: [canonicalLink("/paket")],
    scripts: [jsonLdScript(localBusinessSchema()), jsonLdScript(serviceSchema())],
  }),
  component: PaketPage,
});

function PaketPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 text-center sm:pt-20">
        <Reveal>
          <h1 className="display text-[clamp(2.25rem,6vw,4rem)]">
            Paket <em className="italic">Usaha</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Pilih skala usaha sesuai modal dan lokasi Anda. Tanpa royalti bulanan.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Pill href="/consultant" className="px-5">
              Tanya konsultan <Arrow />
            </Pill>
            <Link to="/">
              <Pill as="div" variant="outline" className="px-5">
                Kembali ke beranda
              </Pill>
            </Link>
          </div>
        </Reveal>
      </section>
      <Pricing />
      <JoinSteps />
      <Testimonials />
      <Reveal className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 text-center">
        <p className="text-xs text-muted-foreground">Panduan terkait:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Pill href="/paket-usaha-kopi-tanpa-royalti" variant="outline" className="px-4">
            Tanpa Royalti <Arrow className="rotate-45" />
          </Pill>
          <Pill href="/modal-usaha-kopi-5-juta" variant="outline" className="px-4">
            Modal 5 Juta <Arrow className="rotate-45" />
          </Pill>
          <Pill href="/usaha-kopi-booth" variant="outline" className="px-4">
            Booth Pinggir Jalan <Arrow className="rotate-45" />
          </Pill>
        </div>
      </Reveal>
      <Footer />
    </main>
  );
}