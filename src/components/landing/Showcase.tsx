import { MediaTile, Section, Heading, Sub, CheckList } from "./Primitives";

export function Gallery() {
  return (
    <section className="w-full overflow-hidden px-6 py-16">
      <p className="mb-8 text-center text-[12px] font-bold tracking-[0.2em] text-nav-muted">
        MADE ENTIRELY WITH SZNVAULT
      </p>
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-4">
        <div className="hidden w-40 -rotate-6 opacity-60 sm:block">
          <MediaTile label="MODEL 01" tone={0} />
        </div>
        <div className="w-56 scale-105">
          <MediaTile label="MODEL 02" tone={1} />
        </div>
        <div className="hidden w-40 rotate-6 opacity-60 sm:block">
          <MediaTile label="MODEL 03" tone={2} />
        </div>
      </div>
    </section>
  );
}

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

export function Realism() {
  return (
    <Section>
      <Heading>Hyper-realistic models</Heading>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <MediaTile label="100% AI GENERATED" tone={0} />
        <MediaTile label="100% AI GENERATED" tone={1} />
      </div>
      <CheckList
        items={[
          "Skin texture, pores and lighting that survive a zoom-in",
          "Same face across thousands of images",
          "Full body and outfit control",
          "4K upscaling",
          "Video and lipsync",
          "Male and female models",
        ]}
      />
      <div className="mx-auto mt-8 max-w-sm">
        <MediaTile label="AI GENERATED · MALE" tone={2} />
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

export function Playbooks() {
  return (
    <Section>
      <Heading>2 growth playbooks</Heading>
      <CheckList items={["Social growth playbook", "Monetization and funnel playbook"]} />
      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-nav-border bg-nav-pill p-6">
        <div className="flex items-center justify-between text-[12px] text-nav-muted">
          <span>Last 30 days</span>
          <span className="font-semibold text-nav-foreground">Revenue</span>
        </div>
        <div className="mx-auto mt-6 grid size-44 place-items-center rounded-full border-8 border-brand">
          <div className="text-center">
            <p className="text-[11px] text-nav-muted">Total</p>
            <p className="text-xl font-extrabold text-nav-foreground">$31,422.99</p>
          </div>
        </div>
        <dl className="mt-6 flex flex-col gap-3 text-[13px]">
          <div className="flex justify-between">
            <dt className="text-nav-muted">Subscriptions</dt>
            <dd className="text-nav-foreground">64%</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-nav-muted">Tips & PPV</dt>
            <dd className="text-nav-foreground">36%</dd>
          </div>
          <div className="flex justify-between border-t border-nav-border pt-3">
            <dt className="text-nav-muted">Active fans</dt>
            <dd className="text-nav-foreground">4,180</dd>
          </div>
        </dl>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {["Traffic playbook", "Monetization playbook", "DM & funnel scripts"].map((p) => (
          <div
            key={p}
            className="rounded-xl border border-nav-border bg-nav-pill px-5 py-4 text-[14px] font-semibold text-nav-foreground"
          >
            {p}
          </div>
        ))}
      </div>
    </Section>
  );
}
