import { openRotatingWa } from "@/lib/links";
import { cn } from "@/lib/utils";
import { Arrow, Pill } from "./ui";

// CTA WhatsApp rolling — satu tombol, tiap klik gantian ke nomor berikut.
// Tidak menampilkan nama admin/CS.
export function ContactButtons({
  paket,
  compact,
  onDark,
  label = "Chat WhatsApp",
  className,
}: {
  paket?: string;
  compact?: boolean;
  onDark?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-2", className)}>
      <Pill
        as="button"
        onClick={() => openRotatingWa(paket)}
        variant={onDark ? "accent" : "primary"}
        className={compact ? "h-7 px-3 text-[10px]" : "px-5"}
      >
        {label} <Arrow />
      </Pill>
    </div>
  );
}
