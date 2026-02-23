import Link from "next/link";

export default function ChangePasswordPage() {
  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="flex items-center gap-2 bg-[#16254a] px-4 py-3 sm:px-5">
        <Link
          href="/settings"
          className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[1.1rem] text-[#44e9e1] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]/60"
          aria-label="Back to settings"
        >
          ←
        </Link>
        <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">Change Password</h1>
      </header>

      <div className="px-4 py-7 sm:px-5">
        <form className="mx-auto w-full max-w-[27rem] space-y-2.5">
          <label className="block">
            <span className="mb-1 block text-[0.98rem] font-medium text-[#2a344b]">Current Password</span>
            <input
              type="password"
              defaultValue="********"
              className="h-[2.05rem] w-full rounded-[0.35rem] border border-[#aeb8c9] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none focus:ring-2 focus:ring-[#44e9e1]/35"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.98rem] font-medium text-[#2a344b]">New Password</span>
            <input
              type="password"
              defaultValue="********"
              className="h-[2.05rem] w-full rounded-[0.35rem] border border-[#aeb8c9] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none focus:ring-2 focus:ring-[#44e9e1]/35"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-[0.98rem] font-medium text-[#2a344b]">Confirm New Password</span>
            <input
              type="password"
              defaultValue="********"
              className="h-[2.05rem] w-full rounded-[0.35rem] border border-[#aeb8c9] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none focus:ring-2 focus:ring-[#44e9e1]/35"
            />
          </label>

          <div className="text-right">
            <Link href="/auth/forgot-pass" className="text-[0.88rem] text-[#2f3b56] underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-2 h-[2.05rem] w-full rounded-[0.4rem] border border-[#16254a] bg-[#16254a] text-[1rem] font-semibold text-white transition-colors hover:bg-[#0f1a36]"
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
}
