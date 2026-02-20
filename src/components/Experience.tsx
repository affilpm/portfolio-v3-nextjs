"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Animated line progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="h2 font-display text-[var(--text-primary)]">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative ml-4 md:ml-8 lg:ml-12">
          {/* Static background line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--border)] rounded-full" />

          {/* Animated active timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience items */}
          <div className="space-y-16 pb-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.2,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute -left-[9px] top-4 z-10"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--surface-2)] border-2 border-[var(--accent)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-2)]" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-[var(--accent)]/30 animate-ping opacity-75" />
                </motion.div>

                {/* Content card */}
                <div className="glass-card hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-[var(--text-primary)] group-hover:text-gradient transition-colors mb-2">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)] font-medium">
                        <Briefcase className="w-4 h-4 text-[var(--accent-2)]" />
                        <span className="text-gradient font-semibold">
                          {job.company}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-sm font-mono text-[var(--text-muted)] self-start whitespace-nowrap">
                      <Calendar className="w-4 h-4 text-[var(--text-muted)]" />
                      {job.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                        >
                          <ChevronRight className="w-4 h-4 text-[var(--success)] mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline end cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -left-[5px] bottom-0 z-10"
          >
            <div className="w-3 h-3 rounded-full bg-[var(--border)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
