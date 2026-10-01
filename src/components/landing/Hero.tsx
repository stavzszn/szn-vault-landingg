import { Check, Play } from "lucide-react";

const bullets = [
  "Full step-by-step training from zero",
  "Build hyper-realistic AI models in minutes",
  "Local host everything or a cheap cloud GPU",
  "Consistent faces across every post",
  "Private community and weekly updates",
  "Lifetime access, one payment, no subscriptions",
];

export function Hero() {
  return (
    <section className="w-full px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
      <div className="mx-auto max-w-3xl">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-nav-border bg-gradient-to-br from-nav-pill to-nav-pill-active">
          <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--brand)_50%,transparent),transparent_60%)]" />
          <button
            aria-label="Play intro video"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-nav-foreground text-nav transition-transform hover:scale-105">
              <Play className="size-6 translate-x-0.5 fill-current" />
            </span>
          </button>
          <span className="absolute bottom-4 left-4 rounded-full bg-nav/70 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-nav-foreground backdrop-blur">
            04:12
          </span>
        </div>

        <h1 className="mt-8 text-center text-3xl font-extrabold tracking-[-0.02em] text-nav-foreground md:text-4xl">
          Run your own AI influencers with SZNVAULT
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-nav-muted">
          The full playbook for creating, training and monetizing hyper-realistic AI models. No coding, no agency, no monthly software bills.
        </p>

        <p className="mt-7 text-[13px] font-bold tracking-[0.12em] text-nav-foreground">
          WHAT YOU GET
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[14px] text-nav-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-nav-foreground px-6 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90"
          >
            GET INSTANT ACCESS
          </a>
          <a
            href="#faq"
            className="rounded-full border border-nav-border px-6 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-nav-foreground transition-colors hover:bg-nav-pill"
          >
            SEE WHAT'S INSIDE
          </a>
        </div>
        <p className="mt-4 text-center text-[12px] text-nav-muted">
          One-time payment · Lifetime updates · Instant delivery
        </p>

      </div>
    </section>
  );
}
