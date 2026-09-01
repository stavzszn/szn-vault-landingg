import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

const tabs = ["MAIN", "DISCORD"] as const;

export function Navbar() {
  const [active, setActive] = useState<(typeof tabs)[number]>("MAIN");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-nav-border bg-nav/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-[60px] max-w-[1400px] items-center px-8">
        <a href="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="SZNVAULT logo" className="h-7 w-7 object-contain" />
          <span className="text-[15px] font-extrabold tracking-[0.18em] text-nav-foreground">
            SZNVAULT
          </span>
        </a>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full bg-nav-pill p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-6 py-2 text-[13px] font-bold tracking-[0.08em] transition-colors ${
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
          href="#"
          className="ml-auto rounded-full bg-nav-foreground px-5 py-2.5 text-[12px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90"
        >
          GET ACCESS
        </a>
      </div>
    </header>
  );
}
