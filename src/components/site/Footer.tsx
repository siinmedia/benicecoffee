import { Link } from "@tanstack/react-router";
import { openRotatingWa } from "@/lib/links";
import { PAKET_USAHA } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-foreground/15 pt-10 pb-10 text-xs sm:pt-16 sm:pb-16">
      <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr] sm:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.anggeraji.web.id/lp-benicecoffee/logo/logo.png"
              alt="Benice Coffee logo"
              className="h-6 w-auto shrink-0 object-contain"
            />
            <span className="text-[13px] font-medium tracking-tight">Benice Coffee</span>
          </Link>
          <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">
            Paket usaha kopi tanpa royalti. Booth, peralatan, bahan baku, resep, dan pelatihan
            sudah termasuk.
          </p>
        </div>

        <nav aria-label="Paket usaha">
          <p className="font-bold uppercase tracking-[0.14em] text-foreground">Pilihan Paket</p>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            {PAKET_USAHA.map((p) => (
              <li key={p.name}>
                <a href="/#paket" className="story-link">{p.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-bold uppercase tracking-[0.14em] text-foreground">Hubungi Kami</p>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            <li>
              <button
                type="button"
                onClick={() => openRotatingWa()}
                className="story-link cursor-pointer"
              >
                Chat WhatsApp
              </button>
            </li>
            <li>
              <a href="/#gabung" className="story-link">
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Benice Coffee</span>
        <span>Usaha kopi tanpa royalti · BeNice Coffee</span>
      </div>
    </footer>
  );
}
