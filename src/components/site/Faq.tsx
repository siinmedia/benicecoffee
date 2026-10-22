import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./ui";
import { ContactButtons } from "./ContactButtons";

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
    <section id="faq" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>
            Pertanyaan <em className="italic">Populer</em>
          </>,
        ]}
      />
      <Reveal
        delay={0.08}
        className="mx-auto mt-5 max-w-md text-center text-[13px] leading-relaxed text-muted-foreground"
      >
        Masih ragu? Ini jawaban atas hal yang paling sering ditanyakan calon mitra.
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
        <Accordion type="single" collapsible>
          {FAQS.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="hairline mb-2 rounded-[14px] bg-card px-4">
              <AccordionTrigger className="text-left text-[13px] hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-[13px] leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 flex justify-center">
        <ContactButtons />
      </Reveal>
    </section>
  );
}
