"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "SaaS Web Applications",
    description:
      "Scalable multi-tenant platforms with subscription billing, real-time dashboards, and API integrations — built on Django + Next.js.",
    tags: ["Multi-tenancy", "Stripe", "REST APIs"],
  },
  {
    title: "E-Commerce Stores",
    description:
      "High-converting online stores with secure checkout, inventory management, and blazing-fast storefront performance.",
    tags: ["Payment Gateways", "Inventory", "SEO"],
  },
  {
    title: "School & Institutional Portals",
    description:
      "Complete management systems — student portals, fee management, attendance tracking, and role-based admin dashboards.",
    tags: ["Role-Based Access", "Reports", "Parent Portal"],
  },
  {
    title: "Business Dashboards & CRMs",
    description:
      "Data-rich admin panels with real-time analytics, workflow automation, and third-party integrations.",
    tags: ["Real-time Data", "Kanban", "Exports"],
  },
  {
    title: "REST API & Backend Systems",
    description:
      "Production-grade APIs with Django REST Framework — JWT auth, rate limiting, Swagger docs, and comprehensive tests.",
    tags: ["OpenAPI", "JWT + OAuth2", "99.9% Uptime"],
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Technical SEO audits, Core Web Vitals tuning, structured data, and page-speed optimization.",
    tags: ["Core Web Vitals", "JSON-LD", "Lighthouse 95+"],
  },
];

export function Services({ limit }: { limit?: number }) {
  const displayServices = limit ? services.slice(0, limit) : services;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted block mb-4">
              Services
            </span>
            <h2 className="h2 text-text-primary">
              What I <span className="text-gradient">Build</span>
            </h2>
          </div>
          <p className="text-text-secondary text-base md:text-lg max-w-md leading-relaxed">
            From SaaS to e-commerce — complete digital products that convert visitors into customers.
          </p>
        </motion.div>

        {/* Numbered rows */}
        <div className="border-t border-border">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-border py-6 md:py-8 cursor-pointer transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-start md:items-center gap-4 md:gap-8">
                {/* Number */}
                <span className="text-sm font-mono text-text-muted/50 w-8 shrink-0 pt-1 md:pt-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-text-primary group-hover:text-gradient transition-colors duration-300 flex-1 min-w-0">
                  {service.title}
                </h3>

                {/* Tags (desktop) */}
                <div className="hidden lg:flex items-center gap-2 shrink-0">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono text-text-muted uppercase tracking-wider border border-border rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <Link
                  href="/contact"
                  className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-text-primary group-hover:border-text-primary group-hover:text-background text-text-muted"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-0 -rotate-45" />
                </Link>
              </div>

              {/* Reveal description on hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pl-12 md:pl-16 text-sm md:text-base text-text-secondary max-w-2xl pt-3 leading-relaxed">
                      {service.description}
                    </p>
                    {/* Tags (mobile, shown on hover) */}
                    <div className="flex lg:hidden flex-wrap gap-2 pl-12 md:pl-16 pt-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono text-text-muted uppercase tracking-wider border border-border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/services"
              className="btn-ghost flex items-center gap-2 text-base"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
