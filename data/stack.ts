import { TechStackCategory } from "@/types/portfolio";

export const techStackCategories: TechStackCategory[] = [
  {
    id: "languages",
    name: "Languages",
    tagline: "Core syntax and compilation targets",
    skills: [
      { name: "TypeScript", featured: true },
      { name: "JavaScript (ESNext)", featured: true },
      { name: "Python", featured: true },
      { name: "Java", featured: true },
      { name: "SQL" },
      { name: "C / C++" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Interfaces",
    tagline: "High-performance reactive user experiences",
    skills: [
      { name: "Next.js 16 (App Router)", featured: true },
      { name: "React 19", featured: true },
      { name: "Tailwind CSS v4", featured: true },
      { name: "Motion / Framer Motion", featured: true },
      { name: "HTML5 / Semantic A11y" },
      { name: "CSS3 / Modern Layouts" },
      { name: "WebGL / Canvas Basics" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    tagline: "Scalable services, APIs, and micro-architectures",
    skills: [
      { name: "Node.js", featured: true },
      { name: "FastAPI / Python", featured: true },
      { name: "Express.js" },
      { name: "RESTful API Design", featured: true },
      { name: "GraphQL Basics" },
      { name: "WebSockets" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    tagline: "Intelligent systems, LLM orchestration & applied ML",
    skills: [
      { name: "LLM Agentic Pipelines", featured: true },
      { name: "OpenAI / Gemini APIs", featured: true },
      { name: "LangChain / LlamaIndex" },
      { name: "Prompt Engineering & Evaluation", featured: true },
      { name: "PyTorch Basics" },
      { name: "Scikit-Learn" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    tagline: "Persistent state, indexing, and vector embeddings",
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma / Drizzle ORM", featured: true },
      { name: "Supabase" },
      { name: "Vector Databases (Pinecone/pgvector)" },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & Developer Tooling",
    tagline: "Reliable builds, versioning, and deployment",
    skills: [
      { name: "Git & GitHub", featured: true },
      { name: "Docker & Containerization", featured: true },
      { name: "Vercel / Cloudflare Pages", featured: true },
      { name: "CI/CD Workflows" },
      { name: "Linux / Unix Shell", featured: true },
      { name: "Postman / API Testing" },
    ],
  },
];
