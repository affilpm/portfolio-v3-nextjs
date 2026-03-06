"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const ROLES = ["Products", "Systems", "Experiences", "Solutions"];

const STATS = [
  { value: "3+", label: "Years Exp." },
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Committed" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/[0.04] rounded-full blur-[180px]" />
      </div>

      {/* Main content — fades on scroll */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-40"
      >
        {/* Availability tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted">
            Available for Full-time Roles
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10">
          <motion.h1
            className="h1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block text-text-primary"
            >
              I build digital
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.5 }}
                className="block text-gradient"
              >
                {ROLES[roleIndex]}.
              </motion.span>
            </AnimatePresence>
          </motion.h1>
        </div>

        {/* Horizontal rule — animated */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-border origin-left w-full max-w-3xl mb-10"
        />

        {/* Description + CTAs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed"
          >
            Software Engineer turning complex business problems into{" "}
            <span className="text-text-primary font-medium">
              scalable, secure, and maintainable
            </span>{" "}
            web applications with Django, Next.js &amp; PostgreSQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-start gap-5 md:justify-end"
          >
            <Link
              href="/work"
              className="btn-primary group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="border-t border-border"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-y-4">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-8 bg-border" />
                )}
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl md:text-3xl font-display font-bold text-text-primary">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-text-muted/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-text-muted/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
