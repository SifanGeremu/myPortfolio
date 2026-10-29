import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { newTabProps } from "@/lib/links";

export function Contact() {
  return (
    <Section id="contact" title={content.contact.title}>
      <ul className="grid grid-cols-2 gap-2 min-[560px]:grid-cols-3">
        {content.contact.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...newTabProps(link.href)}
              className="flex min-h-11 items-center justify-between gap-1 rounded-lg border border-border px-2.5 text-[13px] text-fg transition-colors hover:bg-fill"
            >
              <span className="flex min-w-0 items-center gap-1.5">
                <Icon name={link.icon} className="size-3.5 shrink-0" />
                <span className="truncate">{link.label}</span>
              </span>
              <Icon name="arrow" className="size-3 shrink-0 text-faint" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
