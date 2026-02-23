"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";

type PolicyEditorProps = {
  title: string;
  initialContent: string;
};

type ToolbarButtonProps = {
  label: string;
  onClick: () => void;
  children: ReactNode;
};

function ToolbarButton({ label, onClick, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#c8d0de] bg-white text-[#26324e] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition hover:border-[#8fa2c8] hover:bg-[#f5f8ff]"
    >
      {children}
    </button>
  );
}

function AlignIcon({ type }: { type: "left" | "center" | "right" }) {
  const x = type === "left" ? 7 : type === "center" ? 10 : 13;

  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d={`M${x} 7h10`} />
      <path d={`M${x} 11h10`} />
      <path d={`M${x} 15h10`} />
      <path d={`M${x} 19h10`} />
    </svg>
  );
}

function ListIcon({ ordered }: { ordered?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ordered ? (
        <>
          <path d="M3 7h2" />
          <path d="M3 12h2" />
          <path d="M3 17h2" />
        </>
      ) : (
        <>
          <circle cx="4" cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="4" cy="17" r="1" fill="currentColor" stroke="none" />
        </>
      )}
      <path d="M8 7h13" />
      <path d="M8 12h13" />
      <path d="M8 17h13" />
    </svg>
  );
}

function ToolbarDivider() {
  return <span className="mx-0.5 h-6 w-px bg-[#d7deea]" aria-hidden="true" />;
}

export default function PolicyEditor({ title, initialContent }: PolicyEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(initialContent);

  const runCommand = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    setContent(editorRef.current?.innerHTML ?? "");
  };

  return (
    <section className="overflow-hidden rounded-[0.75rem] border border-[#14274c]/10 bg-[#f3f4f8] shadow-[0_8px_20px_rgba(35,47,78,0.08)]">
      <header className="flex items-center justify-between gap-3 bg-[#16254a] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <Link
            href="/settings"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[1.1rem] text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#44e9e1]/60"
            aria-label="Back to settings"
          >
            ←
          </Link>
          <h1 className="m-0 text-[2rem] font-semibold leading-tight text-[#d5dceb] sm:text-[2.15rem]">{title}</h1>
        </div>

        <button
          type="button"
          className="h-9 rounded-[0.35rem] border border-white bg-white px-5 text-[0.92rem] font-semibold text-[#1f2a45] hover:bg-[#eef2f7]"
        >
          Save
        </button>
      </header>

      <div className="px-4 py-5 sm:px-5">
        <div className="rounded-[0.45rem] border border-[#d7deea] bg-white">
          <div className="flex flex-wrap items-center gap-1 border-b border-[#d7deea] bg-[#eef2f9] px-2 py-1.5">
            <select
              aria-label="Font size"
              onChange={(event) => runCommand("fontSize", event.target.value)}
              className="h-8 rounded border border-[#c8d0de] bg-white px-2 text-[0.78rem] text-[#26324e] outline-none"
              defaultValue="2"
            >
              <option value="1">10</option>
              <option value="2">12</option>
              <option value="3">14</option>
              <option value="4">18</option>
            </select>

            <ToolbarDivider />

            <ToolbarButton label="Bold" onClick={() => runCommand("bold")}>
              <span className="text-[0.9rem] font-extrabold">B</span>
            </ToolbarButton>
            <ToolbarButton label="Italic" onClick={() => runCommand("italic")}>
              <span className="text-[0.9rem] italic">I</span>
            </ToolbarButton>
            <ToolbarButton label="Underline" onClick={() => runCommand("underline")}>
              <span className="text-[0.9rem] underline">U</span>
            </ToolbarButton>

            <ToolbarDivider />

            <ToolbarButton label="Align left" onClick={() => runCommand("justifyLeft")}>
              <AlignIcon type="left" />
            </ToolbarButton>
            <ToolbarButton label="Align center" onClick={() => runCommand("justifyCenter")}>
              <AlignIcon type="center" />
            </ToolbarButton>
            <ToolbarButton label="Align right" onClick={() => runCommand("justifyRight")}>
              <AlignIcon type="right" />
            </ToolbarButton>

            <ToolbarDivider />

            <ToolbarButton label="Bulleted list" onClick={() => runCommand("insertUnorderedList")}>
              <ListIcon />
            </ToolbarButton>
            <ToolbarButton label="Numbered list" onClick={() => runCommand("insertOrderedList")}>
              <ListIcon ordered />
            </ToolbarButton>
          </div>

          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={(event) => setContent((event.target as HTMLDivElement).innerHTML)}
            className="min-h-[18rem] px-4 py-3 text-[0.93rem] leading-[1.55] text-[#56637c] outline-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}
