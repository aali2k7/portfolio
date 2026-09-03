import { PersonalInterest, Achievement } from "@/types/portfolio";

export const personalInterests: PersonalInterest[] = [
  {
    id: "swimming",
    title: "Swimming",
    tagline: "Flow state in deep waters",
    description:
      "Swimming is where mental noise dissolves. The rhythm of every stroke demands presence, breath control, and effortless discipline — a masterclass in staying calm under pressure.",
    vibe: "Discipline • Focus • Endurance",
  },
  {
    id: "beaches",
    title: "Beaches & Coastal Horizons",
    tagline: "Perspective at the edge of the world",
    description:
      "There is immense clarity at the intersection of ocean and shore. Vast horizons are a reminder to think bigger, strip away unnecessary complexity, and embrace natural balance.",
    vibe: "Clarity • Horizon • Scale",
  },
  {
    id: "music",
    title: "Music & Sonic Architecture",
    tagline: "Rhythm, texture, and emotional resonance",
    description:
      "Music is architecture in sound. Whether listening to intricate electronic compositions or organic acoustic melodies, sonic rhythms directly influence how I structure code and UX flow.",
    vibe: "Frequency • Harmony • Creative Fuel",
  },
];

export const achievements: Achievement[] = [
  {
    id: "research-indjcst",
    title: "Published Security Author in INDJCST",
    organization: "Indian Journal of Computer Science and Technology",
    year: "2026",
    description: "Authored systematic review paper exploring cryptographic protocols and Java vulnerabilities.",
  },
  {
    id: "ecell-lead",
    title: "Senior Executive — Entrepreneurship Cell",
    organization: "Woxsen University Student Council",
    year: "2025 – Present",
    description: "Spearheaded technical systems and innovation initiatives for university-wide entrepreneurship ecosystem.",
  },
  {
    id: "future-hackathon-slot",
    title: "Upcoming Hackathon & Builder Showcases",
    organization: "Global AI & Web Engineering Summits",
    year: "2026",
    description: "Active participation in leading developer hackathons and competitive engineering showcases.",
    isPlaceholder: true,
  },
];
