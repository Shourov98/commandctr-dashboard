import Link from "next/link";

type SettingItem = {
  label: string;
  href: string;
};

const settingItems: SettingItem[] = [
  { label: "Change Password", href: "/settings/change-pass" },
  { label: "Privacy Policy", href: "/settings/privacy-policy" },
  { label: "Terms & Conditions", href: "/settings/terms-conditions" },
  { label: "About Us", href: "/settings/about-us" },
];

export default function SettingsPage() {
  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="bg-[#16254a] px-4 py-3 sm:px-5">
        <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">Settings</h1>
      </header>

      <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6">
        <nav aria-label="Settings menu">
          {settingItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between border-b border-[#aeb8c9] py-2.5 text-[1.05rem] text-[#2a344b] transition-colors hover:bg-[#eceff6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]/40"
            >
              <span>{item.label}</span>
              <span aria-hidden="true" className="text-[1.25rem] leading-none text-[#2a344b]">
                ›
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
