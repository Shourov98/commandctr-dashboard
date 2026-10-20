import Link from "next/link";

type Notification = {
  id: number;
  message: string;
  time: string;
};

const notifications: Notification[] = [
  { id: 1, message: "Profile report!", time: "Fri, 12:30pm" },
  { id: 2, message: "A new Verification request!", time: "Fri, 12:30pm" },
  { id: 3, message: "Profile report!", time: "Fri, 12:30pm" },
  { id: 4, message: "Profile report!", time: "Fri, 12:30pm" },
  { id: 5, message: "A new user join in your app.", time: "Fri, 12:30pm" },
  { id: 6, message: "A new user join in your app.", time: "Fri, 12:30pm" },
  { id: 7, message: "A new user join in your app.", time: "Fri, 12:30pm" },
  { id: 8, message: "A new user join in your app.", time: "Fri, 12:30pm" },
  { id: 9, message: "A new user join in your app.", time: "Fri, 12:30pm" },
];

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[1.08rem] w-[1.08rem] text-[#172847]" aria-hidden="true">
      <path
        d="M7.6 9.2a4.4 4.4 0 1 1 8.8 0v2.6c0 .8.3 1.5.8 2.1l.7.8H6.1l.7-.8c.5-.6.8-1.3.8-2.1V9.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.2 17.3a1.8 1.8 0 0 0 3.6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function NotificationsPage() {
  return (
    <section className="overflow-hidden rounded-[0.95rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="flex min-h-[5.2rem] items-center gap-3 bg-[#16254a] px-4 text-white sm:px-6">
        <Link
          href="/dashboard"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[1.8rem] leading-none hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]"
          aria-label="Back to dashboard"
        >
          ‹
        </Link>
        <h1 className="m-0 text-[2rem] font-semibold leading-tight sm:text-[2.2rem]">All Notifications</h1>
      </header>

      <ul className="m-0 list-none px-4 py-4 sm:px-6 sm:py-5">
        {notifications.map((item) => (
          <li key={item.id} className="flex items-start gap-4 py-3 sm:py-3.5">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center">
              <BellIcon />
            </span>

            <div>
              <p className="m-0 text-[1.12rem] leading-tight text-[#1f2d47] sm:text-[1.18rem]">{item.message}</p>
              <p className="mt-1 text-[0.95rem] text-[#9ca3b2] sm:text-[1rem]">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
