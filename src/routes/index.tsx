import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SZNVAULT" },
      { name: "description", content: "SZNVAULT — get access." },
      { property: "og:title", content: "SZNVAULT" },
      { property: "og:description", content: "SZNVAULT — get access." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-nav">
      <Navbar />
    </div>
  );
}
