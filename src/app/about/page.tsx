import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { Experience } from "@/components/Experience";
import { About as AboutBento } from "@/components/About";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: `About Me & Professional Philosophy | ${portfolioConfig.name}`,
  description:
    "Learn about my journey as a full-stack developer, my engineering philosophy, and how I approach solving complex business problems with scalable code.",
  keywords: [
    "about me",
    "full stack developer",
    "python engineer",
    "next.js expert",
    "remote developer background",
  ],
  openGraph: {
    title: `About | ${portfolioConfig.name}`,
    description:
      "Learn about my journey as a full-stack developer and my engineering philosophy.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-(--accent)/5 blur-[120px] rounded-full pointer-events-none" />

      {/* The AboutBento is marked priority to load instantly without scroll delay */}
      <AboutBento priority={true} />

      {/* Add detailed philosophy */}
      <section className="py-24 px-6 md:px-12 relative z-10 bg-(--surface)/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary mb-12">
            My Philosophy
          </h2>
          <div className="space-y-8 text-lg text-text-secondary leading-relaxed">
            <p>
              I believe that great software is built at the intersection of
              robust engineering and intuitive design. As a full-stack
              developer, I strive to break down the silos between the back-end
              infrastructure and the user-facing interface.
            </p>
            <p>
              When writing{" "}
              <strong className="text-text-primary">Python</strong> or{" "}
              <strong className="text-text-primary">TypeScript</strong>
              , my focus is always on maintainability, performance, and
              readability. Code is read far more often than it is written, so I
              prioritize clear architecture and comprehensive testing.
            </p>
            <p>
              I am highly motivated by{" "}
              <strong className="text-text-primary">impact</strong>.
              Whether it's optimizing a slow database query that saves server
              costs or redesigning a UI flow that increases conversion, I care
              deeply about the business outcomes of my technical decisions.
            </p>
          </div>
        </div>
      </section>

      <Experience />

      <ContactStrip />
    </main>
  );
}
