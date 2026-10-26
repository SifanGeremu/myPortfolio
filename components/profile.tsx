import Image from "next/image";
import { content } from "@/data/content";
import { Icon } from "@/components/icons";

export function Profile() {
  return (
    <div id="top" className="scroll-mt-6 px-4 pb-7 pt-4 sm:px-5">
      <Image
        src={content.banner.src}
        alt={content.banner.alt}
        width={1200}
        height={500}
        priority
        unoptimized
        className="h-auto w-full rounded-xl object-cover"
      />
      <div className="mt-5 flex items-start gap-4">
        <Image
          src={content.avatar.src}
          alt={content.avatar.alt}
          width={160}
          height={160}
          unoptimized
          className="size-16 shrink-0 rounded-2xl border border-border object-cover sm:size-[76px]"
        />
        <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
          <div className="min-w-0">
            <span
              role="img"
              aria-label={content.status}
              className="mb-1.5 block size-[7px] rounded-full border border-faint"
            />
            <h1 className="font-serif text-[1.65rem] leading-none tracking-tight text-fg sm:text-[2rem]">{content.name}</h1>
            <p className="mt-1.5 text-sm text-muted">{content.role}</p>
            <p className="mt-0.5 text-[13px] text-faint">{content.location}</p>
          </div>
          <p className="flex shrink-0 items-center gap-1.5 pt-4 text-[13px] text-faint">
            <Icon name="eye" className="size-3.5" />
            <span className="tabular-nums" aria-label={`${content.viewsLabel}: ${content.views}`}>
              {content.views.toLocaleString("en-US")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
