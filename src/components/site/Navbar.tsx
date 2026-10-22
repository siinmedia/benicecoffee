import { Coffee } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Pill, CircleButton } from "./ui";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-3 py-3 sm:grid-cols-[minmax(0,auto)_auto_minmax(0,auto)]"
    >
      <div className="flex w-full min-w-0 items-center gap-2 justify-between sm:justify-start">
        <span className="hairline grid size-8 shrink-0 place-items-center rounded-full">
          <span className="grid grid-cols-2 gap-[3px]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="size-[3px] rounded-full bg-foreground" />
            ))}
          </span>
        </span>
        <Pill href="/#gabung" className="hidden sm:inline-flex">
          Gabung Mitra
        </Pill>
        <Pill href="/paket" variant="outline" className="sm:hidden">
          Paket
        </Pill>
      </div>

      <div className="flex w-full items-center justify-center gap-2 sm:justify-center">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img
            src="https://cdn.anggeraji.web.id/lp-benicecoffee/logo/logo.png"
            alt="Benice Coffee logo"
            className="h-6 w-auto shrink-0 object-contain"
          />
          <span className="text-[13px] font-medium tracking-tight">Benice Coffee</span>
        </Link>
      </div>

      <div className="flex w-full items-center justify-center gap-2 sm:justify-end">
        <CircleButton label="Lihat menu" href="/menu">
          <Coffee className="size-3.5" strokeWidth={1.5} />
        </CircleButton>
        <Pill href="/consultant" variant="outline">
          Hubungi kami
        </Pill>
      </div>
    </motion.header>
  );
}