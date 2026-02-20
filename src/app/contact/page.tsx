import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

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
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-[var(--accent-2)]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="h1 mb-6">
            <span className="text-[var(--text-primary)] block">
              Let's Start a
            </span>
            <span className="text-gradient block">Conversation.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            I'm currently available for freelance projects and remote full-time
            opportunities. Fill out the form below or reach out directly via
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card flex flex-col gap-8 !p-8">
              <h3 className="text-2xl font-bold font-display text-[var(--text-primary)]">
                Contact Details
              </h3>

              <div className="space-y-8">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/30 transition-all">
                    <Mail className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-muted)] mb-1">
                      Email
                    </p>
                    <p className="text-lg text-[var(--text-primary)] group-hover:text-gradient transition-all">
                      {portfolioConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-2)]/10 group-hover:border-[var(--accent-2)]/30 transition-all">
                    <MapPin className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-2)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-muted)] mb-1">
                      Location
                    </p>
                    <p className="text-lg text-[var(--text-primary)]">
                      {portfolioConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card flex gap-4 !p-6 justify-center sm:justify-start">
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/30 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-2)]/20 hover:border-[var(--accent-2)]/30 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {portfolioConfig.socials.twitter && (
                <a
                  href={portfolioConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/30 transition-all hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card !p-8 md:!p-10 relative overflow-hidden group/form">
              {/* Subtle hover gradient inside form card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent-2)]/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] mb-8 relative z-10">
                Send a Message
              </h3>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiryType"
                      className="text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all hover:border-[var(--text-muted)] appearance-none"
                    >
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-Time Role</option>
                      <option value="consulting">SEO/Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all hover:border-[var(--text-muted)] appearance-none"
                    >
                      <option value="Not Applicable">Not Applicable</option>
                      <option value="< $1k">&lt; $1,000</option>
                      <option value="$1k - $5k">$1,000 - $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all resize-none placeholder:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
