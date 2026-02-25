import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-home",
});

const quickLinks = [
  {
    href: "/auth/login",
    title: "Log In",
    description: "Access your account and continue where you left off.",
    action: "Go to Login",
  },
  {
    href: "/auth/signup",
    title: "Sign Up",
    description: "Create a new account for your team in a few steps.",
    action: "Create Account",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
    description: "Open the admin dashboard and manage platform activity.",
    action: "Open Dashboard",
  },
];

export default function HomePage() {
  return (
    <main
      className={`${spaceGrotesk.variable} min-h-screen bg-[#f7f8fc] px-4 py-8 text-[#17223d] sm:px-8`}
      style={{ fontFamily: "var(--font-home)" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[1rem] border border-[#d4dced] bg-white p-6 shadow-[0_20px_50px_rgba(21,40,83,0.12)] sm:p-8 lg:p-12">
        <header className="space-y-4">
          <p className="inline-flex rounded-full bg-[#152a59] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#7ce9e2]">
            CommandCtr
          </p>
          <h1 className="max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1]">
            One place to enter your authentication and dashboard flows.
          </h1>
          <p className="max-w-3xl text-base text-[#445072] sm:text-lg">
            Use quick navigation below to move between Login, Sign Up, and Dashboard pages.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <article
              key={item.href}
              className="group rounded-[0.8rem] border border-[#d8e0ee] bg-gradient-to-b from-white to-[#f2f6ff] p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[#6f89bf]"
            >
              <h2 className="text-2xl font-semibold text-[#1a2850]">{item.title}</h2>
              <p className="mt-2 min-h-12 text-sm text-[#4b587c]">{item.description}</p>
              <Link
                href={item.href}
                className="mt-5 inline-flex rounded-[0.45rem] bg-[#162a58] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-[#0f2149] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]"
              >
                {item.action}
              </Link>
            </article>
          ))}
        </section>

        <div className="rounded-[0.8rem] border border-[#c8d2e8] bg-[#152a59] p-5 text-[#e5ecff] sm:p-6">
          <p className="text-base font-medium sm:text-lg">Suggested flow for first-time users</p>
          <p className="mt-2 text-sm text-[#bfd0ff] sm:text-base">Sign Up -&gt; Log In -&gt; Dashboard</p>
        </div>
      </div>
    </main>
  );
}
