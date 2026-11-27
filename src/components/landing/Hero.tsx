import { contentItems } from "@/lib/content-items";

const heroPhotos = contentItems.filter((item) => item.kind === "photo");
import { CHECKOUT_URL } from "./Pricing";

const fan = [
  { photo: heroPhotos[0], rotate: "-rotate-[9deg]", lift: "translate-y-6" },
  { photo: heroPhotos[2], rotate: "-rotate-[4deg]", lift: "translate-y-1" },
  { photo: heroPhotos[6], rotate: "rotate-0", lift: "-translate-y-2" },
  { photo: heroPhotos[9], rotate: "rotate-[4deg]", lift: "translate-y-1" },
  { photo: heroPhotos[13], rotate: "rotate-[9deg]", lift: "translate-y-6" },
];

export function Hero() {
  return (
    <section className="landing-hero relative w-full overflow-hidden pb-14 pt-16 sm:pb-24 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 glow-soft" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-rise max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-nav-foreground [animation-delay:120ms] sm:text-7xl lg:text-8xl">
            Your AI influencer,
            <br />
            <span>built in a weekend.</span>
          </h1>
          <div className="hero-actions animate-rise mt-11 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-nav-foreground px-8 py-4 text-center text-[13px] font-bold tracking-[0.08em] text-nav transition-shadow hover:shadow-soft"
            >
              GET INSTANT ACCESS
            </a>
            <a
              href="https://vault.sznvault.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-nav-border px-8 py-4 text-center text-[13px] font-bold tracking-[0.08em] text-nav-foreground transition-colors hover:bg-nav-pill"
            >
              SEE WHAT'S INSIDE
            </a>
          </div>
          <p className="animate-rise mt-5 text-[12px] text-nav-muted [animation-delay:450ms]">
            One-time payment · Lifetime updates · Instant delivery
          </p>
        </div>

        <div className="hero-photo-fan animate-rise mt-16 flex items-end justify-center [animation-delay:550ms] sm:mt-20">
          {fan.map((card, i) => card.photo ? (
            <img
              key={i}
              src={card.photo.src}
              alt={card.photo.alt}
              loading="lazy"
              draggable={false}
              className={`${card.rotate} ${card.lift} -mx-3 aspect-[3/4] w-28 rounded-2xl border border-nav-border object-cover shadow-soft transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-105 sm:-mx-4 sm:w-44 lg:w-52 ${i > 2 ? "hidden sm:block" : ""}`}
            />
          ) : null)}
        </div>
      </div>
    </section>
  );
}
