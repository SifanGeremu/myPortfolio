import { content } from "@/data/content";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" title={content.about.title}>
      <ul className="space-y-3">
        {content.about.items.map((item) => (
          <li key={item.text} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-current" aria-hidden="true" />
            <span>
              <RichText text={item.text} marks={item.marks} />
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
