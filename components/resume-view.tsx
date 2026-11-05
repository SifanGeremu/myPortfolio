"use client";

import { createContext, useContext, useRef, type MouseEvent, type ReactNode } from "react";
import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { newTabProps } from "@/lib/links";

const ResumeContext = createContext<(() => void) | null>(null);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);

  function open() {
    dialog.current?.showModal();
  }

  return (
    <ResumeContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-labelledby="resume-title"
        className="w-[min(calc(100%-2rem),760px)] rounded-2xl border border-border bg-bg p-0 text-fg backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div>
            <h2 id="resume-title" className="font-serif text-[1.7rem] leading-none">
              {content.name}
            </h2>
            <p className="mt-1 text-xs text-faint">Resume</p>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-fill hover:text-fg"
            aria-label="Close resume"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" className="size-4" />
          </button>
        </div>
        <iframe title={`${content.name} resume`} src={content.resume.src} className="h-[min(70vh,680px)] w-full bg-white" />
        <div className="flex justify-end border-t border-border px-4 py-3">
          <a
            href={content.resume.src}
            download
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm text-[color:var(--on-accent)]"
          >
            Download
          </a>
        </div>
      </dialog>
    </ResumeContext.Provider>
  );
}

export function SiteLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const openResume = useContext(ResumeContext);
  const resume = href === content.resume.src;

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!resume || !openResume) return;
    event.preventDefault();
    openResume();
  }

  return (
    <a href={href} {...(resume ? {} : newTabProps(href))} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
