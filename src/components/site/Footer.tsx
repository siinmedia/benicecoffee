import { Link } from "@tanstack/react-router";
import { openRotatingWa } from "@/lib/links";
import { PAKET_USAHA } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="pt-14 pb-14 text-xs sm:pb-14">
      <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
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

        <nav aria-label="Jelajahi">
          <p className="font-medium">Jelajahi</p>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            <li><a href="/menu" className="story-link">Menu</a></li>
            <li><a href="/paket" className="story-link">Paket Usaha</a></li>
            <li><a href="/paket-usaha-kopi-tanpa-royalti" className="story-link">Tanpa Royalti</a></li>
            <li><a href="/modal-usaha-kopi-5-juta" className="story-link">Modal 5 Juta</a></li>
            <li><a href="/usaha-kopi-booth" className="story-link">Booth Pinggir Jalan</a></li>
            <li><a href="/consultant" className="story-link">Chat Konsultan</a></li>
          </ul>
        </nav>

        <nav aria-label="Paket usaha">
          <p className="font-medium">Paket Usaha</p>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            {PAKET_USAHA.map((p) => (
              <li key={p.name}>
                <a href="/paket" className="story-link">{p.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-medium">Hubungi Kami</p>
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
              <a href="/consultant" className="story-link">
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Benice Coffee</span>
        <span>Kebijakan Privasi · Syarat & Ketentuan</span>
      </div>
    </footer>
  );
}
