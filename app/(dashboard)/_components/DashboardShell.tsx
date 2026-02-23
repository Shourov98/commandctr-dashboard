"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Users", href: "/users" },
  { label: "Admins", href: "/admins" },
  { label: "Reports", href: "/reports" },
  { label: "Create Admin", href: "/create-admin" },
  {
    label: "CMS",
    href: "/cms/landing-page",
    children: [
      { label: "Landing Page", href: "/cms/landing-page" },
      { label: "About Us Page", href: "/cms/about-us-page" },
      { label: "FAQ Sections", href: "/cms/faq-sections" },
    ],
  },
  { label: "Settings", href: "/settings" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(pathname.startsWith("/cms"));

  return (
    <div
      className={`grid min-h-screen grid-cols-1 gap-4 p-4 ${collapsed ? "md:grid-cols-[84px_1fr]" : "md:grid-cols-[248px_1fr]"}`}
    >
      <aside className="flex flex-col rounded-[0.8rem] bg-[#16254a] px-5 pb-6 pt-6 text-[#f4f7ff] shadow-[0_12px_28px_rgba(10,20,45,0.2)] max-md:px-4 max-md:py-5">
        <div className="mb-6 flex items-center max-md:mb-4">
          <h1
            className={`overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-[0.01em] text-[#44e9e1] ${collapsed ? "text-base" : "text-[1.65rem]"}`}
          >
            {collapsed ? "CC" : "CommandCtr"}
          </h1>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Dashboard navigation">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const hasChildren = (item.children?.length ?? 0) > 0;

            if (hasChildren && !collapsed) {
              return (
                <div key={item.label} className="rounded-[0.55rem]">
                  <button
                    type="button"
                    onClick={() => setCmsOpen((value) => !value)}
                    className={`flex w-full items-center justify-between rounded-[0.55rem] px-[0.7rem] py-[0.72rem] text-left text-[1.05rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1] ${active ? "bg-[#44e9e1]/20 text-[#44e9e1]" : "text-[#f4f7ff]/90 hover:bg-[#44e9e1]/15 hover:text-white"}`}
                    aria-expanded={cmsOpen}
                    aria-controls="cms-submenu"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className={`transition-transform ${cmsOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {cmsOpen ? (
                    <div id="cms-submenu" className="mt-1.5 flex flex-col gap-1 pl-3">
                      {item.children?.map((child) => {
                        const childActive = isActive(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`rounded-[0.5rem] px-[0.7rem] py-[0.58rem] text-[0.92rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1] ${childActive ? "bg-[#44e9e1]/22 text-[#44e9e1]" : "text-[#dbe4f6] hover:bg-[#44e9e1]/12 hover:text-white"}`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-[0.55rem] px-[0.7rem] py-[0.72rem] text-[1.05rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1] ${collapsed ? "justify-center" : "justify-between"} ${active ? "bg-[#44e9e1]/20 text-[#44e9e1]" : "text-[#f4f7ff]/90 hover:bg-[#44e9e1]/15 hover:text-white"}`}
                title={collapsed ? item.label : undefined}
              >
                <span>{collapsed ? item.label.charAt(0) : item.label}</span>
                {hasChildren && !collapsed ? <span aria-hidden="true">▾</span> : null}
              </Link>
            );
          })}
        </nav>

        <Link
          className={`mt-auto inline-flex items-center gap-2 rounded-[0.55rem] px-[0.7rem] py-[0.72rem] text-[1.06rem] font-semibold text-[#ff5d62] hover:bg-[#ff5d62]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5d62] ${collapsed ? "w-full justify-center" : "w-fit max-md:mt-3"}`}
          href="/auth/login"
          title={collapsed ? "Logout" : undefined}
        >
          <span aria-hidden="true">↩</span>
          {collapsed ? null : <span>Logout</span>}
        </Link>
      </aside>

      <main className="flex flex-col gap-4">
        <header className="flex min-h-[4.2rem] items-center justify-between rounded-[0.5rem] bg-[#16254a] px-4 py-3 text-[#f9fbff] shadow-[0_10px_22px_rgba(9,19,44,0.17)] max-md:px-3">
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent p-0 text-[1.6rem] leading-none text-inherit focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setCollapsed((value) => !value)}
            >
              ☰
            </button>
            <div>
              <h2 className="m-0 text-[1.45rem] leading-tight max-[700px]:text-[1.2rem]">Welcome,James</h2>
              <p className="m-0 text-[0.9rem] opacity-85 max-[700px]:text-[0.8rem]">Have a nice day!</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/notifications"
              className={`relative grid h-[2.3rem] w-[2.3rem] place-items-center rounded-full border border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1] ${pathname === "/notifications" ? "bg-white/20" : "hover:bg-white/10"}`}
              aria-label="Notifications"
            >
              <span aria-hidden="true">🔔</span>
              <span className="absolute right-1 top-1 h-[0.58rem] w-[0.58rem] rounded-full border border-[#16254a] bg-[#ff4e54]" />
            </Link>
            <Link
              href="/profile"
              className={`grid h-[2.3rem] w-[2.3rem] place-items-center rounded-full border border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1] ${pathname === "/profile" ? "bg-white/20" : "hover:bg-white/10"}`}
              aria-label="Profile"
            >
              <span aria-hidden="true">👤</span>
            </Link>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
