import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Pill, Reveal, SectionHeading } from "./ui";
import { ContactButtons } from "./ContactButtons";

const packages = [
  {
    name: "Paket Hemat",
    image:
      "https://cdn.anggeraji.web.id/lp-benicecoffee/paket/Paket%20Hemat%20Be%20Nice%20Coffee.webp",
    price: "Rp 3.450.000",
    note: "Paket awal Be Nice Coffee",
    desc: "Pilihan paling ekonomis untuk memulai bisnis minuman dengan modal terjangkau.",
    items: [
      "Peralatan jualan lengkap",
      "Perlengkapan packaging",
      "Bahan baku",
      "Apron & perlengkapan operasional",
      "Daftar menu",
      "SOP panduan usaha",
    ],
  },
  {
    name: "Paket Portable",
    image:
      "https://cdn.anggeraji.web.id/lp-benicecoffee/paket/Paket%20Portable%20Be%20Nice%20Coffee.webp",
    price: "Rp 4.990.000",
    note: "Booth Portable + branding",
    desc: "Solusi praktis untuk mulai berjualan dengan booth yang mudah ditempatkan di berbagai lokasi.",
    items: [
      "Booth Portable + branding",
      "Peralatan jualan lengkap",
      "Perlengkapan packaging",
      "Bahan baku",
      "Apron & perlengkapan operasional",
      "Daftar menu",
      "SOP panduan usaha",
    ],
  },
  {
    name: "Paket Platinum",
    image:
      "https://cdn.anggeraji.web.id/lp-benicecoffee/paket/Paket%20Platinum%20Be%20Nice%20Coffee.webp",
    price: "Rp 7.890.000",
    note: "Booth Platinum",
    desc: "Pilihan profesional untuk kamu yang ingin memiliki booth Be Nice Coffee dengan tampilan lebih menarik dan siap jualan.",
    items: [
      "Booth Platinum + branding",
      "Peralatan jualan lengkap",
      "Milk frother",
      "Perlengkapan packaging",
      "Bahan baku",
      "Apron & perlengkapan operasional",
      "Daftar menu",
      "SOP panduan usaha",
    ],
  },
  {
    name: "Neon Box Premium",
    image:
      "https://cdn.anggeraji.web.id/lp-benicecoffee/paket/Paket%20Neon%20Box%20Premium%20Be%20Nice%20Coffee.webp",
    price: "Rp 22.290.000",
    note: "Booth Neon Box Premium",
    desc: "Untuk kamu yang ingin membangun outlet dengan tampilan lebih premium dan profesional.",
    items: [
      "Booth Neon Box Premium",
      "Seragam & perlengkapan crew",
      "Dispenser & perlengkapan operasional",
      "Milk frother & peralatan minuman",
      "Perlengkapan packaging",
      "Bahan baku",
      "Daftar menu",
      "SOP panduan usaha",
    ],
  },
  {
    name: "Neon Box Luxury",
    image:
      "https://cdn.anggeraji.web.id/lp-benicecoffee/paket/Paket%20Neon%20Box%20Luxury%20Be%20Nice%20Coffee.webp",
    price: "Rp 31.590.000",
    note: "Booth Neon Box Luxury",
    desc: "Paket paling lengkap untuk membangun outlet Be Nice Coffee yang lebih premium dan siap operasional.",
    items: [
      "Booth Neon Box Luxury",
      "Mesin shaker",
      "Sistem kasir + TV Android",
      "Seragam & perlengkapan crew",
      "Dispenser & perlengkapan operasional",
      "Peralatan minuman lengkap",
      "Perlengkapan packaging",
      "Bahan baku",
      "Daftar menu",
      "SOP panduan usaha",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="paket" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Lima Paket</>,
          <>
            Usaha <em className="italic">Benice</em>
          </>,
        ]}
      />
      <Reveal
        delay={0.08}
        className="mx-auto mt-5 max-w-md text-center text-[13px] leading-relaxed text-muted-foreground"
      >
        Semua paket sudah termasuk booth, peralatan, bahan baku awal, resep, dan pelatihan. Tanpa
        royalti bulanan.
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`flex h-full flex-col overflow-hidden rounded-[18px] ${
                p.featured ? "bg-primary text-primary-foreground" : "hairline bg-card"
              }`}
            >
              {p.image ? (
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={`Tampilan ${p.name} Be Nice Coffee`}
                    loading="lazy"
                    className="size-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[13px] font-medium tracking-tight">{p.name}</p>
                    <p
                      className={`mt-0.5 text-xs ${p.featured ? "opacity-80" : "text-muted-foreground"}`}
                    >
                      {p.note}
                    </p>
                  </div>
                  {p.featured ? (
                    <Pill as="div" variant="accent" className="h-6 px-2.5 text-[10px]">
                      Terlaris
                    </Pill>
                  ) : null}
                </div>

                <p className="display mt-5 text-[clamp(1.5rem,3vw,2rem)]">{p.price}</p>
                <p
                  className={`mt-2 text-[13px] leading-relaxed ${p.featured ? "opacity-85" : "text-muted-foreground"}`}
                >
                  {p.desc}
                </p>

                <ul className="mt-4 flex flex-1 flex-col gap-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5 text-xs leading-tight">
                      <span
                        className={`grid size-3.5 shrink-0 place-items-center rounded-full ${
                          p.featured ? "bg-accent text-accent-foreground" : "bg-surface"
                        }`}
                      >
                        <Check className="size-2" strokeWidth={2} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <ContactButtons paket={p.name} compact onDark={p.featured ?? false} label="Ambil paket ini" />
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
