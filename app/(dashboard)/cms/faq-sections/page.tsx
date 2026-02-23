"use client";

import { useState } from "react";
import CmsPageShell from "../_components/CmsPageShell";

type FaqSection = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
};

const faqSections: FaqSection[] = [
  { id: "main", title: "FAQ Hero Section", subtitle: "Top headline, intro copy, and support CTA." },
  { id: "popular", title: "Popular Questions", subtitle: "Most frequently asked customer questions." },
  { id: "billing", title: "Billing & Subscription", subtitle: "Plan, invoice, and renewal related answers." },
  { id: "tech", title: "Technical Support", subtitle: "Integrations, API, and troubleshooting guidance.", badge: "Priority" },
  { id: "footer", title: "FAQ Footer Block", subtitle: "Bottom links and help center redirect." },
];

export default function CmsFaqSectionsPage() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  return (
    <CmsPageShell
      activeTab="faq"
      title="FAQ Content Builder"
      subtitle="Manage question groups, support messaging, and help-center blocks from one place."
    >
      <div className="space-y-3">
        {faqSections.map((section) => {
          const expanded = section.id === activeSectionId;

          return (
            <section
              key={section.id}
              className={`rounded-[0.75rem] border bg-[#f3f6fb] transition-colors ${
                expanded ? "border-[#34d9ef] shadow-[inset_0_0_0_1px_rgba(52,217,239,0.25)]" : "border-[#d8dfeb]"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveSectionId((current) => (current === section.id ? null : section.id))}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                aria-expanded={expanded}
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#dce4f1] text-[#6a7893]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M10 9.5a2 2 0 0 1 4 0c0 1.5-2 2-2 3.5" strokeLinecap="round" />
                      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="m-0 truncate text-[0.96rem] font-semibold text-[#2f3a56]">{section.title}</p>
                    <p className="m-0 truncate text-[0.78rem] text-[#8794ab]">{section.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {section.badge ? (
                    <span className="rounded-full bg-[#dbe5ff] px-2 py-0.5 text-[0.68rem] font-semibold text-[#4c63b6]">
                      {section.badge}
                    </span>
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={`inline-flex text-[#8f9bb1] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>

              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div
                    className={`border-t border-[#d8dfeb] px-4 pb-4 pt-3 transition-opacity duration-200 sm:px-5 sm:pb-5 ${
                      expanded ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block text-[0.86rem] font-semibold text-[#33415f]">
                      Section Title
                      <input
                        defaultValue="Got questions? We have answers."
                        className="mt-1.5 h-10 w-full rounded-[0.45rem] border border-[#cfd8e6] bg-white px-3 text-[0.92rem] text-[#34405c] outline-none focus:ring-2 focus:ring-[#34d9ef]/40"
                      />
                    </label>

                    <label className="block text-[0.86rem] font-semibold text-[#33415f]">
                      Support CTA
                      <input
                        defaultValue="Contact Support"
                        className="mt-1.5 h-10 w-full rounded-[0.45rem] border border-[#cfd8e6] bg-white px-3 text-[0.92rem] text-[#34405c] outline-none focus:ring-2 focus:ring-[#34d9ef]/40"
                      />
                    </label>
                  </div>

                  <label className="mt-3 block text-[0.86rem] font-semibold text-[#33415f]">
                    Intro Paragraph
                    <textarea
                      rows={3}
                      defaultValue="Find quick answers for onboarding, billing, and integrations. If you still need help, our team is one click away."
                      className="mt-1.5 w-full rounded-[0.45rem] border border-[#cfd8e6] bg-white px-3 py-2.5 text-[0.92rem] text-[#4a5772] outline-none focus:ring-2 focus:ring-[#34d9ef]/40"
                    />
                  </label>

                  <div className="mt-3 rounded-[0.55rem] border border-[#d4dceb] bg-white p-3">
                    <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#8391a8]">Question Items</p>
                    <div className="mt-2 space-y-2">
                      {[
                        "How long does setup take?",
                        "Can I connect multiple stores?",
                        "Do you offer a free trial?",
                      ].map((question, index) => (
                        <div key={question} className="flex items-center justify-between rounded-[0.45rem] border border-[#d8dfeb] bg-[#f7f9fc] px-3 py-2">
                          <p className="m-0 text-[0.87rem] text-[#384561]">
                            {index + 1}. {question}
                          </p>
                          <button type="button" className="text-[0.74rem] font-semibold text-[#ea4b59] hover:text-[#d73846]">
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="mt-2.5 h-9 rounded-[0.4rem] border border-[#16254a] bg-[#16254a] px-3 text-[0.84rem] font-semibold text-white hover:bg-[#0f1a36]"
                    >
                      Add Question
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </section>
          );
        })}

        <button
          type="button"
          className="flex h-10 w-full items-center justify-center gap-1 rounded-[0.6rem] border border-dashed border-[#c7d2e3] bg-[#f3f6fb] text-[0.9rem] font-semibold text-[#73819c] hover:border-[#9fb0ca] hover:text-[#556383]"
        >
          <span aria-hidden="true" className="inline-flex">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
          Add New Section
        </button>
      </div>
    </CmsPageShell>
  );
}
