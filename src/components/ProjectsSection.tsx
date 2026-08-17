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

          return (
            <a
              aria-label={`${item.title} - GitHub`}
              className="group flex min-h-[220px] flex-col rounded border border-surface-muted bg-surface-raised p-6 transition-colors hover:border-primary"
              href={item.href}
              key={item.title}
              rel="noreferrer"
              target="_blank"
            >
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="inline-flex size-12 items-center justify-center rounded bg-background text-text-muted transition-colors group-hover:text-primary"
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
                <ExternalLink
                  aria-hidden="true"
                  className="text-text-muted transition-colors group-hover:text-primary"
                  size={18}
                />
              </div>
              <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.05em] text-text">
                {item.title}
              </h4>
              <p className="m-0 flex-1 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
              <span className="mt-6 font-code text-xs text-primary">GitHub</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
