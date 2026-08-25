import { Code2, ExternalLink, Github, Server } from "lucide-react";
import type { Generals } from "@/i18n/generals";
import type { Dictionary } from "@/i18n/pt-BR";
import { SectionHeading } from "./SectionHeading";

type ProjectsSectionProps = {
  content: Dictionary["sections"]["projects"];
  items: Generals["projects"];
};

const icons = {
  code: Code2,
  github: Github,
  server: Server,
} as const;

export function ProjectsSection({ content, items }: ProjectsSectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-container px-gutter pt-[120px] md:px-20 max-[520px]:pt-20"
      id="projects"
    >
      <SectionHeading number={content.number} title={content.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.icon];
          const projectContent = content.items[item.key];
          const demoHref = "demoHref" in item ? item.demoHref : undefined;

          return (
            <article
              className="group flex min-h-[220px] flex-col rounded border border-surface-muted bg-surface-raised p-6 transition-colors hover:border-primary focus-within:border-primary"
              key={item.key}
            >
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="inline-flex size-12 items-center justify-center rounded bg-background text-text-muted transition-colors group-hover:text-primary"
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
              </div>
              <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.05em] text-text">
                {projectContent.title}
              </h4>
              <p className="m-0 flex-1 text-sm leading-relaxed text-text-muted">
                {projectContent.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  aria-label={`${projectContent.title} - GitHub`}
                  className="inline-flex items-center gap-2 font-code text-xs text-primary transition-colors hover:text-text focus:outline-none focus-visible:text-text"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden="true" size={14} />
                  GitHub
                </a>
                {demoHref ? (
                  <a
                    aria-label={`${projectContent.title} - Demo`}
                    className="inline-flex items-center gap-2 font-code text-xs text-primary transition-colors hover:text-text focus:outline-none focus-visible:text-text"
                    href={demoHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink aria-hidden="true" size={14} />
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
