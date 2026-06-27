import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n/pt-BR";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="mx-auto flex min-h-[716px] w-full max-w-container items-center px-gutter pt-0 md:px-20 max-[520px]:min-h-[620px]"
      id="hero"
    >
      <div className="max-w-[760px]">
        <p className="mb-4 font-code text-sm text-primary">{content.intro}</p>
        <h1 className="font-display text-[clamp(40px,8vw,72px)] font-semibold leading-[1.05] tracking-normal text-text">
          {content.name}
        </h1>
        <h2 className="mt-5 font-display text-[clamp(24px,4vw,36px)] font-medium leading-tight tracking-normal text-text-muted">
          {content.role}
          <span
            className="ml-1 inline-block h-[1.1em] w-2 animate-blink bg-primary align-text-bottom"
            aria-hidden="true"
          />
        </h2>
        <a
          className="group mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2.5 rounded-sm bg-primary px-6 font-display text-sm font-semibold uppercase tracking-[0.05em] text-primary-contrast transition-colors hover:bg-primary-hover"
          href="#contact-form"
        >
          {content.cta}
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
        </a>
      </div>
    </section>
  );
}
