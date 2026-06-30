"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SkillBar } from "@/components/ui/SkillBar";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="stack"
      title="The stack I operate"
      subtitle="Tools and platforms I reach for daily, grouped by where they sit in the system."
      className="bg-surface/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.skills.map((category, i) => (
          <Reveal key={category.category} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl p-6 h-full hover:border-signal/30 transition-colors"
            >
              <h3 className="font-display text-lg text-ink mb-5">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <SkillBar key={item.name} name={item.name} level={item.level} />
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
