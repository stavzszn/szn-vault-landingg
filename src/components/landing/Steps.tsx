import { Section } from "./Primitives";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import wfFaceBefore from "@/assets/wf-face-before.png";
import wfFaceAfter from "@/assets/wf-face-after.png";
import wfCarouselBefore from "@/assets/wf-carousel-before.png";
import wfCarouselAfter from "@/assets/wf-carousel-after.png";

type Media = { src: string; kind: "image" | "video"; alt: string };
type Step = {
  id: string;
  label: string;
  headline: string;
  body: string;
  media: { group: string; items: Media[] }[];
};
const img = (src: string, alt: string): Media => ({ src, kind: "image", alt });
const STEPS: Step[] = [
  {
    id: "faceswap", label: "FACESWAP",
    headline: "Her face, onto another photo.",
    body: "Explore new looks and concepts with your character’s face in the frame.",
    media: [
      { group: "BEFORE", items: [img(wfFaceBefore, "Original photo before the faceswap")] },
      { group: "AFTER", items: [img(wfFaceAfter, "Photo after the faceswap")] },
    ],
  },
  {
    id: "carousel-gen", label: "CAROUSEL GEN",
    headline: "One character. A complete carousel.",
    body: "Turn a single character image into a set of photos for your next carousel.",
    media: [
      { group: "SOURCE IMAGE", items: [img(wfCarouselBefore, "Source portrait for carousel generation")] },
      { group: "GENERATED CAROUSEL", items: [img(wfCarouselAfter, "Generated four-panel carousel")] },
    ],
  },
  {
    id: "image-to-video", label: "IMAGE TO VIDEO",
    headline: "From a still image to a moving scene.",
    body: "Give your images movement with an image-to-video workflow.",
    media: [],
  },
  {
    id: "dataset-gen", label: "DATASET GEN",
    headline: "Build your character’s photo set.",
    body: "Create the angles, poses and expressions for your character’s training dataset.",
    media: [],
  },
];

function MediaView({ media }: { media: Media }) {
  const cls = "block h-auto w-full rounded-2xl border border-nav-border";
  if (media.kind === "video") {
    return <video src={media.src} autoPlay muted loop playsInline aria-label={media.alt} className={cls} draggable={false} />;
  }
  return <img src={media.src} alt={media.alt} loading="lazy" draggable={false} className={cls} />;
}

export function Steps() {
  return (
    <Section id="workflows">
      <Tabs defaultValue="faceswap" className="rounded-[2rem] border border-nav-border bg-nav-pill/50 p-5 shadow-soft sm:p-10">
        <TabsList aria-label="Workflow steps" className="grid h-auto w-full grid-cols-2 gap-1 rounded-2xl border border-nav-border bg-nav p-1.5 sm:grid-cols-4">
          {STEPS.map((step, i) => (
            <TabsTrigger key={step.id} value={step.id} className="min-h-12 min-w-0 gap-2 whitespace-normal rounded-xl px-2 py-3 text-[11px] font-bold text-nav-muted shadow-none data-[state=active]:bg-nav-foreground data-[state=active]:text-nav sm:text-[13px]">
              <span className="shrink-0 opacity-60">{i + 1}</span>
              <span>{step.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {STEPS.map((step) => (
          <TabsContent key={step.id} value={step.id} className="mt-10 min-h-[420px] lg:min-h-[560px]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:pt-8">
                <h2 className="text-3xl font-extrabold uppercase leading-tight text-nav-foreground sm:text-5xl">{step.headline}</h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-nav-muted">{step.body}</p>
              </div>
              <div className="grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-2">
                {step.media.map((group) => (
                  <div key={group.group} className={step.media.length === 1 ? "min-w-0 sm:col-span-2" : "min-w-0"}>
                    <p className="mb-3 text-[11px] font-bold text-nav-muted">{group.group}</p>
                    <div className={group.items.length > 1 ? "grid grid-cols-1 items-start gap-5 sm:grid-cols-2" : "grid grid-cols-1"}>
                      {group.items.map((media, i) => <MediaView key={`${step.id}-${i}`} media={media} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
