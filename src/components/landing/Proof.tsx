import { MediaTile, Section, Heading, CheckList } from "./Primitives";

export function Community() {
  return (
    <Section>
      <Heading>What people are building with this</Heading>
      <CheckList
        items={[
          "Faceless pages growing past 100k followers",
          "Fanvue and Patreon funnels",
          "Brand and UGC style content pages",
        ]}
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["228K", "1.2M", "94K", "612K"].map((n, i) => (
          <div key={n}>
            <MediaTile label={`${n} FOLLOWERS`} tone={i} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] text-nav-muted">
        All pages above are run by members
      </p>
    </Section>
  );
}

export function Results() {
  const cards = [
    { title: "Fanvue earnings", value: "$8,140", note: "in 30 days" },
    { title: "New subscribers", value: "1,268", note: "last month" },
    { title: "Best single post", value: "2.4M views", note: "TikTok" },
    { title: "Time to first payout", value: "11 days", note: "average member" },
  ];
  return (
    <Section>
      <Heading>Results from users</Heading>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-nav-border bg-nav-pill p-6">
            <p className="text-[12px] font-semibold tracking-[0.1em] text-nav-muted">
              {c.title.toUpperCase()}
            </p>
            <p className="mt-3 text-3xl font-extrabold text-nav-foreground">{c.value}</p>
            <p className="mt-1 text-[13px] text-nav-muted">{c.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
