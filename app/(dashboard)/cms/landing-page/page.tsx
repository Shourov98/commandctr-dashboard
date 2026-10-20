import CmsPageShell from "../_components/CmsPageShell";
import { ReactNode } from "react";

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[0.7rem] border border-[#d8dfeb] bg-[#ecf0f5] p-4 sm:p-5">
      <h3 className="m-0 text-[0.86rem] font-bold uppercase tracking-[0.11em] text-[#8a98b2]">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function CmsLandingPage() {
  return (
    <CmsPageShell
      activeTab="landing"
      title="Hero Section Settings"
      subtitle="Configure the main above-the-fold content of your marketplace landing page."
    >
      <div className="space-y-4">
        <SectionCard title="Copywriting">
          <div className="space-y-3">
            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Badge Text
              <input
                defaultValue="NOW SUPPORTING TIKTOK SHOP"
                className="mt-1.5 h-11 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 text-[0.95rem] text-[#36425d] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>

            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Main Headline
              <textarea
                defaultValue="THE ONE-STOP MARKETPLACE GENESIS."
                rows={2}
                className="mt-1.5 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 py-2.5 text-[1.9rem] font-bold leading-tight text-[#232f4b] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>

            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Sub-copy
              <textarea
                defaultValue="Stop juggling tabs. The ultimate Command Center to sync inventory, update products, and fulfill orders across TikTok Shop, Amazon, and eBay in real-time."
                rows={3}
                className="mt-1.5 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 py-2.5 text-[0.95rem] text-[#4b5873] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard title="Buttons & Actions">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Primary CTA
              <input
                defaultValue="GET STARTED"
                className="mt-1.5 h-11 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 text-[0.95rem] text-[#36425d] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>

            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Secondary CTA
              <input
                defaultValue="VIEW DEMO"
                className="mt-1.5 h-11 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 text-[0.95rem] text-[#36425d] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard title="Main Visual">
          <div className="rounded-[0.6rem] border-2 border-dashed border-[#c9d4e4] bg-[#f7f9fc] px-4 py-8 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#27d9f0]/15 text-[#27d9f0]">☁</div>
            <p className="mt-3 text-[1rem] font-semibold text-[#2f3a56]">diagram_hero_main.svg <span className="text-[#9aa7be]">2.4 MB</span></p>
            <p className="text-[0.82rem] text-[#91a0b8]">Recommended size: 1200x800px (SVG preferred)</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-[0.86rem] font-semibold">
              <button type="button" className="rounded border border-[#cad4e5] bg-white px-3 py-1 text-[#2f3a56] hover:bg-[#eef3fb]">
                Replace
              </button>
              <button type="button" className="rounded px-1 py-1 text-[#ea4b59] hover:text-[#d73846]">
                Remove
              </button>
            </div>
          </div>
        </SectionCard>
      </div>
    </CmsPageShell>
  );
}
