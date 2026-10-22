import { Reveal } from "./ui";

const STATS: (readonly [string, string])[] = [
  ["830+", "Mitra aktif"],
  ["21", "Kota di Indonesia"],
  ["5", "Pilihan paket usaha"],
  ["Rp 0", "Royalti bulanan"],
];

export function StatsStrip() {
  return (
    <Reveal className="mt-3">
      <div className="hairline grid grid-cols-2 gap-y-6 rounded-[18px] bg-card px-4 py-6 sm:grid-cols-4 sm:py-8">
        {STATS.map(([v, l]) => (
          <div key={l} className="text-center">
            <p className="display text-[clamp(1.75rem,4vw,2.75rem)]">{v}</p>
            <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{l}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
