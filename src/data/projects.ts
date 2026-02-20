export interface Project {
  slug: string;
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
  content?: string;
}

export const projects: Project[] = [
  // --- CLIENT WORK ---
  {
    slug: "novel-school-portal",
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
    live: "https://novelinternationalschool.in",
    content: `
# School Website - Django Multi-Page Application

A comprehensive Django 5.x-based school management website featuring a complete CMS, responsive design system, and enterprise-grade deployment architecture.

## 🚀 Project Overview

This is a multi-page application (MPA) built with Django Templates that provides a complete web presence for schools with:

- **Django 5.x** - Modern Python web framework with full ORM
- **PostgreSQL** - Robust relational database with connection pooling
- **Cloudflare R2** - Scalable object storage for static & media files
- **Redis** - Caching and session management for performance
- **Gunicorn** - Production-grade WSGI server (in Docker)
- **Nginx** - Reverse proxy (optional, runs on host, outside Docker)
- **Docker Compose** - Multi-container orchestration for Django, PostgreSQL, Redis
- **Tailwind CSS** - Responsive design system with utility classes

## 🗄️ Database Models

### Site Configuration (\`site_config\`)
- **SiteSettings** - School name, motto, contact info, social links
- **VisionMission** - Vision statement, mission, core values
- **PageSEO** - Per-page meta tags for SEO

### Pages (\`pages\`)
- **HeroSection** - Homepage hero banner content
- **AboutPage** - About page settings & statistics
- **StatHighlight** - Key statistics display
- **ContactPage** - Contact page settings & addresses
- **ContactSubmission** - Contact form submissions

### People (\`people\`)
- **PrincipalMessage** - Principal profile & message
- **ManagementMember** - Leadership team members
- **Testimonial** - Student/parent testimonials
- **TimelineEvent** - School history timeline

### Facilities (\`facilities\`)
- **Facility** - Individual facilities (library, lab, sports)
- **FacilityImage** - Facility photo galleries

### Academics (\`academics\`)
- **AcademicsPage** - Page configuration
- **ClassCategory** - Class levels (Primary, Secondary)
- **Subject** - Subjects per category
- **Achievement** - Awards & recognitions
- **ResultDocument** - Board exam results PDF

### Admissions (\`admissions\`)
- **AdmissionInfo** - Page settings & guidelines
- **AdmissionStep** - Step-by-step process
- **AdmissionDocument** - Forms & downloadable files
- **AdmissionEnquiry** - Application inquiries

### Communication (\`communication\`)
- **Notice** - Official school notices
- **Event** - School events & activities

### Gallery (\`gallery\`)
- **GalleryCategory** - Photo album categories
- **GalleryImage** - Gallery photos with descriptions

### Disclosures (\`disclosures\`)
- **GeneralInfo** - General disclosure items
- **InfrastructureInfo** - Infrastructure details
- **FeeInfo** - Fee structure information
- **StaffInfo** - Staff details
- **AcademicInfo** - Academic information
- **DocumentCertificate** - Compliance certificates

## 🔑 Key Features

✅ **Complete CMS** - Django admin for all content management  
✅ **SEO Optimized** - Meta tags, sitemaps, robots.txt, structured data  
✅ **Responsive Design** - Mobile-first Tailwind CSS design system  
✅ **Performance Optimized**:
   - Redis caching for pages & queries
   - Gzip compression for responses
   - Static files served via R2 or locally
   - Database connection pooling
   - Rate limiting on API endpoints

✅ **Security Features**:
   - CSRF protection
   - SQL injection prevention (ORM)
   - XSS protection (template auto-escaping)
   - Rate limiting middleware
   - Secure headers (HSTS, CSP, X-Frame-Options)
   - HTTPS/SSL support with Let's Encrypt

✅ **Media Management**:
   - Image auto-compression to WebP
   - PDF auto-optimization
   - CDN-ready with Cloudflare R2
   - Local fallback for development

✅ **Logging & Monitoring**:
   - Structured JSON logging
   - Error tracking to files
   - Request logging
   - Django debug toolbar (development)

## 📊 Cache Configuration

The application uses Redis with the following cache layers:

- **Page Cache** - Full page caching (5 minutes default)
- **Query Cache** - Database query caching
- **Template Cache** - Template fragment caching
- **Session Storage** - User sessions in Redis

## 🔒 Security

The application implements enterprise-grade security:

- **Middleware Stack**: Rate limiting, GZIP compression, caching
- **Database**: PostgreSQL with prepared statements (SQL injection prevention)
- **Templates**: Django auto-escaping (XSS prevention)
- **HTTPS**: SSL/TLS with automatic redirects
- **Headers**: HSTS, X-Frame-Options, Content-Security-Policy
- **CSRF**: Token-based CSRF protection on all forms
- **Rate Limiting**: 30 requests/second per IP (configurable)
    `,
  },

  // --- EXPERIMENTAL / PERSONAL PROJECTS ---
  {
    slug: "wave-music-streaming",
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
    slug: "fruitkha-ecommerce-template",
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
    slug: "django-cms-blog-platform",
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
    slug: "kanban-task-manager",
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
