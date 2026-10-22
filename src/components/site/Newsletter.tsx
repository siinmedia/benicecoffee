import { ContactButtons } from "./ContactButtons";
import { Reveal } from "./ui";

export function Newsletter() {
  return (
    <section className="pt-28 pb-8 sm:pt-40">
      <Reveal>
        <div className="rounded-[20px] bg-primary px-4 py-14 text-center text-primary-foreground sm:py-20">
          <h2 className="display mx-auto max-w-2xl text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block">Siap Jadi Mitra</span>
            <span className="block">
              <em className="italic">Benice</em> Coffee?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed opacity-85">
            Chat sekarang, konsultan kami bantu pilihkan paket yang pas buat budget dan lokasimu.
          </p>
          <ContactButtons onDark className="mt-8" />
        </div>
      </Reveal>
    </section>
  );
}
