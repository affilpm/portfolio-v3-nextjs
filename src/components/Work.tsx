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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4 max-w-xl"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Portfolio
            </span>
            <h2 className="h2 text-text-primary">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              Production apps, SaaS platforms, and experimental tools — shipped
              with clean architecture and attention to detail.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-1 self-start"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "text-background bg-text-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects — editorial list */}
        <div className="min-h-[400px] border-t border-border">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  featured={index === 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-text-muted"
            >
              <p>No projects in this category yet.</p>
              <button
                onClick={() => setActiveTab("All")}
                className="mt-3 text-accent hover:underline text-sm"
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
          className="flex justify-center pt-14"
        >
          <Link
            href="/work"
            className="btn-ghost flex items-center gap-2 text-base"
          >
            Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
