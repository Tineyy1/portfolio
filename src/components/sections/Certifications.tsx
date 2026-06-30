"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Certification } from "@/types/config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <Section
      id="certifications"
      index="06"
      label="certifications"
      title="Credentials"
      className="bg-surface/30"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.07}>
            <button
              onClick={() => setActive(cert)}
              className="glass rounded-2xl p-6 text-left w-full hover:border-signal/30 transition-colors group"
            >
              <div className="relative h-32 mb-4 rounded-lg bg-surface overflow-hidden flex items-center justify-center">
                <Award size={32} className="text-signal/40" />
              </div>
              <h3 className="font-display text-base text-ink mb-1 group-hover:text-signal transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-ink-muted">{cert.issuer}</p>
              <p className="font-mono text-xs text-ink-faint mt-1">{cert.date}</p>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-md w-full p-8 relative text-center"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-ink-muted hover:text-signal transition-colors"
              >
                <X size={20} />
              </button>
              <Award size={40} className="text-signal mx-auto mb-4" />
              <h3 className="font-display text-xl text-ink mb-2">{active.name}</h3>
              <p className="text-ink-muted mb-1">{active.issuer}</p>
              <p className="font-mono text-xs text-ink-faint mb-6">
                Issued {active.date}
              </p>
              {active.verificationUrl && (
                <a
                  href={active.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-signal text-base px-4 py-2 text-sm font-semibold hover:bg-signal-glow transition-colors"
                >
                  <ExternalLink size={14} /> Verify credential
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
