import { motion } from "motion/react";
import hero from "@/assets/benice-hero.jpg";
import { Arrow, CircleButton, Pill, Reveal, SectionHeading } from "./ui";

const shots = [
  { src: "https://cdn.anggeraji.web.id/lp-benicecoffee/galeryy/booth-kontainer.webp", alt: "Booth kontainer", badge: "Booth kontainer", span: "lg:col-span-5", h: "h-[300px] sm:h-[380px] lg:h-[420px]" },
  { src: "https://cdn.anggeraji.web.id/lp-benicecoffee/galeryy/booth-portable.webp", alt: "Booth portable", badge: "Booth portable", span: "lg:col-span-3", h: "h-[240px] sm:h-[300px] lg:mt-8 lg:h-[330px]" },
  { src: "https://cdn.anggeraji.web.id/lp-benicecoffee/galeryy/marketing-kol.webp", alt: "Marketing kol", badge: "Marketing Influencer", span: "lg:col-span-2", h: "h-[240px] sm:h-[300px] lg:mt-12 lg:h-[280px]" },
  { src: "https://cdn.anggeraji.web.id/lp-benicecoffee/galeryy/opening.webp", alt: "Opening", badge: "Opening Mitra", span: "lg:col-span-2", h: "h-[240px] sm:h-[300px] lg:h-[320px]" },
];

export function Gallery() {
  return (
    <section id="galeri" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Galeri Outlet</>,
          <>
            & <em className="italic">Mitra Kami</em>
          </>,
        ]}
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        {shots.map((s, i) => (
          <Reveal key={s.badge} delay={i * 0.08} className={s.span}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-[16px] ${s.h}`}
            >
              <motion.img
                src={s.src}
                loading="lazy"
                width={1000}
                height={900}
                alt={s.alt}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover"
              />
              <Pill as="div" variant="white" className="absolute top-3 left-3 h-7 px-3">
                {s.badge}
              </Pill>
              <span className="absolute right-3 bottom-3 grid size-7 place-items-center rounded-full bg-card/85 backdrop-blur-md">
                <Arrow />
              </span>
              {i === 0 ? (
                <div className="glass absolute bottom-3 left-3 flex items-center gap-2 rounded-[12px] p-2">
                  <img
                    src={hero}
                    loading="lazy"
                    width={1920}
                    height={1088}
                    alt=""
                    className="h-8 w-12 rounded-[8px] object-cover"
                  />
                  <span className="text-[10px] leading-tight">
                    830+ outlet Benice
                    <br />
                    tersebar di 21 kota
                  </span>
                  <CircleButton label="Lihat sebaran outlet" variant="accent" className="size-6" href="#gabung">
                    <Arrow />
                  </CircleButton>
                </div>
              ) : null}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
