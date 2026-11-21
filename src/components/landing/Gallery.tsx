import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { galleryPhotos } from "@/lib/archive-photos";

function Row({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const list = [...galleryPhotos.slice(offset), ...galleryPhotos.slice(0, offset)];
  const doubled = [...list, ...list];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex w-max shrink-0 gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={i < list.length ? p.alt : ""}
            aria-hidden={i >= list.length}
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
      <div className="px-4 text-center sm:px-6">
        <p className="text-[12px] font-bold tracking-[0.18em] text-nav-muted">MADE ENTIRELY WITH SZNVAULT</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-nav-foreground sm:text-5xl">
          The <span className="font-serif font-normal italic">archive.</span>
        </h2>
      </div>
      <div className="mt-10 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <Row />
        <Row reverse offset={3} />
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
