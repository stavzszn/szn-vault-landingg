import { useState } from "react";
import { ArrowUpRight, Cloud, Cpu, Image, Monitor, ScanFace, Video } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Section } from "./Primitives";

const workloads = [
  { name: "Images & editing", detail: "Model size and image resolution", icon: Image },
  { name: "Faces & datasets", detail: "Model, batch size and training settings", icon: ScanFace },
  { name: "Video & motion", detail: "Frame count, resolution and video model", icon: Video },
];

export function HardwareSection() {
  const [platform, setPlatform] = useState("nvidia");
  const [memory, setMemory] = useState(12);
  const [ram, setRam] = useState(32);
  const cloud = platform === "cloud";
  const mac = platform === "mac";

  return (
    <Section id="hardware">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid items-end gap-5 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold text-nav-muted">YOUR SETUP / YOUR CHOICE</p>
            <h2 className="text-4xl font-extrabold leading-tight text-nav-foreground sm:text-5xl">Your computer.<br />Or a cloud GPU.</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-nav-muted">Start with the hardware you have. Keep your work local, or rent a GPU for the workflows that need more room.</p>
        </div>

        <div className="mt-10 grid border-y border-nav-border lg:grid-cols-2">
          <div className="border-b border-nav-border py-8 lg:border-b-0 lg:border-r lg:pr-10">
            <Tabs value={platform} onValueChange={setPlatform}>
              <TabsList aria-label="Computer platform" className="grid h-auto w-full grid-cols-3 rounded-lg bg-nav-pill p-1">
                <TabsTrigger value="nvidia" className="min-h-12 gap-2 whitespace-normal rounded-md px-2 text-[12px] font-bold text-nav-muted data-[state=active]:bg-nav-foreground data-[state=active]:text-nav"><Monitor className="hidden size-4 sm:block" />Windows / NVIDIA</TabsTrigger>
                <TabsTrigger value="mac" className="min-h-12 gap-2 whitespace-normal rounded-md px-2 text-[12px] font-bold text-nav-muted data-[state=active]:bg-nav-foreground data-[state=active]:text-nav"><Cpu className="hidden size-4 sm:block" />Apple Silicon</TabsTrigger>
                <TabsTrigger value="cloud" className="min-h-12 gap-2 whitespace-normal rounded-md px-2 text-[12px] font-bold text-nav-muted data-[state=active]:bg-nav-foreground data-[state=active]:text-nav"><Cloud className="hidden size-4 sm:block" />Cloud GPU</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mt-9 min-h-[220px]">
              {cloud ? (
                <div className="flex h-full flex-col items-start gap-5">
                  <Cloud className="size-10 text-nav-muted" strokeWidth={1.25} />
                  <h3 className="text-2xl font-bold text-nav-foreground">More power. Same computer.</h3>
                  <p className="text-sm leading-relaxed text-nav-muted">A rented GPU handles the generation. Your computer connects through a browser, and you choose the GPU to match your workflow.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <label htmlFor="hardware-memory" className="text-sm font-semibold text-nav-foreground">{mac ? "Unified memory" : "Graphics card memory"}</label>
                      <output htmlFor="hardware-memory" className="text-xl font-bold tabular-nums text-nav-foreground">{memory} GB</output>
                    </div>
                    <input id="hardware-memory" type="range" min={4} max={64} step={4} value={memory} onChange={(event) => setMemory(Number(event.target.value))} className="w-full cursor-pointer accent-brand" />
                    <div className="mt-2 flex justify-between text-[11px] text-nav-muted"><span>4 GB</span><span>64 GB</span></div>
                  </div>
                  {!mac && <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <label htmlFor="hardware-ram" className="text-sm font-semibold text-nav-foreground">System memory</label>
                      <output htmlFor="hardware-ram" className="text-xl font-bold tabular-nums text-nav-foreground">{ram} GB</output>
                    </div>
                    <input id="hardware-ram" type="range" min={8} max={128} step={8} value={ram} onChange={(event) => setRam(Number(event.target.value))} className="w-full cursor-pointer accent-brand" />
                    <div className="mt-2 flex justify-between text-[11px] text-nav-muted"><span>8 GB</span><span>128 GB</span></div>
                  </div>}
                  {mac && <p className="text-sm leading-relaxed text-nav-muted">Apple Silicon shares memory between the CPU and GPU. Available memory and model support both matter.</p>}
                </div>
              )}
            </div>
            <details className="mt-6 text-[12px] text-nav-muted">
              <summary className="cursor-pointer underline underline-offset-4">Where to find your memory</summary>
              <p className="mt-3 leading-relaxed">{mac ? "Apple menu → About This Mac → Memory." : "Windows: Task Manager → Performance → GPU → Dedicated GPU memory. For system memory, open the Memory panel."}</p>
            </details>
          </div>

          <div className="py-8 lg:pl-10">
            <div aria-live="polite">
              <p className="text-[11px] font-bold text-nav-muted">{cloud ? "THE CLOUD PATH" : "YOUR LOCAL STARTING POINT"}</p>
              <h3 className="mt-3 text-3xl font-extrabold text-nav-foreground">{cloud ? "Choose power as you go." : `${memory} GB ${mac ? "unified memory" : "VRAM"}.`}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nav-muted">{cloud ? "Match the rented GPU to the model and settings you want to run." : "Memory is one part of the picture. Check the chosen model and workflow requirements before running locally."}</p>
            </div>
            <div className="mt-6 divide-y divide-nav-border">
              {workloads.map(({ name, detail, icon: Icon }) => (
                <div key={name} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex min-w-0 items-center gap-3"><Icon className="size-5 shrink-0 text-nav-muted" /><div><p className="text-sm font-semibold text-nav-foreground">{name}</p><p className="mt-1 text-[11px] text-nav-muted">{detail}</p></div></div>
                  <span className="shrink-0 text-[11px] font-semibold text-nav-muted">{cloud ? "Cloud" : "Model-dependent"}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] leading-relaxed text-nav-muted">General setup guidance, not a compatibility guarantee.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-lg text-[12px] leading-relaxed text-nav-muted">Not sure which setup fits your plans? Talk it through with the SZNVAULT community.</p>
          <Button asChild variant="ghost" className="h-11 shrink-0 rounded-full border border-nav-border px-5 text-nav-foreground hover:bg-nav-pill"><a href="https://discord.gg/MkHv3SSGZ3" target="_blank" rel="noopener noreferrer">Ask about your setup<ArrowUpRight /></a></Button>
        </div>
      </div>
    </Section>
  );
}