import { motion } from "motion/react";
import owner from "@/assets/gallery-owner.jpg";
import outlet from "@/assets/gallery-outlet.jpg";
import { Arrow, CircleButton, Pill, Reveal } from "./ui";
import { WHATSAPP } from "@/lib/links";

const steps = [
  {
    n: "01",
    t: "Konsultasi gratis",
    d: "Ceritakan lokasi, target usaha, dan budget yang kamu siapkan kepada tim kami.",
  },
  {
    n: "02",
    t: "Pilih paket usaha",
    d: "Pilih paket Be Nice Coffee yang paling sesuai dengan kebutuhan dan lokasi jualanmu.",
  },
  {
    n: "03",
    t: "Pilih metode pembayaran",
    d: "Tersedia Full Transfer, COD dengan DP 50%, atau Marketplace untuk transaksi yang lebih nyaman.",
  },
  {
    n: "04",
    t: "Produksi & persiapan",
    d: "Kami siapkan booth, perlengkapan usaha, bahan baku, menu, dan SOP sebelum outlet beroperasi.",
  },
  {
    n: "05",
    t: "Mulai jualan",
    d: "Booth siap digunakan dan kamu bisa langsung memulai bisnis Be Nice Coffee.",
  },
];

export function JoinSteps() {
  return (
    <section
      id="gabung"
      className="grid items-center gap-12 pt-28 sm:pt-40 lg:grid-cols-2 lg:gap-20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <Reveal className="relative w-full sm:w-[58%]">
          <div className="overflow-hidden rounded-[16px]">
            <motion.img
              src={owner}
              loading="lazy"
              width={900}
              height={760}
              alt="Mitra Be Nice Coffee tersenyum di depan boothnya"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="h-72 w-full object-cover"
            />
          </div>

          <div className="glass absolute top-3 left-3 max-w-[160px] rounded-[12px] p-2">
            <div className="flex items-center gap-1.5">
              <img
                src={outlet}
                loading="lazy"
                width={900}
                height={760}
                alt=""
                className="size-5 rounded-full object-cover"
              />
              <span className="text-[9px] font-medium">
                Mitra Be Nice Coffee
              </span>
            </div>

            <p className="mt-1 text-[9px] leading-tight text-muted-foreground">
              "Dengan target 100 cup per hari, potensi laba bersih bisa mencapai
              sekitar Rp5,5 juta per bulan."
            </p>
          </div>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <CircleButton
              label="Lihat testimoni"
              variant="white"
              href="#testimoni"
            >
              <Arrow className="rotate-[225deg]" />
            </CircleButton>

            <CircleButton
              label="Semua testimoni mitra"
              variant="white"
              href="#testimoni"
            >
              <Arrow className="rotate-45" />
            </CircleButton>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="hairline w-full rounded-[14px] bg-card p-3 sm:w-[42%]"
        >
          {[
            ["Penjualan / hari", "100 cup"],
            ["Profit rata-rata / produk", "Rp3.000"],
            ["Laba kotor / bulan", "Rp9 jt"],
            ["Laba bersih / bulan", "Rp5,5 jt"],
            ["Estimasi balik modal", "3–4 bulan"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between gap-2 py-2"
            >
              <p className="truncate text-[9px] text-muted-foreground">
                {k}
              </p>
              <p className="shrink-0 text-[11px] font-medium">{v}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <h2 className="display text-[clamp(2rem,4.6vw,3.25rem)]">
          Cara <em className="italic">Gabung</em>
          <br />
          Jadi Mitra
        </h2>

        <ol className="mt-8 flex flex-col">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex gap-4 py-4 ${
                i === 0 ? "" : "border-t border-border"
              }`}
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-[10px]">
                {s.n}
              </span>

              <div className="min-w-0">
                <p className="text-[12px]">{s.t}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Pill href={WHATSAPP} className="px-5">
            Chat konsultan <Arrow />
          </Pill>

          <Pill href="/paket" variant="outline">
            Lihat paket <Arrow className="rotate-90" />
          </Pill>
        </div>
      </Reveal>
    </section>
  );
}