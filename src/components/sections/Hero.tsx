"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown, FileDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

const TopologyBackground = dynamic(
  () =>
    import("@/components/three/TopologyBackground").then(
      (mod) => mod.TopologyBackground
    ),
  { ssr: false }
);

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Mail,
  youtube: Mail,
};

function useTypingEffect(words: string[], typingSpeed = 45, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        typingSpeed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export function Hero() {
  const typedText = useTypingEffect(siteConfig.taglineWords);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-grid"
    >
      <TopologyBackground />

      {/* Vignette so text stays legible over the 3D graph */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-base via-base/60 to-base pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-signal border border-signal/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-ink tracking-tight mb-4">
          {siteConfig.name}
        </h1>

        <p className="font-mono text-signal text-base md:text-lg mb-8 h-7">
          {typedText}
          <span className="caret h-5 align-middle animate-blink" />
        </p>

        <p className="text-ink-muted max-w-xl mx-auto mb-10 leading-relaxed">
          {siteConfig.shortIntro}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <MagneticButton
            variant="primary"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </MagneticButton>
          <MagneticButton variant="secondary" className="gap-2" onClick={() => window.open(siteConfig.resumeUrl, "_blank")}>
            <FileDown size={16} />
            Download Resume
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </MagneticButton>
        </div>

        <div className="flex items-center justify-center gap-5">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-ink-muted hover:text-signal transition-colors hover:-translate-y-0.5 duration-200"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to next section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-faint hover:text-signal transition-colors z-10"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
