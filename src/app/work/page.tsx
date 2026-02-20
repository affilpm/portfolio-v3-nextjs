import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { WorkClient } from "./WorkClient";
import { Suspense } from "react";

import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: `Portfolio & Case Studies | ${portfolioConfig.name}`,
  description:
    "A comprehensive portfolio of my professional software engineering projects, showcasing scalable backend systems and high-performance React frontends.",
  keywords: [
    "software engineering portfolio",
    "react case studies",
    "django projects",
    "full stack portfolio",
  ],
  openGraph: {
    title: `Portfolio | ${portfolioConfig.name}`,
    description:
      "Explore my professional software engineering projects and technical case studies.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-1/3 h-[500px] bg-[var(--accent-2)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Page Hero */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-[var(--text-primary)] mb-6">
            All Projects
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            From high-performance APIs and scalable architectures to polished,
            accessible frontends. Here's a look at what I've been building.
          </p>
        </div>

        {/* Client component for layout animation and filtering */}
        <Suspense
          fallback={
            <div className="h-[800px] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-t-2 border-[var(--accent)] animate-spin" />
            </div>
          }
        >
          <WorkClient />
        </Suspense>
      </div>

      <ContactStrip />
    </main>
  );
}
