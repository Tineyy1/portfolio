import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="about"
      title="The person behind the uptime"
      subtitle={siteConfig.about.objective}
    >
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-5">
          {siteConfig.about.biography.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-ink-muted leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="pt-4">
              <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-3">
                What I value
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {siteConfig.about.values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="text-signal mt-1">▸</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal delay={0.15}>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
                {"// fun facts"}
              </p>
              <ul className="space-y-3">
                {siteConfig.about.funFacts.map((fact) => (
                  <li
                    key={fact}
                    className="text-sm text-ink-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-ink-faint">→</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-surface-border">
        {siteConfig.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-mono text-xs text-ink-faint uppercase tracking-wide mt-2">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
