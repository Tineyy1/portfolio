"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!form.message.trim()) errors.message = "Message can't be empty";
  else if (form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // You can also set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local instead of editing site.ts
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || siteConfig.contact.formspreeEndpoint;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      index="08"
      label="contact"
      title="Let's build something reliable"
      subtitle="Open to full-time roles, contract infrastructure work, or just talking shop about distributed systems."
      className="bg-surface/30"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-ink focus:border-signal/50 outline-none transition-colors"
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p className="text-danger text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-ink focus:border-signal/50 outline-none transition-colors"
                placeholder="jane@company.com"
              />
              {errors.email && (
                <p className="text-danger text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-sm text-ink focus:border-signal/50 outline-none transition-colors resize-none"
                placeholder="What are you working on?"
              />
              {errors.message && (
                <p className="text-danger text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            <MagneticButton
              type="submit"
              variant="primary"
              disabled={status === "submitting"}
              className="w-full disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                "Send message"
              )}
            </MagneticButton>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-signal text-sm font-mono pt-2"
                >
                  <CheckCircle2 size={16} /> Message sent — I&apos;ll reply soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-danger text-sm font-mono pt-2"
                >
                  Something went wrong — try emailing me directly instead.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 h-full flex flex-col">
            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-ink-muted hover:text-signal transition-colors"
              >
                <Mail size={16} /> {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <MapPin size={16} /> {siteConfig.location}
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-surface border border-surface-border overflow-hidden min-h-[220px] flex items-center justify-center">
              {/* Replace mapEmbedUrl in src/config/site.ts with your real Google Maps embed link */}
              <p className="font-mono text-xs text-ink-faint text-center px-6">
                Map embed placeholder — add your Google Maps embed URL in
                site.ts (contact.mapEmbedUrl)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
