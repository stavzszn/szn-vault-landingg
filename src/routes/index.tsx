import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/landing/Hero";
import { Testimonials, Tutorials } from "@/components/landing/Showcase";
import { Gallery } from "@/components/landing/Gallery";
import { Pricing } from "@/components/landing/Pricing";

const description =
  "SZNVAULT teaches you to build and monetize hyper-realistic AI influencers with step-by-step tutorials, 9+ ComfyUI workflows and lifetime updates.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SZNVAULT — Run Your Own AI Influencers" },
      { name: "description", content: description },
      { property: "og:title", content: "SZNVAULT — Run Your Own AI Influencers" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sznvault.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sznvault.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SZNVAULT",
          description,
          brand: { "@type": "Brand", name: "SZNVAULT" },
          offers: {
            "@type": "Offer",
            price: "47",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: "https://whop.com/checkout/plan_Bo8NofFDjnPco",
          },
        }),
      },
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
