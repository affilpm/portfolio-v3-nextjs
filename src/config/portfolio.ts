export const portfolioConfig = {
  name: "AFFIL P M",
  jobTitle: "Python Full Stack Developer",
  tagline: "I craft delightful digital experiences.",
  bio: "Python Full Stack Developer specializing in Django, DRF, React, Redux, and PostgreSQL. Let's build something extraordinary together!",
  location: "Worldwide",
  email: "affilpm2004@gmail.com",
  socials: {
    github: "https://github.com/affilpm",
    linkedin: "https://www.linkedin.com/in/affil-p-m-b9a2b2299",
    twitter: "", // User did not provide twitter
    devto: "",
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
    url: "https://affilpm.com",
  },
  theme: {
    accent: "#7C3AED", // Electric violet
    accent2: "#06B6D4", // Cyan
  },
};
