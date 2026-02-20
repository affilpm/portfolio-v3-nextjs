"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const categories = ["All", "Client Work", "Live Products", "Experimental"];

export function WorkClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category)) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.replace(`/work?${params.toString()}`, { scroll: false });
  };

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="space-y-12 flex flex-col items-center md:items-start w-full">
      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-border bg-surface-2 self-start"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabChange(category)}
            className={`relative px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
              activeTab === category
                ? "text-text-primary"
                : "text-text-muted hover:text-text-primary hover:bg-(--card-hover)"
            }`}
          >
            {activeTab === category && (
              <motion.div
                layoutId="work-page-tab-indicator"
                className="absolute inset-0 bg-linear-to-r from-accent to-accent-2 rounded-full shadow-lg shadow-(--accent)/20"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="min-h-[800px] w-full mt-12">
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} featured={true} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-16 text-center text-text-muted border border-border rounded-2xl bg-surface-2 mt-8 w-full"
          >
            <p className="text-xl mb-4">
              No projects found for this category yet.
            </p>
            <button
              onClick={() => handleTabChange("All")}
              className="text-accent hover:underline font-medium"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
