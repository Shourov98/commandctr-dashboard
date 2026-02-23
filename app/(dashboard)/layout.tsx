import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DashboardShell from "./_components/DashboardShell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dashboard",
});

export const metadata: Metadata = {
  title: "Dashboard | CommandCtr",
  description: "Dashboard pages for CommandCtr",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className={`${poppins.variable} min-h-screen bg-[#eef1f6] text-[#1e2433]`} style={{ fontFamily: "var(--font-dashboard)" }}>
      <DashboardShell>{children}</DashboardShell>
    </section>
  );
}
