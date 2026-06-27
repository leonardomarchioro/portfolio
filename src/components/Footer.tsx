import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import type { Generals } from "@/i18n/generals";
import type { Dictionary } from "@/i18n/pt-BR";

type FooterProps = {
  content: Dictionary["footer"];
  links: Generals["contactLinks"];
};

const icons: Record<string, ComponentType<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: MessageCircle,
};

export function Footer({ content, links }: FooterProps) {
  return (
    <footer className="border-t border-border" id="contact">
      <div className="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-8 px-gutter py-16 text-center md:flex-row md:text-left">
        <div>
          <h4 className="mb-2 font-display text-2xl font-medium tracking-normal text-text">
            {content.title}
          </h4>
          <p className="m-0 font-code text-text-muted">{content.copyright}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => {
            const Icon = icons[link.icon] ?? Mail;

            return (
              <a
                className="inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted transition-colors hover:text-primary"
                key={link.label}
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={20} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
