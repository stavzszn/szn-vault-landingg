import { useState } from "react";
import { Section, Heading, Sub } from "./Primitives";

export function HardwareCheck() {
  const [mode, setMode] = useState<"local" | "cloud">("local");
  const [vram, setVram] = useState(8);
  const [ram, setRam] = useState(16);

  const ok = mode === "cloud" || (vram >= 8 && ram >= 16);

  return (
    <Section id="hardware">
      <Heading>Is my computer powerful enough?</Heading>
      <Sub>
        Most laptops from the last five years can run this. Drag the sliders to see exactly what
        your setup can handle.
      </Sub>

      <div className="mt-8 rounded-2xl border border-nav-border bg-nav-pill p-6">
        <div className="flex rounded-full bg-nav p-1">
          {(["local", "cloud"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 rounded-full px-4 py-2 text-[12px] font-bold tracking-[0.08em] transition-colors ${
                mode === m ? "bg-nav-pill-active text-nav-foreground" : "text-nav-muted"
              }`}
            >
              {m === "local" ? "MY OWN PC" : "CLOUD GPU"}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-[13px]">
            <span className="font-semibold text-nav-foreground">GPU VRAM</span>
            <span className="text-nav-muted">{vram} GB</span>
          </div>
          <input
            type="range"
            min={2}
            max={24}
            step={2}
            value={vram}
            onChange={(e) => setVram(Number(e.target.value))}
            aria-label="GPU VRAM in gigabytes"
            className="mt-3 w-full accent-[var(--brand)]"
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-[13px]">
            <span className="font-semibold text-nav-foreground">System RAM</span>
            <span className="text-nav-muted">{ram} GB</span>
          </div>
          <input
            type="range"
            min={8}
            max={64}
            step={8}
            value={ram}
            onChange={(e) => setRam(Number(e.target.value))}
            aria-label="System RAM in gigabytes"
            className="mt-3 w-full accent-[var(--brand)]"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-nav-border bg-nav-pill p-6">
        <span className="inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-brand-foreground">
          {ok ? "YOU'RE GOOD" : "USE CLOUD"}
        </span>
        <p className="mt-4 text-[15px] font-bold text-nav-foreground">
          {ok
            ? "Your setup can generate locally."
            : "Your setup is below the local minimum — rent a GPU instead."}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-nav-muted">
          {mode === "cloud"
            ? "Cloud GPUs start around $0.40/hour. You only pay while you generate, and the tutorials cover the exact setup."
            : "Local generation needs 8 GB VRAM and 16 GB RAM for comfortable batch runs. Below that, cloud is faster and cheaper than upgrading."}
        </p>
      </div>
    </Section>
  );
}
