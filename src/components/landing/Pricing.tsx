import { Check } from "lucide-react";
import { Section, Heading } from "./Primitives";
import showcaseImg from "@/assets/pricing-showcase.png";

export const CHECKOUT_URL = "https://whop.com/checkout/plan_Bo8NofFDjnPco";

const included = [
  "Step-by-step video tutorials",
  "More than 9 ComfyUI workflows",
  "Prompt and workflow library",
  "Promt and Captioning studios",
  "Cloud GPU setup guide",
];

const bonuses = [
  "Private community access",
  "Lifetime updates at no extra cost",
];

export function Pricing() {
  return (
    <Section id="pricing">
      <Heading>Everything you could ever need</Heading>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="self-center">
          <img
            src={showcaseImg}
            alt="AI-generated blonde woman in a cream fur coat taking a mirror selfie in front of SZNVAULT graffiti"
            className="w-full rounded-3xl border border-nav-border object-cover"
          />
        </div>

        <div>
          <p className="text-[12px] font-bold tracking-[0.12em] text-nav-foreground">INCLUDED</p>
          <ul className="mt-3 flex flex-col gap-2">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-nav-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-[12px] font-bold tracking-[0.12em] text-nav-foreground">
            PLUS FREE
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {bonuses.map((i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-nav-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{i}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <div className="rounded-full bg-nav-pill px-5 py-3 text-center text-[12px] font-bold tracking-[0.08em] text-nav-foreground">
              LIMITED LAUNCH PRICING
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-nav-foreground px-6 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90"
            >
              GET ACCESS — €47 <span className="line-through opacity-50">€149</span>
            </a>
            <p className="text-center text-[12px] leading-relaxed text-nav-muted">
              One-time payment. Instant access.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["VISA", "MASTERCARD", "AMEX", "APPLE PAY", "GPAY", "CRYPTO"].map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-nav-border px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-nav-muted"
                >
                  {m}
                </span>
              ))}
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-6 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] text-brand-foreground transition-opacity hover:opacity-90"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
