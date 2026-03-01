"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import type { BlogPostMetadata } from "@/lib/mdx";

interface BlogTeaserProps {
  posts: BlogPostMetadata[];
}

export function BlogTeaser({ posts }: BlogTeaserProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted block mb-4">
              Blog
            </span>
            <h2 className="h2 text-text-primary">
              Latest <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="btn-ghost flex items-center gap-2"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Editorial rows */}
        <div className="border-t border-border">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-4 md:gap-8 py-6 md:py-8 border-b border-border transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* Date */}
                <span className="text-xs font-mono text-text-muted w-20 shrink-0 hidden sm:block">
                  {post.date}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-semibold text-text-primary group-hover:text-gradient transition-colors duration-300 flex-1 min-w-0">
                  {post.title}
                </h3>

                {/* Arrow */}
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-300 shrink-0 group-hover:bg-text-primary group-hover:border-text-primary group-hover:text-background text-text-muted">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
