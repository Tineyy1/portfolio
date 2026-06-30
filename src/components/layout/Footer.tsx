"use client";

import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Mail,
  youtube: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-surface-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-signal font-semibold">
            {siteConfig.initials}.
          </span>
          <span className="text-ink-faint text-sm">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-6">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs text-ink-muted hover:text-signal transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-ink-faint hover:text-signal transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-surface-border text-ink-muted hover:text-signal hover:border-signal/40 transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
