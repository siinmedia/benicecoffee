import { Arrow, Pill, Reveal, SectionHeading } from "./ui";
import { WHATSAPP } from "@/lib/links";

export function Newsletter() {
  return (
    <section className="pt-32 pb-8 sm:pt-48">
      <SectionHeading
        lines={[
          <>
            Siap Jadi <em className="italic">Mitra</em>
          </>,
          <>
            <em className="italic">Benice</em> Coffee?
          </>,
        ]}
      />
      <Reveal delay={0.1} className="mt-6 flex flex-col items-center">
        <Pill href={WHATSAPP} className="mt-8 px-6">
          Hubungi Kami <Arrow />
        </Pill>
      </Reveal>
    </section>
  );
}
