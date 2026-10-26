"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";
import { content, type StackTab } from "@/data/content";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { filterByGroup } from "@/lib/portfolio";

export function TechStack() {
  const [tab, setTab] = useState<StackTab>("All");
  const reduce = useReducedMotion();
  const visible = filterByGroup(content.stack.skills, tab);

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const tabs = content.stack.tabs;
    const key = event.key;
    if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Home" && key !== "End") return;
    event.preventDefault();
    const next =
      key === "Home"
        ? 0
        : key === "End"
          ? tabs.length - 1
          : key === "ArrowRight"
            ? (index + 1) % tabs.length
            : (index - 1 + tabs.length) % tabs.length;
    const name = tabs[next];
    if (!name) return;
    setTab(name);
    document.getElementById(`stack-tab-${name}`)?.focus();
  }

  return (
    <Section
      id="stack"
      title={content.stack.title}
      hint={content.stack.hint}
      aside={
        <div role="tablist" aria-label={content.stack.filterLabel} className="flex flex-wrap gap-1">
          {content.stack.tabs.map((name, index) => {
            const selected = name === tab;
            return (
              <button
                key={name}
                id={`stack-tab-${name}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="stack-panel"
                tabIndex={selected ? 0 : -1}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-[13px] transition-colors min-[480px]:min-h-8 ${
                  selected ? "border border-border bg-fill-strong text-fg" : "border border-transparent text-muted hover:text-fg"
                }`}
                onClick={() => setTab(name)}
                onKeyDown={(event) => onTabKey(event, index)}
              >
                {name}
              </button>
            );
          })}
        </div>
      }
    >
      <div id="stack-panel" role="tabpanel" aria-labelledby={`stack-tab-${tab}`}>
        {visible.length === 0 ? <p className="text-sm text-muted">{content.stack.empty}</p> : null}
        <motion.ul layout className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => (
              <motion.li
                layout
                key={skill.name}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: reduce ? 0 : 0.18 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-[13px] leading-none text-muted"
              >
                <motion.span
                  className="inline-flex text-fg"
                  whileHover={reduce ? undefined : { rotate: [0, -12, 12, -6, 0] }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon name={skill.icon} className="size-3.5" />
                </motion.span>
                {skill.name}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </Section>
  );
}
