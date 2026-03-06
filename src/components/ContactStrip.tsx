"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export function ContactStrip() {
  return (
    <section className="py-32 md:py-40 lg:py-48 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Massive headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-text-primary leading-[0.95] tracking-tight mb-8">
            Seeking new
            <br />
            <span className="text-gradient">opportunities?</span>
          </h2>

          <p className="text-base md:text-lg text-text-secondary max-w-lg mx-auto mb-12 leading-relaxed">
            Let&apos;s talk about how I can bring value to your engineering team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="btn-primary group text-lg px-10 py-4"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="btn-ghost text-base"
            >
              {portfolioConfig.email}
            </a>
          </div>

          {/* Trust */}
          <div className="flex items-center justify-center gap-6 mt-12 text-xs font-mono text-text-muted">
            <span>Reply within 24h</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Open to Relocation</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Available Now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
