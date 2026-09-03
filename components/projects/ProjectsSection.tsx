"use client";

import { ProjectChapter, ProjectChapterData } from "./ProjectChapter";
import { Sparkles, Terminal } from "lucide-react";

const projectChapters: ProjectChapterData[] = [
  {
    id: "priora",
    number: "01",
    name: "PRIORA",
    thesisLead: "EMAIL, RETHOUGHT.",
    thesisSub: "AI-POWERED INTELLIGENCE FOR OVERLOADED INBOXES.",
    status: "ACTIVE DEVELOPMENT",
    image: "/images/priora-preview.jpg",
    problemTitle: "IMPORTANT WORK GETS BURIED IN NOISE.",
    problemDescription:
      "Modern inboxes are built for volume, not human clarity. Critical executive decisions, contract deadlines, and urgent action items get swallowed in hundred-message threads, creating chronic cognitive fatigue.",
    responseTitle: "PRIORA FINDS WHAT ACTUALLY MATTERS.",
    responseDescription:
      "A proactive intelligence layer that autonomously parses conversation threads, extracts prioritized action items with zero human effort, and prepares situational response drafts before you even open your inbox.",
    trinityPillars: ["UNDERSTAND", "PRIORITIZE", "ACT"],
    capabilities: [
      {
        num: "01",
        title: "UNDERSTAND",
        description:
          "Synthesizes winding, multi-participant threads into structured executive digests in sub-second inference time.",
      },
      {
        num: "02",
        title: "EXTRACT",
        description:
          "Automatically detects deadlines, financial commitments, and assigned deliverables, linking directly with calendar workflows.",
      },
      {
        num: "03",
        title: "RESPOND",
        description:
          "Generates high-precision, context-aware drafts calibrated to your authentic voice while preserving human approval.",
      },
    ],
    architecture: [
      { tech: "NEXT.JS 16", role: "Product Interface & Real-Time Client" },
      { tech: "TYPESCRIPT", role: "Strict Type Safety & Contract Integrity" },
      { tech: "FASTAPI & PYTHON", role: "High-Throughput Asynchronous Backend" },
      { tech: "POSTGRESQL", role: "Relational Message Graph & State Storage" },
      { tech: "OPENAI / GEMINI", role: "Contextual Semantic Reasoning Engine" },
      { tech: "ZERO-RETENTION ARCHITECTURE", role: "Ephemeral Enterprise Privacy Layer" },
    ],
    liveUrl: "https://priora.app",
    githubUrl: "https://github.com/aali2k7/priora",
    environmentalBg: "bg-[#0C111C]",
  },
  {
    id: "cypherguard",
    number: "02",
    name: "CYPHERGUARD",
    thesisLead: "SECURITY, VERIFIED.",
    thesisSub: "AUTOMATED CRYPTOGRAPHIC SCANNER & JAVA BYTECODE ANALYZER.",
    status: "ACTIVE DEVELOPMENT",
    image: "/images/project-cypherguard.jpg",
    problemTitle: "CRYPTOGRAPHIC FLAWS LURK IN COMPILED BINARIES.",
    problemDescription:
      "Deprecated ciphers (DES, ECB mode), hardcoded initialization vectors, and unsafe deserialization patterns frequently slip through code reviews, hiding silently inside compiled enterprise dependencies.",
    responseTitle: "STATIC BYTECODE DECOMPILATION & VULNERABILITY AUDITING.",
    responseDescription:
      "Built directly from published Java cryptographic research, CypherGuard performs deep static analysis on raw compiled bytecode, instantly flagging NIST-deprecated primitives and dangerous implementation flaws.",
    trinityPillars: ["DECOMPILE", "AUDIT", "HARDEN"],
    capabilities: [
      {
        num: "01",
        title: "BYTECODE DECOMPILATION",
        description:
          "Direct static inspection of compiled .class and .jar binaries without requiring source code or runtime execution.",
      },
      {
        num: "02",
        title: "PRIMITIVE VERIFICATION",
        description:
          "Automated rule-based detection for obsolete ciphers, insecure key sizes, and broken pseudo-random number generators.",
      },
      {
        num: "03",
        title: "VULNERABILITY RADAR",
        description:
          "Interactive multi-dimensional radar mapping attack surface severity across protocol weaknesses and key management.",
      },
    ],
    architecture: [
      { tech: "JAVA & ASM BYTECODE", role: "Decompilation & Bytecode Tree Manipulation" },
      { tech: "RUST", role: "High-Performance Primitive Verification Engine" },
      { tech: "TYPESCRIPT & REACT", role: "Interactive Security Telemetry Dashboard" },
      { tech: "NIST STANDARDS", role: "Cryptographic Rule Definition Baseline" },
    ],
    githubUrl: "https://github.com/aali2k7",
    environmentalBg: "bg-[#0F131C]",
  },
  {
    id: "synapse-os",
    number: "03",
    name: "SYNAPSE OS",
    thesisLead: "ORCHESTRATION, UNBOUND.",
    thesisSub: "AUTONOMOUS MULTI-AGENT WORKSPACE FOR TECHNICAL PROBLEM SOLVING.",
    status: "RESEARCH & CONCEPT",
    image: "/images/project-synapse.png",
    problemTitle: "SINGLE-MODEL PROMPTS HIT COGNITIVE WALLS.",
    problemDescription:
      "Complex systems engineering cannot be solved in a single prompt context. Monolithic models lose coherence, hallucinate technical constraints, and fail to maintain multi-step state verification.",
    responseTitle: "COLLABORATIVE TOPOLOGY OF AUTONOMOUS AGENTS.",
    responseDescription:
      "An experimental operating environment where specialized micro-agents—researchers, architects, coders, and auditors—collaborate through dynamic message topologies to solve complex technical tasks.",
    trinityPillars: ["SPAWN", "COORDINATE", "EXECUTE"],
    capabilities: [
      {
        num: "01",
        title: "DYNAMIC AGENT TOPOLOGY",
        description:
          "Graph-based orchestration routing tasks between autonomous agents with isolated memory states.",
      },
      {
        num: "02",
        title: "REAL-TIME SYNTHESIS TERMINAL",
        description:
          "Streaming code compilation and tool execution pipelines with automated multi-agent cross-verification.",
      },
      {
        num: "03",
        title: "SYSTEM TELEMETRY",
        description:
          "Real-time resource budgeting, token allocation telemetry, and interactive dependency graph exploration.",
      },
    ],
    architecture: [
      { tech: "PYTHON", role: "Agent Runtime & Tool Execution Sandboxes" },
      { tech: "WEBSOCKETS", role: "Low-Latency Telemetry & Agent Communication" },
      { tech: "DOCKER", role: "Isolated Sandbox Environments" },
      { tech: "NEXT.JS & TAILWIND", role: "Dynamic Canvas Graph Interface" },
    ],
    githubUrl: "https://github.com/aali2k7",
    environmentalBg: "bg-[#0A0E17]",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION OVERVIEW HEADER                                                   */}
      {/* ========================================================================= */}
      <div className="w-full py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#0C111C] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-bold">
                02
              </span>
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#8A8F98] font-semibold">
                SELECTED WORK / FLAGSHIP SYSTEMS
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>3 CHAPTERS // PRODUCTION &amp; RESEARCH</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
                HIGH-IMPACT ARCHITECTURE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#F1F2F0] leading-none">
                ENGINEERED <span className="text-[var(--accent)]">SYSTEMS.</span>
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-[#A6A9AD] max-w-lg leading-relaxed">
              Each system addresses high-stakes complexity through architectural discipline—spanning contextual intelligence, compiled bytecode security analysis, and multi-agent coordination.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEQUENTIAL CINEMATIC CHAPTERS                                             */}
      {/* ========================================================================= */}
      <div className="w-full">
        {projectChapters.map((project, idx) => (
          <ProjectChapter
            key={project.id}
            project={project}
            isLast={idx === projectChapters.length - 1}
          />
        ))}
      </div>

      {/* Section Footer Transition to Experience */}
      <div className="w-full py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#0A0E17] border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#8A8F98] uppercase tracking-wider">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>CHAPTER 02 CONCLUDED</span>
          </div>
          <span>SCROLL FOR CHRONOLOGY &amp; LEADERSHIP ↓</span>
        </div>
      </div>
    </section>
  );
}
