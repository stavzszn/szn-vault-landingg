import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { landingArchivePhotos } from "@/lib/landing-archive-photos";

function Row({ photos, reverse = false }: { photos: typeof landingArchivePhotos; reverse?: boolean }) {
  const doubled = [...photos, ...photos];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex w-max shrink-0 gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={i < photos.length ? p.alt : ""}
            aria-hidden={i >= photos.length}
            loading="lazy"
            draggable={false}
            className="h-[260px] w-[190px] shrink-0 rounded-2xl border border-nav-border object-cover sm:h-[380px] sm:w-[270px]"
          />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="w-full overflow-hidden py-14 sm:py-24">
      <div className="px-6 text-center sm:px-10">
        <p className="text-[12px] font-bold tracking-[0.18em] text-nav-muted">MADE ENTIRELY WITH SZNVAULT</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-nav-foreground sm:text-5xl">
          The <span>archive.</span>
        </h2>
      </div>
      <div className="mt-10 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <Row photos={landingArchivePhotos.filter((_, index) => index % 2 === 0)} />
        <Row photos={landingArchivePhotos.filter((_, index) => index % 2 === 1)} reverse />
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/archive"
          className="inline-flex items-center gap-2 rounded-full border border-nav-border px-6 py-3 text-[13px] font-bold tracking-[0.08em] text-nav-foreground transition-colors hover:bg-nav-pill"
        >
          VIEW THE FULL ARCHIVE <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
