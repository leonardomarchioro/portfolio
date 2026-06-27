"use client";

import { useForm } from "@formspree/react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/i18n/pt-BR";
import { SectionHeading } from "./SectionHeading";

type ContactFormProps = {
  content: Dictionary["sections"]["contact"];
  formId: string;
};

export function ContactForm({ content, formId }: ContactFormProps) {
  const [state, handleSubmit] = useForm(formId);
  const isMissingFormId = formId.length === 0;
  const statusMessage = state.succeeded
    ? content.success
    : state.errors || isMissingFormId
      ? content.error
      : null;

  return (
    <section
      className="mx-auto w-full max-w-container px-gutter pt-[120px] md:px-20 max-[520px]:pt-20"
      id="contact-form"
    >
      <SectionHeading number={content.number} title={content.title} />
      <form className="grid max-w-[760px] gap-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted">
              {content.fields.name.label}
            </span>
            <input
              className="w-full rounded border border-surface-muted bg-surface-raised p-4 text-text outline-none transition-colors focus:border-primary"
              id="name"
              name="name"
              placeholder={content.fields.name.placeholder}
              required
              type="text"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted">
              {content.fields.email.label}
            </span>
            <input
              className="w-full rounded border border-surface-muted bg-surface-raised p-4 text-text outline-none transition-colors focus:border-primary"
              id="email"
              name="email"
              placeholder={content.fields.email.placeholder}
              required
              type="email"
            />
          </label>
        </div>
        <label className="grid gap-2">
          <span className="font-display text-sm font-medium uppercase tracking-[0.05em] text-text-muted">
            {content.fields.message.label}
          </span>
          <textarea
            className="w-full resize-y rounded border border-surface-muted bg-surface-raised p-4 text-text outline-none transition-colors focus:border-primary"
            id="message"
            name="message"
            placeholder={content.fields.message.placeholder}
            required
            rows={5}
          />
        </label>
        {statusMessage ? (
          <p
            className={state.succeeded ? "m-0 font-display text-sm font-medium text-success" : "m-0 font-display text-sm font-medium text-error"}
          >
            {statusMessage}
          </p>
        ) : null}
        <button
          className="group mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2.5 rounded-sm bg-primary px-6 font-display text-sm font-semibold uppercase tracking-[0.05em] text-primary-contrast transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
          disabled={state.submitting || isMissingFormId}
          type="submit"
        >
          {state.submitting ? content.submitting : content.submit}
          <Send className="transition-transform group-hover:translate-x-1" size={18} />
        </button>
      </form>
    </section>
  );
}
