import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Section, Heading, Sub } from "./Primitives";
import wfSkinBefore from "@/assets/wf-skin-before.jpg";
import wfSkinAfter from "@/assets/wf-skin-after.jpg";
import wfFaceBefore from "@/assets/wf-face-before.jpg";
import wfFaceAfter from "@/assets/wf-face-after.jpg";
import wfOutfitBefore from "@/assets/wf-outfit-before.jpg";
import wfOutfitAfter from "@/assets/wf-outfit-after.jpg";
import wfBgBefore from "@/assets/wf-bg-before.jpg";
import wfBgAfter from "@/assets/wf-bg-after.jpg";

type Pair = { title: string; desc: string; before: string; after: string };

const WORKFLOWS: Pair[] = [
  {
    title: "SKIN ENHANCE EXAMPLE",
    desc: "One-click skin cleanup that keeps the photo real.",
    before: wfSkinBefore,
    after: wfSkinAfter,
  },
  {
    title: "FACESWAP EXAMPLE",
    desc: "Swap any face onto any photo in seconds.",
    before: wfFaceBefore,
    after: wfFaceAfter,
  },
  {
    title: "OUTFIT CHANGE EXAMPLE",
    desc: "New fits without a new photoshoot.",
    before: wfOutfitBefore,
    after: wfOutfitAfter,
  },
  {
    title: "BACKGROUND SWAP EXAMPLE",
    desc: "Anywhere in the world, from your bedroom.",
    before: wfBgBefore,
    after: wfBgAfter,
  },
];

function CompareCard({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-nav-border bg-nav-pill">
      <div
        ref={ref}
        className="relative aspect-[3/4] w-full cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={pair.after}
          alt={`${pair.title} after`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt={`${pair.title} before`}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>
        {/* divider line + handle */}
        <div
          className="absolute inset-y-0 w-[2px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${pos}% - 1px)` }}
        />
        <div
          className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 backdrop-blur-sm"
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight className="h-4 w-4 text-white" />
        </div>
        {/* labels */}
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/80 backdrop-blur-sm">
          BEFORE
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/80 backdrop-blur-sm">
          AFTER
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm font-extrabold tracking-wide text-foreground">
          {pair.title}
        </p>
        <p className="mt-1 text-[13px] text-muted-foreground">{pair.desc}</p>
      </div>
    </div>
  );
}

export function Workflows() {
  return (
    <Section id="workflows">
      <Heading>7 plug &amp; play workflows</Heading>
      <Sub>
        Drag the slider — every workflow comes ready to run, no setup needed.
      </Sub>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {WORKFLOWS.map((pair) => (
          <CompareCard key={pair.title} pair={pair} />
        ))}
      </div>
    </Section>
  );
}
