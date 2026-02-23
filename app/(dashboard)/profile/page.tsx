"use client";

import { useState } from "react";

type ConfirmLogoutModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

function ConfirmLogoutModal({ onCancel, onConfirm }: ConfirmLogoutModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#111827]/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm logging out"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-[32rem] rounded-md bg-[#f5f6fb] px-6 py-8 shadow-[0_18px_45px_rgba(18,31,62,0.24)]"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-center text-[2.1rem] font-semibold leading-tight text-[#1f2a45] sm:text-[2.3rem]">
          Confirm logging out!
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-[0.35rem] border border-[#1f2a45]/55 bg-transparent px-4 py-2 text-[1.05rem] font-semibold text-[#1f2a45] transition-colors hover:bg-[#e8ebf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2a45]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-[0.35rem] border border-[#ef4444] bg-[#ef4444] px-4 py-2 text-[1.05rem] font-semibold text-white transition-colors hover:bg-[#dc2626] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]"
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <>
      <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
        <header className="bg-[#16254a] px-4 py-3 sm:px-5">
          <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">Profile</h1>
        </header>

        <div className="px-4 py-6 sm:px-5 sm:py-7">
          <div className="mx-auto w-full max-w-[23rem] text-center">
            <div className="relative mx-auto h-[5.2rem] w-[5.2rem]">
              <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-[1rem] font-bold text-[#1c2f57]">
                AJ
              </div>
              <button
                type="button"
                aria-label="Edit profile photo"
                className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full border border-[#d4dbe8] bg-white text-[0.72rem] text-[#8b95a7]"
              >
                ✎
              </button>
            </div>

            <p className="mt-6 text-[0.93rem] font-semibold text-[#2a344b] underline">Edit Profile</p>

            <form
              className="mt-8 space-y-3.5"
              onSubmit={(event) => {
                event.preventDefault();
                setShowConfirmModal(true);
              }}
            >
              <label className="block text-left">
                <span className="mb-1 block text-[0.86rem] font-medium text-[#e4e8f0]">Name</span>
                <input
                  type="text"
                  defaultValue="userdemo"
                  className="h-[2.35rem] w-full rounded-[0.12rem] border border-[#acb7ca] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none placeholder:text-[#9ba5b6] focus:ring-2 focus:ring-[#44e9e1]/35"
                />
              </label>

              <label className="block text-left">
                <span className="mb-1 block text-[0.86rem] font-medium text-[#e4e8f0]">Email</span>
                <input
                  type="email"
                  defaultValue="email@gmail.com"
                  className="h-[2.35rem] w-full rounded-[0.12rem] border border-[#acb7ca] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none placeholder:text-[#9ba5b6] focus:ring-2 focus:ring-[#44e9e1]/35"
                />
              </label>

              <label className="block text-left">
                <span className="mb-1 block text-[0.86rem] font-medium text-[#e4e8f0]">Contact No</span>
                <input
                  type="tel"
                  defaultValue="+1 222 333 4444"
                  className="h-[2.35rem] w-full rounded-[0.12rem] border border-[#acb7ca] bg-transparent px-3 text-[0.92rem] text-[#4f5a70] outline-none placeholder:text-[#9ba5b6] focus:ring-2 focus:ring-[#44e9e1]/35"
                />
              </label>

              <button
                type="submit"
                className="mt-1 h-[2.25rem] w-full rounded-[0.35rem] border border-[#16254a] bg-[#16254a] text-[0.94rem] font-semibold text-white transition-colors hover:bg-[#0f1a36]"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </section>

      {showConfirmModal ? (
        <ConfirmLogoutModal
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={() => setShowConfirmModal(false)}
        />
      ) : null}
    </>
  );
}
