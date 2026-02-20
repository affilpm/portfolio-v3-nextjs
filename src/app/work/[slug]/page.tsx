import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { portfolioConfig } from "@/config/portfolio";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { ContactStrip } from "@/components/ContactStrip";

// Generate static params for all known projects at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamically generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${portfolioConfig.name}`,
    description: project.problem || project.solution,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.solution,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-0 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-(--accent)/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-1/3 h-[500px] bg-(--accent-2)/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Back Navigation */}
        <Link
          href="/work"
          className="inline-flex items-center text-text-muted hover:text-accent transition-colors font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <header className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-accent uppercase tracking-wider rounded-md bg-(--accent)/10 border border-(--accent)/20">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-text-primary">
              {project.title}
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            {project.solution}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost gap-2 bg-surface-2"
              >
                <Github className="w-5 h-5" /> View Source
              </Link>
            )}
            {project.live ? (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2"
              >
                <ExternalLink className="w-5 h-5" /> Visit Live Site
              </Link>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all bg-surface-2 text-text-muted cursor-help border border-border"
                title="Project is complete. Live hosting will be available soon."
              >
                <ExternalLink className="w-5 h-5 opacity-50" /> Hosting Soon
              </div>
            )}
          </div>
        </header>

        {/* Tech Stack Pills */}
        <div className="glass-card p-8">
          <h3 className="text-sm font-mono font-semibold text-text-muted uppercase tracking-wider mb-6">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-surface text-text-primary border border-border shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Markdown Content OR Fallback */}
        <article className="glass-card p-6 md:p-12 pb-16!">
          {project.content ? (
            <MarkdownRenderer content={project.content} />
          ) : (
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-text-primary">
                  The Problem
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-text-primary">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-text-secondary">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="pl-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-text-primary">
                  The Impact
                </h2>
                <div className="border-l-4 border-accent pl-6 py-2 bg-surface-2/50 rounded-r-lg">
                  <p className="text-lg text-text-primary italic font-medium">
                    &quot;{project.impact}&quot;
                  </p>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>

      <div className="mt-24">
        <ContactStrip />
      </div>
    </main>
  );
}
