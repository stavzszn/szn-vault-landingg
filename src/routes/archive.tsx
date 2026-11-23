import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryPhotos } from "@/lib/archive-photos";
import { ArchiveWorkflows } from "@/components/ArchiveWorkflows";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const collections = [
  { id: "content", label: "Content" },
  { id: "workflows", label: "Workflows" },
];

const title = "The Archive — AI Content & ComfyUI Workflows | SZNVAULT";
const description = "Explore AI character photos and eight ComfyUI workflow showcases in the SZNVAULT archive.";

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
  const [collection, setCollection] = useState("content");
  const [open, setOpen] = useState<number | null>(null);
  const photos = galleryPhotos;
  const n = photos.length;

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

  const current = open === null ? null : photos[open];

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
          <Tabs value={collection} onValueChange={(value) => { setOpen(null); setCollection(value); }} className="mt-7">
            <div className="flex justify-center">
              <TabsList aria-label="Archive collection" className="relative grid h-12 w-64 grid-cols-2 rounded-full border border-nav-border bg-nav-pill p-1 text-nav-muted">
                <span aria-hidden="true" className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-nav-foreground transition-transform duration-200 motion-reduce:transition-none ${collection === "workflows" ? "translate-x-full" : "translate-x-0"}`} />
                {collections.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className="relative z-10 h-full rounded-full font-bold text-nav-muted data-[state=active]:bg-transparent data-[state=active]:text-nav data-[state=active]:shadow-none focus-visible:ring-nav-foreground">
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
              <TabsContent value="content" className="mt-10">
                <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-4">
                  {[0, 1, 2, 3].map((col) => (
                    <div key={col} className={`flex-col gap-4 ${col > 1 ? "hidden md:flex" : "flex"}`}>
                      {photos.filter((_, i) => i % 4 === col).map((p) => {
                        const i = photos.indexOf(p);
                        return (
                          <Button
                            variant="ghost"
                            key={p.src}
                            onClick={() => setOpen(i)}
                            className="block h-auto w-full overflow-hidden rounded-2xl border border-nav-border p-0 hover:bg-transparent"
                            aria-label={`Open photo ${i + 1}`}
                          >
                            <img src={p.src} alt={p.alt} loading="lazy" className="block h-auto w-full transition-transform duration-500 hover:scale-[1.03]" />
                          </Button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="workflows" className="mt-10">
                <ArchiveWorkflows />
              </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      {current && open !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-center justify-center bg-nav/95 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <img src={current.src} alt={current.alt} className="max-h-[88vh] max-w-full rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full bg-nav-pill text-nav-foreground hover:bg-nav-pill-active"><X className="size-5" /></Button>
          <Button variant="ghost" size="icon" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + n) % n); }} className="absolute left-3 rounded-full bg-nav-pill text-nav-foreground hover:bg-nav-pill-active"><ChevronLeft className="size-6" /></Button>
          <Button variant="ghost" size="icon" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % n); }} className="absolute right-3 rounded-full bg-nav-pill text-nav-foreground hover:bg-nav-pill-active"><ChevronRight className="size-6" /></Button>
        </div>
      )}
    </div>
  );
}
