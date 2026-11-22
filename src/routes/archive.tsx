import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { archivePhotos } from "@/lib/archive-photos";

const title = "The Archive — AI Photos Made with SZNVAULT";
const description = "Browse hyper-realistic AI influencer photos created entirely with SZNVAULT ComfyUI workflows.";

export const Route = createFileRoute("/archive")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sznvault.com/archive" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sznvault.com/archive" }],
  }),
  component: Archive,
});

function Archive() {
  const [open, setOpen] = useState<number | null>(null);
  const n = archivePhotos.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, n]);

  const current = open === null ? null : archivePhotos[open];

  return (
    <div className="min-h-screen overflow-x-clip bg-nav">
      <Navbar />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <h1 className="text-center text-5xl font-extrabold tracking-[-0.03em] text-nav-foreground sm:text-7xl">
            The <span>archive.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-nav-muted">
            Every photo here came straight out of SZNVAULT workflows.
          </p>
          <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {archivePhotos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setOpen(i)}
                className="mb-4 block w-full overflow-hidden rounded-2xl border border-nav-border"
                aria-label={`Open photo ${i + 1}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="block h-auto w-full transition-transform duration-500 hover:scale-[1.03]" />
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {current && open !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center bg-nav/95 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <img src={current.src} alt={current.alt} className="max-h-[88vh] max-w-full rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full bg-nav-pill p-2 text-nav-foreground"><X className="size-5" /></button>
          <button aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + n) % n); }} className="absolute left-3 rounded-full bg-nav-pill p-2 text-nav-foreground"><ChevronLeft className="size-6" /></button>
          <button aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % n); }} className="absolute right-3 rounded-full bg-nav-pill p-2 text-nav-foreground"><ChevronRight className="size-6" /></button>
        </div>
      )}
    </div>
  );
}
