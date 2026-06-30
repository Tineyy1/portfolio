"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "initializing system...",
  "mounting components...",
  "establishing connection...",
  "ready.",
];

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 280);

    const exitTimer = setTimeout(() => setVisible(false), 1400);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-base flex items-center justify-center"
        >
          <div className="font-mono text-sm text-signal w-64">
            {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
              <p key={i} className="text-ink-muted">
                <span className="text-signal">$</span> {line}
              </p>
            ))}
            <span className="inline-block w-2 h-4 bg-signal animate-blink mt-1" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
