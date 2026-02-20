import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { Download, ExternalLink } from "lucide-react";
import { experience } from "@/data/experience";

import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: `Software Engineer Resume & CV | ${portfolioConfig.name}`,
  description:
    "Review my professional history, specialized tech stack, core competencies, and notable engineering achievements.",
  keywords: [
    "software engineer resume",
    "full stack cv",
    "python developer resume",
    "react developer curriculum vitae",
  ],
  openGraph: {
    title: `Resume | ${portfolioConfig.name}`,
    description:
      "Review my professional software engineering history and tech stack.",
    type: "profile",
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background relative overflow-hidden text-foreground">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 p-6 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm">
          <div>
            <h1 className="text-3xl font-bold font-display">Resume</h1>
            <p className="text-muted-foreground mt-1">
              Updated{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-medium">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        {/* Resume Content - Designed like a clean document */}
        <div className="p-8 md:p-16 rounded-3xl border border-[var(--border)] bg-[var(--surface-2)]/30 shadow-2xl relative">
          {/* Header */}
          <header className="mb-12 border-b border-[var(--border)] pb-8">
            <h2 className="text-4xl font-bold font-display mb-2 text-[var(--text-primary)]">
              {portfolioConfig.name}
            </h2>
            <p className="text-xl text-[var(--accent)] font-mono mb-6">
              {portfolioConfig.jobTitle}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] font-mono">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                {portfolioConfig.email} <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span>{portfolioConfig.location}</span>
              <span>•</span>
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h3 className="text-lg uppercase tracking-widest font-bold text-[var(--accent-2)] mb-4">
              Summary
            </h3>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              Product-focused Full-Stack Developer specializing in Python
              (Django) and React (Next.js). Proven track record of architecting
              scalable backend systems and building high-performance, accessible
              user interfaces. Always focused on writing clean, maintainable
              code that drives business value and enhances user experience.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h3 className="text-lg uppercase tracking-widest font-bold text-muted-foreground mb-6">
              Experience
            </h3>
            <div className="space-y-10">
              {experience.map((job) => (
                <div key={job.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold">{job.role}</h4>
                    <span className="text-primary font-mono text-sm">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-muted-foreground font-medium mb-4">
                    {job.company}
                  </div>
                  <ul className="list-disc leading-relaxed text-foreground/80 pl-5 space-y-2">
                    {job.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12 border-t border-[var(--border)] pt-8">
            <h3 className="text-lg uppercase tracking-widest font-bold text-[var(--accent-2)] mb-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold mb-1 text-[var(--text-primary)]">
                  Languages
                </p>
                <p className="text-[var(--text-secondary)]">
                  Python, TypeScript, JavaScript, SQL, HTML/CSS
                </p>
              </div>
              <div>
                <p className="font-bold mb-1 text-[var(--text-primary)]">
                  Frameworks
                </p>
                <p className="text-[var(--text-secondary)]">
                  Django, FastAPI, React, Next.js, Tailwind CSS
                </p>
              </div>
              <div>
                <p className="font-bold mb-1 text-[var(--text-primary)]">
                  Infrastructure
                </p>
                <p className="text-[var(--text-secondary)]">
                  AWS, PostgreSQL, Redis, Docker, Nginx, CI/CD
                </p>
              </div>
              <div>
                <p className="font-bold mb-1 text-[var(--text-primary)]">
                  Practices
                </p>
                <p className="text-[var(--text-secondary)]">
                  REST API Design, Agile, TDD, System Architecture
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="border-t border-[var(--border)] pt-8">
            <h3 className="text-lg uppercase tracking-widest font-bold text-[var(--accent-2)] mb-4">
              Education
            </h3>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-xl font-bold text-[var(--text-primary)]">
                Bachelor of Science in Computer Science
              </h4>
              <span className="text-[var(--accent)] font-mono text-sm">
                2023
              </span>
            </div>
            <div className="text-[var(--text-secondary)] font-medium mt-1">
              University Name
            </div>
          </section>
        </div>
      </div>

      <ContactStrip />
    </main>
  );
}
