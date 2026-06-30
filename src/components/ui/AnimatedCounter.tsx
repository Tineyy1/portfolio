"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 1600,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-signal">
      {value}
      {suffix}
    </span>
  );
}
