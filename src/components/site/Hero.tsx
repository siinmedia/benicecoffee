import { motion } from "motion/react";
import { Play, Store } from "lucide-react";
import heroImg from "@/assets/benice-hero.jpg";
import outlet from "@/assets/gallery-outlet.jpg";
import barista from "@/assets/gallery-barista.jpg";
import { Arrow, CircleButton, Pill } from "./ui";
import { WHATSAPP } from "@/lib/links";

const tags = [
  { label: "Modal kecil", top: "22%", left: "4%" },
  { label: "Booth siap", top: "34%", left: "26%" },
  { label: "Tanpa royalti", top: "27%", left: "45%", accent: true },
  { label: "Resep teruji", top: "38%", left: "65%" },
  { label: "Didampingi", top: "18%", left: "84%" },
];

function FloatingTag({
  label,
  top,
  left,
  accent,
  index,
}: {
  label: string;
  top: string;
  left: string;
  accent?: boolean;
  index: number;
}) {
  return (
    <motion.div
      style={{ top, left }}
      className="absolute hidden flex-col items-center gap-1.5 sm:flex"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.4 + index * 0.08 },
        y: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className="grid size-5 place-items-center rounded-full bg-card/40 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-card" />
      </span>
      <Pill as="div" variant={accent ? "accent" : "white"} className="h-7 px-3">
        {label}
        {accent ? <Arrow /> : null}
      </Pill>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[20px]">
      <motion.img
        src={heroImg}
        width={1920}
        height={1088}
        alt="Booth kopi merah Benice Coffee dengan barista meracik kopi saat senja"
        className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/25 via-transparent to-foreground/20" />

      {/*
<motion.h1
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
  className="display absolute top-[8%] left-1/2 w-full -translate-x-1/2 px-6 text-center text-[clamp(1.9rem,6vw,5rem)] text-card"
>
  <span className="block">
    Buka Usaha <em className="font-normal italic">Kopi.</em>
  </span>
  <span className="block">
    <em className="font-normal italic">Mulai Hari</em> Ini
  </span>
</motion.h1>
*/}

      {tags.map((t, i) => (
        <FloatingTag key={t.label} {...t} index={i} />
      ))}

      <div className="absolute bottom-[38%] left-[12%] hidden gap-2 lg:flex">
        <CircleButton label="Ke menu" variant="white" href="#menu">
          <Arrow className="rotate-[225deg]" />
        </CircleButton>
        <CircleButton label="Ke paket usaha" variant="white" href="#paket">
          <Arrow className="rotate-45" />
        </CircleButton>
      </div>

      <div className="absolute bottom-[14%] left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[10px] leading-tight text-card md:flex">
        <span className="text-right">
          Kopi enak,
          <br />
          harga bersahabat
        </span>
        <svg viewBox="0 0 64 64" className="size-16 text-card" aria-hidden>
          <path
            fill="currentColor"
            d="M28 0h8v18l13-13 5.7 5.7L41.7 24H64v8H41.7l13 13L49 50.7 36 37.7V64h-8V37.7L15 50.7 9.3 45l13-13H0v-8h22.3l-13-13L15 5.3l13 13V0z"
          />
        </svg>
        <span>
          usaha jalan,
          <br />
          kami dampingi
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="glass absolute bottom-4 left-4 hidden items-center gap-3 rounded-[16px] p-2.5 sm:flex"
      >
        <div className="hairline grid size-14 place-items-center rounded-full text-center leading-none">
          <span>
            <span className="block text-[15px] font-medium">830</span>
            <span className="block text-[8px] text-muted-foreground">outlet</span>
          </span>
        </div>
        <div className="text-[9px] leading-tight text-muted-foreground">
          mitra
          <br />
          aktif
        </div>
        <img
          src={outlet}
          loading="lazy"
          width={900}
          height={760}
          alt="Booth Benice Coffee di pinggir jalan"
          className="h-14 w-20 rounded-[10px] object-cover"
        />
        <div className="flex items-center gap-1 text-[9px] leading-tight text-muted-foreground">
          <Store className="size-3" strokeWidth={1.5} />
          mulai
          <br />
          Rp 4,9jt
        </div>
        <Pill href={WHATSAPP}>Gabung mitra</Pill>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass absolute right-4 bottom-4 hidden w-[220px] rounded-[16px] p-2.5 lg:block"
      >
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] text-muted-foreground">profil usaha</span>
          <Arrow />
        </div>
        <div className="relative overflow-hidden rounded-[10px]">
          <img
            src={barista}
            loading="lazy"
            width={900}
            height={760}
            alt="Barista Benice menakar kopi"
            className="h-24 w-full object-cover"
          />
          <Pill as="div" variant="white" className="absolute inset-x-0 bottom-2 mx-auto h-6 w-fit px-2.5">
            <Play className="size-2.5" strokeWidth={1.5} /> putar
          </Pill>
        </div>
        <div className="mt-2 flex justify-start">
          <CircleButton label="Lihat galeri" variant="white" className="size-7" href="#galeri">
            <Arrow />
          </CircleButton>
        </div>
      </motion.div>
    </section>
  );
}
