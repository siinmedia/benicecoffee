import { motion } from "motion/react";
import { Arrow, CircleButton, Pill, Reveal, SectionHeading } from "./ui";
import { menuItems } from "./menuData";
import { useSlider } from "./useSlider";

export function Menu() {
  const s = useSlider();

  return (
    <section id="menu" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Menu yang</>,
          <>
            <em className="italic">Selalu</em> Dicari
          </>,
        ]}
      />

      <Reveal
        delay={0.08}
        className="mx-auto mt-5 max-w-md text-center text-[12px] leading-relaxed text-muted-foreground"
      >
        20+ varian racikan Benice Coffee dengan resep terstandar, harga
        terjangkau, dan margin sehat untuk mitra.
      </Reveal>

      <div className="mt-8 flex justify-center gap-2">
        <CircleButton
          label="Menu sebelumnya"
          onClick={() => s.scrollByCard(-1)}
        >
          <Arrow className="rotate-[225deg]" />
        </CircleButton>

        <CircleButton
          label="Menu berikutnya"
          variant="accent"
          onClick={() => s.scrollByCard(1)}
        >
          <Arrow className="rotate-45" />
        </CircleButton>
      </div>

      <div
        ref={s.ref}
        className="
          -mx-3 mt-8 flex
          snap-x snap-mandatory
          gap-4 overflow-x-auto
          px-[calc((100vw-62vw)/2)]
          pb-2
          sm:mx-0
          sm:px-0
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {menuItems.map((m, i) => (
          <div
            key={m.name}
            className="
              w-[62vw]
              shrink-0
              snap-center
              sm:w-[30%]
              sm:snap-start
              lg:w-[19%]
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.5,
                delay: (i % 5) * 0.06,
              }}
              className="h-full"
            >
              <div className="relative overflow-hidden rounded-[16px]">
                <motion.img
                  src={m.src}
                  loading="lazy"
                  width={900}
                  height={760}
                  alt={m.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-44 w-full object-cover sm:h-52"
                />

                {m.tag ? (
                  <Pill
                    as="div"
                    variant="accent"
                    className="absolute top-3 left-3 h-7 px-3"
                  >
                    {m.tag}
                  </Pill>
                ) : null}
              </div>

              <div className="mt-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[12px]">{m.name}</p>

                  <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>

                <span className="shrink-0 text-[11px] font-medium">
                  {m.price}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Pill href="/menu" className="px-6">
          Lihat menu lengkap <Arrow />
        </Pill>
      </Reveal>
    </section>
  );
}