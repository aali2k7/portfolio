import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "priora",
    number: "01",
    name: "PRI0RA",
    tagline: "Emails, but smarter. AI-powered intelligence for overloaded inboxes.",
    description:
      "An intelligent email productivity platform designed to eliminate inbox fatigue. Priora uses contextual LLM reasoning to summarize long message threads, extract high-priority action items, draft situational responses, and synthesize daily communication briefs.",
    year: "2026",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "FastAPI",
      "Python",
      "OpenAI / Gemini",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image: "/images/priora-preview.jpg",
    gallery: ["/images/priora-preview.jpg"],
    githubUrl: "https://github.com/aali2k7/priora",
    liveUrl: "https://priora.app",
    status: "in-development",
    featured: true,
    highlights: [
      "Contextual semantic email classification with sub-second latency",
      "Automated action item extraction with calendar sync integrations",
      "Zero-retention privacy architecture for enterprise email security",
    ],
  },
  {
    id: "distributed-crypto-audit",
    number: "02",
    name: "CYPHERGUARD",
    tagline: "Automated cryptographic vulnerability scanner & Java bytecode analyzer.",
    description:
      "A developer security tool built directly on findings from published Java security research. CypherGuard automatically audits cryptographic implementations, flagging weak ciphers (DES/ECB), insecure key generation, and unsafe deserialization patterns.",
    year: "2026",
    technologies: ["Java", "ASM Bytecode", "TypeScript", "React", "Rust"],
    image: "/images/project-cypherguard.jpg",
    githubUrl: "https://github.com/aali2k7",
    status: "in-development",
    featured: true,
    highlights: [
      "Static analysis on compiled Java bytecode (.class & .jar)",
      "Automated detection of NIST-deprecated cryptographic primitives",
    ],
  },
  {
    id: "stealth-agentic-workflow",
    number: "03",
    name: "SYNAPSE OS",
    tagline: "Autonomous multi-agent orchestration workspace for technical problem solving.",
    description:
      "An experimental operating environment where autonomous micro-agents collaborate on research synthesis, code generation, and complex data analysis pipelines.",
    year: "2026",
    technologies: ["Next.js", "Python", "WebSockets", "Docker", "Tailwind CSS"],
    image: "/images/project-synapse.webp",
    status: "concept",
    featured: false,
    isPlaceholder: true,
  },
];
