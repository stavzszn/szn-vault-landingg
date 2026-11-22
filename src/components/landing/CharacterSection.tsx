import { useRef, useState } from "react";
import { ChevronsLeftRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import sourceClip from "@/assets/wf-motion-before.mp4";
import resultClip from "@/assets/wf-motion-after.mp4";
import { Section } from "./Primitives";

export function CharacterSection() {
  const [position, setPosition] = useState(50);
  const [playing, setPlaying] = useState(true);
  const source = useRef<HTMLVideoElement>(null);
  const result = useRef<HTMLVideoElement>(null);

  const synchronize = () => {
    const before = source.current;
    const after = result.current;
    if (!before || !after || after.readyState < 2) return;
    if (Math.abs(before.currentTime - after.currentTime) > 0.15) {
      after.currentTime = before.currentTime;
    }
  };

  const togglePlayback = async () => {
    const videos = [source.current, result.current];
    if (playing) {
      videos.forEach((video) => video?.pause());
      setPlaying(false);
    } else {
      synchronize();
      try {
        await Promise.all(videos.map((video) => video?.play()));
        setPlaying(true);
      } catch {
        videos.forEach((video) => video?.pause());
        setPlaying(false);
      }
    }
  };

  return (
    <Section id="character-replacement">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-lg lg:mx-0">
          <h2 className="text-5xl font-extrabold leading-[1.05] text-nav-foreground sm:text-6xl lg:text-7xl">
            A new face.<br />The same motion.
          </h2>
          <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-nav-muted">
            Bring your AI character into an existing video, with the original
            movement, camera and setting intact.
          </p>
          <p className="mt-6 text-[12px] text-nav-muted">Motion control workflow included in the vault.</p>
        </div>

        <div className="mx-auto flex w-full max-w-[440px] items-start gap-3 lg:mr-0">
          <div className="min-w-0 flex-1">
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-nav-muted bg-nav-pill">
              <video ref={result} src={resultClip} autoPlay loop muted playsInline preload="metadata" aria-label="AI character result" className="absolute inset-0 h-full w-full object-contain" />
              <video ref={source} src={sourceClip} autoPlay loop muted playsInline preload="metadata" aria-label="Original source clip" onTimeUpdate={synchronize} onSeeked={synchronize} className="absolute inset-0 h-full w-full object-contain" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
              <span className="pointer-events-none absolute left-3 top-3 rounded bg-nav/80 px-2 py-1 text-[10px] font-semibold text-nav-foreground">Source clip</span>
              <span className="pointer-events-none absolute right-3 top-3 rounded bg-nav/80 px-2 py-1 text-[10px] font-semibold text-nav-foreground">AI result</span>
              <div className="pointer-events-none absolute bottom-0 top-0 w-px bg-nav-foreground" style={{ left: `${position}%` }}>
                <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-nav-foreground text-nav">
                  <ChevronsLeftRight className="size-4" />
                </span>
              </div>
              <input type="range" min={0} max={100} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Compare source clip and AI result" className="character-comparison-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
              <Button variant="ghost" size="icon" onClick={togglePlayback} aria-label={playing ? "Pause comparison videos" : "Play comparison videos"} title={playing ? "Pause videos" : "Play videos"} className="absolute bottom-3 right-3 rounded-full bg-nav/80 text-nav-foreground hover:bg-nav-pill-active">
                {playing ? <Pause /> : <Play />}
              </Button>
            </div>
          </div>
          <div className="flex w-16 shrink-0 flex-col gap-3 sm:w-20">
            {[{ src: sourceClip, label: "Source", value: 100 }, { src: resultClip, label: "Result", value: 0 }].map((clip) => (
              <Button key={clip.label} variant="ghost" onClick={() => setPosition(clip.value)} aria-label={`Show ${clip.label.toLowerCase()} clip`} className="relative h-auto w-full overflow-hidden rounded-lg border border-nav-border p-0 hover:border-nav-foreground">
                <video src={clip.src} muted playsInline preload="metadata" className="aspect-[9/16] w-full object-contain" />
                <span className="absolute bottom-0 left-0 right-0 bg-nav/80 py-1 text-[10px] text-nav-foreground">{clip.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}