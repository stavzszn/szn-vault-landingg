import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Email, type LegalSection } from "@/components/LegalDoc";

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

const sections: LegalSection[] = [
  {
    title: "1. DIGITAL PRODUCTS – GENERAL POLICY",
    blocks: [
      {
        type: "p",
        text: "sznvault sells digital products, including ComfyUI workflows, digital files, educational materials, guides, tutorials, and courses.",
      },
      {
        type: "p",
        text: "Because digital products may be accessed and used immediately after purchase, we generally do not accept refunds based solely on a change of mind, personal preference, or failure to use the product.",
      },
      {
        type: "p",
        text: "However, nothing in this Refund Policy is intended to limit any mandatory consumer rights that apply to you under applicable law.",
      },
    ],
  },
  {
    title: "2. REFUND REQUEST WINDOW",
    blocks: [
      {
        type: "p",
        text: "Unless a different period is required by applicable law or expressly stated on the relevant product page, refund requests should be submitted within 30 days of the original purchase.",
      },
      {
        type: "p",
        text: "Requests submitted after this period may not be considered, except where applicable law provides otherwise.",
      },
      {
        type: "p",
        text: "Refund requests should include a clear explanation of the issue and, where relevant, supporting evidence such as screenshots or screen recordings.",
      },
    ],
  },
  {
    title: "3. QUALIFYING CONDITIONS FOR A REFUND",
    blocks: [
      { type: "p", text: "A refund may be considered in the following circumstances:" },
      { type: "h3", text: "Platform or Product Inaccessibility" },
      {
        type: "p",
        text: "You paid for a product but are unable to access the purchased content after payment, and the issue cannot reasonably be resolved by our support.",
      },
      { type: "h3", text: "Broken or Missing Content" },
      {
        type: "p",
        text: "A significant part of the purchased product is missing, corrupted, or technically non-functional, and the issue cannot reasonably be resolved within an appropriate period after being reported.",
      },
      { type: "h3", text: "Duplicate or Unauthorized Charge" },
      {
        type: "p",
        text: "You were charged more than once for the same purchase or were charged for a transaction that you did not authorize, subject to verification of the transaction.",
      },
      { type: "h3", text: "Material Misrepresentation" },
      {
        type: "p",
        text: "The product you received is substantially and demonstrably different from what was described on the applicable sales page at the time of purchase.",
      },
      { type: "h3", text: "Technical Product Failure" },
      {
        type: "p",
        text: "A purchased workflow or digital product contains a material technical defect that prevents its intended use and the issue cannot reasonably be fixed or resolved.",
      },
      {
        type: "p",
        text: "Where technically possible, sznvault may first attempt to provide a corrected version, replacement file, update, or other reasonable solution before issuing a refund.",
      },
    ],
  },
  {
    title: "4. NON-REFUNDABLE SITUATIONS",
    blocks: [
      {
        type: "p",
        text: "Subject to mandatory rights under applicable law, refunds will generally not be provided for:",
      },
      {
        type: "ul",
        items: [
          "Changing your mind after purchase.",
          "No longer wanting the product.",
          "Not having enough time to use the product.",
          "Failing to read the product description before purchasing.",
          "Finding the course or workflow too difficult or advanced.",
          "Personal expectations that were not expressly promised on the product page.",
          "Failure to follow the provided setup or installation instructions.",
          "Problems caused by unsupported hardware, software, third-party models, custom configurations, or modifications made by the customer.",
          "Problems caused by third-party software or services outside sznvault's control.",
          "Failure to achieve a particular creative, financial, business, or other result.",
          "Purchasing the product by mistake, except where a duplicate or erroneous charge occurred.",
          "Failure to use the product after purchasing it.",
        ],
      },
    ],
  },
  {
    title: "5. WORKFLOW COMPATIBILITY",
    blocks: [
      {
        type: "p",
        text: "Before purchasing a ComfyUI workflow, you are responsible for reviewing the product's stated requirements.",
      },
      { type: "p", text: "This may include requirements relating to:" },
      {
        type: "ul",
        items: [
          "GPU / VRAM",
          "ComfyUI",
          "Python or other software",
          "Required models",
          "Custom nodes",
          "Operating system",
          "Storage",
          "Other dependencies",
        ],
      },
      {
        type: "p",
        text: "If your computer does not meet the stated requirements, this alone does not constitute a product defect.",
      },
      {
        type: "p",
        text: "Where a compatibility requirement was not clearly disclosed or the product materially fails to function according to its advertised requirements, please contact us so we can investigate the issue.",
      },
    ],
  },
  {
    title: "6. COURSE AND EDUCATIONAL CONTENT",
    blocks: [
      {
        type: "p",
        text: "Purchasing a sznvault course gives you access to educational material.",
      },
      {
        type: "p",
        text: "We do not guarantee that completing a course will result in a specific income, number of customers, business result, technical skill level, or other outcome.",
      },
      {
        type: "p",
        text: "Refund requests based solely on personal expectations or the amount of time available to consume the course will generally not be accepted, subject to any mandatory rights under applicable law.",
      },
    ],
  },
  {
    title: "7. HOW TO REQUEST A REFUND",
    blocks: [
      { type: "p", text: <>To request a refund, contact: <Email /></> },
      { type: "p", text: "Your request should include:" },
      {
        type: "ul",
        items: [
          "Your name or account information",
          "The email address used for the purchase",
          "The product purchased",
          "The approximate purchase date",
          "A description of the problem",
          "Screenshots, recordings, or other evidence where applicable",
        ],
      },
      {
        type: "p",
        text: "We may request additional information reasonably necessary to verify the purchase and investigate the issue.",
      },
    ],
  },
  {
    title: "8. SUPPORT BEFORE REFUND",
    blocks: [
      {
        type: "p",
        text: "If you experience an issue with a workflow, course, or access to your purchase, we encourage you to contact support before requesting a refund.",
      },
      {
        type: "p",
        text: "We will make reasonable efforts to troubleshoot technical problems and, where appropriate, provide instructions, updates, replacement files, or another reasonable solution.",
      },
      { type: "p", text: <>Contact: <Email /></> },
    ],
  },
  {
    title: "9. REFUND PROCESSING",
    blocks: [
      {
        type: "p",
        text: "If a refund is approved, the refund will generally be processed through the payment method or payment platform used for the original transaction.",
      },
      {
        type: "p",
        text: "Because payments are processed through Whop, the timing of the refund appearing in your account may depend on Whop and the relevant payment provider.",
      },
      {
        type: "p",
        text: "sznvault cannot guarantee the exact time required for a payment provider or financial institution to display a completed refund.",
      },
    ],
  },
  {
    title: "10. ACCESS AFTER REFUND",
    blocks: [
      {
        type: "p",
        text: "If a refund is approved, sznvault may revoke access to the refunded product, course, workflow, files, community, or other associated content.",
      },
      {
        type: "p",
        text: "You may not continue using, sharing, copying, or distributing a product after receiving a refund.",
      },
    ],
  },
  {
    title: "11. CHARGEBACKS AND PAYMENT DISPUTES",
    blocks: [
      {
        type: "p",
        text: "If you have an issue with a purchase, please contact us before initiating a chargeback or payment dispute whenever reasonably possible.",
      },
      {
        type: "p",
        text: "We will attempt to investigate and resolve legitimate issues directly.",
      },
      {
        type: "p",
        text: "If a chargeback or payment dispute is opened, we may provide relevant transaction information and records to Whop or the applicable payment processor to respond to the dispute.",
      },
      {
        type: "p",
        text: "Nothing in this section removes or limits any legal right you may have to dispute a transaction.",
      },
    ],
  },
  {
    title: "12. CONSUMER RIGHTS",
    blocks: [
      {
        type: "p",
        text: "This Refund Policy does not exclude, restrict, or replace any mandatory rights or remedies available to consumers under applicable law.",
      },
      {
        type: "p",
        text: "Where applicable law provides a consumer with a right to a refund, repair, replacement, price reduction, termination, or another remedy, those rights will apply regardless of the terms of this policy.",
      },
    ],
  },
  {
    title: "13. POLICY CHANGES",
    blocks: [
      {
        type: "p",
        text: "sznvault reserves the right to update this Refund Policy from time to time.",
      },
      {
        type: "p",
        text: "The version of the policy applicable to a purchase will generally be the version in effect at the time of that purchase, except where a change is required by applicable law.",
      },
    ],
  },
  {
    title: "14. CONTACT",
    blocks: [
      {
        type: "p",
        text: "For questions regarding refunds, purchases, or this policy:",
      },
      {
        type: "p",
        text: (
          <>
            sznvault
            <br />
            Website: sznvault.com
            <br />
            Email: <Email />
            <br />
            Location: Chișinău, Moldova
          </>
        ),
      },
    ],
  },
];

function RefundPage() {
  return <LegalPage title="Refund Policy" sections={sections} />;
}
