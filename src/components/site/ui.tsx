import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({
  children,
  variant = "primary",
  className,
  as = "button",
  href,
  onClick,
  type = "button",
  ariaLabel,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "white";
  className?: string;
  as?: "button" | "div";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const Comp = href ? motion.a : as === "div" ? motion.div : motion.button;
  const extra = href
    ? {
        href,
        ...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {}),
      }
    : as === "div"
      ? {}
      : { type };
  return (
    <Comp
      {...(extra as Record<string, unknown>)}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "inline-flex h-9 cursor-pointer items-center gap-2 rounded-full px-4 text-xs tracking-tight whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:h-8",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "outline" && "hairline bg-card text-foreground",
        variant === "white" && "bg-card/85 text-foreground backdrop-blur-md",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function CircleButton({
  children,
  variant = "outline",
  className,
  label,
  onClick,
  href,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "white";
  className?: string;
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      {...(href
        ? ({ href, ...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {}) } as Record<
            string,
            unknown
          >)
        : ({ type: "button" } as Record<string, unknown>))}
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "grid size-9 shrink-0 cursor-pointer place-items-center rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:size-8",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "outline" && "hairline bg-card text-foreground",
        variant === "white" && "bg-card/85 text-foreground backdrop-blur-md",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  lines,
  className,
}: {
  lines: ReactNode[];
  className?: string;
}) {
  return (
    <Reveal className={cn("text-center", className)}>
      <h2 className="display text-[clamp(2.25rem,6vw,4rem)]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </Reveal>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={cn("size-3", className)} fill="none" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
