import { useRef, useState } from "react";
import { useCompact } from "./Primitives";

const tones = [
  "from-nav-pill to-nav-pill-active",
  "from-nav-pill-active to-nav-pill",
  "from-nav-pill via-nav-pill-active to-nav-pill",
];

const items = [0, 1, 2, 3, 4];

export function Gallery() {
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const n = items.length;

  const move = (dir: number) => setActive((i) => (i + dir + n) % n);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || drag.current.moved) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 50) {
      move(dx < 0 ? 1 : -1);
      drag.current.moved = true;
    }
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  const half = Math.floor(n / 2);
  const compact = useCompact();
  const cardW = compact ? 175 : 230;
  const cardH = compact ? 300 : 400;
  const step = compact ? 130 : 210;
  const depth = compact ? 160 : 220;

  return (
    <section className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
      <p className="mb-10 text-center text-[12px] font-bold tracking-[0.2em] text-nav-muted">
        MADE ENTIRELY WITH SZNVAULT
      </p>

      <div
        className="relative mx-auto h-[320px] max-w-5xl touch-pan-y select-none [perspective:1400px] sm:h-[420px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {items.map((tone, i) => {
          const offset = ((i - active + half + n) % n) - half;
          const abs = Math.abs(offset);
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label="Show clip"
              className="absolute left-1/2 top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ease-out [transform-style:preserve-3d]"
              style={{
                width: cardW,
                height: cardH,
                transform: `translateX(calc(-50% + ${offset * step}px)) translateZ(${-abs * depth}px) rotateY(${offset === 0 ? 0 : offset < 0 ? 38 : -38}deg) scale(${1 - abs * 0.06})`,
                opacity: abs > half ? 0 : 1 - abs * 0.25,
                zIndex: n - abs,
              }}
            >
              <div
                className={`relative h-full overflow-hidden rounded-2xl border border-nav-border bg-gradient-to-br ${tones[tone % 3]}`}
              >
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent_60%)]" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
