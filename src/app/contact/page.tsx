import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact & Hire | ${portfolioConfig.name}`,
  description:
    "Get in touch for freelance software development projects, dedicated technical consulting, or full-time engineering roles. Let's build something exceptional.",
  keywords: [
    "hire react developer",
    "contact python engineer",
    "freelance full stack developer",
    "next.js consulting",
  ],
  openGraph: {
    title: `Contact | ${portfolioConfig.name}`,
    description:
      "Available for freelance software development projects and full-time remote opportunities.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-(--accent)/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-(--accent-2)/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="w-full max-w-4xl mb-16 md:mb-24">
          <h1 className="mb-8 font-display font-extrabold leading-[1.1] tracking-tight">
            <span className="text-text-primary block text-[clamp(2.5rem,8vw,5.5rem)]">
              Let's Start a
            </span>
            <span className="text-gradient inline-block pr-3 pb-2 mt-1 max-w-full overflow-hidden text-ellipsis text-[min(12vw,5.5rem)]">
              Conversation.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
            I'm currently available for freelance projects and remote full-time
            opportunities. Fill out the form below or reach out directly via
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card flex flex-col gap-8 p-8!">
              <h3 className="text-2xl font-bold font-display text-text-primary">
                Contact Details
              </h3>

              <div className="space-y-8">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-(--accent)/10 group-hover:border-(--accent)/30 transition-all">
                    <Mail className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">
                      Email
                    </p>
                    <p className="text-lg text-text-primary group-hover:text-gradient transition-all">
                      {portfolioConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-(--accent-2)/10 group-hover:border-(--accent-2)/30 transition-all">
                    <MapPin className="w-5 h-5 text-text-secondary group-hover:text-accent-2 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">
                      Location
                    </p>
                    <p className="text-lg text-text-primary">
                      {portfolioConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card flex gap-4 p-6! justify-center sm:justify-start">
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-surface-2 border border-border text-text-secondary hover:text-text-primary hover:bg-(--accent)/20 hover:border-(--accent)/30 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-surface-2 border border-border text-text-secondary hover:text-text-primary hover:bg-(--accent-2)/20 hover:border-(--accent-2)/30 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {portfolioConfig.socials.twitter && (
                <a
                  href={portfolioConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-surface-2 border border-border text-text-secondary hover:text-text-primary hover:bg-(--accent)/20 hover:border-(--accent)/30 transition-all hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8! md:p-10! relative overflow-hidden group/form">
              {/* Subtle hover gradient inside form card */}
              <div className="absolute inset-0 bg-linear-to-br from-(--accent)/5 via-transparent to-(--accent-2)/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <h3 className="text-2xl font-bold font-display text-text-primary mb-8 relative z-10">
                Send a Message
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
