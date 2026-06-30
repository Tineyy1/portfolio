import { SiteConfig } from "@/types/config";

/**
 * ============================================================
 *  SITE CONFIG — edit everything about your portfolio here.
 *  No need to touch any component files for content changes.
 * ============================================================
 */
export const siteConfig: SiteConfig = {
  name: "Justine Juyad",
  initials: "JJ",
  title: "Software Engineer",
  taglineWords: [
    "I build software that works.",
    "I write clean, maintainable code.",
    "I'm always learning something new.",
    "I solve problems, one commit at a time.",
  ],
  shortIntro:
    "Software engineer based in Bohol, Philippines, focused on building reliable applications and learning the tools that power modern software — from backend systems to the cloud. Currently growing my portfolio one project at a time.",
  email: "itsmejustinejuyad@gmail.com",
  location: "Bangwalog, Duero, Bohol, Region 7, Philippines",
  resumeUrl: "/resume/justine-juyad-resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/Tineyy1", icon: "github" },
    { label: "Email", url: "mailto:itsmejustinejuyad@gmail.com", icon: "mail" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    biography: [
      "I'm a software engineer based in Bohol, Philippines, with a focus on backend development and cloud technologies. I enjoy understanding how systems work under the hood — not just making something run, but making it run well.",
      "I'm currently building out my project portfolio and sharpening my skills across the stack, from writing clean APIs to learning how to deploy and scale them properly.",
      "I care about writing code that's easy for the next person — or future me — to understand. Good naming, clear structure, and a system that doesn't need a novel of comments to explain itself.",
    ],
    objective:
      "To grow as a software engineer by building real, useful projects and developing a strong foundation in backend and cloud systems.",
    passion:
      "I'm drawn to problem-solving — figuring out why something broke, and designing something that won't break the same way twice.",
    values: [
      "Keep learning, always",
      "Write code for humans, not just computers",
      "Small, working steps beat big, broken leaps",
      "Ask questions early, not after things break",
    ],
    funFacts: [
      "Based in Bohol, Philippines",
      "Building this very portfolio as a hands-on learning project",
      "Always has a new tool or language on the to-learn list",
      "Believes good documentation is a form of kindness",
    ],
  },
  stats: [
    { label: "Projects Built", value: 0, suffix: "" },
    { label: "Technologies Learning", value: 6, suffix: "+" },
    { label: "GitHub Repos", value: 0, suffix: "" },
    { label: "Years Coding", value: 1, suffix: "+" },
  ],
  skills: [
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 60 },
      ],
    },
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript / TypeScript", level: 65 },
        { name: "Python", level: 55 },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Git & GitHub", level: 70 },
        { name: "Docker (learning)", level: 35 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", level: 50 },
        { name: "MongoDB", level: 45 },
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Your First Project Goes Here",
      description:
        "Replace this with a real project you've built — even a small one counts. Describe what it does in one sentence.",
      longDescription:
        "This is placeholder text. Write 2-3 sentences about what the project does, why you built it, and what it's built with.",
      image: "/images/projects/placeholder-1.svg",
      tags: ["Replace", "With", "Tags"],
      technologies: ["JavaScript", "Node.js"],
      keyFeatures: [
        "Replace with a real feature of your project",
        "Add as many as are genuinely true",
      ],
      myRole: "Describe what you specifically built or contributed.",
      challenges:
        "Describe a real problem you ran into and how you solved it — this is often the most interesting part to readers.",
      github: "https://github.com/Tineyy1",
      liveDemo: "",
      caseStudy: "",
      featured: true,
      category: "Backend",
    },
  ],
  experience: [
    {
      id: "exp-1",
      type: "leadership",
      role: "Add your real experience here",
      organization: "Company / Project / Organization name",
      location: "Bohol, Philippines",
      startDate: "2025",
      endDate: "Present",
      description:
        "Replace this with real work, freelance, internship, or volunteer experience. If you don't have any yet, you can remove this entry entirely or list relevant coursework/self-study projects instead.",
      highlights: [
        "Replace with a real accomplishment or responsibility",
      ],
      tech: ["JavaScript", "Node.js"],
    },
  ],
  education: [
    {
      id: "edu-1",
      school: "Add your school name here",
      degree: "Add your degree / course here",
      graduationYear: "2025",
      coursework: ["Add relevant coursework here"],
      achievements: ["Add any academic achievements here"],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Add a real certification here (or remove this entry)",
      issuer: "Issuing organization",
      date: "2025",
      image: "/images/certs/placeholder-cert-1.svg",
      verificationUrl: "",
    },
  ],
  testimonials: [
    // Add real testimonials here once you have them — from a manager, professor,
    // collaborator, or client. Each needs: id, name, position, company, photo, quote.
    // Leave this array empty and the Testimonials section will hide itself automatically.
  ],
  contact: {
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d none — replace with your embed URL",
  },
};