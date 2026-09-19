import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export type LegalBlock =
  | { type: "p"; text: ReactNode }
  | { type: "ul"; items: ReactNode[] }
  | { type: "ol"; items: ReactNode[] }
  | { type: "h3"; text: ReactNode };

export type LegalSection = {
  title?: string;
  blocks: LegalBlock[];
};

export function Email() {
  return (
    <a href="mailto:help@sznvault.com" className="text-brand underline underline-offset-2">
      help@sznvault.com
    </a>
  );
}

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-nav">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-nav-muted transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <h1 className="mt-10 text-center text-[40px] font-extrabold leading-tight tracking-tight text-nav-foreground sm:text-[56px]">
          {title}
        </h1>
        <p className="mt-6 text-[16px] text-nav-muted">{title} SZNVault | sznvault.com</p>

        <div className="mt-4 text-[16px] leading-[1.75] text-nav-foreground/90">
          {sections.map((section, idx) => (
            <section
              key={section.title ?? idx}
              className="border-t border-nav-border py-12 first:pt-12"
            >
              {section.title ? (
                <h2 className="text-[18px] font-medium text-nav-foreground">{section.title}</h2>
              ) : null}
              <div className="mt-6 space-y-5">

                {section.blocks.map((block, i) => {
                  if (block.type === "p") return <p key={i}>{block.text}</p>;
                  if (block.type === "h3")
                    return (
                      <h3 key={i} className="pt-2 text-[15px] font-semibold text-nav-foreground">
                        {block.text}
                      </h3>
                    );
                  if (block.type === "ul")
                    return (
                      <ul key={i} className="list-disc space-y-1.5 pl-6">
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  return (
                    <ol key={i} className="list-decimal space-y-1.5 pl-6">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ol>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
