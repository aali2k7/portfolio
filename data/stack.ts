export interface TaxonomyGroup {
  category: string;
  number: string;
  description: string;
  skills: string[];
}

export const technicalTaxonomy: TaxonomyGroup[] = [
  {
    category: "LANGUAGES",
    number: "01",
    description: "Core syntax, strongly typed systems, and algorithmic reasoning",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "APPLICATION",
    number: "02",
    description: "Production web architectures, responsive interfaces, and API microservices",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "AI / ML",
    number: "03",
    description: "Contextual reasoning systems, agentic pipelines, and model evaluation",
    skills: [
      "LLMs",
      "Generative AI",
      "Prompt Engineering",
      "AI-assisted development workflows",
    ],
  },
  {
    category: "DATA",
    number: "04",
    description: "Relational modeling, persistent state, and cloud databases",
    skills: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "SYSTEMS",
    number: "05",
    description: "Containerization, Unix environments, version control, and infrastructure",
    skills: ["Linux", "Docker", "Git", "GitHub", "Production Deployment"],
  },
];

export const techStackCategories = technicalTaxonomy.map((t) => ({
  id: t.category.toLowerCase().replace(/[^a-z0-9]/g, "-"),
  name: t.category,
  tagline: t.description,
  skills: t.skills.map((s) => ({ name: s, featured: true })),
}));

