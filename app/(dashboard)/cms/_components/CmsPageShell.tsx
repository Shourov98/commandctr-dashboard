import Link from "next/link";
import { ReactNode } from "react";

type TabKey = "landing" | "about" | "faq";

type CmsPageShellProps = {
  activeTab: TabKey;
  title: string;
  subtitle: string;
  children: ReactNode;
};

const tabs: Array<{ key: TabKey; label: string; href: string }> = [
  { key: "landing", label: "Landing Page", href: "/cms/landing-page" },
  { key: "about", label: "About Us Page", href: "/cms/about-us-page" },
  { key: "faq", label: "FAQ Sections", href: "/cms/faq-sections" },
];

export default function CmsPageShell({ activeTab, title, subtitle, children }: CmsPageShellProps) {
  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#eef1f6] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="flex flex-wrap items-center justify-between gap-3 bg-[#16254a] px-4 py-3 sm:px-5">
        <h1 className="m-0 text-[1.6rem] font-semibold leading-tight text-[#d5dceb] sm:text-[1.8rem]">Content Management</h1>

        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <Link
                key={tab.key}
                href={tab.href}
                className={`rounded-[0.35rem] border px-4 py-1.5 text-[0.86rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]/60 ${active ? "border-[#2ee9df] bg-[#2ee9df] text-[#18315a]" : "border-white/45 bg-transparent text-[#e8efff] hover:bg-white/8"}`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </header>

      <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
        <h2 className="m-0 text-[1.9rem] font-semibold leading-tight text-[#26324e]">{title}</h2>
        <p className="mt-1 text-[0.96rem] text-[#7a879e]">{subtitle}</p>

        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}
