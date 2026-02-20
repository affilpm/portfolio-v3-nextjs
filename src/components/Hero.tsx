"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";

export function Hero() {
  const phrases = [
    "I Build Products.",
    "I Architect Systems.",
    "I Drive Growth.",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const techBadges = [
    { label: "Python 🐍", top: "15%", left: "10%", delay: 0 },
    { label: "Django", top: "85%", right: "40%", delay: 0.2 },
    { label: "DRF", top: "80%", left: "10%", delay: 0.4 },
    { label: "PostgreSQL", top: "45%", right: "15%", delay: 0.6 },
    { label: "Redux", top: "65%", right: "10%", delay: 0.8 },
    { label: "AWS", top: "20%", right: "20%", delay: 1.0 },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-2 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Floating Tech Badges (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        {techBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute glass-card py-2 px-4 p-2! text-xs font-mono text-text-secondary shadow-lg rounded-xl!"
            style={{ top: badge.top, left: badge.left, right: badge.right }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay,
            }}
          >
            {badge.label}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card p-2! px-4! mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm font-medium text-text-primary">
              Available for Work ✦
            </span>
          </motion.div>

          {/* H1 Heading with Word Swap */}
          <div className="min-h-[180px] sm:min-h-[160px] md:min-h-[220px] lg:min-h-[260px] flex items-center mb-6">
            <h1 className="h1 w-full">
              <span className="text-text-primary block">Hi, I'm Affil.</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gradient block mt-2"
                >
                  {phrases[currentPhrase]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            {portfolioConfig.bio}
          </motion.p>

          {/* Availability Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            {portfolioConfig.availability.openToFullTime && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-[rgba(16,185,129,0.1)] text-success border border-(--success)/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />{" "}
                Full-Time Roles
              </span>
            )}
            {portfolioConfig.availability.openToFreelance && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-[rgba(16,185,129,0.1)] text-success border border-(--success)/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />{" "}
                Freelance
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-[rgba(16,185,129,0.1)] text-success border border-(--success)/20">
              <span className="w-1.5 h-1.5 rounded-full bg-success" /> SEO
              Consulting
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link href="/work" className="btn-primary">
              View My Work <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href={portfolioConfig.socials.github}
              target="_blank"
              className="btn-ghost gap-2"
            >
              <Github className="w-5 h-5" /> GitHub
            </Link>
            <Link href="/contact" className="btn-ghost gap-2">
              <Mail className="w-5 h-5" /> Let's Talk
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs font-mono uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
