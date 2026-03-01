"use client";

import { motion } from "framer-motion";

const devSkills = [
  "Python", "Django", "DRF", "FastAPI", "Next.js", "React",
  "Svelte", "PostgreSQL", "Linux", "Docker", "AWS", "Git",
];

const seoSkills = [
  "Technical SEO", "On-Page SEO", "Schema Markup", "Core Web Vitals",
  "GA4", "Search Console", "Site Speed", "SEO Audits",
  "Keyword Research", "Link Building", "Ahrefs", "Semrush",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary/[0.06] whitespace-nowrap mx-4 md:mx-6 lg:mx-8 select-none hover:text-text-primary/[0.15] transition-colors duration-500 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted block mb-4">
              Tech Stack
            </span>
            <h2 className="h2 text-text-primary">
              Tools I <span className="text-gradient">Master</span>
            </h2>
          </div>
          <p className="text-text-secondary text-base md:text-lg max-w-md leading-relaxed">
            A modern toolkit of frameworks, databases, and growth strategies.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <MarqueeRow items={devSkills} />
        <MarqueeRow items={seoSkills} reverse />
      </motion.div>
    </section>
  );
}
