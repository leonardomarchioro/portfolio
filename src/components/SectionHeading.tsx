type SectionHeadingProps = {
  number: string;
  title: string;
};

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-4 max-[520px]:items-start max-[520px]:gap-3">
      <span className="font-code text-sm text-primary">{number}</span>
      <h3 className="font-display text-[28px] font-medium leading-tight tracking-normal text-text">
        {title}
      </h3>
      <div className="h-px flex-1 bg-surface-muted max-[520px]:mt-[18px]" />
    </div>
  );
}
