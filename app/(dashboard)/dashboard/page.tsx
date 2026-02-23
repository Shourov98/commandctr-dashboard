"use client";

import { useState } from "react";
import UsersChart from "../_components/UsersChart";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
  userType: string;
};

const users: User[] = Array.from({ length: 6 }, () => ({
  id: "01",
  name: "John Doe",
  email: "john@email.com",
  phone: "+12313412",
  joinedAt: "02-24-2024",
  userType: "Clients",
}));

type UserDetailsModalProps = {
  user: User;
  onClose: () => void;
  onBlock: (user: User) => void;
};

function UserDetailsModal({ user, onClose, onBlock }: UserDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#111827]/45 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="User details"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[36.25rem] rounded-md bg-[#f5f6fb] p-6 shadow-[0_18px_45px_rgba(18,31,62,0.24)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="m-0 text-center text-[2rem] font-semibold leading-tight text-[#1f2a45] sm:text-[2.25rem]">User Details</h3>
        <p className="mt-2 text-center text-[1rem] text-[#9aa4b5] sm:text-[1.05rem]">See all details about {user.name}</p>

        <div className="mt-6 flex items-center gap-3 sm:mt-7">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-sm font-bold text-[#1c2f57]">
            JD
          </div>
          <p className="text-[2rem] font-semibold text-[#1f2a45]">{user.name}</p>
        </div>

        <dl className="mt-5 grid grid-cols-[1fr_auto] gap-x-6 gap-y-2.5 sm:mt-6">
          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Name</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{user.name}.</dd>

          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Email</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{user.email}</dd>

          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Phone</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{user.phone}</dd>

          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">Joining Date</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{user.joinedAt}</dd>

          <dt className="text-[1.15rem] font-semibold text-[#1f2a45]">User Type</dt>
          <dd className="text-right text-[1.15rem] text-[#2a344a]">{user.userType}</dd>
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
            onClick={() => onBlock(user)}
            className="rounded-[0.35rem] border border-[#1b2748] bg-[#1b2748] px-4 py-2.5 text-[1.05rem] font-semibold text-white transition-colors hover:bg-[#15203d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b2748]"
          >
            Block
          </button>
        </div>
      </div>
    </div>
  );
}

type BlockConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

function BlockConfirmModal({ onCancel, onConfirm }: BlockConfirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-[#111827]/45 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm block user"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-[27.5rem] rounded-md bg-[#f5f6fb] px-6 py-8 shadow-[0_18px_45px_rgba(18,31,62,0.24)]"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-center text-[2.7rem] font-semibold leading-[1.15] text-[#1f2a45] sm:text-[2.9rem]">
          Do you want to Block
          <br />
          this user?
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
            className="rounded-[0.28rem] border border-[#ef4444] bg-[#ef4444] px-3 py-2 text-[1.1rem] font-semibold text-white transition-colors hover:bg-[#dc2626] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]"
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [blockTarget, setBlockTarget] = useState<User | null>(null);

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 rounded-[0.5rem] border border-[#14274c]/10 bg-[#f9fbff] p-4 shadow-[0_8px_20px_rgba(35,47,78,0.08)] sm:grid-cols-2">
          <article className="p-2 text-center">
            <h3 className="m-0 text-[2rem] font-bold leading-tight text-[#1f2a45]">38.6K</h3>
            <p className="mt-1.5 text-base font-semibold text-[#2f3c5f]">Total User</p>
          </article>

          <article className="p-2 text-center">
            <h3 className="m-0 text-[2rem] font-bold leading-tight text-[#1f2a45]">$4.9k</h3>
            <p className="mt-1.5 text-base font-semibold text-[#2f3c5f]">Total Revenue</p>
          </article>
        </div>

        <UsersChart />

        <section>
          <h3 className="mb-2 text-[1.5rem] font-bold text-[#1f2a45] sm:text-[1.95rem]">User List</h3>
          <div className="overflow-x-auto rounded-[0.5rem] border border-[#14274c]/10 bg-[#f9fbff] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
            <table className="w-full min-w-[720px] border-collapse text-[0.94rem]">
              <thead className="bg-[#16254a] text-[#f6f9ff]">
                <tr>
                  <th className="border-b border-[#dce3ef] px-4 py-3 text-left font-medium">S.ID</th>
                  <th className="border-b border-[#dce3ef] px-4 py-3 text-left font-medium">Full Name</th>
                  <th className="border-b border-[#dce3ef] px-4 py-3 text-left font-medium">Email</th>
                  <th className="border-b border-[#dce3ef] px-4 py-3 text-left font-medium">Joined Date</th>
                  <th className="border-b border-[#dce3ef] px-4 py-3 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={`${user.id}-${index}`} className="hover:bg-[#44e9e1]/8">
                    <td className="border-b border-[#dce3ef] px-4 py-3">{user.id}</td>
                    <td className="border-b border-[#dce3ef] px-4 py-3">
                      <span className="inline-flex items-center gap-2.5">
                        <span className="grid h-[1.65rem] w-[1.65rem] place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-[0.72rem] font-bold text-[#1c2f57]">
                          JD
                        </span>
                        <span>{user.name}</span>
                      </span>
                    </td>
                    <td className="border-b border-[#dce3ef] px-4 py-3">{user.email}</td>
                    <td className="border-b border-[#dce3ef] px-4 py-3">{user.joinedAt}</td>
                    <td className="border-b border-[#dce3ef] px-4 py-3">
                      <span className="inline-flex items-center gap-2.5" aria-label="Actions">
                        <button
                          type="button"
                          className="grid h-5 w-5 cursor-pointer place-items-center text-[#ff545b] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff545b]"
                          aria-label="Block user"
                          onClick={() => setBlockTarget(user)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
                            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
                            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="grid h-5 w-5 cursor-pointer place-items-center text-[#35c9f2] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35c9f2]"
                          aria-label="View user"
                          onClick={() => setSelectedUser(user)}
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
        </section>
      </section>

      {selectedUser ? (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onBlock={(user) => {
            setSelectedUser(null);
            setBlockTarget(user);
          }}
        />
      ) : null}

      {blockTarget ? (
        <BlockConfirmModal
          onCancel={() => setBlockTarget(null)}
          onConfirm={() => {
            setBlockTarget(null);
          }}
        />
      ) : null}
    </>
  );
}
