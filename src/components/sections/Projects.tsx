"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Github, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Project } from "@/types/config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectModal } from "@/components/sections/ProjectModal";

export function Projects() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = useMemo(
    () => ["All", ...new Set(siteConfig.projects.map((p) => p.category))],
    []
  );

  const filtered = useMemo(() => {
    return siteConfig.projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <Section
      id="projects"
      index="03"
      label="work"
      title="Things I've built"
      subtitle="Infrastructure, APIs, and platform tooling — the systems behind the product, not always in front of it."
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology..."
            className="w-full bg-surface border border-surface-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-signal/50 outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-3.5 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-signal text-base font-semibold"
                  : "bg-surface text-ink-muted hover:text-ink border border-surface-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-muted text-center py-16 font-mono text-sm">
          No projects match that search — try a different term.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <TiltCard className="glass rounded-2xl overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 bg-surface overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/90 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-signal text-base px-2 py-1 rounded-md">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-ink mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] bg-surface text-ink-muted px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-semibold text-signal hover:text-signal-glow transition-colors"
                    >
                      View case study →
                    </button>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                          className="text-ink-faint hover:text-signal transition-colors"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="text-ink-faint hover:text-signal transition-colors"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
