import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Section, Heading } from "./Primitives";
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

  return (
    <div className="overflow-hidden rounded-lg border border-nav-border bg-nav-pill focus-within:ring-2 focus-within:ring-brand">
      <div className="relative aspect-[3/4] w-full select-none">
        <img
          src={pair.after}
          alt={`${pair.title} after`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
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
            loading="lazy"
          />
        </div>
        {/* divider line + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-nav-foreground/90"
          style={{ left: `calc(${pos}% - 1px)` }}
        />
        <div
          className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-nav-foreground/40 bg-nav-foreground"
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight className="h-4 w-4 text-nav" />
        </div>
        <p className="pointer-events-none absolute inset-x-3 top-3 text-center">
          <span className="inline-block rounded-full bg-nav/85 px-3 py-1 text-[10px] font-extrabold text-nav-foreground sm:text-xs">
            {pair.title}
          </span>
        </p>
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-nav/70 px-2.5 py-1 text-[10px] font-bold text-nav-foreground backdrop-blur-sm">
          BEFORE
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-nav/70 px-2.5 py-1 text-[10px] font-bold text-nav-foreground backdrop-blur-sm">
          AFTER
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(event) => setPos(Number(event.target.value))}
          aria-label={`Compare ${pair.title.toLowerCase()}`}
          aria-valuetext={`${pos}% before image`}
          className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}

export function Workflows() {
  return (
    <Section id="workflows">
      <Heading>Plug and Use ComfyUI Workflows</Heading>
      <div className="mx-auto mt-10 max-w-[820px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {WORKFLOWS.map((pair) => (
            <CompareCard key={pair.title} pair={pair} />
          ))}
        </div>
      </div>
    </Section>
  );
}
