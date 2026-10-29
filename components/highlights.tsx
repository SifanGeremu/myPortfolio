"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";

export function Highlights() {
  const [hidden, setHidden] = useState<string[]>([]);
  const reduce = useReducedMotion();
  const items = content.highlights.items.filter((item) => !hidden.includes(item.name));

  return (
    <Section id="highlights" title={content.highlights.title}>
      {items.length === 0 ? <p className="text-sm text-muted">{content.highlights.empty}</p> : null}
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1" role="region" aria-label={content.highlights.regionLabel}>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.article
              layout
              key={item.name}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              className="relative w-[min(82%,280px)] shrink-0 snap-start rounded-xl border border-border bg-fill p-4"
            >
              <button
                type="button"
                className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-full text-faint hover:bg-fill-strong hover:text-fg"
                aria-label={`${content.highlights.dismiss} ${item.name}`}
                onClick={() => setHidden((current) => [...current, item.name])}
              >
                <Icon name="close" className="size-3.5" />
              </button>
              <div className="flex items-center gap-2.5 pr-6">
                <Image
                  src={item.avatar}
                  alt={item.avatarAlt}
                  width={64}
                  height={64}
                  unoptimized
                  className="size-8 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-sm text-fg">{item.name}</h3>
                  <p className="truncate text-xs text-faint">{item.handle}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.quote}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
