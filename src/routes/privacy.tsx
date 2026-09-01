import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SZNVAULT" },
      { name: "description", content: "Privacy policy for SZNVAULT users and visitors." },
      { property: "og:title", content: "Privacy Policy — SZNVAULT" },
      { property: "og:description", content: "Privacy policy for SZNVAULT users and visitors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-[14px] text-nav-muted">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-nav-foreground/90">
          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">1. Information We Collect</h2>
            <p className="mt-3">
              SZNVAULT collects information you provide directly to us, such as your name, email
              address, and payment information when you register, make a purchase, or contact us.
              We also collect usage data and device information to help improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">2. How We Use Your Information</h2>
            <p className="mt-3">
              We use the information we collect to provide, maintain, and improve our services, to
              process transactions, to communicate with you, and to comply with legal obligations.
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">3. Cookies and Tracking</h2>
            <p className="mt-3">
              SZNVAULT uses cookies and similar tracking technologies to enhance your experience,
              analyze site traffic, and understand where our visitors come from. You can control
              cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">4. Data Sharing</h2>
            <p className="mt-3">
              We may share your information with trusted third-party service providers who assist us
              in operating our website, conducting business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">5. Data Security</h2>
            <p className="mt-3">
              We implement reasonable security measures to protect your personal information. However,
              no method of transmission over the internet or electronic storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">6. Your Rights</h2>
            <p className="mt-3">
              Depending on your location, you may have the right to access, correct, delete, or
              restrict the use of your personal information. To exercise these rights, contact us at{" "}
              <a
                href="mailto:support@sznvault.com"
                className="text-brand underline underline-offset-2"
              >
                support@sznvault.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">7. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">8. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
