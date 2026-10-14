import type { Metadata } from "next";
import AuthGuard from "@/components/auth/AuthGuard";
import { Poppins } from "next/font/google";
import DashboardShell from "./_components/DashboardShell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dashboard",
});

export const metadata: Metadata = {
  title: "Dashboard | Twinstr",
  description: "Dashboard pages for Twinstr",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard>
      <section className={`${poppins.variable} min-h-screen bg-[#eef1f6] text-[#1e2433]`} style={{ fontFamily: "var(--font-dashboard)" }}>
        <DashboardShell>{children}</DashboardShell>
      </section>
    </AuthGuard>
  );
}
