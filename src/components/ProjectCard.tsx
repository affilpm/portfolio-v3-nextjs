"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Scroll-triggered effects
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: scrollOpacity,
        y: scrollY,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="glass-card group relative flex flex-col overflow-hidden will-change-transform p-0!"
    >
      {/* Image / Cover Area */}
      <div
        className={`relative overflow-hidden w-full ${featured ? "h-56" : "h-48"} bg-surface-2`}
      >
        {/* Animated pattern overlay instead of real image for now */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Abstract Gradient Background representing the project */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-(--accent)/20 to-(--accent-2)/20 opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          animate={{
            scale: isHovering ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovering ? 1.1 : 1,
              rotate: isHovering ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 rounded-2xl bg-(--surface)/50 border border-border backdrop-blur-md flex items-center justify-center shadow-xl"
          >
            <Code2 className="w-8 h-8 text-accent" />
          </motion.div>
        </div>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-surface to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-text-primary uppercase tracking-wider rounded-md bg-(--surface)/80 backdrop-blur-md border border-border shadow-sm">
            {project.category}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 flex gap-2 z-20"
        >
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2.5 rounded-full bg-(--surface)/90 backdrop-blur-md text-text-secondary hover:text-text-primary hover:bg-(--accent)/20 transition-all hover:scale-110 border border-border"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live website`}
              className="p-2.5 rounded-full bg-(--surface)/90 backdrop-blur-md text-text-secondary hover:text-text-primary hover:bg-(--accent-2)/20 transition-all hover:scale-110 border border-border"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          ) : (
            <div
              className="px-3 py-1 flex items-center justify-center rounded-full bg-(--surface)/90 backdrop-blur-md text-text-muted text-xs font-mono border border-border/50 cursor-help"
              title="Project is complete. Live hosting will be available soon."
            >
              Hosting Soon
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col grow p-6 sm:p-8 bg-surface z-10 relative">
        <h3 className="text-2xl font-bold font-display text-text-primary group-hover:text-gradient transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed mb-6 grow">
          {project.solution}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-2 text-text-muted border border-border"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-mono text-text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
