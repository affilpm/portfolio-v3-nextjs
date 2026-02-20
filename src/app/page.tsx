import { Hero } from "@/components/Hero";
import { OpenToWorkBanner } from "@/components/OpenToWorkBanner";

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
      <Hero />
      <OpenToWorkBanner />
      <BlogTeaser posts={latestPosts} />
      <About />
      <Services limit={3} />
      <Skills />
      <Work />
      <Experience />
      <Testimonials />
      <ContactStrip />
    </main>
  );
}
