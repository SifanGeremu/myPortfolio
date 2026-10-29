import Image from "next/image";
import { content, type IconName } from "@/data/content";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { newTabProps } from "@/lib/links";

function IconLink({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  return (
    <a
      href={href}
      {...newTabProps(href)}
      aria-label={label}
      title={label}
      className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-fill hover:text-fg"
    >
      <Icon name={icon} className="size-3.5" />
    </a>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title={content.projects.title}
      aside={
        <a
          href={content.projects.viewAll.href}
          {...newTabProps(content.projects.viewAll.href)}
          className="inline-flex items-center gap-1 pb-1 text-[13px] text-muted hover:text-fg"
        >
          {content.projects.viewAll.label}
          <Icon name="arrow" className="size-3.5" />
        </a>
      }
    >
      <ul className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
        {content.projects.items.map((project) => (
          <li key={project.title}>
            <article className="group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={500}
                  unoptimized
                  className="aspect-[16/10] h-auto w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
                />
                {project.flag ? (
                  <span className="absolute right-3 top-3 rounded-full bg-black/75 px-2 py-1 text-[12px] leading-none text-white">
                    {project.flag}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-medium leading-snug text-fg">{project.title}</h3>
                {project.live ? (
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-live">
                    <span className="size-1.5 rounded-full bg-live" aria-hidden="true" />
                    {content.projects.liveLabel}
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-[13px] text-faint">{project.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[13px] leading-none text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="ml-auto flex gap-1.5">
                  {project.live ? (
                    <IconLink href={project.href} icon="globe" label={`${project.title} ${content.projects.siteLabel}`} />
                  ) : null}
                  {project.repo ? (
                    <IconLink
                      href={project.repo}
                      icon="github"
                      label={`${project.title} ${content.projects.repoLabel}`}
                    />
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
