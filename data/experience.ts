export interface EditorialExperience {
  id: string;
  number?: string;
  year: string;
  period: string;
  role: string;
  organization: string;
  company: string;
  type: string;
  location: string;
  summary: string;
  description: string[];
  metric?: {
    value: string;
    label: string;
  };
  initiatives: string[];
  skills: string[];
  url?: string;
  companyUrl?: string;
}

export const experiences: EditorialExperience[] = [
  {
    id: "airc",
    number: "01",
    year: "2026",
    period: "Aug 2026 – Present",
    role: "AI Research Intern",
    organization: "Applied AI Research Center (AIRC)",
    company: "AIRC",
    type: "Research & Engineering",
    location: "Hyderabad, India",
    summary:
      "Contributing to applied AI/ML research and full-stack software development workflows. Architected platform features for Woxsen Leap, an institutional learning platform actively utilized by students across university programs.",
    description: [
      "Contributing to applied AI research and full-stack software development workflows.",
      "Architected platform features for Woxsen Leap, actively used by 1,000+ students.",
    ],
    metric: {
      value: "1,000+",
      label: "students actively using the Woxsen Leap platform",
    },
    initiatives: [
      "Woxsen Leap learning platform engineering & deployment",
      "Production software engineering & scalable platform components",
      "AI/ML experimentation & LLM generative workflows",
      "Technical documentation & faculty research collaboration",
    ],
    skills: ["Applied AI / LLMs", "Next.js", "Python", "FastAPI", "Research Synthesis"],
  },
  {
    id: "ecell",
    number: "02",
    year: "2026",
    period: "Jul 2026 – Present",
    role: "Team Lead",
    organization: "Entrepreneurship Cell (E-Cell)",
    company: "Entrepreneurship Cell",
    type: "Technical Leadership",
    location: "Woxsen University",
    summary:
      "Directing technical operations and digital infrastructure for the university's startup incubation ecosystem. Leading developer coordination, managing website deployments, and delivering systems for builder initiatives.",
    description: [
      "Directing technical operations and digital infrastructure for the university startup ecosystem.",
      "Leading developer coordination and managing platform delivery for student founders.",
    ],
    initiatives: [
      "Digital infrastructure & official web platform delivery",
      "Technical team coordination & sprint management",
      "Platform operations for startup pitch showcases & summits",
    ],
    skills: ["Technical Leadership", "System Architecture", "Web Engineering", "Project Delivery"],
  },
  {
    id: "student-council",
    number: "03",
    year: "2025",
    period: "Oct 2025 – Mar 2026",
    role: "Senior Executive",
    organization: "Woxsen University Student Council",
    company: "Student Council",
    type: "Operations & Leadership",
    location: "Woxsen University",
    summary:
      "Drove technical operations and coordinated flagship university summits and campus-wide events, overseeing technological setups, infrastructure, and cross-functional execution.",
    description: [
      "Drove technical operations and coordinated flagship university summits and campus-wide events.",
      "Led execution for Infinity, Sony PlayStation campus event, and Telangana CM campus visit.",
    ],
    initiatives: [
      "Infinity flagship cultural & tech summit execution",
      "Sony India PlayStation campus gaming event coordination",
      "Telangana Chief Minister's official campus visit technology ops",
      "WoxHack hackathon technical support & participant systems",
    ],
    skills: ["Event Operations", "Technology Operations", "Cross-Functional Execution"],
  },
  {
    id: "freelance",
    number: "04",
    year: "2024",
    period: "Nov 2024 – Present",
    role: "Creative & Product Consultant",
    organization: "Independent Advisory & Engineering",
    company: "Freelance",
    type: "Consulting & Development",
    location: "Remote / Hyderabad",
    summary:
      "Partnering with early-stage founders and product teams to engineer high-converting web applications, establish distinct digital presences, and refine product architecture.",
    description: [
      "Partnering with early-stage founders and product teams to engineer high-converting web applications.",
      "Delivering modern Next.js systems with focus on speed, design, and user conversion.",
    ],
    initiatives: [
      "Full-stack React & Next.js production applications",
      "High-converting landing page architectures with sub-second performance",
      "Digital presence, brand positioning, and startup advisory",
    ],
    skills: ["React / Next.js", "UI/UX Systems", "Performance Tuning", "Product Advisory"],
  },
];
