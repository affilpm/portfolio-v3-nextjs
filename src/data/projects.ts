export interface Project {
  id: string;
  title: string;
  category: "Client Work" | "Live Products" | "Experimental";
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  impact: string;
  github: string;
  live: string;
  image?: string;
}

export const projects: Project[] = [
  // --- CLIENT WORK (Real-world / Dummy Data for Portfolio) ---
  {
    id: "novel-school",
    title: "Novel School Portal",
    category: "Client Work",
    problem:
      "Traditional school websites suffer from static content and poor mobile responsiveness.",
    solution:
      "A unified platform combining a high-performance public frontend with a secure, Django-backed admin portal.",
    stack: ["Next.js 15", "Django", "Tailwind CSS", "Cloudflare R2"],
    features: ["HttpOnly Auth", "Dynamic SEO", "Admin Portal"],
    impact: "Delivered 100% Lighthouse score and streamlined admin workflows.",
    github: "#",
    live: "https://novelschoolindia.com",
  },
  {
    id: "autoscale",
    title: "AutoScale Dashboard",
    category: "Client Work",
    problem: "Client needed a simplified view of their AWS EC2 fleet costs.",
    solution:
      "Abstraction layer for managing EC2 fleets and RDS snapshots with cost forecasting.",
    stack: ["React", "AWS SDK", "TypeScript", "Recharts"],
    features: ["Visual Forecasting", "Resource Tagging", "Cost Alerts"],
    impact: "Reduced cloud wastage by 15% during beta.",
    github: "#",
    live: "#",
  },

  // --- PUBLISHED PRODUCTS (SaaS / Public Tools) ---
  {
    id: "medstream",
    title: "MedStream Telehealth",
    category: "Live Products",
    problem:
      "High latency in doctor-patient video calls in low-bandwidth regions.",
    solution:
      "Custom WebRTC signaling server with adaptive bitrate framing for telehealth.",
    stack: ["Go", "React", "WebRTC", "PostgreSQL"],
    features: ["<200ms Latency", "Encrypted Chat", "Browser Diagnostics"],
    impact: "Scaled to 10k+ daily users with 99.9% uptime.",
    github: "#",
    live: "https://medstream.demo",
  },

  // --- LEARNING PROJECTS (User Provided) ---
  {
    id: "wave",
    title: "Wave – Music Streaming",
    category: "Experimental",
    problem:
      "Building a scalable music streaming service that handles large media files.",
    solution:
      "Full-stack streaming service where artists upload songs and users stream in HLS format.",
    stack: ["Django", "React", "Redis", "Celery", "AWS S3", "HLS"],
    features: [
      "Apple HLS Streaming",
      "Background Workers",
      "Payment Integration",
    ],
    impact: "Major Learning Project: Advanced media handling and async tasks.",
    github: "https://github.com/affilpm/Wave",
    live: "#",
  },
  {
    id: "fruitkha",
    title: "Fruitkha – E-Commerce",
    category: "Experimental",
    problem:
      "Developing a feature-rich e-commerce experience with cart and payments.",
    solution:
      "Online store with cart, wishlist, wallet, and Razorpay integration.",
    stack: ["Django", "PostgreSQL", "Razorpay"],
    features: ["Cart & Wishlist", "Digital Wallet", "Coupons"],
    impact: "Full-Stack Project: Complete order lifecycle management.",
    github: "https://github.com/affilpm/Fruitkha",
    live: "#",
  },
  {
    id: "cms-blog",
    title: "CMS Blog Platform",
    category: "Experimental",
    problem: "Creating a secure and flexible content management system.",
    solution: "Blog CMS with JWT auth, RBAC, and analytics dashboard.",
    stack: ["Django", "DRF", "PostgreSQL", "AWS S3"],
    features: ["JWT Auth", "RBAC", "S3 Storage"],
    impact: "Focus on Security and Scalable Architecture.",
    github: "https://github.com/affilpm/cms-blog-django",
    live: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    category: "Experimental",
    problem: "Managing team productivity with secure access.",
    solution: "Productivity app with secure auth and Dockerized deployment.",
    stack: ["Django", "React", "Redux", "Docker"],
    features: ["Task Assignment", "Dockerized", "State Management"],
    impact: "Implemented Containerization best practices.",
    github: "https://github.com/affilpm/task-manager",
    live: "#",
  },
  {
    id: "retrogpt",
    title: "RetroGPT",
    category: "Experimental",
    problem: "Experimenting with retro UI aesthetics.",
    solution: "Windows 95 styled interface for OpenAI API.",
    stack: ["React", "CSS Modules", "OpenAI API"],
    features: ["Win95 UI", "Draggable Windows"],
    impact: "Mastered custom CSS and DOM manipulation.",
    github: "https://github.com/affilpm/retrogpt",
    live: "#",
  },
];
