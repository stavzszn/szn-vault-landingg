import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Faq } from "@/components/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SZNVAULT — FAQ & Access" },
      {
        name: "description",
        content:
          "Answers to common questions about SZNVAULT: hardware needs, cloud GPU costs, pricing and getting started.",
      },
      { property: "og:title", content: "SZNVAULT — FAQ & Access" },
      {
        property: "og:description",
        content:
          "Answers to common questions about SZNVAULT: hardware needs, cloud GPU costs, pricing and getting started.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-nav">
      <Navbar />
      <main>
        <Faq />
      </main>
    </div>
  );
}
