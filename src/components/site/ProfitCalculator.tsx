import { useState } from "react";
import { PAKET_USAHA } from "@/lib/seo";
import { Reveal, SectionHeading } from "./ui";
import { ContactButtons } from "./ContactButtons";
import { cn } from "@/lib/utils";

const fmt = new Intl.NumberFormat("id-ID");
const idr = (n: number) => `Rp ${fmt.format(Math.round(n))}`;

const FALLBACK_PAKET = { name: "Paket Portable", price: 4990000 };

export function ProfitCalculator() {
  const [cups, setCups] = useState(100);
  const [profitPerCup, setProfitPerCup] = useState(3000);
  const [opex, setOpex] = useState(3500000);
  const [paketIdx, setPaketIdx] = useState(1);

  const paket = PAKET_USAHA[paketIdx] ?? FALLBACK_PAKET;
  const gross = cups * profitPerCup * 30;
  const net = gross - opex;
  const bep = net > 0 ? paket.price / net : null;

  return (
    <section id="simulasi" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>
            Simulasi <em className="italic">Keuntungan</em>
          </>,
        ]}
      />
      <Reveal
        delay={0.08}
        className="mx-auto mt-5 max-w-md text-center text-[13px] leading-relaxed text-muted-foreground"
      >
        Geser angkanya sesuai target jualanmu — lihat estimasi laba dan balik modal per paket.
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
        <div className="hairline rounded-[18px] bg-card p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-5">
              <label className="block">
                <span className="flex items-baseline justify-between text-[13px]">
                  <span>Cup terjual / hari</span>
                  <span className="font-medium">{fmt.format(cups)} cup</span>
                </span>
                <input
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={cups}
                  onChange={(e) => setCups(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                  aria-label="Cup terjual per hari"
                />
              </label>
              <label className="block">
                <span className="flex items-baseline justify-between text-[13px]">
                  <span>Profit / cup</span>
                  <span className="font-medium">{idr(profitPerCup)}</span>
                </span>
                <input
                  type="range"
                  min={1000}
                  max={8000}
                  step={500}
                  value={profitPerCup}
                  onChange={(e) => setProfitPerCup(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                  aria-label="Profit per cup"
                />
              </label>
              <label className="block">
                <span className="flex items-baseline justify-between text-[13px]">
                  <span>Biaya operasional / bulan</span>
                  <span className="font-medium">{idr(opex)}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={10000000}
                  step={250000}
                  value={opex}
                  onChange={(e) => setOpex(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                  aria-label="Biaya operasional per bulan"
                />
              </label>
              <div>
                <p className="text-[13px]">Paket usaha</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {PAKET_USAHA.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setPaketIdx(i)}
                      className={cn(
                        "h-7 cursor-pointer rounded-full px-3 text-[10px] tracking-tight transition-opacity hover:opacity-90",
                        i === paketIdx
                          ? "bg-primary text-primary-foreground"
                          : "hairline bg-card text-foreground",
                      )}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                ["Laba kotor / bulan", idr(gross)],
                ["Laba bersih / bulan", net > 0 ? idr(net) : "—"],
                [
                  `Balik modal ${paket.name}`,
                  bep !== null ? `${bep.toFixed(1)} bulan` : "—",
                ],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-2 rounded-[12px] bg-surface px-4 py-3"
                >
                  <p className="text-xs text-muted-foreground">{k}</p>
                  <p className="display shrink-0 text-[clamp(1.1rem,2.4vw,1.5rem)]">{v}</p>
                </div>
              ))}
              <p className="text-xs leading-relaxed text-muted-foreground">
                Estimasi kasar berdasarkan input di samping ({idr(paket.price)} investasi {paket.name}).
                Angka aktual tergantung lokasi dan operasional — konsultan kami bantu hitung detailnya gratis.
              </p>
              {net <= 0 ? (
                <p className="rounded-[12px] bg-destructive/10 p-3 text-xs text-destructive">
                  Laba bersih minus — coba naikkan target cup atau turunkan biaya operasional.
                </p>
              ) : (
                <ContactButtons paket={paket.name} compact className="justify-start" />
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
