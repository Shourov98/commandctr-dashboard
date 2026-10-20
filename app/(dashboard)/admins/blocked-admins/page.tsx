"use client";

import { useMemo, useState } from "react";

type Admin = {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
  userType: string;
};

const blockedAdmins: Admin[] = [
  { id: "01", name: "Robert Fox", email: "robert@email", phone: "+12313412", joinedAt: "02-24-2024", userType: "Admin" },
  { id: "02", name: "John Doe", email: "john@email", phone: "+12313410", joinedAt: "01-14-2024", userType: "Admin" },
  { id: "03", name: "Leslie Boyd", email: "leslie@email", phone: "+12313499", joinedAt: "11-04-2023", userType: "Admin" },
  { id: "04", name: "Jenny Wilson", email: "jenny@email", phone: "+12313419", joinedAt: "10-22-2023", userType: "Admin" },
  { id: "05", name: "Guy Hawkins", email: "guy@email", phone: "+12313454", joinedAt: "09-18-2023", userType: "Admin" },
  { id: "06", name: "Devon Lane", email: "devon@email", phone: "+12313460", joinedAt: "07-30-2023", userType: "Admin" },
  { id: "07", name: "Jerome Bell", email: "jerome@email", phone: "+12313471", joinedAt: "05-06-2023", userType: "Admin" },
  {
    id: "08",
    name: "Brooklyn Simmons",
    email: "brooklyn@email",
    phone: "+12313443",
    joinedAt: "04-02-2023",
    userType: "Admin",
  },
  {
    id: "09",
    name: "Cameron Williamson",
    email: "cameron@email",
    phone: "+12313427",
    joinedAt: "02-10-2023",
    userType: "Admin",
  },
];

