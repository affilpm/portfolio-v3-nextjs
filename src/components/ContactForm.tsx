"use client";

import { portfolioConfig } from "@/config/portfolio";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${data.inquiryType}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`,
    );

    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
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
            name="name"
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
            name="email"
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
            name="inquiryType"
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all hover:border-[var(--text-muted)] appearance-none"
          >
            <option value="Freelance Project">Freelance Project</option>
            <option value="Full-Time Role">Full-Time Role</option>
            <option value="SEO/Consulting">SEO/Consulting</option>
            <option value="Other">Other</option>
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
            name="budget"
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
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all resize-none placeholder:text-[var(--text-muted)] hover:border-[var(--text-muted)]"
          placeholder="Tell me about your project or opportunity..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 text-lg py-4 px-6 rounded-xl font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-2)] transition-colors"
      >
        <span>Send Message</span>
      </button>
    </form>
  );
}
