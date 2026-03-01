"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
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

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const statusLabel = project.live
    ? "Live"
    : project.status === "in-progress"
      ? "In Progress"
      : "Completed";

  const statusColor = project.live
    ? "text-cyan-400"
    : project.status === "in-progress"
      ? "text-amber-400"
      : "text-emerald-400";

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: scrollOpacity, y: scrollY }}
      className="group relative flex flex-col border-b border-border py-8 md:py-10 transition-colors duration-300 hover:bg-white/[0.015]"
    >
      <div className="flex items-start gap-4 md:gap-6">
        {/* Large number watermark */}
        <span className="text-5xl md:text-7xl font-display font-bold text-text-primary/[0.05] leading-none shrink-0 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted">
                  {project.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className={`text-[10px] font-mono uppercase tracking-[0.15em] ${statusColor}`}>
                  {statusLabel}
                </span>
              </div>

              {/* Title */}
              <Link href={`/work/${project.slug}`} className="block">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-text-primary group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
              </Link>

              {/* Description */}
              <p className="text-sm md:text-base text-text-secondary line-clamp-2 mt-2 max-w-xl leading-relaxed">
                {project.solution}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="text-[11px] font-mono text-text-muted/50">
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Action links */}
            <div className="flex items-center gap-2 shrink-0 pt-1">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-secondary transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-secondary transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
              <Link
                href={`/work/${project.slug}`}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted transition-all duration-300 group-hover:bg-text-primary group-hover:border-text-primary group-hover:text-background"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
