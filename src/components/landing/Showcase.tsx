import { Section, Heading, Sub, CheckList } from "./Primitives";

export function Testimonials() {
  const quotes = [
    {
      name: "@jaymakes",
      text: "First page hit 120k followers in two months. Never touched a camera.",
    },
    { name: "@lumen.ai", text: "Made back the cost in 9 days from one Fanvue account." },
    { name: "@sofiabuilds", text: "The face-consistency method is the part nobody else teaches." },
    { name: "@0xnate", text: "Runs fine on my 3060. Cloud GPU section saved me a rebuild." },
  ];
  return (
    <Section>
      <Heading>The users speak for themselves</Heading>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {quotes.map((q) => (
          <figure key={q.name} className="rounded-2xl border border-nav-border bg-nav-pill p-5">
            <figcaption className="text-[13px] font-bold text-nav-foreground">{q.name}</figcaption>
            <blockquote className="mt-2 text-[14px] leading-relaxed text-nav-muted">
              {q.text}
            </blockquote>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Tutorials() {
  return (
    <Section>
      <Heading>14 step-by-step tutorials</Heading>
      <Sub>Every click recorded. Follow along and you'll have your first model tonight.</Sub>
      <div className="mt-8 overflow-hidden rounded-2xl border border-nav-border bg-nav-pill">
        <div className="flex gap-1.5 border-b border-nav-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-nav-pill-active" />
          <span className="size-2.5 rounded-full bg-nav-pill-active" />
          <span className="size-2.5 rounded-full bg-nav-pill-active" />
        </div>
        <div className="grid grid-cols-4 gap-2 p-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-14 rounded-lg bg-nav-pill-active/60" />
          ))}
        </div>
      </div>
      <CheckList
        items={[
          "Install and setup",
          "Building your base model",
          "Face consistency training",
          "Posing and outfits",
          "Backgrounds and scenes",
          "Upscaling to 4K",
          "Video generation",
          "Lipsync and voice",
          "Batch content production",
          "Posting workflow and scheduling",
        ]}
      />
    </Section>
  );
}
