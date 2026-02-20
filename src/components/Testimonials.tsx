"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Affil completely transformed our backend architecture. We went from struggling with 10k daily users to effortlessly scaling past 100k. His Django expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Startup",
    gradient: "from-accent to-accent-2",
  },
  {
    content:
      "Not only did he build a beautiful, lightning-fast Next.js frontend, but his SEO consulting doubled our organic traffic within 3 months. A rare true full-stack talent.",
    author: "Michael Chen",
    role: "Founder, Growth Media",
    gradient: "from-accent-2 to-emerald-500",
  },
  {
    content:
      "Professional, communicative, and delivers immaculate code. The Docker and AWS CI/CD pipeline he set up saved our team hundreds of hours in deployment time.",
    author: "Emily Rodriguez",
    role: "Engineering Manager",
    gradient: "from-pink-500 to-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="h2 font-display text-text-primary mb-4">
            Client Feedback
          </h2>
          <p className="text-lg text-text-secondary">
            Don't just take my word for it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="glass-card h-full flex flex-col relative p-8! group hover:border-(--card-border) hover:-translate-y-2 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div
                    className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.gradient} p-px shadow-lg`}
                  >
                    <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                      <Quote
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 grow">
                  <p className="text-text-secondary leading-relaxed italic mb-8 relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                  {/* Avatar Placeholder */}
                  <div
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${testimonial.gradient} shrink-0`}
                  />
                  <div>
                    <h4 className="font-bold text-text-primary">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-text-muted font-mono">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
