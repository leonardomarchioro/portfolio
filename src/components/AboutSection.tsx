import type { Dictionary } from "@/i18n/pt-BR";
import { SectionHeading } from "./SectionHeading";

type AboutSectionProps = {
  content: Dictionary["sections"]["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      className="mx-auto grid w-full max-w-container grid-cols-1 gap-8 px-gutter pt-[120px] md:grid-cols-[4fr_8fr] md:px-20 max-[520px]:pt-20"
      id="about"
    >
      <div>
        <SectionHeading number={content.number} title={content.title} />
      </div>
      <div className="rounded border border-surface-muted bg-surface-raised p-8 max-[520px]:p-6">
        {content.paragraphs.map((paragraph) => (
          <p
            className="text-lg leading-relaxed text-text [&+p]:mt-4"
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
