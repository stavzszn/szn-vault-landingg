import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Email, type LegalSection } from "@/components/LegalDoc";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
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
  component: () => (
    <LegalPage
      title="Privacy Policy"
      sections={privacySections}
    />
  ),
});

const privacySections: LegalSection[] = [
  {
    blocks: [
      {
        type: "p",
        text: (
          <>
            <strong>Last updated: September 19, 2026</strong>
          </>
        ),
      },
      {
        type: "p",
        text: (
          <>
            SZNVault ("SZNVault", "we", "us", or "our") operates the website{" "}
            <strong>sznvault.com</strong> and provides digital products and educational content,
            including ComfyUI workflows, related guides, and courses.
          </>
        ),
      },
      {
        type: "p",
        text: "This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website, purchase or access our digital products, contact us, or otherwise interact with SZNVault.",
      },
      {
        type: "p",
        text: "By using our website or services, you acknowledge the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    title: "1. Personal Information We Collect",
    blocks: [
      { type: "p", text: "The information we collect depends on how you interact with SZNVault." },
      { type: "h3", text: "Information You Provide Directly" },
      {
        type: "p",
        text: "When you make a purchase, create or use an account through a third-party platform, contact us, or otherwise interact with our services, we may collect information such as:",
      },
      {
        type: "ul",
        items: [
          "Your name",
          "Email address",
          "Account or login-related information",
          "Purchase and transaction information",
          "Information you provide when contacting customer support",
          "Information you voluntarily provide in communications with us",
          "Other information you choose to provide",
        ],
      },
      {
        type: "p",
        text: "We do not need to collect physical shipping information because SZNVault primarily provides digital products.",
      },
      { type: "h3", text: "Information Automatically Collected" },
      {
        type: "p",
        text: "When you visit sznvault.com or interact with our services, certain technical information may be collected automatically.",
      },
      { type: "p", text: "This may include:" },
      {
        type: "ul",
        items: [
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "General device information",
          "Pages or content viewed",
          "Date and time of visits",
          "Referring pages or websites",
          "General usage information",
          "Information about how you interact with our website",
        ],
      },
      {
        type: "p",
        text: "This information may be collected through cookies, similar technologies, analytics tools, or other technical mechanisms used by our website or service providers.",
      },
      { type: "h3", text: "Payment Information" },
      {
        type: "p",
        text: (
          <>
            Payments for SZNVault products are processed through third-party payment services,
            including <strong>Whop</strong>.
          </>
        ),
      },
      {
        type: "p",
        text: "Depending on the payment method and provider, payment-related information may be collected and processed by the relevant payment provider.",
      },
      {
        type: "p",
        text: "We do not intend to directly store your complete payment card information on our own systems.",
      },
      {
        type: "p",
        text: "Payment providers may collect and process payment information according to their own privacy policies and terms.",
      },
    ],
  },
  {
    title: "2. How We Collect Information",
    blocks: [
      { type: "p", text: "We may collect personal information through:" },
      {
        type: "ul",
        items: [
          "Information you provide directly to us",
          "Purchases and transactions",
          "Communications with our support team",
          "Our website and its technical systems",
          "Cookies and similar technologies",
          "Third-party platforms and service providers involved in providing our services",
        ],
      },
      {
        type: "p",
        text: "Some information may also be provided to us by third-party platforms when necessary to process purchases, provide access to products, prevent fraud, or provide customer support.",
      },
    ],
  },
  {
    title: "3. How We Use Personal Information",
    blocks: [
      { type: "p", text: "We may use personal information for purposes including:" },
      { type: "h3", text: "Providing Our Products and Services" },
      { type: "p", text: "We may use your information to:" },
      {
        type: "ul",
        items: [
          "Process purchases",
          "Provide access to purchased digital products",
          "Deliver course or workflow access",
          "Maintain and manage accounts or access",
          "Provide customer support",
          "Communicate with you about your purchases",
        ],
      },
      { type: "h3", text: "Communications" },
      { type: "p", text: "We may use your contact information to:" },
      {
        type: "ul",
        items: [
          "Respond to questions and support requests",
          "Send transactional messages",
          "Provide information relating to purchases or access",
          "Communicate important changes to our services or policies",
        ],
      },
      { type: "h3", text: "Security and Fraud Prevention" },
      { type: "p", text: "We may use information to:" },
      {
        type: "ul",
        items: [
          "Detect and prevent fraudulent transactions",
          "Protect our website and services",
          "Prevent unauthorized access",
          "Investigate abuse or misuse of our products",
          "Enforce our Terms of Service",
        ],
      },
      { type: "h3", text: "Analytics and Improvement" },
      {
        type: "p",
        text: "We may use technical and usage information to understand how visitors interact with our website and improve the performance, functionality, and user experience of our services.",
      },
      { type: "h3", text: "Legal and Compliance Purposes" },
      { type: "p", text: "We may process information when reasonably necessary to:" },
      {
        type: "ul",
        items: [
          "Comply with applicable laws and legal obligations",
          "Respond to lawful requests from authorities",
          "Protect our rights or property",
          "Resolve disputes",
          "Enforce our agreements and policies",
          "Prevent illegal or harmful activity",
        ],
      },
    ],
  },
  {
    title: "4. Cookies and Similar Technologies",
    blocks: [
      { type: "p", text: "SZNVault may use cookies and similar technologies to operate and improve the website." },
      { type: "p", text: "Cookies may be used for purposes such as:" },
      {
        type: "ul",
        items: [
          "Website functionality",
          "Security",
          "Remembering preferences",
          "Understanding website usage",
          "Analytics",
          "Improving website performance",
        ],
      },
      {
        type: "p",
        text: "Third-party services used on or in connection with our website may also use cookies or similar technologies.",
      },
      {
        type: "p",
        text: "Your browser may allow you to control or block certain cookies. However, disabling cookies may affect some website functionality.",
      },
    ],
  },
  {
    title: "5. Sharing Personal Information",
    blocks: [
      {
        type: "p",
        text: "We may share personal information with third parties when reasonably necessary to operate SZNVault and provide our products and services.",
      },
      { type: "p", text: "These third parties may include:" },
      { type: "h3", text: "Payment and Commerce Providers" },
      {
        type: "p",
        text: (
          <>
            We may share information with payment and commerce platforms, including{" "}
            <strong>Whop</strong>, when necessary to process payments, manage purchases, provide
            access to digital products, prevent fraud, or provide related services.
          </>
        ),
      },
      { type: "h3", text: "Service Providers" },
      { type: "p", text: "We may use third-party providers for services such as:" },
      {
        type: "ul",
        items: [
          "Website hosting",
          "Website infrastructure",
          "Analytics",
          "Email and communications",
          "Customer support",
          "Security",
          "Payment processing",
          "Digital product delivery",
        ],
      },
      {
        type: "p",
        text: "These providers may process personal information on our behalf or independently according to their own terms and privacy policies.",
      },
      { type: "h3", text: "Legal Requirements" },
      { type: "p", text: "We may disclose information where reasonably necessary to:" },
      {
        type: "ul",
        items: [
          "Comply with applicable law",
          "Respond to legal processes or government requests",
          "Protect our rights, users, or property",
          "Investigate fraud or other unlawful activity",
          "Enforce our agreements",
        ],
      },
      { type: "h3", text: "Business Transactions" },
      {
        type: "p",
        text: "If SZNVault is involved in a merger, acquisition, sale of assets, restructuring, or similar business transaction, personal information may be transferred as part of that transaction where permitted by applicable law.",
      },
    ],
  },
  {
    title: "6. Relationship With Whop",
    blocks: [
      {
        type: "p",
        text: (
          <>
            <strong>Whop</strong> as a third-party platform for certain commerce, payment, account,
            and/or digital-product access functions.
          </>
        ),
      },
      {
        type: "p",
        text: "When you purchase or access SZNVault products through Whop, Whop may collect and process personal information in connection with those services.",
      },
      {
        type: "p",
        text: "Information processed by Whop may include account information, transaction information, payment-related information, and information necessary to provide access to purchased products.",
      },
      {
        type: "p",
        text: "Whop's processing of personal information is subject to Whop's own privacy policies and terms.",
      },
      {
        type: "p",
        text: "You should review Whop's applicable privacy documentation for information about how Whop independently processes your personal information.",
      },
      {
        type: "p",
        text: "SZNVault does not control the privacy practices of Whop or other third-party services.",
      },
    ],
  },
  {
    title: "7. User-Created Content and Use of Our Workflows",
    blocks: [
      {
        type: "p",
        text: "SZNVault provides digital tools, workflows, educational materials, and related resources that may allow users to generate, modify, enhance, or otherwise create images, videos, audio, text, or other content.",
      },
      {
        type: "p",
        text: (
          <>
            <strong>
              Users are solely responsible for the content they create, generate, modify, publish,
              distribute, upload, or otherwise use through or with our products and workflows.
            </strong>
          </>
        ),
      },
      {
        type: "p",
        text: "SZNVault does not control the content generated by users and does not review, approve, endorse, or guarantee individual outputs created using our workflows.",
      },
      {
        type: "p",
        text: (
          <>
            <strong>
              We are not responsible or liable for how our users use our workflows, what they
              create with them, where they publish or distribute such content, or any consequences
              resulting from their use of the products, except to the extent liability cannot
              lawfully be excluded.
            </strong>
          </>
        ),
      },
      {
        type: "p",
        text: "Users are responsible for ensuring that their use of our products and any content they create complies with all applicable laws, regulations, platform rules, intellectual-property rights, privacy rights, publicity rights, and other applicable rights.",
      },
      {
        type: "p",
        text: "Users must not use SZNVault products or workflows to create, generate, distribute, or facilitate unlawful, fraudulent, abusive, exploitative, or otherwise prohibited content or activity.",
      },
      {
        type: "p",
        text: "If a workflow or product can technically be used to generate different types of content, that technical capability does not mean that every possible use is permitted.",
      },
      {
        type: "p",
        text: "You are responsible for determining whether you have the necessary rights, permissions, licenses, or consents to use any images, likenesses, names, voices, trademarks, copyrighted materials, or other inputs used with our workflows.",
      },
      {
        type: "p",
        text: "SZNVault does not grant users ownership or permission to use third-party intellectual property merely because our workflows may technically allow such content to be processed or generated.",
      },
    ],
  },
  {
    title: "8. Third-Party Links and Services",
    blocks: [
      {
        type: "p",
        text: "Our website or products may contain links to websites, platforms, or services operated by third parties.",
      },
      { type: "p", text: "These third parties may include platforms used for:" },
      {
        type: "ul",
        items: [
          "Payments",
          "Digital product access",
          "Community services",
          "Educational resources",
          "Social media",
          "Other external services",
        ],
      },
      {
        type: "p",
        text: "If you follow a third-party link, your interaction with that third party is governed by its own terms and privacy policy.",
      },
      {
        type: "p",
        text: "We are not responsible for the privacy practices, security, content, or actions of third-party websites or services.",
      },
    ],
  },
  {
    title: "9. Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:",
      },
      {
        type: "ul",
        items: [
          "Provide our services",
          "Maintain transaction and business records",
          "Provide customer support",
          "Resolve disputes",
          "Prevent fraud or abuse",
          "Comply with legal obligations",
          "Enforce agreements",
        ],
      },
      {
        type: "p",
        text: "The specific retention period may vary depending on the type of information and the reason it was collected.",
      },
      {
        type: "p",
        text: "When personal information is no longer reasonably necessary, we may delete, anonymize, or otherwise dispose of it where appropriate and permitted by applicable law.",
      },
    ],
  },
  {
    title: "10. Data Security",
    blocks: [
      {
        type: "p",
        text: "We take reasonable measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      },
      {
        type: "p",
        text: "However, no website, online service, or method of electronic transmission can be guaranteed to be completely secure.",
      },
      {
        type: "p",
        text: "Therefore, while we take reasonable precautions, we cannot guarantee absolute security of your information.",
      },
    ],
  },
  {
    title: "11. Your Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on your location and applicable law, you may have certain rights regarding your personal information.",
      },
      { type: "p", text: "These rights may include:" },
      {
        type: "ul",
        items: [
          "The right to request access to personal information we hold about you",
          "The right to request correction of inaccurate information",
          "The right to request deletion of personal information, where applicable",
          "The right to request restriction of certain processing",
          "The right to object to certain processing",
          "The right to request portability of certain information",
          "The right to withdraw consent where processing is based on consent",
          "The right to submit a complaint to an applicable data protection authority",
        ],
      },
      { type: "p", text: "These rights are subject to applicable legal requirements and limitations." },
      { type: "p", text: "To exercise a privacy-related right, contact us using the information provided below." },
      { type: "p", text: "We may need to verify your identity before processing certain requests." },
    ],
  },
  {
    title: "12. Marketing Communications",
    blocks: [
      {
        type: "p",
        text: "If we send marketing communications, you may have the ability to unsubscribe or opt out of receiving them.",
      },
      { type: "p", text: "You may also contact us to request that we stop sending marketing communications to you." },
      {
        type: "p",
        text: "Transactional and service-related communications may still be sent when necessary, such as messages concerning purchases, account access, security, or important changes to our services.",
      },
    ],
  },
  {
    title: "13. Children's Privacy",
    blocks: [
      { type: "p", text: "Our services are not intentionally directed toward children." },
      {
        type: "p",
        text: "We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.",
      },
      {
        type: "p",
        text: (
          <>
            If you believe that a child has provided personal information to us improperly, please
            contact us at <strong>help@sznvault.com</strong> so that we can review the situation and
            take appropriate action.
          </>
        ),
      },
    ],
  },
  {
    title: "14. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Because we use third-party service providers, including online payment, hosting, analytics, and digital-product platforms, personal information may be processed or stored in countries other than the country in which you live.",
      },
      {
        type: "p",
        text: "These countries may have data-protection laws that differ from those in your jurisdiction.",
      },
      {
        type: "p",
        text: "Where applicable, we take reasonable steps to ensure that international transfers of personal information are handled in accordance with applicable legal requirements.",
      },
      {
        type: "p",
        text: "Third-party providers may have their own rules and safeguards concerning international data transfers.",
      },
    ],
  },
  {
    title: "15. Data Controller",
    blocks: [
      {
        type: "p",
        text: "For personal information that SZNVault itself controls, SZNVault acts as the data controller to the extent required by applicable law.",
      },
      {
        type: "p",
        text: "For information processed directly by third-party platforms such as Whop, the relevant third party may act as an independent controller or processor depending on the nature of the processing.",
      },
      {
        type: "p",
        text: "Questions regarding information processed directly by a third-party provider may need to be directed to that provider.",
      },
    ],
  },
  {
    title: "16. Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes to our services, technologies, business practices, or legal requirements.",
      },
      {
        type: "p",
        text: 'When we make changes, we may update the "Last updated" date at the beginning of this Privacy Policy.',
      },
      {
        type: "p",
        text: "You should review this page periodically to remain informed about how we handle personal information.",
      },
    ],
  },
  {
    title: "17. Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Privacy Policy, want to make a privacy request, or have concerns about how your personal information is handled, you can contact us at:",
      },
      {
        type: "p",
        text: (
          <>
            <strong>SZNVault</strong>
            <br />
            <strong>Website:</strong> sznvault.com
            <br />
            <strong>Email:</strong> <Email />
            <br />
            <strong>Location:</strong> Chișinău, Moldova
          </>
        ),
      },
      {
        type: "p",
        text: "We will review privacy-related requests and respond within a reasonable period, subject to applicable law and any necessary identity verification.",
      },
    ],
  },
  {
    blocks: [
      { type: "p", text: "____________________" },
      { type: "p", text: <strong>Last updated: September 19, 2026</strong> },
    ],
  },
];
