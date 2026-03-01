"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle,
  Code,
  Globe,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface AboutProps {
  priority?: boolean;
}

export function About({ priority = false }: AboutProps) {
  return (
    <section
      id="about"
      className={`${priority ? "py-4 md:py-12" : "py-24 md:py-32 lg:py-40"} relative`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={priority ? false : { opacity: 0, y: 20 }}
          animate={priority ? { opacity: 1, y: 0 } : undefined}
          whileInView={!priority ? { opacity: 1, y: 0 } : undefined}
          viewport={!priority ? { once: true, amount: 0.1 } : undefined}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          {!priority && (
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted block mb-4">
              About
            </span>
          )}
          {priority ? (
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-text-primary mb-6">
              About Me
            </h1>
          ) : (
            <h2 className="h2 text-text-primary mb-4">About Me</h2>
          )}
          <p
            className={`text-text-secondary max-w-2xl ${
              priority ? "text-xl leading-relaxed" : "text-lg"
            }`}
          >
            A glimpse into who I am, where I'm based, and the experience I bring
            to every project.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: priority ? 1 : 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: priority ? 0.05 : 0.1 },
            },
          }}
          initial={priority ? "show" : "hidden"}
          animate={priority ? "show" : undefined}
          whileInView={!priority ? "show" : undefined}
          viewport={!priority ? { once: true, amount: 0.1 } : undefined}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[minmax(140px,auto)]"
        >
          {/* Cell 1: Profile Photo (col-span-1, row-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2"
          >
            <div className="w-full h-full rounded-2xl bg-linear-to-br from-accent to-accent-2 p-[2px]">
              <div className="w-full h-full bg-surface rounded-2xl overflow-hidden relative min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGw4IDhaTTAgOGw4IC04Wk0tMiAyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="font-display font-bold text-xl text-white">
                    Affil PM
                  </p>
                  <p className="text-sm text-white/70">Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cell 2: Bio Text */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 glass-card flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold font-display text-text-primary mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              My Approach
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              I build production-grade web applications that are fast, secure,
              and scalable. From Django backends to Next.js frontends, I focus
              on clean architecture, rigorous testing, and user-first design
              that turns ideas into revenue-generating digital products.
            </p>
          </motion.div>

          {/* Cell 3: Location */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 glass-card flex flex-col justify-center items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-(--card-hover) flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-accent-2" />
            </div>
            <p className="font-bold text-lg text-text-primary">
              {portfolioConfig.location}
            </p>
            <p className="text-sm text-text-muted">Available Worldwide</p>
          </motion.div>

          {/* Cell 4: Experience Years */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 glass-card flex flex-col justify-center items-center text-center"
          >
            <p className="text-5xl font-display font-bold text-gradient mb-2">
              2+
            </p>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Years Exp.
            </p>
          </motion.div>

          {/* Cell 5: Projects Shipped */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 glass-card flex flex-col justify-center items-center text-center"
          >
            <p className="text-5xl font-display font-bold text-gradient mb-2">
              9+
            </p>
            <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Projects
            </p>
          </motion.div>

          {/* Cell 6: Remote Ready */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 glass-card flex flex-col justify-center items-center text-center bg-(--card-hover)/50 border-(--success)/20"
          >
            <CheckCircle className="w-8 h-8 text-success mb-3" />
            <p className="font-bold text-text-primary">Remote Ready</p>
            <p className="text-xs text-text-muted mt-1">Clear Communicator</p>
          </motion.div>

          {/* Cell 7: Currently Open To */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 glass-card flex flex-col justify-center"
          >
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
              Currently Open To
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-Time (Remote)",
                "Contract Roles",
                "Freelance Projects",
                "Technical Consulting",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-surface-2/80 border border-border/50 rounded-lg text-sm text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cell 8: SEO Wins */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-2 glass-card flex flex-col justify-center bg-linear-to-br from-(--surface-2)/50 to-transparent relative overflow-hidden group"
          >
            <Globe className="absolute -right-6 -bottom-6 w-32 h-32 text-(--text-muted)/10 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <p className="text-3xl font-display font-bold text-text-primary mb-1">
                Top 3 Rank
              </p>
              <p className="text-text-secondary text-sm">
                For competitive keywords across 5+ client domains.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
