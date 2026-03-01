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
  /** For non-hosted projects: key screenshots described for showcase */
  screenshots?: string[];
  /** Architecture highlights for non-hosted projects */
  architectureHighlights?: string[];
  /** Demo video URL (YouTube/Loom embed) */
  demoVideo?: string;
  /** Completion status */
  status?: "live" | "completed" | "in-progress";
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
    status: "live",
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
    github: "https://github.com/affilpm/wave",
    live: "https://wave-omega.vercel.app",
    status: "completed",
    screenshots: [
      "Dashboard with artist profiles and trending playlists",
      "Music player with waveform visualization and queue management",
      "Artist upload portal with HLS transcoding status",
      "Subscription plans with Razorpay payment integration",
    ],
    architectureHighlights: [
      "Celery workers auto-transcode uploaded audio to Apple HLS format for adaptive streaming",
      "Redis-backed session caching enables instant playlist loading",
      "AWS S3 stores all audio segments with CloudFront CDN delivery",
      "Django Channels powers real-time notifications for artists",
    ],
    content: `
# Wave — Music Streaming Platform

A full-stack music streaming platform where artists upload songs and albums, and users stream music with Apple HLS adaptive bitrate streaming.

## Architecture Overview

\`\`\`
Client (React) → Django REST API → PostgreSQL
                      ↓
               Celery + Redis → FFmpeg HLS Pipeline → AWS S3
                                                        ↓
                                                  CloudFront CDN → Client Player
\`\`\`

## Key Technical Decisions

### HLS Adaptive Streaming
- Audio files are transcoded into multiple quality tiers (128k, 256k, 320k) via FFmpeg
- Celery workers handle async transcoding jobs with retry logic
- M3U8 manifests are generated for each track for adaptive bitrate switching

### Real-Time Features
- WebSocket-based now-playing updates
- Live listener count per track
- Artist notification system for new followers/plays

### Payment Integration
- Razorpay subscription billing for premium features
- Webhook-based payment verification
- Wallet system for artist payouts

## Tech Stack Details

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Redux Toolkit, Tailwind CSS |
| Backend | Django 5.x, Django REST Framework |
| Task Queue | Celery + Redis |
| Storage | AWS S3 + CloudFront |
| Database | PostgreSQL with optimized indexes |
| Payments | Razorpay API |

## Key Highlights

- **10+ database models** covering users, artists, albums, tracks, playlists, subscriptions
- **Background task pipeline** with Celery for audio processing and email notifications
- **JWT Authentication** with refresh token rotation
- **Rate limiting** on API endpoints to prevent abuse
    `,
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
    github: "https://github.com/affilpm/fruitkha",
    live: "",
    status: "completed",
    screenshots: [
      "Product listing with filters, categories, and search",
      "Shopping cart with real-time price calculation and coupon codes",
      "Wallet system with balance management and transaction history",
      "Admin dashboard with order analytics and inventory management",
    ],
    architectureHighlights: [
      "Django ORM handles complex order lifecycle: cart → checkout → payment → delivery",
      "Wallet system with atomic transactions preventing race conditions",
      "Coupon engine supporting percentage, flat, and first-order discounts",
      "Razorpay integration with webhook-based payment confirmation",
    ],
    content: `
# Fruitkha — E-Commerce Platform

A comprehensive online fruit and vegetable marketplace with cart, wishlist, wallet, coupon management, and secure payment integration.

## Features Deep Dive

### Shopping Cart System
- Real-time price calculations with tax and discount support
- Persistent cart (saved across sessions) for logged-in users
- Guest cart with cookie-based tracking

### Digital Wallet
- Add funds via Razorpay
- Use wallet balance during checkout
- Atomic transactions to prevent double-spending

### Coupon Engine
- Percentage-based discounts (e.g., 20% off)
- Flat-rate discounts (e.g., ₹100 off)
- Minimum order value constraints
- First-order-only and time-limited coupons

### Order Management
- Full order lifecycle tracking
- Order status notifications via email
- Admin dashboard with order analytics

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Django 5.x, Django Templates |
| Database | PostgreSQL |
| Payments | Razorpay API |
| Styling | Bootstrap 5, Custom CSS |
    `,
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
    status: "completed",
    screenshots: [
      "Multi-author content editor with rich text formatting",
      "Admin analytics dashboard with post performance metrics",
      "API documentation with Swagger/ReDoc integration",
    ],
    architectureHighlights: [
      "JWT auth with refresh token rotation and blacklisting",
      "Role-based permissions: Admin, Editor, Author, Viewer",
      "AWS S3 media upload with pre-signed URLs",
      "Pagination, filtering, and search on all API endpoints",
    ],
    content: `
# CMS Blog Platform

A headless CMS backend for multi-author blog management with JWT authentication, role-based access control, and cloud media storage.

## API Architecture

- RESTful API design with Django REST Framework
- JWT authentication with HttpOnly cookie refresh tokens
- Granular role permissions (Admin, Editor, Author, Viewer)
- Pre-signed S3 URLs for secure, direct-to-cloud uploads
- Full-text search on posts with PostgreSQL tsvector

## Security Patterns

- Token blacklisting on logout
- Rate limiting per endpoint
- Input validation and sanitization
- SQL injection prevention via Django ORM
    `,
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
    status: "completed",
    screenshots: [
      "Kanban board with drag-and-drop task cards across columns",
      "Team assignment panel with role-based visibility",
      "Task detail modal with comments, due dates, and labels",
    ],
    architectureHighlights: [
      "Redux Toolkit for predictable global state with async thunks",
      "Django REST Framework API with JWT authentication",
      "Docker Compose orchestrates Django, React, and PostgreSQL",
      "Role-based access: Admin, Manager, Member with different permissions",
    ],
    content: `
# Task Manager — Kanban Productivity App

A collaborative team productivity application with kanban-style task management, secure authentication, role-based access, and containerized deployment.

## Key Features

### Kanban Board
- Drag-and-drop task cards between columns (Todo, In Progress, Review, Done)
- Real-time status updates with Redux state management
- Filter and search tasks by assignee, label, or due date

### Team Collaboration
- Role-based access: Admin, Manager, Member
- Task assignment and reassignment
- Due date tracking with overdue alerts

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Redux Toolkit, Tailwind CSS |
| Backend | Django 5.x, Django REST Framework |
| Database | PostgreSQL |
| DevOps | Docker Compose, Nginx |
| Auth | JWT with refresh token rotation |
    `,
  },
  // --- AI / AUTOMATION PROJECTS ---
  {
    slug: "local-core-ai-content-engine",
    title: "Local Core – AI Content Engine",
    category: "Experimental",
    problem:
      "Manually curating and publishing high-quality tech news content for social media is time-consuming and inconsistent.",
    solution:
      "An automated AI content pipeline that curates 100+ tech articles daily, scores them for virality, generates LinkedIn-optimized posts with AI visuals, and publishes autonomously.",
    stack: ["Django", "Celery", "Redis", "Gemini AI", "Docker", "LinkedIn API"],
    features: [
      "AI-Powered Content Curation",
      "Multi-Provider Image Generation",
      "Automated LinkedIn Publishing",
    ],
    impact:
      "Fully automated content pipeline generating daily viral tech posts with zero manual intervention.",
    github: "https://github.com/affilpm/post-generator",
    live: "",
    status: "completed",
    screenshots: [
      "Pipeline dashboard showing content ingestion from RSS, Google News, and Hacker News",
      "AI-generated LinkedIn post with custom branded visual card",
      "Content scoring engine ranking articles by viral potential",
    ],
    architectureHighlights: [
      "6-stage pipeline: Purge → Ingest → Filter → Pick → Generate → Publish",
      "Multi-provider image generation cascade: Gemini Imagen → Pollinations.ai → Local PIL",
      "LLM-driven content assembly with strict editorial guardrails",
      "Dry-run safety mode for testing without publishing",
    ],
    content: `
# Local Core — AI Content Engine

A high-volume automated content pipeline that curates viral tech news and publishes engaging LinkedIn posts with AI-generated visuals.

## Pipeline Architecture

\`\`\`
RSS Feeds + Google News + Hacker News
              ↓
    Content Ingestion (100+ candidates)
              ↓
    Viral Scoring Engine (relevance + tech keywords)
              ↓
    "King" Selection (highest scored article)
              ↓
    LLM Post Assembly (Gemini Pro/Flash)
              ↓
    Visual Generation (Multi-provider cascade)
              ↓
    LinkedIn API Publishing
\`\`\`

## Key Technical Decisions

### Content Discovery
- **RSS Feeds**: Curated feeds from OpenAI, Anthropic, Cloudflare blogs
- **Google News**: Broad industry discovery layer
- **Hacker News**: Top 50 trending developer stories

### Viral Scoring
- Priority boosts for major AI breakthroughs and version releases
- Developer guardrails rejecting consumer tech noise
- Expert source weighting for high-signal domains

### Visual Generation
- **Provider Cascade**: Gemini Imagen → Pollinations.ai → Local PIL fallback
- **7 Dynamic Layouts**: Center, Split, Border, Corner, Full Overlay
- **Thematic Mapping**: Content-aware visual selection (AWS → Shield, AI → Network)

### Safety & Quality
- Strict "Observer" voice enforcement (They/Them, no corporate "We/Us")
- Auto-appended source links and hashtags
- Dry-run mode for testing without API calls

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Django 5.x |
| Task Queue | Celery + Redis |
| AI/LLM | Google Gemini (Pro/Flash) |
| Visuals | Gemini Imagen, Pollinations.ai, PIL |
| Publishing | LinkedIn Official API |
| DevOps | Docker, Docker Compose |
    `,
  },
  {
    slug: "github-repo-watchlist-api",
    title: "GitHub Repo Watchlist API",
    category: "Experimental",
    problem:
      "Tracking and managing specific GitHub repositories with custom context requires constantly visiting GitHub and manually noting changes.",
    solution:
      "A containerized FastAPI application that fetches live repo data (stars, forks), maintains a personal watchlist, and supports two-way description syncing with GitHub.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "GitHub API"],
    features: [
      "Live GitHub Data Sync",
      "Two-Way Description Sync",
      "Swagger API Docs",
    ],
    impact:
      "Built a production-quality async Python API with full Docker orchestration and GitHub API integration.",
    github: "https://github.com/affilpm/github-repo-watchlist",
    live: "",
    status: "completed",
    screenshots: [
      "Swagger UI showing all API endpoints with live testing",
      "Watchlist dashboard with real-time stars and forks data",
    ],
    architectureHighlights: [
      "Async FastAPI with SQLModel for type-safe ORM",
      "PostgreSQL with asyncpg driver for non-blocking database access",
      "GitHub API integration with optional Personal Access Token for write operations",
      "Full Docker Compose setup with automated database migrations",
    ],
    content: `
# GitHub Repo Watchlist API

A containerized FastAPI application to track and manage GitHub repositories with live data syncing and personal annotations.

## Features

- **Track Repos**: Fetch and store repository details (Stars, Forks, Description) from GitHub
- **Auto-Sync**: Automatically pulls latest data when adding a repo
- **Local Overrides**: Update repo descriptions locally for your own context
- **Two-Way Sync**: Push description updates back to GitHub (requires PAT)
- **Dockerized**: One-command setup with Docker Compose

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | FastAPI (async) |
| ORM | SQLModel |
| Database | PostgreSQL + asyncpg |
| External API | GitHub REST API v3 |
| DevOps | Docker, Docker Compose |
| Docs | Auto-generated Swagger UI |
    `,
  },
  {
    slug: "crm-system",
    title: "CRM System",
    category: "Experimental",
    problem:
      "Small businesses need a simple, self-hosted CRM to manage customer relationships without expensive SaaS subscriptions.",
    solution:
      "A Django-based Customer Relationship Management system with contact management, interaction tracking, and Dockerized deployment.",
    stack: ["Django", "PostgreSQL", "Docker", "HTML/CSS"],
    features: [
      "Contact Management",
      "Interaction History",
      "Docker Deployment",
    ],
    impact:
      "Built a complete CRUD application with Django best practices and containerized deployment.",
    github: "https://github.com/affilpm/crm",
    live: "",
    status: "completed",
    architectureHighlights: [
      "Django MVT architecture with template-based frontend",
      "PostgreSQL for relational data modeling",
      "Docker Compose for one-command deployment",
      "Clean project structure following Django best practices",
    ],
  },
  {
    slug: "realtime-chat-app",
    title: "Real-Time Chat App",
    category: "Experimental",
    problem:
      "Building a real-time messaging system requires WebSocket handling, JWT authentication, and efficient message delivery.",
    solution:
      "A real-time chat application with a Django backend handling JWT authentication and a React frontend for instant messaging.",
    stack: ["Django", "DRF", "React.js", "JWT", "WebSockets"],
    features: [
      "JWT Authentication",
      "Real-Time Messaging",
      "Clean API Layer",
    ],
    impact:
      "Mastered real-time communication patterns with WebSockets and secure JWT auth flows.",
    github: "https://github.com/affilpm/chat-backend",
    live: "",
    status: "in-progress",
    architectureHighlights: [
      "JWT access & refresh token authentication with Django REST Framework",
      "Custom API response layer with standardized error handling",
      "React frontend with real-time WebSocket message delivery",
      "Separate frontend and backend repos for microservice-style architecture",
    ],
  },
];
