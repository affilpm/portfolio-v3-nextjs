export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Freelance Fullstack Developer",
    company: "Self-Employed",
    period: "2025 - Present", // Adjusted to recent times based on "zero working experience" implying early career
    description: "delivering custom web solutions for clients. Focused on building performant, scalable web applications using the Django and React ecosystem.",
    achievements: [
      "Successfully delivered a complete freelance project for a client, handling both backend and frontend development.",
      "Translated client requirements into a functional, production-ready web application.",
      "Managed the entire development lifecycle from requirement gathering to deployment."
    ]
  }
];
