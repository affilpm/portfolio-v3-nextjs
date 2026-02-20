"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import type { BlogPostMetadata } from "@/lib/mdx";

interface BlogTeaserProps {
  posts: BlogPostMetadata[];
}

export function BlogTeaser({ posts }: BlogTeaserProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="h2 font-display text-text-primary mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Thoughts on software engineering, design, and architecture.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-accent font-medium hover:text-accent-2 transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="glass-card h-full flex flex-col group-hover:-translate-y-2 group-hover:border-(--accent)/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300 relative overflow-hidden">
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 bg-linear-to-br from-(--accent)/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-center text-xs text-accent-2 font-mono mb-4 relative z-10">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    {post.date}
                  </div>

                  <h3 className="text-xl font-bold font-display text-text-primary mb-4 group-hover:text-accent-2 transition-colors leading-snug relative z-10">
                    {post.title}
                  </h3>

                  <p className="text-sm text-text-secondary flex-1 mb-8 leading-relaxed relative z-10">
                    {post.excerpt}
                  </p>

                  <div className="text-sm font-medium text-text-primary mt-auto flex items-center group/btn relative z-10">
                    Read more{" "}
                    <ArrowRight className="w-4 h-4 ml-1 text-accent group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
