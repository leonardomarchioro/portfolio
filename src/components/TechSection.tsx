import type { Dictionary } from "@/i18n/pt-BR";
import { SectionHeading } from "./SectionHeading";

type TechSectionProps = {
  content: Dictionary["sections"]["tech"];
  items: readonly string[];
};

export function TechSection({ content, items }: TechSectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-container px-gutter pt-[120px] md:px-20 max-[520px]:pt-20"
      id="tech"
    >
      <SectionHeading number={content.number} title={content.title} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <div
            className="flex min-h-[52px] cursor-default items-center justify-center rounded border border-transparent bg-surface-raised px-4 py-3 text-center text-text-muted transition-colors hover:border-primary hover:text-primary"
            key={item}
          >
            <span className="font-code text-sm">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
