import { Workflow } from "lucide-react";
import { archiveWorkflows } from "@/lib/archive-workflows";

export function ArchiveWorkflows() {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2">
      {archiveWorkflows.map((workflow) => (
        <article key={workflow.id} aria-label={workflow.title} className="min-w-0">
          <div className="relative flex aspect-[6/5] items-center justify-center overflow-hidden rounded-lg border border-nav-border bg-workflow-preview">
            {workflow.preview ? (
              <>
                {workflow.preview.kind === "video" ? (
                  <video src={workflow.preview.src} controls muted loop playsInline preload="metadata" aria-label={`${workflow.title} example`} className="relative z-10 h-full w-full object-contain" />
                ) : (
                  <img src={workflow.preview.src} alt={`${workflow.title} example`} loading="lazy" className="relative z-10 h-full w-full object-contain" />
                )}
                <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-nav-border bg-nav/90 px-3 py-1 text-xs text-nav-foreground">Example result</span>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 text-nav-muted">
                <Workflow className="size-10" strokeWidth={1} aria-hidden="true" />
                <span className="text-sm">Preview coming soon</span>
              </div>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-extrabold text-nav-foreground sm:text-3xl">{workflow.title}</h2>
            <span className="shrink-0 rounded-full border border-nav-border bg-nav-pill px-3 py-1 text-xs font-medium text-nav-foreground">{workflow.category}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-nav-muted">{workflow.description}</p>
        </article>
      ))}
    </div>
  );
}