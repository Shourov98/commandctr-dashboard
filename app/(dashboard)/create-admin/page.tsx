export default function CreateAdminPage() {
  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="bg-[#16254a] px-4 py-3 sm:px-5">
        <h1 className="m-0 text-[1.9rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.1rem]">Create Admin</h1>
      </header>

      <div className="p-4 sm:p-5">
        <form className="rounded-[0.6rem] border border-[#14274c]/10 bg-white p-4 shadow-[0_8px_18px_rgba(35,47,78,0.06)] sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-[0.92rem] font-medium text-[#2b3550]">Full Name</span>
              <input
                type="text"
                placeholder="Enter full name"
                className="h-11 rounded-[0.45rem] border border-[#c7d1e2] bg-white px-3 text-[0.95rem] text-[#22304d] outline-none focus:ring-2 focus:ring-[#44e9e1]/50"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[0.92rem] font-medium text-[#2b3550]">Email</span>
              <input
                type="email"
                placeholder="admin@email.com"
                className="h-11 rounded-[0.45rem] border border-[#c7d1e2] bg-white px-3 text-[0.95rem] text-[#22304d] outline-none focus:ring-2 focus:ring-[#44e9e1]/50"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[0.92rem] font-medium text-[#2b3550]">Phone</span>
              <input
                type="tel"
                placeholder="+123456789"
                className="h-11 rounded-[0.45rem] border border-[#c7d1e2] bg-white px-3 text-[0.95rem] text-[#22304d] outline-none focus:ring-2 focus:ring-[#44e9e1]/50"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[0.92rem] font-medium text-[#2b3550]">Password</span>
              <input
                type="password"
                placeholder="********"
                className="h-11 rounded-[0.45rem] border border-[#c7d1e2] bg-white px-3 text-[0.95rem] text-[#22304d] outline-none focus:ring-2 focus:ring-[#44e9e1]/50"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[0.92rem] font-medium text-[#2b3550]">Confirm Password</span>
              <input
                type="password"
                placeholder="********"
                className="h-11 rounded-[0.45rem] border border-[#c7d1e2] bg-white px-3 text-[0.95rem] text-[#22304d] outline-none focus:ring-2 focus:ring-[#44e9e1]/50"
              />
            </label>
          </div>

          <div className="mt-5 rounded-[0.5rem] border border-[#d8e2f1] bg-[#f8fbff] p-4">
            <p className="mb-3 text-[0.92rem] font-semibold text-[#2b3550]">Permissions</p>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Dashboard Access",
                "Users Management",
                "Reports Access",
                "CMS Access",
                "Settings Access",
                "Notifications",
              ].map((item) => (
                <label key={item} className="inline-flex items-center gap-2 text-[0.9rem] text-[#2b3550]">
                  <input type="checkbox" className="h-4 w-4 accent-[#16254a]" defaultChecked />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-end gap-2.5">
            <button
              type="button"
              className="h-10 rounded-[0.4rem] border border-[#1f2a45]/45 bg-white px-5 text-[0.9rem] font-semibold text-[#1f2a45] transition-colors hover:bg-[#f2f5fb]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 rounded-[0.4rem] border border-[#16254a] bg-[#16254a] px-5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#0f1a36]"
            >
              Create Admin
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
