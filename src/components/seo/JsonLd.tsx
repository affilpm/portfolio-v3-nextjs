import { portfolioConfig } from "@/config/portfolio";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioConfig.name,
    jobTitle: portfolioConfig.jobTitle,
    url: portfolioConfig.seo.url,
    email: portfolioConfig.email,
    sameAs: [
      portfolioConfig.socials.github,
      portfolioConfig.socials.linkedin,
      portfolioConfig.socials.twitter,
      portfolioConfig.socials.devto,
    ].filter(Boolean),
    knowsAbout: [
      "Python",
      "Django",
      "DRF",
      "FastAPI",
      "Next.js",
      "React",
      "PostgreSQL",
      "Linux",
      "VPS",
      "Docker",
      "Svelte",
      "Git",
    ],
    seeks: "Full-time remote software engineering role or freelance projects",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: portfolioConfig.name,
    url: portfolioConfig.seo.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${portfolioConfig.seo.url}/work?category={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
