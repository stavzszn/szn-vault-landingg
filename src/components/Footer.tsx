import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import { Send, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "How it works", href: "#" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const company = [
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full px-6 pb-8 pt-16">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1.1fr_1.9fr]">
        {/* Left brand card */}
        <div className="relative overflow-hidden rounded-3xl border border-nav-border bg-gradient-to-br from-nav-pill-active via-nav-pill to-nav p-6 md:p-8">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-brand/10 blur-3xl" />

          <a href="/" className="relative flex items-center gap-3">
            <img src={logoAsset.url} alt="SZNVAULT logo" className="h-8 w-8 object-contain" />
            <span className="text-[18px] font-extrabold tracking-[0.12em] text-nav-foreground">
              SZNVAULT
            </span>
          </a>

          <p className="relative mt-8 max-w-[200px] text-[18px] font-semibold leading-snug text-nav-foreground">
            Build and monetize hyper-realistic AI influencers.
          </p>

          <div className="relative mt-8">
            <p className="text-[13px] font-medium italic text-nav-muted">Stay in touch!</p>
            <div className="mt-3 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-xl border border-nav-border bg-nav/60 text-nav-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right links card */}
        <div className="relative overflow-hidden rounded-3xl border border-nav-border bg-nav-pill p-6 md:p-8">
          <div className="absolute right-6 top-6 hidden md:block">
            <div className="relative">
              <div className="flex size-20 items-center justify-center rounded-2xl border border-nav-border bg-gradient-to-br from-brand to-brand/70 text-nav-foreground shadow-xl shadow-brand/20">
                <span className="text-3xl font-black">S</span>
              </div>
              <span className="absolute -bottom-4 -right-2 rotate-[-12deg] text-[11px] italic text-nav-muted">
                Feeling lucky?
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:max-w-[65%]">
            <div>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-nav-muted">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2.5">
                {navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 text-[14px] font-medium text-nav-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-nav-muted">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                {company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 text-[14px] font-medium text-nav-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <p className="text-[18px] font-semibold text-nav-foreground">
              AI moves fast.
            </p>
            <p className="text-[18px] font-semibold text-nav-foreground">
              Stay ahead with SZNVAULT.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex max-w-md gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 rounded-full border border-nav-border bg-nav px-4 py-2.5 text-[13px] text-nav-foreground placeholder:text-nav-muted focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-nav-foreground px-5 py-2.5 text-[12px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90"
              >
                Subscribe
                <Send className="size-3.5" />
              </button>
            </form>
          </div>

          <p className="mt-8 text-[12px] text-nav-muted">
            © {new Date().getFullYear()} SZNVAULT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
