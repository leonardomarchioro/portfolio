import { Cloud } from "lucide-react";
import type { Dictionary } from "@/i18n/pt-BR";
import { SectionHeading } from "./SectionHeading";

type CertificationsSectionProps = {
  content: Dictionary["sections"]["certifications"];
  items: readonly {
    title: string;
    issuer: string;
    href: string;
  }[];
};

export function CertificationsSection({ content, items }: CertificationsSectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-container px-gutter pt-[120px] md:px-20 max-[520px]:pt-20"
      id="certifications"
    >
      <SectionHeading number={content.number} title={content.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item) => (
          <a
            aria-label={`${item.title} - ${item.issuer}`}
            className="group flex items-start gap-6 rounded border border-surface-muted bg-surface-raised p-6 transition-colors hover:border-primary"
            href={item.href}
            key={item.title}
            rel="noreferrer"
            target="_blank"
          >
            <div
              className="inline-flex size-12 shrink-0 items-center justify-center rounded bg-background text-text-muted transition-colors group-hover:text-primary"
              aria-hidden="true"
            >
              <Cloud size={24} />
            </div>
            <div>
              <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.05em] text-text">
                {item.title}
              </h4>
              <p className="m-0 text-text-muted">{item.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
