import CmsPageShell from "../_components/CmsPageShell";

export default function CmsAboutUsPage() {
  return (
    <CmsPageShell
      activeTab="about"
      title="About Us Content"
      subtitle="Control the story, mission, and brand trust elements shown on your About page."
    >
      <div className="space-y-4">
        <section className="rounded-[0.7rem] border border-[#d8dfeb] bg-[#ecf0f5] p-4 sm:p-5">
          <h3 className="m-0 text-[0.86rem] font-bold uppercase tracking-[0.11em] text-[#8a98b2]">Intro Section</h3>
          <div className="mt-3 space-y-3">
            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Page Headline
              <input
                defaultValue="Built to simplify modern marketplace operations"
                className="mt-1.5 h-11 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 text-[0.95rem] text-[#36425d] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>

            <label className="block text-[0.88rem] font-semibold text-[#33415f]">
              Intro Paragraph
              <textarea
                defaultValue="CommandCtr helps teams unify product, order, and inventory workflows across channels in one operational cockpit."
                rows={4}
                className="mt-1.5 w-full rounded-[0.45rem] border border-[#d3dbe7] bg-[#f7f9fc] px-3 py-2.5 text-[0.95rem] text-[#4b5873] outline-none focus:ring-2 focus:ring-[#2ee9df]/40"
              />
            </label>
          </div>
        </section>

        <section className="rounded-[0.7rem] border border-[#d8dfeb] bg-[#ecf0f5] p-4 sm:p-5">
          <h3 className="m-0 text-[0.86rem] font-bold uppercase tracking-[0.11em] text-[#8a98b2]">Trust Metrics</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Merchants", value: "12k+" },
              { label: "Orders Synced", value: "8.2M" },
              { label: "Avg. Time Saved", value: "11 hrs/week" },
            ].map((item) => (
              <article key={item.label} className="rounded-[0.55rem] border border-[#d3dbe7] bg-[#f7f9fc] p-3">
                <p className="m-0 text-[1.2rem] font-bold text-[#25314d]">{item.value}</p>
                <p className="mt-1 text-[0.83rem] font-medium text-[#6b7993]">{item.label}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </CmsPageShell>
  );
}
