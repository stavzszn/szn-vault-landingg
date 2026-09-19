import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Section, Heading, Sub } from "./Primitives";

// 👇 Paste your YouTube link here (watch, youtu.be or shorts links all work)
const YOUTUBE_URL = "";

function getYouTubeEmbed(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return `https://www.youtube.com/embed/${m[1]}`;
  }
  return null;
}

const quotes = [
  {
    name: "@jaymakes",
    text: "First page hit 120k followers in two months. Never touched a camera.",
  },
  { name: "@lumen.ai", text: "Made back the cost in 9 days from one Fanvue account." },
  { name: "@sofiabuilds", text: "The face-consistency method is the part nobody else teaches." },
  { name: "@0xnate", text: "Runs fine on my 3060. Cloud GPU section saved me a rebuild." },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const n = quotes.length;

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

  return (
    <Section>
      <Heading>The users speak for themselves</Heading>
      <div
        className="relative mx-auto mt-10 h-[190px] max-w-5xl touch-pan-y select-none [perspective:1200px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {quotes.map((q, i) => {
          const offset = ((i - active + half + n) % n) - half;
          const abs = Math.abs(offset);
          return (
            <button
              key={q.name}
              onClick={() => setActive(i)}
              aria-label={`Show review from ${q.name}`}
              className="absolute left-1/2 top-1/2 h-[170px] w-[300px] -translate-y-1/2 cursor-pointer text-left transition-all duration-500 ease-out [transform-style:preserve-3d]"
              style={{
                transform: `translateX(calc(-50% + ${offset * 260}px)) translateZ(${-abs * 240}px) rotateY(${offset === 0 ? 0 : offset < 0 ? 32 : -32}deg) scale(${1 - abs * 0.06})`,
                opacity: abs > half ? 0 : 1 - abs * 0.3,
                zIndex: n - abs,
              }}
            >
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-nav-border bg-nav-pill p-5">
                <blockquote className="text-[14px] leading-relaxed text-nav-muted">
                  "{q.text}"
                </blockquote>
                <figcaption className="text-[13px] font-bold text-nav-foreground">{q.name}</figcaption>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

export function Tutorials() {
  return (
    <Section>
      <Heading>14 step-by-step tutorials</Heading>
      <Sub>Every click recorded. Follow along and you'll have your first model tonight.</Sub>
      {(() => {
        const embed = getYouTubeEmbed(YOUTUBE_URL);
        return (
          <div className="mt-8 overflow-hidden rounded-2xl border border-nav-border bg-nav-pill">
            {embed ? (
              <div className="aspect-video w-full">
                <iframe
                  src={embed}
                  title="Tutorial video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative grid aspect-video w-full place-items-center bg-gradient-to-br from-nav-pill to-nav-pill-active">
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent_65%)]" />
                <span className="relative grid size-16 place-items-center rounded-full bg-nav-foreground text-nav">
                  <Play className="size-6 translate-x-0.5 fill-current" />
                </span>
              </div>
            )}
          </div>
        );
      })()}
      <BentoGrid />
    </Section>
  );
}

/* ---------------- Bento cards (under the tutorial video) ---------------- */

const STARFIELD = [
  "radial-gradient(circle 1.5px at 12% 22%, color-mix(in oklab, var(--nav-foreground) 80%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 34% 68%, color-mix(in oklab, var(--nav-foreground) 55%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 2px at 58% 18%, color-mix(in oklab, var(--nav-foreground) 65%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 74% 52%, color-mix(in oklab, var(--nav-foreground) 50%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1.5px at 88% 30%, color-mix(in oklab, var(--nav-foreground) 70%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 22% 84%, color-mix(in oklab, var(--nav-foreground) 45%, transparent) 48%, transparent 52%)",
  "radial-gradient(circle 1px at 66% 82%, color-mix(in oklab, var(--nav-foreground) 55%, transparent) 48%, transparent 52%)",
].join(", ");

function BentoCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-nav-border bg-nav-pill p-6 transition-colors duration-300 hover:border-nav-pill-active md:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: STARFIELD }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

function BentoTitle({ solid, faded }: { solid: string; faded?: string }) {
  return (
    <h3 className="text-xl font-extrabold tracking-[-0.02em] md:text-2xl">
      <span className="text-nav-foreground">{solid}</span>
      {faded ? <span className="text-nav-muted"> {faded}</span> : null}
    </h3>
  );
}

function BentoText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-[13px] leading-relaxed text-nav-muted md:text-sm">{children}</p>;
}

function BentoGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
      {/* Row 1 — small left */}
      <BentoCard className="md:col-span-4">
        <div className="flex flex-1 items-center justify-center py-4">
          <span
            className="inline-flex -rotate-3 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-nav-foreground transition-transform duration-300 group-hover:rotate-0"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, var(--brand) 85%, transparent), color-mix(in oklab, var(--brand) 45%, transparent))",
              boxShadow: "0 0 28px color-mix(in oklab, var(--brand) 45%, transparent)",
            }}
          >
            + New Model
          </span>
        </div>
        <BentoTitle solid="Model" faded="Training" />
        <BentoText>7 READY TO USE WORKFLOWS</BentoText>
      </BentoCard>

      {/* Row 1 — wide right, glowing orb */}
      <BentoCard className="md:col-span-8">
        <div
          className="pointer-events-none absolute -right-24 -top-32 size-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, color-mix(in oklab, var(--brand) 55%, transparent), color-mix(in oklab, var(--brand) 20%, transparent) 45%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="pointer-events-none absolute right-10 top-16 size-56 rounded-full border opacity-25"
          style={{ borderColor: "color-mix(in oklab, var(--brand) 60%, transparent)" }}
        />
        <div
          className="pointer-events-none absolute -right-6 top-28 size-72 rounded-full border opacity-20"
          style={{ borderColor: "color-mix(in oklab, var(--brand) 60%, transparent)" }}
        />
        <div className="relative my-auto max-w-sm">
          <BentoTitle solid="Automation" />
          <BentoText>12 TUTORIAL VIDEOS</BentoText>
        </div>
      </BentoCard>

      {/* Row 2 — wide left, rings + rows mock */}
      <BentoCard className="md:col-span-7">
        <div
          className="pointer-events-none absolute -right-16 -top-24 size-[380px] opacity-40"
          style={{
            background:
              "repeating-radial-gradient(circle at center, color-mix(in oklab, var(--brand) 25%, transparent) 0 1px, transparent 1px 36px)",
          }}
        />
        <div className="absolute right-6 top-6 w-44 space-y-2 rounded-xl border border-nav-border bg-nav/60 p-3 backdrop-blur-sm">
          <div className="h-2 w-3/4 rounded-full bg-nav-pill-active" />
          <div className="h-2 w-full rounded-full bg-nav-pill-active" />
          <div className="h-2 w-2/3 rounded-full bg-nav-pill-active" />
        </div>
        <div className="relative mt-auto max-w-xs">
          <BentoTitle solid="Face" faded="Consistency" />
          <BentoText>
            Lock your model's identity across every pose, outfit and scene with our
            consistency method.
          </BentoText>
        </div>
      </BentoCard>

      {/* Row 2 — small right, grid lines */}
      <BentoCard className="md:col-span-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "linear-gradient(color-mix(in oklab, var(--nav-foreground) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--nav-foreground) 12%, transparent) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at 50% 45%, black, transparent 75%)",
          }}
        />
        <div className="relative my-auto text-center">
          <BentoTitle solid="Post" faded="Scheduling" />
          <BentoText>AND A LOT MORE</BentoText>
        </div>
      </BentoCard>
    </div>
  );
}
