import { Hero } from "@/components/Hero";
import { BlogTeaser } from "@/components/BlogTeaser";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { ContactStrip } from "@/components/ContactStrip";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Hook — first impression */}
      <Hero />
      {/* 2. Social proof — build trust fast */}
      <Testimonials />
      {/* 3. What I build — convert interest into intent */}
      <Services limit={3} />
      {/* 4. Proof of work */}
      <Work />
      {/* 5. Who I am */}
      <About />
      {/* 6. Depth signals */}
      <Skills />
      <Experience />
      {/* 7. Content marketing */}
      <BlogTeaser posts={latestPosts} />
      {/* 8. Final CTA */}
      <ContactStrip />
    </main>
  );
}
