import { Check } from "lucide-react";
import { galleryPhotos } from "@/lib/archive-photos";
import { CHECKOUT_URL } from "./Pricing";

const bullets = [
  "Full step-by-step training from zero",
  "Build hyper-realistic AI models in minutes",
  "Local host everything or a cheap cloud GPU",
  "Consistent faces across every post",
  "Private community and weekly updates",
  "Lifetime access, one payment, no subscriptions",
];

const letters = "SZNVAULT".split("");

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 glow-soft" />
      <div className="relative mx-auto max-w-6xl">
        <h1 aria-label="SZNVAULT" className="flex justify-center select-none">
          {letters.map((l, i) => {
            const photo = galleryPhotos[i % galleryPhotos.length]!;
            return (
              <span
                key={i}
                aria-hidden
                className="animate-rise bg-cover bg-center bg-clip-text text-[19vw] font-black leading-[0.85] tracking-[-0.06em] text-transparent [-webkit-background-clip:text] lg:text-[190px]"
                style={{ backgroundImage: `url(${photo.src})`, animationDelay: `${i * 70}ms` }}
              >
                {l}
              </span>
            );
          })}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div className="animate-rise [animation-delay:500ms]">
            <p className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-nav-foreground sm:text-5xl">
              Everything in one vault.
              <br />
              <span className="font-serif font-normal italic">One payment.</span>
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-nav-muted">
              The full playbook for creating, training and monetizing hyper-realistic AI models. No coding, no agency, no monthly software bills.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-nav-foreground px-7 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-nav transition-shadow hover:shadow-soft"
              >
                GET INSTANT ACCESS
              </a>
              <a
                href="https://vault.sznvault.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-nav-border px-7 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-nav-foreground transition-colors hover:bg-nav-pill"
              >
                SEE WHAT'S INSIDE
              </a>
            </div>
            <p className="mt-4 text-[12px] text-nav-muted">
              One-time payment · Lifetime updates · Instant delivery
            </p>
          </div>

          <div className="animate-rise rounded-3xl border border-nav-border bg-nav-pill/60 p-6 [animation-delay:650ms]">
            <p className="text-[12px] font-bold tracking-[0.14em] text-nav-foreground">WHAT YOU GET</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14px] text-nav-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-nav-foreground/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Statement() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-16">
      <p className="mx-auto max-w-4xl text-center font-serif text-3xl italic leading-tight text-nav-foreground sm:text-5xl md:text-6xl">
        Every photo on this page came out of our workflows.
      </p>
    </section>
  );
}
