import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Arrow, CircleButton, Reveal, SectionHeading } from "./ui";
import { ContactButtons } from "./ContactButtons";
import { useSlider } from "./useSlider";

const testimonials = [
  {
    name: "Rifky Ananda",
    role: "Mitra Neon Box Luxury · Bandung",
    quote: "Balik modal 5 bulan. Rata-rata 90 cup per hari sejak bulan kedua.",
  },
  {
    name: "Nadia Salsabila",
    role: "Mitra Paket Platinum · Yogyakarta",
    quote: "Resepnya konsisten, pelanggan kampus jadi langganan tiap pagi.",
  },
  {
    name: "Bagas Prakoso",
    role: "Mitra Paket Portable · Bekasi",
    quote: "Modal kecil tapi boothnya rapi. Minggu pertama sudah ramai.",
  },
  {
    name: "Ratna Wijaya",
    role: "Mitra Neon Box Premium · Surabaya",
    quote: "Sekarang saya pegang tiga outlet. Tim support-nya benar-benar mendampingi.",
  },
  {
    name: "Dimas Setiawan",
    role: "Mitra Paket Hemat · Depok",
    quote: "Saya mulai dari teras rumah. SOP dan pendampingannya jelas dari awal.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Mitra Paket Portable · Malang",
    quote: "Menunya gampang diterima pelanggan dan bahan bakunya mudah disiapkan.",
  },
  {
    name: "Andi Kurniawan",
    role: "Mitra Paket Platinum · Semarang",
    quote: "Outlet terlihat profesional tanpa harus membangun semuanya dari nol.",
  },
];

export function Testimonials() {
  const s = useSlider();

  return (
    <section id="testimoni" className="section-testimonials pt-20 sm:pt-28">
      <SectionHeading
        lines={[
          <>Cerita Nyata</>,
          <>
            Para <em className="italic">Mitra</em>
          </>,
        ]}
      />
      <Reveal
        delay={0.08}
        className="mx-auto mt-5 max-w-md text-center text-[13px] leading-relaxed text-muted-foreground"
      >
        830+ mitra sudah jalan bareng Benice Coffee. Ini beberapa cerita mereka.
      </Reveal>

      <div className="mt-8 flex justify-center gap-2">
        <CircleButton label="Testimoni sebelumnya" onClick={() => s.scrollByCard(-1, 2)}>
          <Arrow className="rotate-[225deg]" />
        </CircleButton>
        <CircleButton
          label="Testimoni berikutnya"
          variant="accent"
          onClick={() => s.scrollByCard(1, 2)}
        >
          <Arrow className="rotate-45" />
        </CircleButton>
      </div>

      <div
        ref={s.ref}
        className="mx-auto mt-8 flex max-w-3xl snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="hairline flex w-full min-w-full shrink-0 snap-center flex-col rounded-[18px] bg-card p-6 sm:w-[calc((100%_-_1rem)/2)] sm:min-w-[calc((100%_-_1rem)/2)] sm:p-7"
          >
            <div className="flex items-center gap-1 text-accent-foreground">
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} className="size-3 fill-primary text-primary" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[13px] leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-[13px] font-medium">{t.name}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{t.role}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5 flex justify-center pb-16 sm:mt-7 sm:pb-24">
        <ContactButtons />
      </Reveal>
    </section>
  );
}
