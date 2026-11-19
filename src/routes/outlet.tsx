import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Outlets } from "@/components/site/Outlets";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/outlet")({
  component: OutletPage,
});

function OutletPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <header className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Benice Coffee · Outlet Directory</p>
            <h1 className="display mt-4 max-w-3xl text-[clamp(2.75rem,7vw,6rem)]">
              Temukan <em className="italic text-primary">Outlet</em> Terdekat
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary-foreground/70 sm:text-base">
              Jelajahi jaringan Benice Coffee di berbagai kota Indonesia. Pilih outlet dan buka lokasinya langsung melalui Google Maps.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px border border-secondary-foreground/20 bg-secondary-foreground/20">
            <div className="bg-secondary p-5"><p className="text-3xl font-bold text-primary">29</p><p className="mt-2 text-xs uppercase tracking-wider text-secondary-foreground/60">Outlet terdaftar</p></div>
            <div className="bg-secondary p-5"><p className="text-3xl font-bold text-primary">4</p><p className="mt-2 text-xs uppercase tracking-wider text-secondary-foreground/60">Wilayah utama</p></div>
          </div>
        </div>
      </header>
      <Outlets />
      <div className="mx-auto max-w-6xl px-6 sm:px-10"><Footer /></div>
    </main>
  );
}
