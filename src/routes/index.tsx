import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/landing/Hero";
import { Testimonials, Tutorials } from "@/components/landing/Showcase";
import { Gallery } from "@/components/landing/Gallery";
import { Pricing } from "@/components/landing/Pricing";

const description =
  "SZNVAULT teaches you to build and monetize hyper-realistic AI influencers — 14 tutorials, 2 growth playbooks, lifetime access.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SZNVAULT — Run Your Own AI Influencers" },
      { name: "description", content: description },
      { property: "og:title", content: "SZNVAULT — Run Your Own AI Influencers" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-nav">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Testimonials />
        <Tutorials />
        <Pricing />
        <div id="faq">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
