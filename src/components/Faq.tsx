import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What if I get stuck?",
    a: "You get full access to our community and step-by-step guides. Ask anything and you'll get an answer fast.",
  },
  {
    q: "Can I generate unrestricted content with this?",
    a: "You run everything locally or on your own cloud GPU, so you decide what you create within the law.",
  },
  {
    q: "Do I need a powerful computer?",
    a: "No. If your machine can't handle it, you can rent a cloud GPU by the hour and follow the same workflow.",
  },
  {
    q: "How much does cloud GPU usage cost?",
    a: "Typically under a dollar per hour, and you only pay for the time you actually spend generating.",
  },
  {
    q: "Are there any subscriptions?",
    a: "No recurring fees. One-time access, lifetime updates included.",
  },
  {
    q: "Do I need coding experience?",
    a: "None at all. Everything is covered with visual, click-by-click instructions.",
  },
  {
    q: "Does this work on Mac?",
    a: "Yes. Apple Silicon works locally, and cloud GPUs work on any machine with a browser.",
  },
  {
    q: "Do I need to use paid AI tools?",
    a: "No. Every tool in the workflow is free and open source.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-nav px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-[-0.02em] text-nav-foreground md:text-5xl">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-nav-pill transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-nav-foreground">
                    {item.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-nav-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-nav-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
