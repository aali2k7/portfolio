export interface EditorialPerspective {
  id: string;
  number: string;
  title: string;
  quote: string;
  reflection: string;
  image: string;
}

export interface EditorialMilestone {
  year: string;
  title: string;
  organization: string;
  detail: string;
}

export const editorialPerspectives: EditorialPerspective[] = [
  {
    id: "swimming",
    number: "01",
    title: "SWIMMING",
    quote: "Flow state in deep water.",
    reflection:
      "Mental noise dissolves under the surface. The discipline of breath, cadence, and stroke demands absolute presence — an enduring lesson in remaining calm and deliberate under pressure.",
    image: "/images/editorial-swimming.jpg",
  },
  {
    id: "coastlines",
    number: "02",
    title: "COASTLINES",
    quote: "Perspective changes at the edge of the world.",
    reflection:
      "There is clarity where water meets the horizon. Open expanses quiet unnecessary complexity, reminding me to strip away superficial noise and prioritize architectural scale.",
    image: "/images/editorial-coastlines.jpg",
  },
  {
    id: "music",
    number: "03",
    title: "MUSIC",
    quote: "Rhythm, texture, and emotional resonance.",
    reflection:
      "Architecture expressed through frequency and tempo. From layered electronic rhythms to organic acoustics, sonic arrangement directly shapes how I think about pacing, software hierarchy, and interaction flow.",
    image: "/images/editorial-music.jpg",
  },
];

export const editorialMilestones: EditorialMilestone[] = [
  {
    year: "2026",
    title: "Published Peer-Reviewed Research",
    organization: "Indian Journal of Computer Science and Technology (IJCST)",
    detail: "Systematic review on Java security architecture and cryptography (DOI: 10.59256/indjcst.20260502106).",
  },
  {
    year: "2026",
    title: "AI Research Intern",
    organization: "Applied AI Research Center (AIRC)",
    detail: "Platform engineering for Woxsen Leap (1,000+ active student users) and applied generative AI workflows.",
  },
  {
    year: "2026",
    title: "Team Lead",
    organization: "Entrepreneurship Cell (E-Cell)",
    detail: "Directing technical operations, digital platforms, and system infrastructure for startup initiatives.",
  },
  {
    year: "2025",
    title: "Senior Executive",
    organization: "Woxsen University Student Council",
    detail: "Led technical operations for Infinity, Sony PlayStation campus event, and Telangana CM campus visit.",
  },
];

export const personalInterests = editorialPerspectives.map((p) => ({
  id: p.id,
  title: p.title,
  tagline: p.quote,
  description: p.reflection,
  vibe: p.title,
}));

export const achievements = editorialMilestones.map((m, idx) => ({
  id: `achieve-${idx}`,
  title: m.title,
  organization: m.organization,
  year: m.year,
  description: m.detail,
}));

