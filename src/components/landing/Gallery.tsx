import { useRef, useState } from "react";
import { useCompact } from "./Primitives";
import img1 from "@/assets/bsfd.png.asset.json";
import img2 from "@/assets/nyt.png.asset.json";
import img3 from "@/assets/nhg.png.asset.json";
import img4 from "@/assets/vfds.png.asset.json";
import img5 from "@/assets/bfd.png.asset.json";

const items = [
  { src: img1.url, alt: "AI model sample 1" },
  { src: img2.url, alt: "AI model sample 2" },
  { src: img3.url, alt: "AI model sample 3" },
  { src: img4.url, alt: "AI model sample 4" },
  { src: img5.url, alt: "AI model sample 5" },
];

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
  const cardW = compact ? 210 : 280;
  const cardH = compact ? 360 : 480;
  const step = compact ? 130 : 210;
  const depth = compact ? 160 : 220;

  return (
    <section className="w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="mb-10 text-center text-2xl font-extrabold tracking-[-0.02em] text-nav-foreground sm:text-3xl md:text-4xl">
        MADE ENTIRELY WITH SZNVAULT
      </h2>

      <div
        className="relative mx-auto h-[380px] max-w-5xl touch-pan-y select-none [perspective:1400px] sm:h-[500px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {items.map((item, i) => {
          const offset = ((i - active + half + n) % n) - half;
          const abs = Math.abs(offset);
          return (
            <button
              key={item.src}
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
              <div className="relative h-full overflow-hidden rounded-2xl border border-nav-border bg-nav-pill">
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
