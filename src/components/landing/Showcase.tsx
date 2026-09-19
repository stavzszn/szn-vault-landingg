import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Section, Heading, Sub, CheckList } from "./Primitives";

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
      <CheckList
        items={[
          "Install and setup",
          "Building your base model",
          "Face consistency training",
          "Posing and outfits",
          "Backgrounds and scenes",
          "Upscaling to 4K",
          "Video generation",
          "Lipsync and voice",
          "Batch content production",
          "Posting workflow and scheduling",
        ]}
      />
    </Section>
  );
}
