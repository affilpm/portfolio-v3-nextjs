"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    content:
      "Affil completely transformed our backend architecture. We went from struggling with 10k daily users to effortlessly scaling past 100k. His Django expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Startup",
  },
  {
    content:
      "Not only did he build a beautiful, lightning-fast Next.js frontend, but his SEO consulting doubled our organic traffic within 3 months. A rare true full-stack talent.",
    author: "Michael Chen",
    role: "Founder, Growth Media",
  },
  {
    content:
      "Professional, communicative, and delivers immaculate code. The Docker and AWS CI/CD pipeline he set up saved our team hundreds of hours in deployment time.",
    author: "Emily Rodriguez",
    role: "Engineering Manager",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted block mb-4">
            Testimonials
          </span>
          <h2 className="h2 text-text-primary">
            Client <span className="text-gradient">Feedback</span>
          </h2>
        </motion.div>

        {/* Single large rotating quote */}
        <div className="relative min-h-[280px] md:min-h-[240px]">
          {/* Decorative quotation mark */}
          <span className="absolute -top-4 -left-2 md:-left-6 text-[120px] md:text-[180px] font-display font-bold text-text-primary/[0.04] leading-none select-none pointer-events-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-text-primary leading-snug max-w-4xl">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Separator + author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <div>
                  <p className="text-base font-semibold text-text-primary">
                    {t.author}
                  </p>
                  <p className="text-sm font-mono text-text-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-text-muted/30 hover:bg-text-muted/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
