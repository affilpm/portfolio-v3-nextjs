import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: `Blog & Technical Articles | ${portfolioConfig.name}`,
  description:
    "In-depth technical articles, tutorials, and insights regarding modern web development, Python, Next.js, and system architecture. Designed as a learning resource for developers and a showcase of expertise for clients.",
  keywords: [
    "software engineering blog",
    "next.js tutorials",
    "django scalability",
    "database optimization",
    "full stack development",
  ],
  openGraph: {
    title: `Technical Blog | ${portfolioConfig.name}`,
    description:
      "Thoughts, tutorials, and insights about software engineering, system architecture, and building products people love.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-32 pb-0 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-1/2 h-[400px] bg-(--accent)/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-text-primary mb-6">
          Latest <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Thoughts, tutorials, and deep-dives regarding software engineering,
          system architecture, and building digital products that scale.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 mb-24">
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="glass-card p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-start group-hover:-translate-y-2 group-hover:border-(--accent)/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-(--accent)/0 via-(--accent)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex-1 relative z-10">
                  <div className="flex items-center flex-wrap gap-4 text-sm font-mono text-text-muted mb-4">
                    <span className="flex items-center text-accent-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-border hidden sm:inline-block">
                      |
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-display text-text-primary mb-4 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-text-primary font-medium font-mono text-sm group/btn">
                    Read Post
                    <ArrowRight className="w-4 h-4 text-accent group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* End of Blog list CTA to ensure 'Client Magnet' optimization */}
      <ContactStrip />
    </main>
  );
}
