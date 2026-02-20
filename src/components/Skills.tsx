"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Search,
  FileCode2,
  Activity,
  LineChart,
  Globe2,
  Zap,
  Target,
  Megaphone,
  Link,
  Award,
  TrendingUp,
} from "lucide-react";

// Development skills using simple devicon mapping
const devSkills = [
  { name: "Python", iconClass: "devicon-python-plain" },
  { name: "Django", iconClass: "devicon-django-plain" },
  { name: "DRF", iconClass: "devicon-django-plain" }, // using django as fallback
  { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
  { name: "Next.js", iconClass: "devicon-nextjs-plain" },
  { name: "React", iconClass: "devicon-react-original" },
  { name: "Svelte", iconClass: "devicon-svelte-plain" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
  { name: "Linux", iconClass: "devicon-linux-plain" },
  { name: "VPS", iconClass: "devicon-ubuntu-plain" },
  { name: "Cloud", iconClass: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Docker", iconClass: "devicon-docker-plain" },
  { name: "Git", iconClass: "devicon-git-plain" },
];

// SEO skills using Lucide React
const seoSkills = [
  { name: "Technical SEO", icon: Settings },
  { name: "On-Page SEO", icon: FileCode2 },
  { name: "Schema Markup", icon: Code },
  { name: "Core Web Vitals", icon: Activity },
  { name: "GA4", icon: BarChart },
  { name: "Search Console", icon: Search },
  { name: "Site Speed", icon: Zap },
  { name: "SEO Audits", icon: Target },
  { name: "Keyword Research", icon: Megaphone },
  { name: "Link Building", icon: Link },
  { name: "Ahrefs", icon: Award },
  { name: "Semrush", icon: TrendingUp },
];

// Reusable mock components to avoid importing missing lucide icons above if needed
// Actually let's just make sure we import all the ones we used
import { Settings, Code } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="h2 mb-4">Core Competencies</h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            An arsenal of modern technologies and advanced growth marketing
            tactics.
          </p>
        </motion.div>

        {/* Development Row */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="h3 font-display">Development & Engineering</h3>
            <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4"
          >
            {devSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-(--card-border) bg-(--card-bg) backdrop-blur-md cursor-default hover:bg-(--card-hover) hover:border-(--accent)/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <i
                  className={`${skill.iconClass} text-2xl text-text-secondary group-hover:text-text-primary transition-colors`}
                />
                <span className="font-medium text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SEO & Growth Row */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="h3 font-display">Technical SEO & Growth</h3>
            <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4"
          >
            {seoSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-(--card-border) bg-(--card-bg) backdrop-blur-md cursor-default hover:bg-(--card-hover) hover:border-(--accent-2)/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-2 transition-colors" />
                  <span className="font-medium text-text-primary">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
