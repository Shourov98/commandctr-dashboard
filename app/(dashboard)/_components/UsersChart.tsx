"use client";

import { useMemo, useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const usersByYear: Record<string, number[]> = {
  "2022": [240, 180, 295, 250, 210, 330, 260, 280, 340, 300, 270, 320],
  "2023": [300, 230, 350, 285, 260, 395, 310, 335, 410, 360, 300, 380],
  "2024": [340, 240, 420, 310, 270, 455, 305, 335, 435, 395, 310, 420],
};

export default function UsersChart() {
  const years = Object.keys(usersByYear).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const chartData = useMemo(() => {
    const users = usersByYear[selectedYear];
    const maxUsers = Math.max(...users);
    const highlightedIndex = users.indexOf(maxUsers);
    return { users, maxUsers, highlightedIndex };
  }, [selectedYear]);

  return (
    <div className="rounded-[0.5rem] border border-[#14274c]/10 bg-[#f9fbff] p-4 shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <div className="mb-3.5 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 font-semibold text-[#1f2a45]">
          <span className="h-3 w-3 rounded-full bg-[#16254a]" />
          <span>Users Added</span>
        </div>

        <label className="relative" htmlFor="chart-year">
          <span className="sr-only">Select year</span>
          <select
            id="chart-year"
            className="cursor-pointer appearance-none rounded-[0.35rem] border-0 bg-[#16254a] px-3 py-2 pr-7 text-[0.95rem] font-semibold text-[#dbe5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]"
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                Year-{year}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#dbe5ff]">▾</span>
        </label>
      </div>

      <div
        className="grid min-h-[11.5rem] grid-cols-12 items-end gap-3 rounded-[0.5rem] bg-[length:100%_2.15rem] bg-[repeating-linear-gradient(to_top,rgba(25,42,77,0.14)_0,rgba(25,42,77,0.14)_1px,transparent_1px,transparent_2.15rem)] px-2 py-2"
        aria-label={`Users added by month in ${selectedYear}`}
      >
        {chartData.users.map((count, index) => {
          const isHighlighted = index === chartData.highlightedIndex;
          const height = `${Math.max((count / chartData.maxUsers) * 100, 16)}%`;

          return (
            <div key={`${selectedYear}-${months[index]}`} className="grid min-h-[11.5rem] grid-rows-[1fr_auto] items-end gap-2">
              <div
                className={`relative mx-auto w-[0.7rem] rounded-t-full sm:w-[0.8rem] ${isHighlighted ? "bg-[#18264a]" : "bg-[#a6afbd]"}`}
                style={{ height }}
                aria-hidden="true"
              >
                {isHighlighted ? (
                  <div className="absolute left-1/2 top-[-2.8rem] min-w-[3.7rem] -translate-x-1/2 rounded-[0.35rem] bg-[#44e9e1] px-1.5 py-1 text-center text-[0.76rem] font-bold text-[#173054] shadow-[0_12px_20px_rgba(16,47,78,0.2)]">
                    {months[index]}
                    <br />
                    {count}
                  </div>
                ) : null}
              </div>
              <span className="block text-center text-[0.72rem] font-semibold text-[#6b7590]">{months[index]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
