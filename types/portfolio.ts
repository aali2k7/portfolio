export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  technologies: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "active" | "completed" | "in-development" | "concept";
  featured: boolean;
  highlights?: string[];
  isPlaceholder?: boolean;
}

export interface Experience {
  id: string;
  number: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Internship" | "Freelance" | "Leadership" | "Full-time";
  description: string[];
  skills: string[];
}

export interface ResearchPublication {
  id: string;
  number: string;
  title: string;
  journal: string;
  year: string;
  abstract: string;
  topics: string[];
  doiUrl?: string;
  paperUrl?: string;
  status: "Published" | "Under Review" | "Preprint";
}

export interface TechStackCategory {
  id: string;
  name: string;
  tagline: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface PersonalInterest {
  id: string;
  title: string;
  tagline: string;
  description: string;
  vibe: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  featured?: boolean;
}

export interface SiteConfig {
  name: string;
  preferredName: string;
  title: string;
  roles: string[];
  philosophy: {
    hero: string;
    sub: string;
    quote: string;
  };
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    period: string;
  };
  email: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  accentColor: string; // Dynamic CSS accent color hex code
}
