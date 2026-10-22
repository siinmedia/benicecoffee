import { MessageCircle } from "lucide-react";
import { Pill } from "./ui";

// Global CTA — render sekali di __root, tampil di semua halaman.
// Mobile: sticky bottom bar. Desktop: floating bubble.
export function StickyCta() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-background/90 px-3 pt-2 backdrop-blur-md sm:hidden"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-2">
          <Pill href="/paket" variant="outline" className="h-10 flex-1 justify-center">
            Lihat Paket
          </Pill>
          <Pill href="/consultant" className="h-10 flex-1 justify-center">
            Chat Konsultan
          </Pill>
        </div>
      </div>
      <a
        href="/consultant"
        aria-label="Chat konsultan Benice Coffee"
        className="fixed right-5 bottom-5 z-50 hidden size-12 place-items-center rounded-full bg-[#22c55e] text-white shadow-lg transition-transform hover:scale-105 md:grid"
      >
        <MessageCircle className="size-5" strokeWidth={2} />
      </a>
    </>
  );
}
