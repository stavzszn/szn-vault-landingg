import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — SZNVAULT" },
      { name: "description", content: "Refund policy for purchases made through SZNVAULT." },
      { property: "og:title", content: "Refund Policy — SZNVAULT" },
      { property: "og:description", content: "Refund policy for purchases made through SZNVAULT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
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
          Refund Policy
        </h1>
        <p className="mt-2 text-[14px] text-nav-muted">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-nav-foreground/90">
          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">1. Digital Product</h2>
            <p className="mt-3">
              SZNVAULT sells a digital course delivered entirely online. Once your payment is
              processed, you receive immediate access to all course materials, workflows, and
              tutorials. Because the product is digital and instantly accessible, all sales are
              final unless otherwise stated below.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">2. Refund Eligibility</h2>
            <p className="mt-3">
              We want you to get real value from the course. If you have gone through the material
              and it is not what was promised, you may request a refund within 14 days of your
              purchase date. To be eligible, you must contact us at the email below with the email
              address used at checkout and a short description of why the product did not meet your
              expectations.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">3. How to Request a Refund</h2>
            <p className="mt-3">
              Send your refund request to{" "}
              <a
                href="mailto:support@sznvault.com"
                className="text-brand underline underline-offset-2"
              >
                support@sznvault.com
              </a>{" "}
              with the subject line &quot;Refund Request&quot;. Please include your order ID or the
              email used at purchase. We review every request personally and respond within 5
              business days.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">4. Processing Time</h2>
            <p className="mt-3">
              Once a refund is approved, it is processed back to the original payment method. It may
              take 5–10 business days for the funds to appear on your statement, depending on your
              bank or payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">5. Non-Refundable Cases</h2>
            <p className="mt-3">
              Refunds cannot be granted when: (a) more than 14 days have passed since purchase;
              (b) the course materials have been substantially downloaded, copied, or shared;
              (c) the request is made after the buyer has completed a significant portion of the
              course; or (d) the purchase was made through a reseller or unauthorized third party.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">6. Chargebacks</h2>
            <p className="mt-3">
              We ask that you contact us before filing a chargeback with your bank. Chargebacks
              filed without first attempting to resolve the issue directly with us may result in
              permanent revocation of access to the course and its materials.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-nav-foreground">7. Contact</h2>
            <p className="mt-3">
              If you have any questions about this Refund Policy, please contact us at{" "}
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
