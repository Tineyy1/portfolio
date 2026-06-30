import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const typeLabel: Record<string, string> = {
  work: "FULL-TIME",
  freelance: "FREELANCE",
  internship: "INTERNSHIP",
  leadership: "LEADERSHIP",
  volunteer: "VOLUNTEER",
};

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      label="experience"
      title="Where I've shipped"
      subtitle="Each role, read top to bottom like a deploy log — most recent at the top."
      className="bg-surface/30"
    >
      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-surface-border to-transparent" />

        <div className="space-y-10">
          {siteConfig.experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-signal ring-4 ring-base" />

                <div className="glass rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-signal bg-signal/10 px-2 py-0.5 rounded-md">
                      {typeLabel[item.type]}
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-ink mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-sm text-ink-muted mb-3">
                    {item.organization} · {item.location}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5 mb-3">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-ink-muted flex gap-2"
                      >
                        <span className="text-signal mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  {item.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] bg-surface text-ink-muted px-2 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
