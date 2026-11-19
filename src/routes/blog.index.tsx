import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog/")({ component: BlogIndex });

const posts = [["/blog/paket-usaha-kopi-benice-coffee", "Paket Usaha Kopi BeNice Coffee: Peluang Bisnis Kopi untuk Memulai Usaha Sendiri"], ["/blog/tips-memulai-usaha-kopi", "7 Tips Memulai Usaha Kopi untuk Pemula agar Tidak Salah Langkah"], ["/blog/modal-usaha-kopi", "Berapa Modal Usaha Kopi? Ini Hal yang Perlu Dipersiapkan Sebelum Memulai"], ["/blog/kesalahan-memulai-bisnis-kopi", "7 Kesalahan yang Harus Dihindari Saat Memulai Bisnis Kopi"]] as const;

function BlogIndex() {
  return <><header className="bg-secondary text-secondary-foreground"><div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Benice Coffee · Journal</p><h1 className="display mt-4 max-w-3xl text-[clamp(2.75rem,7vw,6rem)]">Insight untuk <em className="italic text-primary">usaha kopi</em></h1><p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary-foreground/70 sm:text-base">Baca panduan dan insight untuk memulai usaha kopi bersama Benice Coffee.</p></div></header><section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"><div className="max-w-xl border-t border-foreground/15 pt-6"><p className="section-kicker">Artikel terbaru</p>{posts.map(([href, title]) => <article key={href}><h2 className="mt-3 text-3xl font-bold tracking-tight">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Pelajari peluang bisnis kopi, paket usaha, modal, strategi, dan tips memilih paket usaha BeNice Coffee.</p><a href={href} className="mt-5 inline-flex text-sm font-bold text-primary hover:underline">Baca artikel →</a></article>)}</div></section><div className="mx-auto max-w-6xl px-6 sm:px-10"><Footer /></div></>;
}
