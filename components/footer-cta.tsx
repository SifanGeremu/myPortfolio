import { content } from "@/data/content";
import { Icon } from "@/components/icons";
import { SiteLink } from "@/components/resume-view";
import { Section } from "@/components/section";

export function FooterCta() {
  return (
    <Section id="talk" title={content.footer.title} align="center" className="pb-16 pt-10 text-center">
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">{content.footer.body}</p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {content.footer.links.map((link) => (
          <li key={link.label}>
            <SiteLink
              href={link.href}
              className="hero-pill inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-[13px]"
            >
              <Icon name={link.icon} className="size-3.5" />
              {link.label}
            </SiteLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
