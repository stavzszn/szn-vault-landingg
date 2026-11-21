import { useState, type ReactNode } from "react";
import { Section } from "./Primitives";
import { galleryPhotos } from "@/lib/archive-photos";
import wfMotionBefore from "@/assets/wf-motion-before.mp4";
import wfMotionAfter from "@/assets/wf-motion-after.mp4";
import wfFaceBefore from "@/assets/wf-face-before.png";
import wfFaceAfter from "@/assets/wf-face-after.png";
import wfEditBefore from "@/assets/wf-edit-before.png";
import wfEditAfter from "@/assets/wf-edit-after.png";
import wfCarouselBefore from "@/assets/wf-carousel-before.png";
import wfCarouselAfter from "@/assets/wf-carousel-after.png";

type Media = { src: string; kind: "image" | "video"; alt: string };

type Step = {
  id: string;
  label: string;
  headline: ReactNode;
  body: string;
  chips: { label: string; value: string }[];
  media: { group: string; items: Media[]; cols: string }[];
  caption: string;
};

const img = (src: string, alt: string): Media => ({ src, kind: "image", alt });
const vid = (src: string, alt: string): Media => ({ src, kind: "video", alt });

const STEPS: Step[] = [
  {
    id: "dataset",
    label: "Dataset",
    headline: "One photo becomes a full sheet.",
    body: "You give it one photo of your character. The generator returns the angles, the body, the poses and the expressions of the same face: everything you need to train your model.",
    chips: [
      { label: "INPUT", value: "1 photo" },
      { label: "OUTPUT", value: "Angles, poses, expressions" },
      { label: "READY FOR", value: "Training" },
    ],
    media: [
      {
        group: "ANGLES · ONE SINGLE FACE",
        cols: "grid-cols-4",
        items: [0, 1, 2, 3].map((i) => img(galleryPhotos[i]!.src, galleryPhotos[i]!.alt)),
      },
      {
        group: "BODY AND POSES",
        cols: "grid-cols-4",
        items: [4, 5].map((i) => img(galleryPhotos[i]!.src, galleryPhotos[i]!.alt)),
      },
    ],
    caption: "From a real sheet: one photo in, everything else out.",
  },
  {
    id: "training",
    label: "Training",
    headline: "Train her once. Keep her forever.",
    body: "Turn the sheet into a trained model that knows your character's face from every angle. After that, every new photo or video starts from her — no retraining, no drift.",
    chips: [
      { label: "INPUT", value: "The photo sheet" },
      { label: "OUTPUT", value: "Your own model" },
      { label: "RUNS ON", value: "Local or cloud GPU" },
    ],
    media: [
      {
        group: "ONE PHOTO IN",
        cols: "grid-cols-2",
        items: [img(wfCarouselBefore, "Single source photo of the AI character")],
      },
      {
        group: "FULL SET OUT",
        cols: "grid-cols-2",
        items: [img(wfCarouselAfter, "Generated four-panel set of the same AI character")],
      },
    ],
    caption: "One training run, unlimited generations.",
  },
  {
    id: "images",
    label: "Images",
    headline: "Edit any detail without a reshoot.",
    body: "Change the outfit, the scene, the light or the pose on any photo while the face stays exactly the same. New content for every platform, on demand.",
    chips: [
      { label: "INPUT", value: "Any photo" },
      { label: "OUTPUT", value: "New outfit, new scene" },
      { label: "QUALITY", value: "Hyper-real" },
    ],
    media: [
      {
        group: "BEFORE",
        cols: "grid-cols-2",
        items: [img(wfEditBefore, "Original photo before the AI edit")],
      },
      {
        group: "AFTER",
        cols: "grid-cols-2",
        items: [img(wfEditAfter, "Same photo after the AI outfit edit")],
      },
    ],
    caption: "Same girl, same pose — a completely new shot.",
  },
  {
    id: "face-swap",
    label: "Face swap",
    headline: "Her face, onto any photo.",
    body: "Take any photo you like and put your character's face on it in seconds. Test styles, trends and concepts before you ever generate a full set.",
    chips: [
      { label: "INPUT", value: "1 face photo" },
      { label: "OUTPUT", value: "Unlimited photos" },
      { label: "TIME", value: "Seconds" },
    ],
    media: [
      {
        group: "BEFORE",
        cols: "grid-cols-2",
        items: [img(wfFaceBefore, "Photo before the face swap")],
      },
      {
        group: "AFTER",
        cols: "grid-cols-2",
        items: [img(wfFaceAfter, "Photo after the face swap")],
      },
    ],
    caption: "The face stays consistent across every swap.",
  },
  {
    id: "video",
    label: "Video",
    headline: "Bring her to life in motion.",
    body: "Steer the movement frame by frame. Turn a still character into walking, talking, moving clips ready for reels and TikTok.",
    chips: [
      { label: "INPUT", value: "One clip" },
      { label: "OUTPUT", value: "Full motion control" },
      { label: "FORMAT", value: "MP4, ready to post" },
    ],
    media: [
      {
        group: "SOURCE CLIP",
        cols: "grid-cols-2",
        items: [vid(wfMotionBefore, "Source clip before motion control")],
      },
      {
        group: "MOTION CONTROLLED",
        cols: "grid-cols-2",
        items: [vid(wfMotionAfter, "Clip after motion control is applied")],
      },
    ],
    caption: "From a single clip to a full moving character.",
  },
];

function MediaView({ media }: { media: Media }) {
  const cls = "aspect-[3/4] w-full rounded-2xl border border-nav-border object-cover";
  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={media.alt}
        ref={(el) => {
          if (el) el.muted = true;
        }}
        className={cls}
        draggable={false}
      />
    );
  }
  return <img src={media.src} alt={media.alt} loading="lazy" draggable={false} className={cls} />;
}

export function Steps() {
  const [active, setActive] = useState(0);
  const step = STEPS[active]!;

  return (
    <Section id="workflows">
      <div className="rounded-[2rem] border border-nav-border bg-nav-pill/50 p-5 shadow-soft sm:p-10">
        {/* step tabs */}
        <div
          role="tablist"
          aria-label="Workflow steps"
          className="flex flex-wrap items-center gap-1 rounded-full border border-nav-border bg-nav p-1.5 sm:inline-flex"
        >
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold tracking-[0.04em] transition-colors ${
                i === active
                  ? "bg-nav-foreground text-nav"
                  : "text-nav-muted hover:text-nav-foreground"
              }`}
            >
              <span className={i === active ? "text-nav/60" : "text-nav-muted/60"}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-nav-foreground sm:text-5xl">
              {step.headline}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-nav-muted">{step.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {step.chips.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-nav-border bg-nav px-5 py-3.5"
                >
                  <p className="text-[10px] font-bold tracking-[0.16em] text-nav-muted">{c.label}</p>
                  <p className="mt-1 text-[14px] font-bold text-nav-foreground">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-6 gap-y-5">
              {step.media.map((group) => (
                <div key={group.group} className="min-w-0 flex-1 basis-[200px]">
                  <p className="mb-2.5 text-[11px] font-bold tracking-[0.14em] text-nav-muted">
                    {group.group}
                  </p>
                  <div className={`grid ${group.cols} gap-3`}>
                    {group.items.map((m, i) => (
                      <MediaView key={`${step.id}-${group.group}-${i}`} media={m} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-nav-muted">{step.caption}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
