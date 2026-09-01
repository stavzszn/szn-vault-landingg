import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — SZNVAULT" },
      { name: "description", content: "Terms and conditions for using SZNVAULT." },
      { property: "og:title", content: "Terms and Conditions — SZNVAULT" },
      { property: "og:description", content: "Terms and conditions for using SZNVAULT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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

        <h1 className="mt-8 text-[32px] font-bold tracking-tight text-nav-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-[14px] text-nav-muted">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-nav-foreground/90">
          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">1. Introduction</h2>
            <p className="mt-3">
              Welcome to SZNVAULT. These Terms and Conditions govern your use of our website,
              products, and services. By accessing or using SZNVAULT, you agree to be bound by these
              terms. If you do not agree with any part of these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">2. Use of Services</h2>
            <p className="mt-3">
              You agree to use SZNVAULT only for lawful purposes and in a way that does not infringe
              the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the
              service. Prohibited behavior includes harassing or causing distress or inconvenience
              to any other user, transmitting obscene or offensive content, or disrupting the
              normal flow of dialogue within our services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">3. Intellectual Property</h2>
            <p className="mt-3">
              All content included on this site, such as text, graphics, logos, images, audio clips,
              digital downloads, data compilations, and software, is the property of SZNVAULT or
              its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">4. Purchases and Refunds</h2>
            <p className="mt-3">
              All purchases made through SZNVAULT are final unless otherwise stated. We reserve the
              right to modify pricing, features, and availability of our products at any time
              without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">5. Limitation of Liability</h2>
            <p className="mt-3">
              SZNVAULT shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits, data, use, goodwill,
              or other intangible losses, resulting from your access to or use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">6. Changes to Terms</h2>
            <p className="mt-3">
              We reserve the right to update or modify these terms at any time without prior notice.
              Your continued use of SZNVAULT after any changes indicates your acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">7. Contact</h2>
            <p className="mt-3">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a
                href="mailto:support@sznvault.com"
                className="text-brand underline underline-offset-2"
              >
                support@sznvault.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
