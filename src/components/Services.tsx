"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  Database,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with React/Next.js frontends and robust Python backends. Designed for scale, speed, and seamless user experiences.",
    price: "From $3,000",
  },
  {
    icon: Server,
    title: "REST API Development (DRF/FastAPI)",
    description:
      "High-performance, secure backend architectures using Django Rest Framework or FastAPI. Complete with automated testing, JWT auth, and swagger docs.",
    price: "From $1,500",
  },
  {
    icon: Cloud,
    title: "VPS & Cloud Deployment",
    description:
      "Production-ready deployment setups using AWS, DigitalOcean, Docker, and Nginx. CI/CD pipelines configured for automated, zero-downtime releases.",
    price: "From $800",
  },
  {
    icon: Database,
    title: "Database Architecture (PostgreSQL)",
    description:
      "Expert schema design, query optimization, and data migration strategies for PostgreSQL databases handling complex relationship models.",
    price: "From $1,000",
  },
  {
    icon: Smartphone,
    title: "Frontend Development (React/Next.js)",
    description:
      "Pixel-perfect, accessible, and responsive frontend implementation. Expertise in Tailwind CSS, framer-motion animations, and complex state management.",
    price: "From $2,000",
  },
  {
    icon: Globe,
    title: "Technical SEO & Consulting",
    description:
      "Deep-dive technical SEO audits, Core Web Vitals optimization, and automated JSON-LD structured data implementation to rank higher on Google.",
    price: "From $500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="h2 font-display text-text-primary">
              Services
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
          </div>
          <p className="text-lg text-text-secondary max-w-2xl">
            Specialized engineering and growth services tailored to elevate your
            business operations and digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="glass-card h-full flex flex-col group">
                {/* Icon in accent gradient circle */}
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-accent to-accent-2 p-px mb-6 shadow-lg shadow-(--accent)/20 group-hover:shadow-(--accent)/40 transition-shadow">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-text-primary mb-3 group-hover:text-accent-2 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-8 grow">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                  <span className="text-sm font-mono font-medium text-success bg-(--success)/10 px-3 py-1 rounded-md">
                    {service.price}
                  </span>

                  <Link
                    href="/contact"
                    className="btn-ghost px-4! py-1.5! text-sm! flex items-center gap-1 group/btn"
                  >
                    Get Quote{" "}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Home view CTA */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/services"
              className="btn-ghost flex items-center gap-2 text-lg"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
