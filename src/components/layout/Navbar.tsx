"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-20">
        <a href="#hero" className="font-mono text-signal font-semibold text-lg">
          {siteConfig.initials}<span className="text-ink-faint">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-ink-muted hover:text-signal transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-ink-muted hover:text-signal hover:bg-surface transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-2 text-sm font-medium text-ink hover:border-signal/50 hover:text-signal transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-ink-muted hover:text-signal transition-colors block py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-ink-muted hover:text-signal hover:bg-surface transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-surface-border px-4 py-2 text-sm font-medium text-ink"
                >
                  <Download size={14} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
