import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";

export function FooterCta() {
  return (
    <Section id="talk" title={content.footer.title} align="center" className="pb-16 pt-10 text-center">
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">{content.footer.body}</p>
      <a
        href={content.footer.href}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm text-[color:var(--on-accent)] transition-transform hover:-translate-y-0.5"
      >
        {content.footer.cta}
        <Icon name="arrow" className="size-4" />
      </a>
    </Section>
  );
}
