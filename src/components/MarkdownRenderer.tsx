"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-4xl md:text-5xl font-display font-bold text-text-primary mt-12 mb-6"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-3xl font-display font-bold text-text-primary mt-10 mb-5 border-b border-border pb-2"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-2xl font-display font-bold text-text-primary mt-8 mb-4 lg:col-span-1"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="text-lg text-text-secondary leading-relaxed mb-6"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-outside ml-6 mb-6 text-text-secondary space-y-2 lg:col-span-2"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-outside ml-6 mb-6 text-text-secondary space-y-2"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="text-lg leading-relaxed" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-accent hover:text-accent-2 transition-colors underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-text-primary" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-accent pl-6 py-2 my-6 bg-surface-2/50 rounded-r-lg italic text-text-secondary"
              {...props}
            />
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match && !className?.includes("language-");

            return isInline ? (
              <code
                className="px-2 py-0.5 rounded-md bg-surface-2 text-accent-2 font-mono text-sm border border-border"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ node, ...props }) => (
            <pre
              className="p-6 rounded-xl bg-surface-2 border border-border overflow-x-auto my-8 font-mono text-sm leading-relaxed text-text-muted select-all"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8 border border-border rounded-xl">
              <table className="w-full text-left border-collapse" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th
              className="px-6 py-4 bg-surface text-text-primary font-semibold border-b border-border"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="px-6 py-4 border-b border-border/50 text-text-secondary last:border-0"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-12 border-border" {...props} />
          ),
          img: ({ node, ...props }) => (
            <span className="block my-12 overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-lg">
              <img
                className="w-full h-auto object-cover max-h-[600px] object-top"
                loading="lazy"
                {...props}
              />
              {props.alt && (
                <span className="block p-4 text-center text-sm font-mono text-text-muted bg-surface/50 backdrop-blur-sm border-t border-border">
                  {props.alt}
                </span>
              )}
            </span>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
