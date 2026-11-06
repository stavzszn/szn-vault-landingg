import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Section, Heading } from "./Primitives";
import wfMotionBefore from "@/assets/wf-motion-before.mp4";
import wfMotionAfter from "@/assets/wf-motion-after.mp4";
import wfFaceBefore from "@/assets/wf-face-before.png";
import wfFaceAfter from "@/assets/wf-face-after.png";
import wfEditBefore from "@/assets/wf-edit-before.png";
import wfEditAfter from "@/assets/wf-edit-after.png";
import wfBgBefore from "@/assets/wf-bg-before.jpg";
import wfBgAfter from "@/assets/wf-bg-after.jpg";

type Kind = "image" | "video";

type Pair = {
  title: string;
  desc: string;
  before: string;
  after: string;
  beforeKind?: Kind;
  afterKind?: Kind;
};

const WORKFLOWS: Pair[] = [
  {
    title: "MOTION CONTROL EXAMPLE",
    desc: "Steer the movement, frame by frame.",
    before: wfMotionBefore,
    after: wfMotionAfter,
    beforeKind: "video",
    afterKind: "video",
  },
  {
    title: "FACESWAP EXAMPLE",
    desc: "Swap any face onto any photo in seconds.",
    before: wfFaceBefore,
    after: wfFaceAfter,
  },
  {
    title: "IMAGE EDIT EXAMPLE",
    desc: "Edit any detail without a reshoot.",
    before: wfEditBefore,
    after: wfEditAfter,
  },
  {
    title: "CAROUSEL GEN EXAMPLE",
    desc: "One photo in, a full set out.",
    before: wfBgBefore,
    after: wfBgAfter,
  },
];

function Media({
  src,
  kind,
  alt,
  muted,
}: {
  src: string;
  kind: Kind;
  alt: string;
  muted?: boolean;
}) {
  if (kind === "video") {
    return (
      <video
        src={src}
        autoPlay
        muted={muted}
        loop
        playsInline
        aria-label={alt}
        ref={(el) => {
          if (el) el.muted = true;
        }}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      draggable={false}
      loading="lazy"
    />
  );
}

function CompareCard({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-lg border border-nav-border bg-nav-pill focus-within:ring-2 focus-within:ring-brand">
      <div className="relative aspect-[3/4] w-full select-none">
        <Media
          src={pair.after}
          kind={pair.afterKind ?? "image"}
          alt={`${pair.title} after`}
          muted
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Media
            src={pair.before}
            kind={pair.beforeKind ?? "image"}
            alt={`${pair.title} before`}
            muted
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

const GRID =
  "linear-gradient(to right, color-mix(in oklab, var(--nav-foreground) 6%, transparent) 1px, transparent 1px), " +
  "linear-gradient(to bottom, color-mix(in oklab, var(--nav-foreground) 6%, transparent) 1px, transparent 1px)";

const DUST = [
  "radial-gradient(circle 1.5px at 10% 26%, color-mix(in oklab, var(--nav-foreground) 75%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 28% 72%, color-mix(in oklab, var(--nav-foreground) 50%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 2px at 52% 18%, color-mix(in oklab, var(--nav-foreground) 60%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 68% 58%, color-mix(in oklab, var(--nav-foreground) 45%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1.5px at 86% 34%, color-mix(in oklab, var(--nav-foreground) 65%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 42% 86%, color-mix(in oklab, var(--nav-foreground) 40%, transparent) 48%, transparent 52%)",
].join(", ");

const FADE = "radial-gradient(ellipse 75% 85% at 50% 50%, black 20%, transparent 78%)";

function MoreWorkflows() {
  return (
    <div className="relative mt-5 overflow-hidden rounded-3xl border border-nav-border bg-nav-pill px-6 py-10 text-center sm:px-10 sm:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: GRID,
          backgroundSize: "32px 32px",
          maskImage: FADE,
          WebkitMaskImage: FADE,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: DUST }}
      />
      <h3 className="relative text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
        <span className="text-nav-foreground">And</span>{" "}
        <span className="text-nav-muted">2 more workflows</span>
      </h3>
      <p className="relative mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-nav-muted md:text-sm">
        Besides these workflows, we also have an image generation workflow and an
        image-to-video workflow, adding up to 6 workflows in the vault.
      </p>
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
        <MoreWorkflows />
      </div>
    </Section>
  );
}
