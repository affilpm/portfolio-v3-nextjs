"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Client Work", "Live Products", "Experimental"];

export function Work() {
  const [activeTab, setActiveTab] = useState("All");
  const containerRef = useRef<HTMLElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects.slice(0, 4);
    return projects.filter((p) => p.category === activeTab).slice(0, 4);
  }, [activeTab]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            <h2 className="h2 font-display text-[var(--text-primary)]">
              Selected Work
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              A curated collection of my latest projects, ranging from
              production-grade client apps to experimental tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-2 p-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] self-start"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === category
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card-hover)]"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="work-tab-indicator-home"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-full shadow-lg shadow-[var(--accent)]/20"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="min-h-[500px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    featured={index === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center p-12 text-center text-[var(--text-muted)] border border-[var(--border)] rounded-2xl bg-[var(--surface-2)] mt-8"
            >
              <p>No projects found for this category yet.</p>
              <button
                onClick={() => setActiveTab("All")}
                className="mt-4 text-[var(--accent)] hover:underline"
              >
                View all projects
              </button>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-16"
        >
          <Link
            href="/work"
            className="btn-ghost flex items-center gap-2 text-lg"
          >
            View Full Portfolio <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
