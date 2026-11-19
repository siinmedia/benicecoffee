import { MessageCircle } from "lucide-react";

// Global CTA — render sekali di __root, tampil di semua halaman.
// Mobile: sticky bottom bar. Desktop: floating bubble.
export function StickyCta() {
  return (
    <>
      <a
        href="/#gabung"
        aria-label="Hubungi Benice Coffee"
        className="fixed right-5 bottom-5 z-50 hidden size-12 place-items-center rounded-full bg-[#22c55e] text-white shadow-lg transition-transform hover:scale-105 md:grid"
      >
        <MessageCircle className="size-5" strokeWidth={2} />
      </a>
    </>
  );
}
