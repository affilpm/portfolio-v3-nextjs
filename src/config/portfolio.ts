export const portfolioConfig = {
  name: "Affil PM",
  jobTitle: "Senior Full-Stack Developer",
  tagline: "I Build. I Ship. I Deploy.",
  bio: "Full-stack developer specializing in Django, DRF, Next.js and cloud-deployed web applications. Looking for my next role or project.",
  location: "Remote, Worldwide",
  email: "affilpm@gmail.com",
  socials: {
    github: "https://github.com/affilpm",
    linkedin: "https://linkedin.com/in/affilpm",
    twitter: "https://twitter.com",
    devto: "https://dev.to",
  },
  availability: {
    openToFullTime: process.env.NEXT_PUBLIC_OPEN_TO_WORK === "true" || true, // default to true if env not set
    openToFreelance:
      process.env.NEXT_PUBLIC_AVAILABLE_FREELANCE === "true" || true,
  },
  seo: {
    defaultTitle: "Affil PM — Python & Django Developer | Open to Work",
    defaultDescription:
      "Senior Fullstack Engineer specializing in scalable SaaS architectures, Python/Django backends, and high-performance Next.js frontends.",
    url: "https://affilpm.dev",
  },
  theme: {
    accent: "#7C3AED", // Electric violet
    accent2: "#06B6D4", // Cyan
  },
};
