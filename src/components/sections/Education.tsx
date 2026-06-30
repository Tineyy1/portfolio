import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <Section id="education" index="05" label="education" title="Academic background">
      <div className="grid md:grid-cols-2 gap-6">
        {siteConfig.education.map((edu, i) => (
          <Reveal key={edu.id} delay={i * 0.08}>
            <div className="glass rounded-2xl p-7 hover:border-signal/30 transition-colors h-full">
              <h3 className="font-display text-xl text-ink mb-1">{edu.degree}</h3>
              <p className="text-sm text-signal mb-1">{edu.school}</p>
              <p className="font-mono text-xs text-ink-faint mb-5">
                Class of {edu.graduationYear}
              </p>

              <div className="mb-4">
                <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-2">
                  Relevant coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[11px] bg-surface text-ink-muted px-2 py-1 rounded-md"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-2">
                  Achievements
                </p>
                <ul className="space-y-1">
                  {edu.achievements.map((a) => (
                    <li key={a} className="text-sm text-ink-muted flex gap-2">
                      <span className="text-signal">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
