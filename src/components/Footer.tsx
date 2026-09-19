import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const logoUrl = "/logo.png";

const navigation = [
  { label: "How it works", href: "#" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const legal = [
  { label: "Terms and Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund Policy", to: "/refund" },
];

export function Footer() {
  return (
    <footer className="w-full px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1.1fr_1.9fr]">
        {/* Left brand card */}
        <div className="relative overflow-hidden rounded-3xl border border-nav-border bg-gradient-to-br from-nav-pill-active via-nav-pill to-nav p-6 md:p-8">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-brand/10 blur-3xl" />

          <a href="/" className="relative flex items-center gap-3">
            <img src={logoUrl} alt="SZNVAULT logo" className="h-8 w-8 object-contain" />
            <span className="text-[18px] font-extrabold tracking-[0.12em] text-nav-foreground">
              SZNVAULT
            </span>
          </a>

          <p className="relative mt-8 max-w-[200px] text-[18px] font-semibold leading-snug text-nav-foreground">
            Build and monetize hyper-realistic AI influencers.
          </p>

          <div className="relative mt-8">
            <p className="text-[13px] font-medium italic text-nav-muted">Stay in touch!</p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-nav-border bg-nav/60 px-4 py-2 text-[13px] font-bold text-nav-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              Join Discord
            </a>
          </div>
        </div>

        {/* Right links card */}
        <div className="relative overflow-hidden rounded-3xl border border-nav-border bg-nav-pill p-6 md:p-8">
          <div className="absolute right-6 top-6 hidden md:block">
            <div className="relative">
              <img
                src={logoUrl}
                alt="SZNVAULT logo"
                className="size-20 rounded-2xl border border-nav-border object-cover shadow-xl shadow-brand/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:max-w-[65%]">
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
                Legal
              </h3>
              <ul className="flex flex-col gap-2.5">
                {legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-1 text-[14px] font-medium text-nav-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-[12px] text-nav-muted">
            © {new Date().getFullYear()} SZNVAULT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
