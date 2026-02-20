"use client";

import { useMemo } from "react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";

export function OpenToWorkBanner() {
  const { openToFullTime, openToFreelance } = portfolioConfig.availability;

  const isVisible = openToFullTime || openToFreelance;

  const textMessage = useMemo(() => {
    if (openToFullTime && openToFreelance) {
      return "👋 I'm currently open to full-time remote roles and freelance contracts. Let's build something.";
    }
    if (openToFullTime) {
      return "👋 I'm currently looking for my next full-time remote role. Let's chat.";
    }
    if (openToFreelance) {
      return "👋 I'm currently available for new freelance contracts and projects.";
    }
    return "";
  }, [openToFullTime, openToFreelance]);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-surface-2 border-y border-border backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
        <p className="text-text-primary max-w-lg text-center sm:text-left">
          {textMessage}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/resume"
            className="px-4 py-2 border border-border hover:border-accent bg-surface rounded-full text-xs font-medium text-text-primary transition-colors"
          >
            View Resume
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-accent text-white rounded-full text-xs font-medium hover:bg-(--accent)/90 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
