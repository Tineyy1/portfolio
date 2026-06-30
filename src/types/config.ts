export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "instagram" | "youtube";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  technologies: string[];
  keyFeatures: string[];
  myRole: string;
  challenges: string;
  github?: string;
  liveDemo?: string;
  caseStudy?: string;
  featured: boolean;
  category: string;
}

export interface ExperienceItem {
  id: string;
  type: "work" | "freelance" | "internship" | "leadership" | "volunteer";
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string; // "Present" allowed
  description: string;
  highlights: string[];
  tech?: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  graduationYear: string;
  coursework: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  quote: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  taglineWords: string[];
  shortIntro: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
  nav: NavLink[];
  about: {
    biography: string[];
    objective: string;
    passion: string;
    values: string[];
    funFacts: string[];
  };
  stats: Stat[];
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  testimonials: Testimonial[];
  contact: {
    formspreeEndpoint: string;
    mapEmbedUrl: string;
  };
}
