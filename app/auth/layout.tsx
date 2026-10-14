import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./auth.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-auth",
});

export const metadata: Metadata = {
  title: "Authentication | Twinstr",
  description: "Authentication pages for Twinstr",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className={`auth-page ${poppins.variable}`} style={{ fontFamily: "var(--font-auth)" }}>
      <div className="auth-card">
        <h1 className="auth-logo">Twinstr</h1>
        {children}
      </div>
    </section>
  );
}
