"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-ink">{name}</span>
        <span className="font-mono text-xs text-ink-faint">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-signal-dim to-signal rounded-full"
        />
      </div>
    </div>
  );
}
