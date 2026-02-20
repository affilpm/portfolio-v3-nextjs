# Affil PM | Senior Full-Stack Developer Portfolio

Welcome to the source code for my personal portfolio, built with Next.js 14+ App Router, TypeScript, Tailwind CSS v4, and Framer Motion. This repository serves as both a live showcase of my capabilities and a modern web application structure optimized for performance, scalability, and discoverability.

## 🚀 Live Demo

[https://affilpm.com](https://affilpm.com)

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React & Devicon
- **Deployment:** Vercel

## ✨ Key Technical Features

- **Dual Positioning Strategy:** Carefully crafted messaging dynamically targeting both full-time engineering roles and high-ticket freelance clients.
- **Premium UI/UX:** Deep navy (`#080C14`), electric violet (`#7C3AED`), and cyan (`#06B6D4`) providing a glassmorphism aesthetic with modern micro-interactions.
- **Advanced Technical SEO:**
  - Dynamic OpenGraph (OG) image generation via `@vercel/og` (`/og?title=...`).
  - Comprehensive, modular JSON-LD Structured Data components (Person, WebSite, Service, CreativeWork).
  - Automatically generated `sitemap.xml` and `robots.txt`.
- **Performance Optimized:** Architected for optimal Core Web Vitals (LCP < 2.5s, CLS 0, FID < 100ms) with static and dynamic rendering.
- **Interactive Enhancements:** Floating custom cursor, active scroll progress bars, and complex entrance animations (spring physics, parallax, layout recalculations).

## 🗂 Project Structure

```bash
src/
├── app/            # Next.js App Router (Pages: /, /work, /services, /about, /resume, /contact, /blog)
├── components/     # Reusable React components (UI elements, layout, SEO widgets)
├── config/         # Central configuration layer (portfolio.ts) for text, links, and SEO defaults
├── data/           # Data layer for experience, projects, skills, and services
└── styles/         # Global stylesheets (globals.css) and Tailwind v4 config
```

## 🚦 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Configuration

To customize or manage this portfolio, modify the central configuration file located at `src/config/portfolio.ts`. It controls metadata, availability banners, and outbound social links.

You can also dynamically toggle availability banners using a `.env.local` file:

```env
NEXT_PUBLIC_OPEN_TO_WORK=true
NEXT_PUBLIC_AVAILABLE_FREELANCE=true
```

## 📄 About the Author

**Affil PM** is a Senior Full-Stack Software Engineer with expertise in building scalable APIs and performant user interfaces using Python, Django, Next.js, and PostgreSQL.

- [GitHub (@affilpm)](https://github.com/affilpm)
- [LinkedIn Profile](https://linkedin.com/in/affilpm)
