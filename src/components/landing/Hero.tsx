import { Check } from "lucide-react";
import heroImage from "@/assets/hero-image.png.asset.json";

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
    <section className="w-full px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto w-[65%] overflow-hidden rounded-3xl border border-nav-border">
          <img
            src={heroImage.url}
            alt="SZNVAULT"
            className="block h-auto w-full"
          />
        </div>

        <h1 className="mt-8 text-center text-2xl font-extrabold tracking-[-0.02em] text-nav-foreground sm:text-3xl md:text-4xl">
          Run your own AI influencers with SZNVAULT
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[14px] leading-relaxed text-nav-muted">
          The full playbook for creating, training and monetizing hyper-realistic AI models. No coding, no agency, no monthly software bills.
        </p>

        <div className="mx-auto max-w-3xl">
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

      </div>
    </section>
  );
}
