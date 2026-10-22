import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { canonicalLink, faqSchema, jsonLdScript, localBusinessSchema, socialMeta, websiteSchema } from "@/lib/seo";
import { Hero } from "@/components/site/Hero";
import { ControlBar } from "@/components/site/ControlBar";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { ProfitCalculator } from "@/components/site/ProfitCalculator";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Faq, FAQS } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { JoinSteps } from "@/components/site/JoinSteps";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const title = "Benice Coffee — Paket Usaha Kopi Mulai Rp 4,9 Juta";
const description =
  "Paket usaha kopi Benice Coffee mulai Rp 4,9 juta: booth, peralatan, bahan baku, resep, dan pelatihan. Tanpa royalti bulanan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: socialMeta({ title, description, path: "/" }),
    links: [canonicalLink("/")],
    scripts: [jsonLdScript(localBusinessSchema()), jsonLdScript(websiteSchema()), jsonLdScript(faqSchema(FAQS))],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <Hero />
      <ControlBar />
      <StatsStrip />
      <Menu />
      <Gallery />
      <Pricing />
      <ProfitCalculator />
      <Testimonials />
      <Faq />
      <JoinSteps />
      <Newsletter />
      <Footer />
    </main>
  );
}
