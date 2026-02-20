"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>(
    new Date().getFullYear(),
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-surface text-text-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Content Rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 justify-between mb-16">
          {/* Row 1: Left Branding */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1 group">
              <span className="font-display font-bold text-2xl tracking-tighter text-text-primary">
                Affil
              </span>
              <span className="font-display font-bold text-2xl tracking-tighter text-gradient group-hover:opacity-80 transition-opacity">
                PM
              </span>
            </Link>
            <p className="text-text-muted max-w-sm leading-relaxed">
              {portfolioConfig.bio}
            </p>
          </div>

          {/* Row 2: Nav Links Grouped */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3 flex flex-col">
              <Link
                href="/work"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                Services
              </Link>
            </div>
            <div className="space-y-3 flex flex-col">
              <Link
                href="/resume"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                Resume
              </Link>
              <Link
                href="/blog"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-text-primary hover:translate-x-1 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Row 3: Social Icons */}
          <div className="md:col-span-3 flex flex-col md:items-end">
            <div className="flex items-center gap-4">
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-(--card-bg) border border-(--card-border) hover:bg-(--card-hover) hover:text-accent hover:border-(--accent)/30 transition-all hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-(--card-bg) border border-(--card-border) hover:bg-(--card-hover) hover:text-accent hover:border-(--accent)/30 transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              {portfolioConfig.socials.twitter && (
                <a
                  href={portfolioConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-3 rounded-full bg-(--card-bg) border border-(--card-border) hover:bg-(--card-hover) hover:text-accent hover:border-(--accent)/30 transition-all hover:-translate-y-1"
                >
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm gap-4 font-mono text-text-muted">
          <p>
            © {currentYear} {portfolioConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-text-secondary">
                Open to remote roles worldwide
              </span>
            </div>
            <span className="hidden sm:inline-block">|</span>
            <span>Built with Next.js 14</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
