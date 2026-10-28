"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { ThemeProvider, useTheme } from "@/components/theme";

function Menu({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: readonly { label: string; href: string }[];
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    function onPointer(event: PointerEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="inline-flex min-h-10 items-center gap-1 rounded-full px-1 text-[13px] text-muted hover:text-fg"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <Icon name="chevron" className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            initial={reduce ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[calc(100%+6px)] z-20 min-w-40 rounded-lg border border-border bg-bg p-1"
          >
            {links.map((link) => (
              <a
                key={link.href}
                role="menuitem"
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-fill hover:text-fg"
                onClick={() => {
                  setOpen(false);
                  onNavigate(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function SideNav({ active, onNavigate }: { active: string; onNavigate: (href: string) => void }) {
  return (
    <nav
      aria-label="Sections"
      className="fixed top-40 z-20 hidden flex-col gap-3 min-[1100px]:flex left-[max(1rem,calc(50vw-350px-11.5rem))]"
    >
      {content.nav.side.map((link, index) => {
        const current = active === link.href.slice(1);
        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={current ? "location" : undefined}
            onClick={() => onNavigate(link.href)}
            className={`relative inline-flex min-h-8 items-center gap-2 text-[13px] leading-none ${
              current ? "text-accent" : "text-faint hover:text-fg"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-3 h-3.5 w-0.5 rounded-full ${current ? "bg-accent" : "bg-transparent"}`}
            />
            <span className="w-5 tabular-nums text-[11px]">{String(index + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = [...new Set([...content.nav.primary, ...content.nav.side].map((link) => link.href.slice(1)))];

    function onScroll() {
      const line = window.scrollY + 140;
      let current = "top";
      let best = -1;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line && top >= best) {
          best = top;
          current = id;
        }
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function activate(href: string) {
    if (href.startsWith("#")) setActive(href.slice(1));
  }

  return (
    <div className="page min-h-screen px-3 text-fg sm:px-6">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
      >
        {content.ui.skip}
      </a>
      <SideNav active={active} onNavigate={activate} />
      <div className="relative mx-auto min-h-screen w-full min-w-0 max-w-[700px] overflow-x-clip">
        <div className="rule-y pointer-events-none absolute inset-y-0 left-0" aria-hidden="true" />
        <div className="rule-y pointer-events-none absolute inset-y-0 right-0" aria-hidden="true" />
        <header className="relative z-10 flex items-center gap-3 px-4 py-3 sm:px-5">
          <a href="#top" className="font-serif text-[1.35rem] leading-none text-fg" onClick={() => activate("#top")}>
            {content.brand}
          </a>
          <nav className="ml-auto flex items-center gap-1" aria-label="Primary">
            <div className="hidden items-center gap-3 min-[480px]:flex">
              {content.nav.primary.map((link) => {
                const id = link.href.slice(1);
                const current = active === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={current ? "location" : undefined}
                    className={`inline-flex min-h-10 items-center text-[13px] ${current ? "text-fg" : "text-muted hover:text-fg"}`}
                    onClick={() => activate(link.href)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Menu label={content.nav.moreLabel} links={content.nav.more} onNavigate={activate} />
            </div>
            <div className="min-[480px]:hidden">
              <Menu
                label={content.ui.menu}
                links={[...content.nav.primary, ...content.nav.more]}
                onNavigate={activate}
              />
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-muted hover:bg-fill hover:text-fg"
              aria-label={theme === "dark" ? content.ui.themeToLight : content.ui.themeToDark}
              onClick={toggle}
              suppressHydrationWarning
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} className="size-4" />
            </button>
          </nav>
        </header>
        <div className="rule-x" aria-hidden="true" />
        <main>{children}</main>
      </div>
    </div>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Shell>{children}</Shell>
    </ThemeProvider>
  );
}
