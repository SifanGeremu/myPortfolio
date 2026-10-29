"use client";

import { BadgeCheck, MapPin, Volume2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { content } from "@/data/content";
import { Menu } from "@/components/frame";
import { Icon } from "@/components/icons";
import { useTheme } from "@/components/theme";
import { newTabProps } from "@/lib/links";

export function Profile() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("top");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const ids = content.nav.primary.map((link) => link.href.slice(1));

    function onScroll() {
      const line = window.scrollY + 120;
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

  function pronounce() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(content.name));
  }

  const place = content.location.replace(/,/g, " ·").toUpperCase();

  return (
    <div id="top" className="hero-sans scroll-mt-6 pb-2">
      <div className="relative">
        <div className="relative h-44 overflow-hidden rounded-b-[22px]">
          <Image
            src={content.banner.src}
            alt={content.banner.alt}
            width={1400}
            height={360}
            priority
            unoptimized
            className="h-full w-full object-cover"
          />
          <nav
            aria-label="Primary"
            className="absolute left-1/2 top-3 z-10 flex max-w-[calc(100%-6.5rem)] -translate-x-1/2 items-center gap-0.5 rounded-full bg-white/75 px-1.5 py-1 shadow-[0_6px_20px_rgba(20,50,90,0.12)] backdrop-blur-md"
          >
            {content.nav.primary.map((link) => {
              const current = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "location" : undefined}
                  onClick={() => setActive(link.href.slice(1))}
                  className={`inline-flex min-h-8 items-center rounded-full px-3.5 text-[13.5px] ${
                    current ? "bg-white font-medium text-[#1a1a1a] shadow-sm" : "text-[#3d4450] hover:text-[#111]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <span className="min-[1100px]:hidden">
              <Menu
                label={content.nav.moreLabel}
                links={content.nav.more}
                onNavigate={(href) => href.startsWith("#") && setActive(href.slice(1))}
                buttonClassName="min-h-8 text-[#3d4450]"
              />
            </span>
          </nav>
          <button
            type="button"
            className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-[#3d4450] shadow-sm"
            aria-label={theme === "dark" ? content.ui.themeToLight : content.ui.themeToDark}
            onClick={toggle}
            suppressHydrationWarning
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} className="size-4" />
          </button>
        </div>
        <div className="player absolute bottom-0 left-1/2 z-10 flex w-[min(100%-1.5rem,440px)] -translate-x-1/2 translate-y-1/2 items-center gap-3 rounded-[18px] border border-white/80 px-3 py-2.5">
          <span className="vinyl size-10 shrink-0 rounded-full" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold leading-tight">{content.player.title}</p>
            <p className="truncate text-[11px] leading-tight text-[#8b919a]">{content.player.artist}</p>
            <div className="mt-1.5 flex items-center gap-2 text-[10px] tabular-nums text-[#9aa1aa]">
              <span>0:00</span>
              <span className="h-[3px] flex-1 rounded-full bg-[#d5e3f1]" />
              <span>0:00</span>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white"
            aria-pressed={playing}
            aria-label={playing ? content.player.pause : content.player.play}
            onClick={() => setPlaying((value) => !value)} /* ponytail: no audio file, so this only toggles the icon */
          >
            {playing ? (
              <span className="flex gap-[3px]" aria-hidden="true">
                <span className="h-2.5 w-[2px] bg-white" />
                <span className="h-2.5 w-[2px] bg-white" />
              </span>
            ) : (
              <span className="ml-0.5 block border-y-[5px] border-l-[8px] border-y-transparent border-l-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <article className="hero-card mx-1 mt-12 flex items-start gap-3.5 rounded-[22px] px-4 py-4 sm:mx-2 sm:gap-4 sm:px-5">
        <Image
          src={content.avatar.src}
          alt={content.avatar.alt}
          width={160}
          height={160}
          unoptimized
          className="size-[72px] shrink-0 rounded-[18px] border border-[#ececee] object-cover object-[72%_42%]"
        />
        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-[1.15rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-fg sm:text-[1.55rem]">
                {content.name}
              </h1>
              <span role="img" aria-label={content.status} className="inline-flex">
                <BadgeCheck className="size-[18px] shrink-0 fill-[#307de5] text-white" aria-hidden="true" />
              </span>
              <button
                type="button"
                className="inline-flex size-7 items-center justify-center rounded-full text-[#8b919a] hover:text-fg"
                aria-label={content.pronounce}
                onClick={pronounce}
              >
                <Volume2 className="size-4" />
              </button>
            </div>
            <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8b919a]">{content.role}</p>
            <p className="mt-1.5 flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-[#9aa1aa]">
              <MapPin className="size-3.5" aria-hidden="true" />
              {place}
            </p>
          </div>
        </div>
      </article>

      <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 px-2">
        {content.contact.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...newTabProps(link.href)}
              className="hero-pill inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-[13px]"
            >
              <Icon name={link.icon} className="size-3.5" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="hero-line mt-8 px-1 text-[1.85rem] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[2.35rem]">
        {content.headline}
      </p>
    </div>
  );
}
