import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Pill } from "./ui";

const links = [
  ["Cerita", "#cerita"],
  ["Menu", "#menu"],
  ["Paket", "#paket"],
  ["Galeri", "#galeri"],
  ["FAQ", "#faq"],
] as const;

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-foreground/15 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8 lg:px-12"
    >
      <Link to="/" className="flex min-h-11 items-center gap-2.5">
        <img
          src="https://cdn.anggeraji.web.id/lp-benicecoffee/logo/logo.png"
          alt="Benice Coffee logo"
          className="size-9 object-contain"
        />
        <span className="font-display text-lg leading-none text-primary sm:text-xl">
          Benice Coffee
        </span>
      </Link>

      <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Navigasi utama">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="inline-flex min-h-11 items-center text-[11px] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-2">
        <Pill
          href="/consultant"
          className="hidden h-10 px-4 text-[11px] font-bold uppercase tracking-[0.1em] sm:inline-flex"
        >
          <MessageCircle className="size-3.5" strokeWidth={1.8} />
          Chat konsultan
        </Pill>
        <Pill
          href="/paket"
          variant="outline"
          className="h-10 px-4 text-[11px] font-bold uppercase tracking-[0.1em] sm:hidden"
        >
          Paket
        </Pill>
      </div>
      <nav
        className="col-span-3 flex gap-5 overflow-x-auto border-t border-foreground/10 pt-2 lg:hidden"
        aria-label="Navigasi mobile"
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
