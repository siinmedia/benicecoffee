import { Reveal } from "./ui";

const items = [
  "Coffee gula aren",
  "Booth siap jualan",
  "Tanpa royalti bulanan",
  "Resep terstandar",
  "Pendampingan mitra",
];

export function ControlBar() {
  return (
    <Reveal
      delay={0.1}
      className="overflow-hidden border-y border-primary/30 bg-primary py-3 text-background"
    >
      <div className="flex w-max animate-marquee-benice">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${half}-${item}`}
                className="whitespace-nowrap px-6 text-[11px] font-bold uppercase tracking-[0.18em]"
              >
                {item}
                <span className="pl-12 text-accent" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
