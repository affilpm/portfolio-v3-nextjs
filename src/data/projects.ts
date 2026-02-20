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
  // --- CLIENT WORK ---
  {
    id: "novel-school",
    title: "Novel School Portal",
    category: "Client Work",
    problem:
      "A fast, modern, and SEO-optimized web presence was needed with a comprehensive admin CMS for school management, requiring enterprise-grade deployment and media scaling.",
    solution:
      "A complete Django 5.x Multi-Page Application combining a high-performance public frontend with a secure, modular admin portal, deployed via Docker with full Redis caching.",
    stack: [
      "Django 5",
      "PostgreSQL",
      "Redis",
      "Cloudflare R2",
      "Docker",
      "Tailwind CSS",
    ],
    features: [
      "Custom CMS & RBAC",
      "Redis Page Caching",
      "Automated Image/PDF Optimization",
    ],
    impact:
      "Delivered a highly secure, rate-limited, and scalable platform with CDN integration.",
    github: "", // Private repo
    live: "https://novelschoolindia.com",
  },

  // --- EXPERIMENTAL / PERSONAL PROJECTS ---
  {
    id: "wave-music",
    title: "Wave – Music Streaming",
    category: "Experimental",
    problem:
      "Building a highly scalable music streaming platform capable of handling large audio files, playlists, and seamless playback.",
    solution:
      "A full-stack music streaming website where artists can upload songs and albums, and users can stream music in Apple HLS format.",
    stack: [
      "Django",
      "React.js",
      "Redis",
      "Celery",
      "AWS S3",
      "HLS",
      "Razorpay",
    ],
    features: ["Apple HLS Streaming", "Playlist Management", "Payment Gateway"],
    impact: "Major Learning Project: handling asynchronous media processing.",
    github: "https://github.com/affilpm/Wave",
    live: "", // "will come soon currently only github link"
  },
  {
    id: "fruitkha-ecommerce",
    title: "Fruitkha – E-Commerce",
    category: "Experimental",
    problem:
      "Developing a comprehensive full-stack e-commerce experience managing products, users, and complex payment flows.",
    solution:
      "An online fruit and vegetable e-commerce platform with cart, wishlist, wallet, coupon management, and payment integration.",
    stack: ["Django", "PostgreSQL", "Razorpay"],
    features: ["Cart & Wallet System", "Coupon Management", "Secure Checkout"],
    impact: "Mastered full-lifecycle order management and database relations.",
    github: "https://github.com/affilpm/Fruitkha",
    live: "",
  },
  {
    id: "cms-blog-platform",
    title: "CMS Blog Platform",
    category: "Experimental",
    problem:
      "Creating a scalable and secure backend system for managing multi-author content and media assets.",
    solution:
      "A content management system for blogs with JWT authentication, role-based access, media uploads, and an admin analytics dashboard.",
    stack: ["Django", "DRF", "PostgreSQL", "AWS S3"],
    features: ["JWT Authentication", "Role-Based Access", "S3 Media Storage"],
    impact: "Focus on API security patterns and scalable cloud storage.",
    github: "https://github.com/affilpm/cms-blog-django",
    live: "",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    category: "Experimental",
    problem:
      "Building a collaborative team productivity app requiring complex state management and secure role partitioning.",
    solution:
      "A productivity app for task management with secure authentication, role-based access, and Dockerized deployment workflows.",
    stack: ["Django", "React.js", "Redux.js", "PostgreSQL", "Docker"],
    features: ["Redux State", "Docker Containers", "Team Assignments"],
    impact: "Implemented modern containerization and global state management.",
    github: "https://github.com/affilpm/task-manager",
    live: "",
  },
];
