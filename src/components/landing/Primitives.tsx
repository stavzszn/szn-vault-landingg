import type { ReactNode } from "react";
import { Check } from "lucide-react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-nav-foreground md:text-4xl">
      {children}
    </h2>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-nav-muted">{children}</p>;
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-[14px] text-nav-muted">
          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function MediaTile({
  label,
  ratio = "aspect-[9/16]",
  tone = 0,
}: {
  label: string;
  ratio?: string;
  tone?: number;
}) {
  const tones = [
    "from-nav-pill to-nav-pill-active",
    "from-nav-pill-active to-nav-pill",
    "from-nav-pill via-nav-pill-active to-nav-pill",
  ];
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl border border-nav-border bg-gradient-to-br ${tones[tone % 3]}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent_60%)]" />
      <span className="absolute bottom-3 left-3 rounded-full bg-nav/70 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-nav-foreground backdrop-blur">
        {label}
      </span>
    </div>
  );
}
