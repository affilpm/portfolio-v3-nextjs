import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, BlogPost } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Define the typography styles explicitly for the blog content
const components = {
  h1: (props: any) => (
    <h1
      className="text-4xl md:text-5xl font-bold font-display mt-10 mb-6 text-[var(--text-primary)]"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl md:text-4xl font-bold font-display mt-12 mb-6 text-[var(--text-primary)]"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-2xl font-bold font-display mt-8 mb-4 text-[var(--text-primary)]"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc pl-6 mb-6 text-lg text-[var(--text-secondary)] space-y-2 marker:text-[var(--accent)]"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 mb-6 text-lg text-[var(--text-secondary)] space-y-2 marker:text-[var(--accent)]"
      {...props}
    />
  ),
  li: (props: any) => <li className="" {...props} />,
  a: (props: any) => (
    <a
      className="text-[var(--accent)] hover:text-[var(--accent-2)] underline decoration-transparent hover:decoration-[var(--accent-2)] transition-all"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[#0d1117] border border-[var(--border)] p-4 rounded-xl overflow-x-auto mb-8 mt-4"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="font-mono text-sm text-[var(--accent-2)] bg-[var(--surface-2)] px-1.5 py-0.5 rounded-md"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-[var(--accent)] pl-6 italic text-[var(--text-secondary)] my-8 bg-[var(--surface-2)]/30 py-4 rounded-r-xl"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[var(--text-primary)]" {...props} />
  ),
};

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Ensure the dynamic route generates static HTML at build time
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

// Generate dynamic SEO metadata for each post
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { metadata } = getPostBySlug(resolvedParams.slug);
    return {
      title: `${metadata.title} | Blog`,
      description: metadata.excerpt,
      openGraph: {
        title: metadata.title,
        description: metadata.excerpt,
        type: "article",
        publishedTime: metadata.date,
        tags: metadata.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: metadata.title,
        description: metadata.excerpt,
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  let post: BlogPost;
  try {
    const resolvedParams = await params;
    post = getPostBySlug(resolvedParams.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-32 bg-background relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-1/4 h-[400px] bg-[var(--accent-2)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-12 group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Post Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-[var(--text-muted)] mb-6">
            <time dateTime={post.metadata.date} className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="hidden sm:inline-block text-[var(--border)]">
              |
            </span>
            <span className="flex items-center text-[var(--accent-2)]">
              <Clock className="w-4 h-4 mr-2" />
              {post.metadata.readingTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text-primary)] leading-tight mb-8">
            {post.metadata.title}
          </h1>

          {/* Tags */}
          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[var(--text-secondary)] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post Content rendered by MDX */}
        <div className="prose-container w-full max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* Footer CTA - Client Magnet Optimization */}
        <div className="mt-20 pt-10 border-t border-[var(--border)]">
          <div className="glass-card flex flex-col sm:flex-row items-center justify-between p-8 gap-6 animate-fade-in-up">
            <div>
              <h4 className="text-xl font-bold font-display text-[var(--text-primary)] mb-2">
                Need help building something similar?
              </h4>
              <p className="text-[var(--text-secondary)] text-sm">
                I'm available for freelance projects and consulting.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap px-8 py-3"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
