import { useState } from "react";

const logoUrl = "/logo.png";

const tabs = ["MAIN", "DISCORD"] as const;

export function Navbar() {
  const [active, setActive] = useState<(typeof tabs)[number]>("MAIN");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nav-border bg-nav/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-[56px] max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="SZNVAULT logo" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
          <span className="hidden text-[15px] font-extrabold tracking-[0.18em] text-nav-foreground min-[420px]:inline">
            SZNVAULT
          </span>
        </a>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full bg-nav-pill p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] transition-colors sm:px-6 sm:py-2 sm:text-[13px] ${
                  active === tab
                    ? "bg-nav-pill-active text-nav-foreground"
                    : "text-nav-muted hover:text-nav-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <a
          href="https://whop.com/checkout/plan_Bo8NofFDjnPco"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-nav-foreground px-3.5 py-2 text-[11px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-[12px]"
        >
          GET ACCESS
        </a>
      </div>
    </header>
  );
}
