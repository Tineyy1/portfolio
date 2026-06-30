import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: string; // e.g. "02"
  label: string; // e.g. "STACK"
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  index,
  label,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-signal text-sm">{`// ${index}`}</span>
          <span className="font-mono text-ink-faint text-xs tracking-widest uppercase">
            {label}
          </span>
          <span className="flex-1 h-px bg-surface-border" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-ink mb-4 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-ink-muted max-w-2xl mb-12 leading-relaxed">
            {subtitle}
          </p>
        )}
        {!subtitle && <div className="mb-12" />}
        {children}
      </div>
    </section>
  );
}
