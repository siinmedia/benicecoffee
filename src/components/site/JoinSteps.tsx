import { motion } from "motion/react";
import owner from "@/assets/gallery-owner.jpg";
import { Arrow, Pill, Reveal } from "./ui";

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
      className="grid items-stretch gap-8 pt-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
    >
      <div className="flex flex-col">
        <Reveal className="relative w-full">
          <div className="overflow-hidden rounded-[14px] bg-secondary">
            <motion.img
              src={owner}
              alt="Mitra Benice Coffee di depan booth usahanya"
              loading="lazy"
              width={900}
              height={760}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[520px]"
            />
          </div>

        </Reveal>

      </div>

      <Reveal delay={0.15} className="flex flex-col justify-center lg:py-8">
        <p className="section-kicker">Mulai bersama Benice</p>
        <h2 className="display mt-3 text-[clamp(2rem,4.6vw,3.25rem)]">
          Cara <em className="italic">Gabung</em>
          <br />
          Jadi Mitra
        </h2>

        <ol className="mt-6 flex flex-col">
          {steps.map((s, i) => (
            <li key={s.n} className={`flex gap-4 py-4 ${i === 0 ? "" : "border-t border-border"}`}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-[10px]">
                {s.n}
              </span>

              <div className="min-w-0">
                <p className="text-[13px]">{s.t}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-7 flex flex-wrap gap-3">
          <Pill href="/paket" className="px-5">
            Chat Konsultan <Arrow />
          </Pill>

          <Pill href="/paket" variant="outline">
            Lihat paket <Arrow className="rotate-90" />
          </Pill>
        </div>
      </Reveal>
    </section>
  );
}
