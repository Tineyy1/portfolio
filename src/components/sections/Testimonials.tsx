"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  if (testimonials.length === 0) return null;

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <Section
      id="testimonials"
      index="07"
      label="testimonials"
      title="What people I've worked with say"
    >
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl p-8 md:p-10 text-center"
          >
            <Quote className="text-signal mx-auto mb-5" size={28} />
            <p className="text-ink text-lg leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="w-12 h-12 rounded-full bg-surface mx-auto mb-3 flex items-center justify-center font-mono text-signal text-sm">
              {current.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="font-display text-ink">{current.name}</p>
            <p className="font-mono text-xs text-ink-faint">
              {current.position} · {current.company}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-lg border border-surface-border text-ink-muted hover:text-signal hover:border-signal/40 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-signal" : "bg-surface-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-lg border border-surface-border text-ink-muted hover:text-signal hover:border-signal/40 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
}
