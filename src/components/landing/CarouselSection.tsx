import { Section } from "./Primitives";
import wfCarouselBefore from "@/assets/wf-carousel-before.png";
import { galleryPhotos } from "@/lib/archive-photos";

const slides = [
  { src: wfCarouselBefore, alt: "The single source photo used to generate the carousel", label: "Your photo" },
  ...galleryPhotos.slice(0, 3).map((photo, i) => ({
    src: photo.src,
    alt: `Generated carousel slide ${i + 1} with the same character`,
    label: `Slide ${i + 1}`,
  })),
];

export function CarouselSection() {
  return (
    <Section id="carousel">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-nav-foreground sm:text-6xl">
          One photo.
          <br />
          A whole <span className="font-serif italic font-normal">carousel.</span>
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-nav-muted lg:justify-self-end">
          Give it one photo and get a full post: same girl, same outfit, same
          spot, new poses and angles. Every slide looks like a friend took it
          on a phone.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {slides.map((slide) => (
          <figure key={slide.label} className="min-w-0">
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              draggable={false}
              className="aspect-[3/4] w-full rounded-2xl border border-nav-border object-cover"
            />
            <figcaption className="mt-2.5 text-[12px] font-semibold text-nav-muted">
              {slide.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
