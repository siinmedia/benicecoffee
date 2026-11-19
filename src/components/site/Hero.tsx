import { ArrowDownRight } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "@/assets/benice-hero.jpg";
import { Pill } from "./ui";

export function Hero() {
  return (
    <header className="relative min-h-[610px] overflow-hidden bg-secondary sm:min-h-[680px]">
      <motion.img
        src={heroImg}
        width={1920}
        height={1088}
        alt="Booth kopi merah Benice Coffee dengan barista meracik kopi saat senja"
        className="absolute inset-0 size-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/10"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary/70 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[610px] max-w-6xl flex-col justify-between px-6 py-10 sm:min-h-[680px] sm:px-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-background/90">
            <span className="inline-block h-px w-10 bg-primary" />
            Paket usaha kopi Indonesia
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display mt-6 max-w-3xl text-[clamp(3.25rem,9vw,7.5rem)] text-background"
          >
            Kopi enak,
            <br />
            <em>usaha jalan.</em>
          </motion.h1>
          <p className="mt-6 max-w-md text-sm font-medium leading-relaxed tracking-[0.03em] text-background/80 sm:text-base">
            Booth, peralatan, bahan baku, resep, dan pendampingan untuk kamu yang ingin mulai jualan
            kopi dengan langkah yang jelas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill
              href="#paket"
              variant="primary"
              className="h-11 px-6 text-xs font-bold uppercase tracking-[0.12em]"
            >
              Lihat paket usaha
            </Pill>
            <Pill
              href="#menu"
              variant="white"
              className="h-11 px-6 text-xs font-bold uppercase tracking-[0.12em]"
            >
              Lihat menu
            </Pill>
          </div>
        </div>

        <div className="flex items-end justify-between gap-5 text-background">
          <p className="max-w-[210px] text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-background/75">
            Mulai dari paket yang sesuai dengan lokasi dan budget kamu.
          </p>
          <a
            href="#cerita"
            className="grid size-14 shrink-0 place-items-center rounded-full border border-background/60 transition-colors hover:bg-background hover:text-secondary"
            aria-label="Lihat cerita Benice Coffee"
          >
            <ArrowDownRight className="size-5" strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </header>
  );
}
