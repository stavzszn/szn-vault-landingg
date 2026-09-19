import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Email, type LegalSection } from "@/components/LegalDoc";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SZNVAULT" },
      { name: "description", content: "Terms of Service for using SZNVAULT." },
      { property: "og:title", content: "Terms of Service — SZNVAULT" },
      { property: "og:description", content: "Terms of Service for using SZNVAULT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    title: "OVERVIEW",
    blocks: [
      {
        type: "p",
        text: 'Welcome to sznvault. The terms "we", "us", and "our" refer to sznvault. sznvault operates this website and provides digital products, educational content, ComfyUI workflows, guides, and related services (the "Services").',
      },
      {
        type: "p",
        text: "Payments and checkout for products offered through the Services are processed through Whop.",
      },
      {
        type: "p",
        text: "These Terms of Service, together with any policies referenced herein, describe your rights and responsibilities when you use the Services or purchase our products.",
      },
      {
        type: "p",
        text: "Please read these Terms of Service carefully before using the Services or purchasing any product.",
      },
      {
        type: "p",
        text: "By visiting, interacting with, or using the Services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with these Terms or our Privacy Policy, you should not use or access the Services.",
      },
    ],
  },
  {
    title: "SECTION 1 – ACCESS AND ACCOUNT",
    blocks: [
      {
        type: "p",
        text: "To use the Services or purchase products, you may be required to provide certain information, including your email address and payment information through our payment provider.",
      },
      {
        type: "p",
        text: "You agree that all information you provide is accurate, current, and complete.",
      },
      {
        type: "p",
        text: "You are responsible for maintaining the security of your account credentials and for all activity conducted through your account.",
      },
      {
        type: "p",
        text: "You may not transfer, sell, assign, or share your account or purchased access with another person.",
      },
    ],
  },
  {
    title: "SECTION 2 – OUR PRODUCTS",
    blocks: [
      {
        type: "p",
        text: "sznvault provides digital products, including but not limited to:",
      },
      {
        type: "ul",
        items: [
          "ComfyUI workflows",
          "ComfyUI-related tools and resources",
          "Educational materials and guides",
          "Video courses and tutorials",
          "Other digital content made available through the Services",
        ],
      },
      { type: "p", text: "All products are delivered digitally. No physical products are shipped." },
      {
        type: "p",
        text: "Product descriptions, features, requirements, compatibility, and availability may change from time to time.",
      },
      {
        type: "p",
        text: "We make reasonable efforts to accurately describe our products. However, we do not guarantee that a product will produce a particular result or meet individual expectations beyond what is explicitly stated on its product page.",
      },
    ],
  },
  {
    title: "SECTION 3 – ORDERS",
    blocks: [
      {
        type: "p",
        text: "When you place an order, you are requesting to purchase the selected digital product.",
      },
      {
        type: "p",
        text: "sznvault reserves the right to accept, decline, or cancel an order where permitted by applicable law.",
      },
      {
        type: "p",
        text: "Payment must be successfully processed before access to the purchased product is provided.",
      },
      {
        type: "p",
        text: "You are responsible for reviewing your order before completing your purchase.",
      },
      { type: "p", text: "Your purchase is subject to our Refund Policy." },
    ],
  },
  {
    title: "SECTION 4 – PRICES AND BILLING",
    blocks: [
      {
        type: "p",
        text: "Prices, discounts, promotions, and product availability may change at any time.",
      },
      {
        type: "p",
        text: "The price applicable to your purchase is the price displayed at checkout when the order is completed.",
      },
      {
        type: "p",
        text: "You agree to provide accurate and complete information required for payment.",
      },
      {
        type: "p",
        text: "Payments are processed through Whop. Payment processing may also be subject to Whop's own terms, policies, and applicable payment-provider requirements.",
      },
      {
        type: "p",
        text: "You are responsible for any applicable taxes, fees, or charges that may apply to your purchase under the laws applicable to you.",
      },
    ],
  },
  {
    title: "SECTION 5 – DIGITAL DELIVERY",
    blocks: [
      {
        type: "p",
        text: "All products sold through sznvault are digital products.",
      },
      {
        type: "p",
        text: "After successful payment, access to the purchased product may be provided electronically through the applicable platform or delivery system.",
      },
      {
        type: "p",
        text: "sznvault is not responsible for delays or inability to access content caused by factors outside our reasonable control, including problems with your device, internet connection, browser, third-party platforms, or incompatible software.",
      },
      {
        type: "p",
        text: "Certain products may require compatible hardware, software, models, dependencies, or other technical requirements. These requirements may be stated on the relevant product page.",
      },
    ],
  },
  {
    title: "SECTION 6 – CUSTOMER SUPPORT",
    blocks: [
      {
        type: "p",
        text: "sznvault provides support for reasonable technical and access-related issues concerning purchased products.",
      },
      {
        type: "p",
        text: "Support may include assistance with accessing purchased content, installing or using workflows, and troubleshooting issues related to the products.",
      },
      {
        type: "p",
        text: "Support does not guarantee that every technical issue can be resolved, particularly where the issue is caused by third-party software, hardware, unsupported configurations, modifications made by the customer, or circumstances outside our control.",
      },
      { type: "p", text: <>Contact: <Email /></> },
    ],
  },
  {
    title: "SECTION 7 – REFUND POLICY",
    blocks: [
      {
        type: "p",
        text: "All digital-product purchases are subject to the sznvault Refund Policy.",
      },
      {
        type: "p",
        text: "Because digital products can be accessed and used immediately after purchase, refunds may be limited to the circumstances described in the Refund Policy.",
      },
      {
        type: "p",
        text: "Please review the Refund Policy before completing a purchase.",
      },
    ],
  },
  {
    title: "SECTION 8 – CHARGEBACKS AND DISPUTES",
    blocks: [
      {
        type: "p",
        text: "If you experience a problem with a purchase, access, or product, please contact sznvault before initiating a payment dispute or chargeback so that we have an opportunity to investigate and resolve the issue.",
      },
      {
        type: "p",
        text: "We reserve the right to provide relevant transaction and account information to the payment provider where necessary to respond to a dispute or chargeback.",
      },
      {
        type: "p",
        text: "Nothing in this section limits any rights you may have under applicable law.",
      },
    ],
  },
  {
    title: "SECTION 9 – INTELLECTUAL PROPERTY",
    blocks: [
      {
        type: "p",
        text: "All content provided through the Services, including but not limited to:",
      },
      {
        type: "ul",
        items: [
          "ComfyUI workflows",
          "workflow configurations",
          "course materials",
          "videos",
          "guides",
          "documentation",
          "text",
          "graphics",
          "branding",
          "logos",
          "product names",
          "other original materials",
        ],
      },
      {
        type: "p",
        text: "is owned by sznvault or its applicable licensors and is protected by applicable intellectual-property laws.",
      },
      {
        type: "p",
        text: "Purchasing a product does not transfer ownership of the underlying intellectual property to you.",
      },
    ],
  },
  {
    title: "SECTION 10 – DIGITAL PRODUCTS, LICENSE AND ACCEPTABLE USE",
    blocks: [
      {
        type: "p",
        text: "When you purchase a digital product from sznvault, you receive a limited, non-exclusive, non-transferable license to access and use the product for your own use, unless a different license is expressly stated on the relevant product page.",
      },
      { type: "p", text: "You may not:" },
      {
        type: "ol",
        items: [
          "Share, resell, redistribute, sublicense, or transfer purchased workflows or course materials to third parties.",
          "Upload purchased products to file-sharing websites, marketplaces, forums, or other public platforms.",
          "Claim sznvault's workflows, course materials, or other content as your own work.",
          "Reproduce or distribute the products for commercial resale.",
          "Give another person access to your purchased account or membership for the purpose of bypassing payment.",
          "Circumvent technical restrictions or access controls used to protect the Services.",
          "Use the Services or products for unlawful, fraudulent, harmful, or abusive purposes.",
        ],
      },
      {
        type: "p",
        text: "You are responsible for how you use the workflows and other digital products and agree to comply with all applicable laws and regulations.",
      },
      {
        type: "p",
        text: "sznvault is not responsible for actions taken by users through the use or misuse of our products.",
      },
    ],
  },
  {
    title: "SECTION 11 – THIRD-PARTY SERVICES",
    blocks: [
      {
        type: "p",
        text: "The Services and our products may depend on or interact with third-party software, platforms, models, APIs, hosting providers, payment providers, or other services.",
      },
      {
        type: "p",
        text: "We do not control third-party services and are not responsible for their availability, performance, content, policies, or changes.",
      },
      {
        type: "p",
        text: "Your use of third-party services may be subject to separate terms and policies imposed by those providers.",
      },
    ],
  },
  {
    title: "SECTION 12 – RELATIONSHIP WITH WHOP",
    blocks: [
      {
        type: "p",
        text: "sznvault uses Whop to facilitate checkout, payment processing, and/or delivery of certain digital products.",
      },
      {
        type: "p",
        text: "Your payment and transaction may be subject to Whop's terms and policies in addition to these Terms.",
      },
      {
        type: "p",
        text: "sznvault is responsible for the products and services we provide to you, while Whop operates the payment and platform services it provides.",
      },
    ],
  },
  {
    title: "SECTION 13 – PRIVACY POLICY",
    blocks: [
      {
        type: "p",
        text: "Personal information collected through the Services is handled in accordance with our Privacy Policy.",
      },
      {
        type: "p",
        text: "Please review our Privacy Policy for information regarding the collection, use, storage, and disclosure of personal information.",
      },
    ],
  },
  {
    title: "SECTION 14 – FEEDBACK",
    blocks: [
      {
        type: "p",
        text: "If you voluntarily submit feedback, suggestions, reviews, ideas, or other comments regarding sznvault or our products, you grant sznvault permission to use that feedback for the purpose of improving, promoting, and developing our Services, unless otherwise required by applicable law.",
      },
      {
        type: "p",
        text: "You represent that you have the necessary rights to provide any feedback you submit.",
      },
    ],
  },
  {
    title: "SECTION 15 – ERRORS, INACCURACIES AND OMISSIONS",
    blocks: [
      {
        type: "p",
        text: "There may occasionally be typographical errors, inaccuracies, or omissions in the Services, including product descriptions, pricing, availability, or other information.",
      },
      {
        type: "p",
        text: "We reserve the right to correct errors and update information when necessary.",
      },
    ],
  },
  {
    title: "SECTION 16 – PROHIBITED USES",
    blocks: [
      { type: "p", text: "You may use the Services only for lawful purposes." },
      { type: "p", text: "You may not use the Services to:" },
      {
        type: "ol",
        items: [
          "Engage in unlawful, harmful, fraudulent, or abusive activity.",
          "Infringe the intellectual-property rights of sznvault or any third party.",
          "Transmit viruses, malware, or malicious code.",
          "Reproduce, duplicate, redistribute, or resell purchased content in violation of these Terms.",
          "Collect or misuse personal information belonging to others.",
          "Circumvent security or access controls.",
          "Attempt to gain unauthorized access to the Services or another user's account.",
        ],
      },
      {
        type: "p",
        text: "We reserve the right to suspend or terminate access where there is a violation of these Terms, subject to applicable law.",
      },
    ],
  },
  {
    title: "SECTION 17 – TERMINATION",
    blocks: [
      {
        type: "p",
        text: "We may suspend or terminate access to the Services where permitted by applicable law, including where a user materially violates these Terms.",
      },
      {
        type: "p",
        text: "Termination does not affect rights or obligations that arose before termination.",
      },
      {
        type: "p",
        text: "Sections concerning intellectual property, acceptable use, disclaimers, limitation of liability, indemnification, and other provisions that by their nature should survive termination will remain in effect.",
      },
    ],
  },
  {
    title: "SECTION 18 – DISCLAIMER OF WARRANTIES",
    blocks: [
      {
        type: "p",
        text: 'TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES AND DIGITAL PRODUCTS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.',
      },
      {
        type: "p",
        text: "sznvault does not guarantee that the Services or products will always be available, uninterrupted, error-free, or compatible with every device, software configuration, model, workflow environment, or third-party service.",
      },
      {
        type: "p",
        text: "We do not guarantee any specific financial, business, creative, technical, or other result from using our products.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes or limits warranties or rights that cannot legally be excluded under applicable law.",
      },
    ],
  },
  {
    title: "SECTION 19 – LIMITATION OF LIABILITY",
    blocks: [
      {
        type: "p",
        text: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, sznvault WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR OTHER LOSSES ARISING FROM YOUR USE OF THE SERVICES OR PRODUCTS.",
      },
      {
        type: "p",
        text: "This limitation applies to the extent permitted by applicable law and does not exclude liability that cannot legally be excluded or limited.",
      },
    ],
  },
  {
    title: "SECTION 20 – INDEMNIFICATION",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, you agree to be responsible for losses, claims, damages, or expenses arising from your unlawful use of the Services, your violation of these Terms, or your infringement of the rights of another person.",
      },
    ],
  },
  {
    title: "SECTION 21 – SEVERABILITY",
    blocks: [
      {
        type: "p",
        text: "If any provision of these Terms is found to be unlawful, invalid, or unenforceable, that provision will be enforced to the maximum extent permitted by law, and the remaining provisions will remain in effect.",
      },
    ],
  },
  {
    title: "SECTION 22 – WAIVER; ENTIRE AGREEMENT",
    blocks: [
      {
        type: "p",
        text: "Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.",
      },
      {
        type: "p",
        text: "These Terms, together with the policies referenced herein, constitute the agreement governing your use of the Services, subject to any mandatory rights provided by applicable law.",
      },
    ],
  },
  {
    title: "SECTION 23 – GOVERNING LAW",
    blocks: [
      {
        type: "p",
        text: "These Terms shall be governed by the applicable laws of the Republic of Moldova, without prejudice to any mandatory consumer-protection rights or other rights that may apply to you under the laws of your jurisdiction.",
      },
      {
        type: "p",
        text: "Any disputes shall be handled by the competent authorities or courts having jurisdiction under applicable law.",
      },
    ],
  },
  {
    title: "SECTION 24 – CHANGES TO TERMS OF SERVICE",
    blocks: [
      { type: "p", text: "We may update or modify these Terms from time to time." },
      {
        type: "p",
        text: "Updated Terms will be posted on the website. Your continued use of the Services after an update may constitute acceptance of the updated Terms to the extent permitted by applicable law.",
      },
    ],
  },
  {
    title: "SECTION 25 – USER-GENERATED CONTENT AND USER RESPONSIBILITY",
    blocks: [
      {
        type: "p",
        text: "SZNVault provides digital tools, ComfyUI workflows, educational materials, and related resources that may allow users to generate, modify, enhance, or otherwise create images, videos, audio, text, or other forms of content.",
      },
      {
        type: "p",
        text: "You are solely responsible for everything you create, generate, modify, publish, upload, distribute, or otherwise use through or with SZNVault products and workflows.",
      },
      {
        type: "p",
        text: "SZNVault does not control, monitor, approve, endorse, or guarantee content generated by users. We are not responsible or liable for how you use our workflows, what you create with them, where you publish or distribute such content, or any consequences resulting from your use of our products, except where liability cannot legally be excluded.",
      },
      {
        type: "p",
        text: "You are responsible for ensuring that your use of SZNVault products and any content you create complies with all applicable laws, regulations, platform rules, and the rights of other individuals or entities.",
      },
      {
        type: "p",
        text: "You must not use SZNVault products or workflows to create, generate, distribute, or facilitate unlawful, fraudulent, abusive, exploitative, or otherwise prohibited content or activity.",
      },
      {
        type: "p",
        text: "The fact that a workflow or technical tool allows you to generate or process a particular type of content does not mean that such use is permitted by SZNVault or by applicable law.",
      },
      {
        type: "p",
        text: "You are solely responsible for obtaining any rights, permissions, licenses, or consents necessary for any images, videos, likenesses, names, voices, trademarks, copyrighted materials, personal information, or other materials that you use as inputs or otherwise process through our workflows.",
      },
      {
        type: "p",
        text: "SZNVault does not grant you ownership, permission, or authorization to use third-party intellectual property, personal likenesses, trademarks, copyrighted works, or other protected materials merely because our products technically allow you to process or generate content involving them.",
      },
      {
        type: "p",
        text: "You are also responsible for complying with the terms, policies, and restrictions of any third-party AI models, platforms, websites, software, or services that you use together with SZNVault workflows.",
      },
      {
        type: "p",
        text: "SZNVault is not responsible for restrictions, account suspensions, bans, claims, disputes, damages, losses, or other consequences resulting from your use of third-party platforms or services.",
      },
      {
        type: "p",
        text: "By purchasing or using SZNVault products, you acknowledge that the workflows are tools, and that the responsibility for their use and the content produced with them rests with you.",
      },
    ],
  },
  {
    title: "SECTION 26 – CONTACT INFORMATION",
    blocks: [
      { type: "p", text: "Questions about these Terms should be directed to:" },
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

function TermsPage() {
  return <LegalPage title="Terms of Service" sections={sections} />;
}
