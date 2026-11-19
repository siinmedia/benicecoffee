import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./ui";

// Satu sumber kebenaran Q&A — dipakai komponen + schema FAQPage (index route).
// Jawaban harus teks yang visibly muncul di halaman (syarat schema Google).
export const FAQS = [
  [
    "Apakah ada royalti atau fee bulanan?",
    "Tidak ada. Semua paket Benice Coffee dibayar sekali di awal — booth, peralatan, bahan baku awal, resep, dan pelatihan sudah termasuk. Keuntungan penjualan 100% milik Anda.",
  ],
  [
    "Berapa modal minimal untuk gabung?",
    "Mulai Rp 3.450.000 dengan Paket Hemat. Tersedia lima pilihan paket sampai Neon Box Luxury Rp 31.590.000 — pilih sesuai budget dan target lokasi Anda.",
  ],
  [
    "Berapa lama estimasi balik modal?",
    "Dengan penjualan 100 cup per hari dan profit rata-rata Rp 3.000 per cup, laba bersih sekitar Rp 5,5 juta per bulan — estimasi balik modal 3–4 bulan. Coba simulasinya di kalkulator keuntungan di atas.",
  ],
  [
    "Apakah dapat pelatihan dan SOP?",
    "Ya. Setiap paket termasuk resep terstandar, pelatihan operasional, dan SOP panduan usaha. Tim kami mendampingi dari persiapan sampai outlet berjalan.",
  ],
  [
    "Apakah dibantu soal lokasi usaha?",
    "Ya. Konsultan kami membantu analisis lokasi dan memilih paket yang sesuai budget serta target pasar Anda — gratis, langsung via WhatsApp.",
  ],
  [
    "Bagaimana cara gabung jadi mitra?",
    "Chat konsultan, pilih paket usaha, pilih metode pembayaran (full transfer, COD dengan DP 50%, atau marketplace), lalu booth diproduksi dan Anda siap jualan.",
  ],
] as const;

export function Faq() {
  return (
    <section id="faq" className="section-faq overflow-visible py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">FAQ · Benice Coffee</p>
          <SectionHeading
            className="mt-3 max-w-md"
            lines={[
              <>
                Pertanyaan <em className="italic">Populer</em>
              </>,
            ]}
          />
          <Reveal delay={0.08} className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:text-base">
            Masih ragu? Temukan jawaban dari hal yang paling sering ditanyakan calon mitra paket usaha kopi Benice Coffee.
          </Reveal>
          <div className="mt-8 hidden h-px w-20 bg-primary lg:block" />
        </div>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible>
            {FAQS.map(([q, a], i) => (
              <AccordionItem key={q} value={q} className="border-b border-foreground/15 py-1">
                <AccordionTrigger className="gap-6 py-5 text-left text-sm font-medium hover:no-underline sm:text-base">
                  <span className="flex items-start gap-4"><span className="font-mono text-[10px] text-primary">0{i + 1}</span>{q}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-xl pb-5 pl-8 text-[13px] leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