function parseJoinedDate(value: string) {
  const [month, day, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

type AdminDetailsModalProps = {
  admin: Admin;
  onClose: () => void;
  onUnblock: (admin: Admin) => void;
};

function AdminDetailsModal({ admin, onClose, onUnblock }: AdminDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#111827]/45 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Admin details"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[36.25rem] rounded-md bg-[#f5f6fb] p-6 shadow-[0_18px_45px_rgba(18,31,62,0.24)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="m-0 text-center text-[2rem] font-semibold leading-tight text-[#1f2a45] sm:text-[2.25rem]">Admin Details</h3>
        <p className="mt-2 text-center text-[1rem] text-[#9aa4b5] sm:text-[1.05rem]">See all details about {admin.name}</p>

        <div className="mt-6 flex items-center gap-3 sm:mt-7">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-sm font-bold text-[#1c2f57]">
            RF
          </div>
          <p className="text-[2rem] font-semibold text-[#1f2a45]">{admin.name}</p>
        </div>

        <dl className="mt-5 grid grid-cols-[1fr_auto] gap-x-6 gap-y-2.5 sm:mt-6">
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Name</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{admin.name}.</dd>
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Email</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{admin.email}</dd>
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Phone</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{admin.phone}</dd>
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Joining Date</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{admin.joinedAt}</dd>
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Admin Type</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{admin.userType}</dd>
        </dl>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[0.35rem] border border-[#1f2a45]/55 bg-transparent px-4 py-2.5 text-[1.05rem] font-semibold text-[#1f2a45] transition-colors hover:bg-[#e8ebf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2a45]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onUnblock(admin)}
            className="rounded-[0.35rem] border border-[#0ea5c8] bg-[#0ea5c8] px-4 py-2.5 text-[1.05rem] font-semibold text-white transition-colors hover:bg-[#0891b2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea5c8]"
          >
            Unblock
          </button>
        </div>
      </div>
    </div>
  );
}

type UnblockConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

function UnblockConfirmModal({ onCancel, onConfirm }: UnblockConfirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-[#111827]/45 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm unblock admin"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-[27.5rem] rounded-md bg-[#f5f6fb] px-6 py-8 shadow-[0_18px_45px_rgba(18,31,62,0.24)]"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-center text-[2.1rem] font-semibold leading-[1.15] text-[#1f2a45] sm:text-[2.3rem]">
          Do you want to Unblock
          <br />
          this admin?
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-[0.28rem] border border-[#1f2a45]/55 bg-transparent px-3 py-2 text-[1.1rem] font-semibold text-[#1f2a45] transition-colors hover:bg-[#e8ebf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2a45]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-[0.28rem] border border-[#06b6d4] bg-[#06b6d4] px-3 py-2 text-[1.1rem] font-semibold text-white transition-colors hover:bg-[#0891b2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]"
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

function RestoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M4 7v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 12a8 8 0 1 1-2.35-5.65L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlockedAdminsPage() {
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [unblockTarget, setUnblockTarget] = useState<Admin | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateSort, setDateSort] = useState<"newest" | "oldest">("newest");

  const visibleAdmins = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = blockedAdmins.filter((admin) => {
      if (!query) {
        return true;
      }
      return admin.name.toLowerCase().includes(query) || admin.email.toLowerCase().includes(query);
    });

    return [...filtered].sort((a, b) => {
      const first = parseJoinedDate(a.joinedAt);
      const second = parseJoinedDate(b.joinedAt);
      return dateSort === "newest" ? second - first : first - second;
    });
  }, [searchQuery, dateSort]);

  return (
    <>
      <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
        <header className="flex flex-wrap items-center justify-between gap-3 bg-[#16254a] px-4 py-3 sm:px-5">
          <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">Blocked Admins</h1>

          <label className="relative min-w-[14rem] flex-1 sm:w-[17rem] sm:flex-none" htmlFor="blocked-admin-search">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#44e9e1]">⌕</span>
            <input
              id="blocked-admin-search"
              type="text"
              placeholder="Search Admin"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="h-[2.55rem] w-full rounded-[0.45rem] border border-[#44e9e1] bg-white pl-9 pr-3 text-[0.95rem] text-[#243251] outline-none focus:ring-2 focus:ring-[#44e9e1]/40"
            />
          </label>
        </header>

        <div className="p-4 sm:p-5">
          <div className="mb-3 flex justify-end">
            <label className="inline-flex items-center gap-2">
              <span className="text-[0.9rem] text-[#2b3550]">⇅</span>
              <select
                aria-label="Sort blocked admins by date"
                value={dateSort}
                onChange={(event) => setDateSort(event.target.value as "newest" | "oldest")}
                className="inline-flex h-[2.1rem] min-w-[8.6rem] cursor-pointer items-center rounded-[0.3rem] border border-[#6f7d96] bg-transparent px-3 text-[0.85rem] text-[#2b3550] outline-none focus:ring-2 focus:ring-[#44e9e1]/40"
              >
                <option value="newest">Date: Newest</option>
                <option value="oldest">Date: Oldest</option>
              </select>
            </label>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-[0.94rem] text-[#29344b]">
              <thead>
                <tr className="border-b border-[#6f7d96]">
                  <th className="px-1 py-2 text-left font-medium">S.ID</th>
                  <th className="px-1 py-2 text-left font-medium">Full Name</th>
                  <th className="px-1 py-2 text-left font-medium">Email</th>
                  <th className="px-1 py-2 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {visibleAdmins.map((admin, index) => (
                  <tr key={`${admin.id}-${index}`} className="border-b border-[#98a3b8]">
                    <td className="px-1 py-3">{admin.id}</td>
                    <td className="px-1 py-3">
                      <span className="inline-flex items-center gap-2.5">
                        <span className="grid h-[1.75rem] w-[1.75rem] place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-[0.72rem] font-bold text-[#1c2f57]">
                          RF
                        </span>
                        <span>{admin.name}</span>
                      </span>
                    </td>
                    <td className="px-1 py-3">{admin.email}</td>
                    <td className="px-1 py-3">
                      <span className="inline-flex items-center gap-2.5" aria-label="Actions">
                        <button
                          type="button"
                          className="grid h-5 w-5 cursor-pointer place-items-center text-[#22c9ee] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c9ee]"
                          aria-label="Unblock admin"
                          onClick={() => setUnblockTarget(admin)}
                        >
                          <RestoreIcon />
                        </button>
                        <button
                          type="button"
                          className="grid h-5 w-5 cursor-pointer place-items-center text-[#22c9ee] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c9ee]"
                          aria-label="View admin"
                          onClick={() => setSelectedAdmin(admin)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
                            <path
                              d="M2.5 12C4.8 7.6 8.2 5.5 12 5.5C15.8 5.5 19.2 7.6 21.5 12C19.2 16.4 15.8 18.5 12 18.5C8.2 18.5 4.8 16.4 2.5 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[#273249]">
            <p className="text-[0.92rem] tracking-[0.02em]">
              SHOWING {visibleAdmins.length ? `1-${visibleAdmins.length}` : "0"} OF {visibleAdmins.length}
            </p>

            <div className="inline-flex items-center gap-3 text-[1.35rem] text-[#8b95a9]">
              <button type="button" aria-label="Previous page" className="text-[1.8rem]">
                ‹
              </button>
              <button
                type="button"
                className="grid h-5 w-5 place-items-center rounded-[0.2rem] bg-[#16254a] text-[0.8rem] font-semibold text-white"
              >
                1
              </button>
              <span>2</span>
              <span>3</span>
              <span>4....30</span>
              <span>60</span>
              <span>120</span>
              <button type="button" aria-label="Next page" className="text-[1.8rem]">
                ›
              </button>
            </div>
          </footer>
        </div>
      </section>

      {selectedAdmin ? (
        <AdminDetailsModal
          admin={selectedAdmin}
          onClose={() => setSelectedAdmin(null)}
          onUnblock={(admin) => {
            setSelectedAdmin(null);
            setUnblockTarget(admin);
          }}
        />
      ) : null}

      {unblockTarget ? (
        <UnblockConfirmModal
          onCancel={() => setUnblockTarget(null)}
          onConfirm={() => {
            setUnblockTarget(null);
          }}
        />
      ) : null}
    </>
  );
}
