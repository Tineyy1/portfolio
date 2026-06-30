"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, FileText } from "lucide-react";
import { Project } from "@/types/config";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-muted hover:text-signal transition-colors"
            >
              <X size={20} />
            </button>

            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-2">
              {project.category}
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-4">
              {project.title}
            </h3>
            <p className="text-ink-muted leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-2">
                  My role
                </p>
                <p className="text-sm text-ink-muted">{project.myRole}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-2">
                  Challenge solved
                </p>
                <p className="text-sm text-ink-muted">{project.challenges}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-2">
                Key features
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="text-sm text-ink-muted flex gap-2">
                    <span className="text-signal">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-surface text-signal px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-2 text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
                >
                  <Github size={15} /> Repository
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-signal text-base px-4 py-2 text-sm font-semibold hover:bg-signal-glow transition-colors"
                >
                  <ExternalLink size={15} /> Live demo
                </a>
              )}
              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-2 text-sm text-ink hover:border-signal/50 hover:text-signal transition-colors"
                >
                  <FileText size={15} /> Case study
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
