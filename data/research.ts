export interface EditorialResearch {
  id: string;
  year: string;
  title: string;
  journal: string;
  publicationType: string;
  doi: string;
  doiUrl: string;
  abstract: string;
  overview: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  referenceCount: number;
  topics: string[];
}

export const researchPublication: EditorialResearch = {
  id: "java-security-indjcst-2026",
  year: "2026",
  title:
    "A Systematic Review of Java Security: Architecture, Cryptographic Services, Vulnerabilities, and Emerging Security Paradigms",
  journal: "Indian Journal of Computer Science and Technology (IJCST)",
  publicationType: "Peer-reviewed publication",
  doi: "10.59256/indjcst.20260502106",
  doiUrl: "https://doi.org/10.59256/indjcst.20260502106",
  abstract:
    "A systematic review exploring JVM security architecture, the Java Cryptography Architecture (JCA/JCE), memory safety boundaries, critical vulnerability vectors including SQL injection and insecure deserialization, and OWASP/NIST-aligned defensive paradigms.",
  overview:
    "Published in the Indian Journal of Computer Science and Technology (IJCST), this paper provides a structured evaluation of enterprise Java security. It synthesizes findings from 29 academic and industry references, detailing how architectural vulnerabilities manifest at bytecode boundaries and establishing concrete mitigation frameworks.",
  keyPillars: [
    {
      title: "JVM Security & Bytecode Verification",
      description:
        "Analysis of class loader hierarchies, bytecode type safety verification, and execution sandboxing at runtime.",
    },
    {
      title: "Java Cryptography Architecture (JCA/JCE)",
      description:
        "Evaluation of cryptographic provider mechanisms, key management lifecycle, and cipher implementations.",
    },
    {
      title: "Vulnerability Vectors & Exploitation",
      description:
        "In-depth breakdown of SQL injection vectors, reflection misuse, and insecure object deserialization vulnerabilities.",
    },
    {
      title: "OWASP & NIST Aligned Mitigations",
      description:
        "Concrete defensive patterns, secure coding standards, AI-assisted static analysis, and runtime verification.",
    },
  ],
  referenceCount: 29,
  topics: [
    "JVM Security Architecture",
    "Bytecode Verification",
    "Java Cryptography Architecture (JCA)",
    "Insecure Deserialization",
    "SQL Injection Vectors",
    "Reflection Security",
    "OWASP / NIST Mitigations",
    "Static Code Analysis",
  ],
};

export const researchPublications = [
  { ...researchPublication, number: "01", status: "Published" as const },
];

