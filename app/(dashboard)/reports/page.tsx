"use client";

import { useMemo, useState } from "react";

type ReportItem = {
  id: string;
  reporter: string;
  reason: string;
  dateTime: string;
};

const reports: ReportItem[] = [
  { id: "01", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-24-2025" },
  { id: "02", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-20-2025" },
  { id: "03", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-16-2025" },
  { id: "04", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-12-2025" },
  { id: "05", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-08-2025" },
  { id: "06", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "02-04-2025" },
  { id: "07", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "01-31-2025" },
  { id: "08", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "01-27-2025" },
  { id: "09", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "01-23-2025" },
  { id: "10", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "01-19-2025" },
  { id: "11", reporter: "Robert Fox", reason: "Unprofessional behavior", dateTime: "01-15-2025" },
];

function parseDate(value: string) {
  const [month, day, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

function ResolveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5V4h4.5L6.6 5.9A10 10 0 1 1 2 12h2Z" fill="currentColor" />
    </svg>
  );
}

type ReportDetailsModalProps = {
  report: ReportItem;
  onClose: () => void;
};

function ReportDetailsModal({ report, onClose }: ReportDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#111827]/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Report details"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[56rem] rounded-md bg-[#f5f6fb] p-5 shadow-[0_18px_45px_rgba(18,31,62,0.24)] sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close report details"
            className="grid h-7 w-7 place-items-center rounded-full border border-[#c9d2e3] text-[#6f7c95] transition-colors hover:bg-[#e9edf4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]/45"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 border-b border-[#d9deea] pb-4 sm:grid-cols-2">
          <div>
            <p className="text-[0.9rem] text-[#8d98ab]">Report ID</p>
            <p className="mt-1 text-[1.05rem] font-semibold text-[#1f2a45]">#RPT-2024-001</p>
            <p className="text-[1.05rem] font-semibold text-[#1f2a45]">247</p>

            <p className="mt-1.5 text-[0.9rem] text-[#8d98ab]">Submission Date &amp; Time</p>
            <p className="text-[0.95rem] text-[#2d374d]">March 15, 2024 at 2:34 PM</p>
            <p className="text-[0.95rem] text-[#2d374d]">EST</p>

            <p className="mt-1.5 text-[0.9rem] text-[#8d98ab]">Category</p>
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#fbe4e6] px-2.5 py-1 text-[0.82rem] font-medium text-[#ef4444]">
              <span className="text-[0.76rem]">▲</span>
              <span>{report.reason}</span>
            </span>
          </div>

          <div>
            <p className="text-[0.9rem] text-[#8d98ab]">Reporter</p>
            <div className="mt-2 inline-flex items-start gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-[0.7rem] font-bold text-[#1c2f57]">
                SJ
              </span>
              <div>
                <p className="text-[0.95rem] font-semibold text-[#1f2a45]">Sarah Johnson</p>
                <p className="text-[0.86rem] text-[#9aa4b5]">sarah.johnson@email.com • Premium User</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-[0.95rem] font-semibold text-[#1f2a45]">Report Description</h3>
          <p className="mt-2 rounded-[0.45rem] bg-[#eef1f6] px-3.5 py-3 text-[0.9rem] leading-[1.3] text-[#8f98a8]">
            This user has been sending inappropriate messages and harassing content through direct messages. The
            behavior started approximately one week ago and has escalated to threatening language. I have screenshots
            of the conversations as evidence. This is making me uncomfortable using the platform and I believe this
            violates the community guidelines regarding harassment and bullying.
          </p>

          <h4 className="mt-4 text-[0.95rem] font-semibold text-[#1f2a45]">Attachments (3)</h4>
          <div className="mt-2.5 flex flex-wrap gap-3">
            {["screenshot1.png", "screenshot2.png", "conversation.png"].map((item) => (
              <div key={item} className="w-[5rem]">
                <div className="grid h-[4.6rem] w-[4.6rem] place-items-center rounded-[0.45rem] border border-dashed border-[#d8deea] bg-[#f7f9fc] text-[#9ca6b7]">
                  <span className="text-lg">🖼</span>
                </div>
                <p className="mt-1 truncate text-[0.7rem] text-[#a5adbc]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type ResolutionDetailsModalProps = {
  onClose: () => void;
};

function ResolutionDetailsModal({ onClose }: ResolutionDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-[#111827]/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Resolution details"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[58rem] rounded-md bg-[#f5f6fb] p-5 shadow-[0_18px_45px_rgba(18,31,62,0.24)] sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-[1.95rem] font-semibold text-[#1f2a45] sm:text-[2.1rem]">Resolution Details</h3>

        <div className="mt-4">
          <label className="mb-1.5 block text-[0.95rem] font-semibold text-[#1f2a45]" htmlFor="resolution-notes">
            Resolution Notes
          </label>
          <textarea
            id="resolution-notes"
            placeholder="Describe the action taken to resolve this report..."
            className="h-36 w-full resize-none rounded-[0.55rem] border border-[#e0e6f0] bg-[#efeff1] px-3 py-2.5 text-[0.95rem] text-[#243251] outline-none placeholder:text-[#9ea7b7] focus:ring-2 focus:ring-[#44e9e1]/35"
          />
        </div>

        <div className="mt-4">
          <label className="mb-1.5 block text-[0.95rem] font-semibold text-[#1f2a45]" htmlFor="resolution-type">
            Resolution Type
          </label>
          <select
            id="resolution-type"
            defaultValue=""
            className="h-12 w-full cursor-pointer rounded-[0.55rem] border border-[#e0e6f0] bg-[#efeff1] px-3 text-[0.95rem] text-[#9ea7b7] outline-none focus:ring-2 focus:ring-[#44e9e1]/35"
          >
            <option value="" disabled>
              Select resolution type
            </option>
            <option>Warning Issued</option>
            <option>Temporary Suspension</option>
            <option>Permanent Ban</option>
            <option>No Violation Found</option>
          </select>
        </div>

        <div className="mt-4">
          <p className="mb-1.5 text-[0.95rem] font-semibold text-[#1f2a45]">Attach Supporting Documents (Optional)</p>
          <label className="grid h-[7.8rem] w-full cursor-pointer place-items-center rounded-[0.55rem] border border-dashed border-[#dce3ef] bg-[#efeff1] text-[#9ea7b7]">
            <input type="file" className="hidden" />
            <div className="text-center">
              <div className="mb-1 text-[1.8rem]">☁</div>
              <p className="text-[0.95rem]">Drop files here or click to browse</p>
            </div>
          </label>
        </div>

        <div className="mt-4 space-y-2">
          <label className="inline-flex items-center gap-2.5 text-[0.95rem] text-[#8f98a8]">
            <input type="checkbox" className="h-4 w-4 border-[#aeb8c9] accent-[#16254a]" />
            <span>Notify Reporter by Email</span>
          </label>
          <label className="inline-flex items-center gap-2.5 text-[0.95rem] text-[#8f98a8]">
            <input type="checkbox" className="h-4 w-4 border-[#aeb8c9] accent-[#16254a]" />
            <span>Notify Reported User by Email</span>
          </label>
        </div>

        <div className="mt-5 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-[0.55rem] border border-[#aeb8c9] bg-transparent px-7 text-[0.95rem] font-medium text-[#9aa4b5] transition-colors hover:bg-[#e9edf4]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-11 min-w-[20rem] rounded-[0.55rem] border border-[#16254a] bg-[#16254a] px-6 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#0f1a36] max-sm:min-w-0"
          >
            ✓ Resolve &amp; Close Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  const [dateSort, setDateSort] = useState<"newest" | "oldest">("newest");
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);
  const [resolvingReport, setResolvingReport] = useState<ReportItem | null>(null);

  const visibleReports = useMemo(() => {
    return [...reports].sort((a, b) => {
      const first = parseDate(a.dateTime);
      const second = parseDate(b.dateTime);
      return dateSort === "newest" ? second - first : first - second;
    });
  }, [dateSort]);

  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="bg-[#16254a] px-4 py-3 sm:px-5">
        <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">Reports</h1>
      </header>

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex justify-end">
          <label className="inline-flex items-center gap-2">
            <span className="text-[0.9rem] text-[#2b3550]">⇅</span>
            <select
              aria-label="Sort reports by date"
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
          <table className="w-full min-w-[860px] border-collapse text-[0.94rem] text-[#29344b]">
            <thead>
              <tr className="border-b border-[#6f7d96]">
                <th className="px-1 py-2 text-left font-medium">S.ID</th>
                <th className="px-1 py-2 text-left font-medium">Report From</th>
                <th className="px-1 py-2 text-left font-medium">Report Reason</th>
                <th className="px-1 py-2 text-left font-medium">Date &amp; Time</th>
                <th className="px-1 py-2 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleReports.map((item, index) => (
                <tr key={`${item.id}-${index}`} className="border-b border-[#98a3b8]">
                  <td className="px-1 py-3">{item.id}</td>
                  <td className="px-1 py-3">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="grid h-[1.75rem] w-[1.75rem] place-items-center rounded-full bg-gradient-to-br from-[#cfd7e6] to-[#aab6c9] text-[0.72rem] font-bold text-[#1c2f57]">
                        RF
                      </span>
                      <span>{item.reporter}</span>
                    </span>
                  </td>
                  <td className="px-1 py-3">{item.reason}</td>
                  <td className="px-1 py-3">{item.dateTime}</td>
                  <td className="px-1 py-3">
                    <span className="inline-flex items-center gap-2.5" aria-label="Actions">
                      <button
                        type="button"
                        className="grid h-4.5 w-4.5 cursor-pointer place-items-center text-[#22c9ee] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c9ee]"
                        aria-label="Resolve report"
                        onClick={() => {
                          setSelectedReport(null);
                          setResolvingReport(item);
                        }}
                      >
                        <ResolveIcon />
                      </button>
                      <button
                        type="button"
                        className="grid h-4.5 w-4.5 cursor-pointer place-items-center text-[#ff545b] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff545b]"
                        aria-label="Reject report"
                      >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
                          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="grid h-4.5 w-4.5 cursor-pointer place-items-center text-[#22c9ee] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c9ee]"
                        aria-label="View report"
                        onClick={() => setSelectedReport(item)}
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
            SHOWING {visibleReports.length ? `1-${visibleReports.length}` : "0"} OF {visibleReports.length}
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

      {selectedReport ? <ReportDetailsModal report={selectedReport} onClose={() => setSelectedReport(null)} /> : null}
      {resolvingReport ? <ResolutionDetailsModal onClose={() => setResolvingReport(null)} /> : null}
    </section>
  );
}
