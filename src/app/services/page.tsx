import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { Services } from "@/components/Services";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: `Freelance Services & Consulting | ${portfolioConfig.name}`,
  description:
    "Professional freelance services including Python backend architecture, Next.js frontend development, SEO consulting, and cloud deployment strategies.",
  keywords: [
    "freelance web developer",
    "backend architecture consulting",
    "next.js development services",
    "django expert for hire",
    "SEO technical audit",
  ],
  openGraph: {
    title: `Services | ${portfolioConfig.name}`,
    description:
      "Hire a professional full-stack engineer for your next ambitious project.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is your typical process for a new web application project?",
    answer:
      "I start with a comprehensive technical discovery phase to understand your business requirements and map out the system architecture. This is followed by iterative development sprints, regular updates, and a rigorous QA phase before deployment.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, I offer monthly retainer packages for ongoing maintenance, security updates, feature additions, and continuous SEO optimization for live projects.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack revolves around Next.js and React for the frontend, and Python (Django/FastAPI) along with PostgreSQL for the backend. I also handle AWS cloud deployments and CI/CD pipelines via GitHub Actions.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "Pricing is structured based on the scope and complexity of the project. I offer fixed-bid contracts for clearly defined scopes and hourly/weekly rates for ongoing or highly dynamic projects.",
  },
  {
    question: "Can you help optimize my existing website for SEO?",
    answer:
      "Absolutely. My SEO consulting services include deep technical audits, resolving Core Web Vitals issues, schema markup implementations, and actionable content strategies to improve your organic rankings.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-0">
      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <h1 className="h1 mb-6">
          <span className="text-text-primary block">How I Can</span>
          <span className="text-gradient block">Drive Growth.</span>
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
          I partner with startups and established businesses to build robust
          software. Whether you need a full-stack platform or a specialized
          backend service, I deliver scalable results.
        </p>
      </div>

      <Services />

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 font-display text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about working with me.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-8!">
              <h3 className="text-xl font-bold font-display text-text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ContactStrip />
      </div>
    </main>
  );
}
