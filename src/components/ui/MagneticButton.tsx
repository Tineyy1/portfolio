"use client";

import { useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
    onMouseMove?.(e);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    setPos({ x: 0, y: 0 });
    onMouseLeave?.(e);
  }

  const variants = {
    primary: "bg-signal text-base hover:bg-signal-glow",
    secondary: "bg-surface-raised text-ink border border-surface-border hover:border-signal/40",
    ghost: "bg-transparent text-ink hover:bg-surface/60",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
