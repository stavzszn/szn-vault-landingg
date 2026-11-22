import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const logoUrl = "/logo.png";

const tabs = ["MAIN", "ARCHIVE", "DISCORD"] as const;

const DISCORD_URL = "https://discord.gg/MkHv3SSGZ3";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const active: (typeof tabs)[number] = pathname.startsWith("/archive") ? "ARCHIVE" : "MAIN";

  const handleTab = (tab: (typeof tabs)[number]) => {
    if (tab === "DISCORD") {
      window.open(DISCORD_URL, "_blank", "noopener,noreferrer");
      return;
    }
    navigate({ to: tab === "ARCHIVE" ? "/archive" : "/" });
  };

  return (
    <header className="site-navbar sticky top-0 z-50 w-full border-b border-nav-border bg-nav/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-[56px] max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logoUrl} alt="SZNVAULT logo" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
          <span className="hidden text-[15px] font-extrabold tracking-[0.18em] text-nav-foreground min-[420px]:inline">
            SZNVAULT
          </span>
        </a>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-0.5 rounded-full bg-nav-pill p-1 sm:gap-1">
            {tabs.map((tab) => (
              <Button
                variant="ghost"
                key={tab}
                onClick={() => handleTab(tab)}
                className={`h-auto rounded-full px-2 py-1.5 text-[10px] font-bold tracking-[0.08em] transition-colors hover:bg-transparent sm:px-6 sm:py-2 sm:text-[13px] ${
                  active === tab
                    ? "bg-nav-pill-active text-nav-foreground"
                    : "text-nav-muted hover:text-nav-foreground"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </nav>

        <a
          href="https://whop.com/checkout/plan_Bo8NofFDjnPco"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-nav-foreground px-2.5 py-2 text-[10px] font-bold tracking-[0.08em] text-nav transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-[12px]"
        >
          GET ACCESS
        </a>
      </div>
    </header>
  );
}
