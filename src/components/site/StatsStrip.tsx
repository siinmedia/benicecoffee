import { Reveal } from "./ui";

const stats: (readonly [string, string])[] = [
  ["830+", "Mitra aktif"],
  ["21", "Kota di Indonesia"],
  ["5", "Pilihan paket usaha"],
  ["Tanpa royalti", "Selamanya"],
];

export function StatsStrip() {
  return (
    <section id="cerita" className="scroll-mt-20">
      <Reveal className="mx-auto mt-16 max-w-6xl px-6 sm:mt-24 sm:px-10">
        <div className="grid gap-10 border-y border-foreground/20 py-10 sm:grid-cols-[1.05fr_1.5fr] sm:gap-16 sm:py-16">
          <div>
            <p className="font-display text-sm text-primary sm:text-base">01</p>
            <h2 className="display mt-2 max-w-md text-[clamp(2.4rem,5vw,4.75rem)]">
              Satu racikan kopi, banyak cara untuk mulai.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-9">
            <p className="max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base">
              Benice Coffee membantu kamu membuka usaha minuman dengan paket yang mudah dipahami,
              produk yang siap dijual, dan sistem yang bisa dipelajari dari awal.
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="border-l border-foreground/20 pl-3">
                  <p className="display text-[clamp(1.7rem,3vw,2.7rem)]">{value}</p>
                  <p className="mt-1 max-w-[100px] text-[11px] leading-tight text-foreground/60 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
