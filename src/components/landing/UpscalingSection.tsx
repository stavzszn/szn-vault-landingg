import { useRef, useState } from "react";
import { ChevronsLeftRight, Image, Pause, Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import previewPhoto from "@/assets/wf-face-after.png";
import previewVideo from "@/assets/wf-motion-after.mp4";
import { Section } from "./Primitives";

function UpscalingPreview({ video = false }: { video?: boolean }) {
  const [position, setPosition] = useState(50);
  const [playing, setPlaying] = useState(true);
  const original = useRef<HTMLVideoElement>(null);
  const overlay = useRef<HTMLVideoElement>(null);
  const sync = () => {
    const a = original.current;
    const b = overlay.current;
    if (a && b && b.readyState >= 2 && Math.abs(a.currentTime - b.currentTime) > 0.15) b.currentTime = a.currentTime;
  };
  const togglePlayback = async () => {
    const clips = [original.current, overlay.current];
    if (playing) {
      clips.forEach((clip) => clip?.pause());
      setPlaying(false);
      return;
    }
    sync();
    try {
      await Promise.all(clips.map((clip) => clip?.play()));
      setPlaying(true);
    } catch {
      clips.forEach((clip) => clip?.pause());
      setPlaying(false);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg border border-nav-muted bg-nav-pill">
      {video ? (
        <video ref={original} src={previewVideo} autoPlay muted loop playsInline preload="metadata" onTimeUpdate={sync} aria-label="Video upscaling illustrative preview" className="absolute inset-0 h-full w-full object-contain" />
      ) : (
        <img src={previewPhoto} alt="Photo upscaling illustrative preview" className="absolute inset-0 h-full w-full object-contain" loading="lazy" />
      )}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} aria-hidden="true">
        {video ? (
          <video ref={overlay} src={previewVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-contain blur-[3px]" />
        ) : (
          <img src={previewPhoto} alt="" className="absolute inset-0 h-full w-full object-contain blur-[3px]" loading="lazy" />
        )}
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-nav/80 px-2 py-1 text-[10px] font-semibold text-nav-foreground">Soft</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-nav/80 px-2 py-1 text-[10px] font-semibold text-nav-foreground">Sharp</span>
      <div className="pointer-events-none absolute bottom-0 top-0 w-px bg-nav-foreground" style={{ left: `${position}%` }}>
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-nav-foreground text-nav"><ChevronsLeftRight className="size-4" /></span>
      </div>
      <input type="range" min={0} max={100} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`Compare ${video ? "video" : "photo"} detail preview`} className="character-comparison-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-nav/80 px-2 py-1 text-[10px] text-nav-foreground">Illustrative preview</span>
      {video && (
        <Button variant="ghost" size="icon" onClick={togglePlayback} aria-label={playing ? "Pause upscaling preview" : "Play upscaling preview"} title={playing ? "Pause preview" : "Play preview"} className="absolute bottom-3 right-3 rounded-full bg-nav/80 text-nav-foreground hover:bg-nav-pill-active">
          {playing ? <Pause /> : <Play />}
        </Button>
      )}
    </div>
  );
}

export function UpscalingSection() {
  return (
    <Section id="upscaling">
      <Tabs defaultValue="photo" className="mx-auto grid max-w-[960px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-10">
        <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-5xl font-extrabold leading-[1.05] text-nav-foreground sm:text-6xl lg:text-7xl">More detail.<br />Less blur.</h2>
          <p className="mx-auto mt-7 max-w-sm text-[15px] leading-relaxed text-nav-muted lg:mx-0">Give your photos and videos a sharper finish. Refine textures, hair and fine details with upscaling workflows.</p>
          <TabsList aria-label="Upscaling results" className="mt-7 h-11 rounded-full border border-nav-border bg-nav-pill p-1 text-nav-muted">
            <TabsTrigger value="photo" className="h-full gap-2 rounded-full px-5 text-[12px] font-bold data-[state=active]:bg-nav-foreground data-[state=active]:text-nav"><Image className="size-4" />Photo</TabsTrigger>
            <TabsTrigger value="video" className="h-full gap-2 rounded-full px-5 text-[12px] font-bold data-[state=active]:bg-nav-foreground data-[state=active]:text-nav"><Video className="size-4" />Video</TabsTrigger>
          </TabsList>
        </div>
        <div className="mx-auto w-full max-w-[440px]">
          <TabsContent value="photo" className="m-0"><UpscalingPreview /></TabsContent>
          <TabsContent value="video" className="m-0"><UpscalingPreview video /></TabsContent>
        </div>
      </Tabs>
    </Section>
  );
}