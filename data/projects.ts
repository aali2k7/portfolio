import { Project } from "@/types/portfolio";

export interface EditorialProject extends Omit<Project, "status"> {
  status: string;
  editorialCategory?: string;
  problem: string;
  response: string;
  whatIBuilt: string;
}

export const projects: EditorialProject[] = [
  {
    id: "priora",
    number: "01",
    name: "PRIORA",
    tagline: "AI-powered executive email intelligence.",
    editorialCategory: "AI Systems • Product Engineering",
    description:
      "Contextual LLM reasoning engine that parses high-volume communication threads, extracts action items, drafts situational responses, and eliminates inbox cognitive fatigue.",
    year: "2026",
    technologies: ["Next.js 16", "TypeScript", "FastAPI", "Python", "OpenAI / Gemini", "PostgreSQL"],
    image: "/images/priora-preview.jpg",
    gallery: ["/images/priora-preview.jpg"],
    githubUrl: "https://github.com/aali2k7/priora",
    liveUrl: "https://priora.app",
    status: "In Development",
    featured: true,
    problem:
      "Executive inboxes are built for message volume, not decision clarity. Critical decisions and contract commitments get swallowed in 100+ message threads, creating chronic cognitive fatigue.",
    response:
      "An ambient intelligence layer that synthesizes message trees, auto-extracts calendar deadlines, and drafts context-aware responses before the inbox is opened.",
    whatIBuilt:
      "Engineered real-time Next.js frontend with FastAPI streaming endpoints, sub-second semantic thread summarization, and zero-retention enterprise privacy architecture.",
    highlights: [
      "Sub-second contextual thread summarization",
      "Automated action item extraction with calendar sync",
      "Zero-retention privacy architecture",
    ],
  },
  {
    id: "cypherguard",
    number: "02",
    name: "CYPHERGUARD",
    tagline: "Java bytecode security analysis.",
    editorialCategory: "Systems Security • Static Analysis",
    description:
      "Automated vulnerability auditing engine built on published Java cryptographic research, scanning raw bytecode for weak ciphers and deserialization attack vectors.",
    year: "2026",
    technologies: ["Java", "ASM Bytecode", "TypeScript", "React", "Rust"],
    image: "/images/project-cypherguard.jpg",
    githubUrl: "https://github.com/aali2k7",
    status: "Research Prototype",
    featured: true,
    problem:
      "Cryptographic flaws—such as deprecated DES/ECB ciphers, static IVs, and unsafe deserialization patterns—silently pass code reviews inside compiled enterprise JAR dependencies.",
    response:
      "Direct static bytecode analysis engine that examines compiled .class and .jar binaries without requiring source code access or runtime execution.",
    whatIBuilt:
      "Developed ASM bytecode visitor rules enforcing NIST guidelines, automated insecure cipher detection, and an interactive vulnerability telemetry report.",
    highlights: [
      "Static analysis on compiled Java bytecode (.class & .jar)",
      "Automated detection of NIST-deprecated cryptographic primitives",
    ],
  },
  {
    id: "synapse-os",
    number: "03",
    name: "SYNAPSE OS",
    tagline: "Multi-agent orchestration.",
    editorialCategory: "Agentic Systems • Topology",
    description:
      "Experimental multi-agent operating workspace where specialized autonomous micro-agents collaborate on research synthesis, code generation, and complex pipelines.",
    year: "2026",
    technologies: ["Next.js", "Python", "WebSockets", "Docker", "Tailwind CSS"],
    image: "/images/project-synapse.png",
    status: "Architecture Concept",
    featured: true,
    problem:
      "Monolithic LLM prompts hit cognitive bottlenecks on complex engineering tasks, losing state coherence and hallucinating technical constraints.",
    response:
      "A graph-routed topology of specialized micro-agents—researcher, architect, coder, and auditor—collaborating with isolated memory contexts.",
    whatIBuilt:
      "Architected Python runtime sandbox coordination with WebSocket telemetry, dynamic DAG task routing, and real-time execution state visualizer.",
    highlights: [
      "Graph-based multi-agent routing topology",
      "Isolated container sandboxes for tool execution",
    ],
  },
  {
    id: "riseinrise",
    number: "04",
    name: "RISEINRISE",
    tagline: "Production web platform.",
    editorialCategory: "Web Platform • Full-Stack",
    description:
      "High-performance production digital platform engineered for modern editorial content, fluid interactions, responsive architecture, and optimized page speed.",
    year: "2025",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Hostinger"],
    image: "/images/project-riseinrise.jpg",
    liveUrl: "https://riseinrise.com",
    githubUrl: "https://github.com/aali2k7",
    status: "Live Platform",
    featured: true,
    problem:
      "Client needed a high-converting, editorial web presence with instant load times, refined typography, and seamless content delivery.",
    response:
      "Engineered a lightweight Next.js application with static rendering optimizations, responsive layout systems, and clean editorial design standards.",
    whatIBuilt:
      "Implemented bespoke UI system, optimized Core Web Vitals (sub-800ms LCP), and managed production deployment on Hostinger cloud infrastructure.",
    highlights: [
      "Sub-800ms LCP with static generation optimizations",
      "Custom editorial layout and typography hierarchy",
    ],
  },
];
