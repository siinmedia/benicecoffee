import { motion } from "motion/react";
import { Star } from "lucide-react";
import m1 from "@/assets/mitra-1.jpg";
import m2 from "@/assets/mitra-2.jpg";
import m3 from "@/assets/mitra-3.jpg";
import m4 from "@/assets/mitra-4.jpg";
import { Arrow, CircleButton, Pill, Reveal, SectionHeading } from "./ui";
import { useSlider } from "./useSlider";
import { WHATSAPP } from "@/lib/links";

const testimonials = [
  {
    img: m1,
    name: "Rifky Ananda",
    role: "Mitra Signature · Bandung",
    quote: "Balik modal 5 bulan. Rata-rata 90 cup per hari sejak bulan kedua.",
  },
  {
    img: m2,
    name: "Nadia Salsabila",
    role: "Mitra Daily Brew · Yogyakarta",
    quote: "Resepnya konsisten, pelanggan kampus jadi langganan tiap pagi.",
  },
  {
    img: m3,
    name: "Bagas Prakoso",
    role: "Mitra Starter Cup · Bekasi",
    quote: "Modal kecil tapi boothnya rapi. Minggu pertama sudah ramai.",
  },
  {
    img: m4,
    name: "Ratna Wijaya",
    role: "Mitra Master Area · Surabaya",
    quote: "Sekarang saya pegang tiga outlet. Tim support-nya benar-benar mendampingi.",
  },
];

export function Testimonials() {
  const s = useSlider();

  return (
    <section id="testimoni" className="pt-28 sm:pt-40">
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
        className="mx-auto mt-5 max-w-md text-center text-[12px] leading-relaxed text-muted-foreground"
      >
        830+ mitra sudah jalan bareng Benice Coffee. Ini beberapa cerita mereka.
      </Reveal>

      <div className="mt-8 flex justify-center gap-2">
        <CircleButton label="Testimoni sebelumnya" onClick={() => s.scrollByCard(-1)}>
          <Arrow className="rotate-[225deg]" />
        </CircleButton>
        <CircleButton
          label="Testimoni berikutnya"
          variant="accent"
          onClick={() => s.scrollByCard(1)}
        >
          <Arrow className="rotate-45" />
        </CircleButton>
      </div>

      <div
        ref={s.ref}
        className="mt-8 flex snap-x snap-mandatory justify-start gap-4 overflow-x-auto px-[9vw] pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="hairline flex w-[82vw] min-w-[82vw] shrink-0 snap-center flex-col rounded-[18px] bg-card p-5 sm:w-[46%] sm:min-w-0 sm:snap-none lg:w-[31%]"
          >
            <div className="flex items-center gap-1 text-accent-foreground">
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} className="size-3 fill-primary text-primary" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[13px] leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={t.img}
                loading="lazy"
                width={512}
                height={512}
                alt={`Foto ${t.name}, mitra Benice Coffee`}
                className="size-10 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium">{t.name}</p>
                <p className="truncate text-[10px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <Pill href={WHATSAPP} className="px-6">
          Saya mau jadi mitra <Arrow />
        </Pill>
      </Reveal>
    </section>
  );
}