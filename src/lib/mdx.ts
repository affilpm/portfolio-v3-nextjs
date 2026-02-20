import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

export type BlogPostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
};

export type BlogPost = {
  metadata: BlogPostMetadata;
  content: string;
};

// Ensure directory exists
if (!fs.existsSync(POSTS_PATH)) {
  fs.mkdirSync(POSTS_PATH, { recursive: true });
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => path.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Rough calculation for reading time (200 words per min)
  const words = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(words / 200)} min read`;

  return {
    metadata: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug: realSlug,
      tags: data.tags || [],
      readingTime: data.readingTime || readingTime,
      ...data,
    } as BlogPostMetadata,
    content,
  };
}

export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .map((post) => post.metadata)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
