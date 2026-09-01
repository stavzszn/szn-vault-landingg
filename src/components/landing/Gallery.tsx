import { useRef, useState } from "react";
import { MediaTile } from "./Primitives";

const items = [
  { label: "MODEL 01", tone: 0 },
  { label: "MODEL 02", tone: 1 },
  { label: "MODEL 03", tone: 2 },
  { label: "MODEL 04", tone: 1 },
  { label: "MODEL 05", tone: 0 },
];

export function Gallery() {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const drag = useRef<{ x: number; moved: boolean } | null>(null);

  const move = (dir: number) =>
    setActive((i) => Math.min(items.length - 1, Math.max(0, i + dir)));

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

  return (
    <section className="w-full overflow-hidden px-6 py-16">
      <p className="mb-10 text-center text-[12px] font-bold tracking-[0.2em] text-nav-muted">
        MADE ENTIRELY WITH SZNVAULT
      </p>

      <div
        className="relative mx-auto h-[420px] max-w-5xl touch-pan-y select-none [perspective:1400px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {items.map((item, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const style = {
            transform: `translateX(calc(-50% + ${offset * 210}px)) translateZ(${-abs * 220}px) rotateY(${offset === 0 ? 0 : offset < 0 ? 38 : -38}deg) scale(${1 - abs * 0.06})`,
            opacity: abs > 2 ? 0 : 1 - abs * 0.25,
            zIndex: items.length - abs,
            pointerEvents: abs > 2 ? ("none" as const) : ("auto" as const),
          };
          return (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              aria-label={`Show ${item.label}`}
              className="absolute left-1/2 top-1/2 h-[400px] w-[230px] -translate-y-1/2 cursor-pointer transition-all duration-500 ease-out [transform-style:preserve-3d]"
              style={style}
            >
              <MediaTile label={item.label} tone={item.tone} ratio="h-full" />
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            aria-label={`Go to ${item.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-nav-foreground" : "w-1.5 bg-nav-pill-active"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
