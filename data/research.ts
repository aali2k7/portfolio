import { ResearchPublication } from "@/types/portfolio";

export const researchPublications: ResearchPublication[] = [
  {
    id: "java-security-indjcst-2026",
    number: "01",
    title:
      "A Systematic Review of Java Security: Architecture, Cryptographic Services, Vulnerabilities, and Emerging Security Paradigms",
    journal: "Indian Journal of Computer Science and Technology (INDJCST)",
    year: "2026",
    abstract:
      "This systematic review provides a rigorous analysis of the Java security architecture, evaluating core components such as the Java Cryptography Architecture (JCA/JCE), bytecode verification, and security managers. It critically assesses prominent vulnerability vectors including SQL injection, insecure deserialization, and cryptographic misuse (e.g. static IVs, weak padding in AES/RSA), while introducing modern defense paradigms leveraging AI-assisted static analysis and cloud-native runtime security.",
    topics: [
      "Java Security Architecture",
      "Cryptographic Services (AES, RSA, SHA-256)",
      "Insecure Deserialization",
      "SQL Injection Vectors",
      "Secure Coding Practices",
      "AI-Assisted Security",
      "Cloud-Native Security",
    ],
    status: "Published",
    doiUrl: "https://doi.org/10.59256/indjcst.20260502106",
    paperUrl: "https://doi.org/10.59256/indjcst.20260502106",
  },
];
