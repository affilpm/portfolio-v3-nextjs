"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send } from "lucide-react";

export function ContactStrip() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--accent)/10 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 lg:p-20 text-center relative z-10 border border-(--card-border) bg-(--card-bg) backdrop-blur-xl shadow-2xl overflow-hidden group">
        {/* Abstract Mesh Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-10 pointer-events-none" />

        <div className="absolute top-0 right-0 w-64 h-64 bg-(--accent)/20 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--accent-2)/20 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-700" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-text-primary mb-6 leading-normal py-2">
            Let's build something{" "}
            <span className="text-gradient inline-block pb-2">
              exceptional.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and full-time remote
            opportunities. Whether you need a simple website or a complex SaaS
            architecture, I can help.
          </p>
          <Link
            href="/contact"
            className="btn-primary flex items-center gap-3 text-lg px-8 py-4"
          >
            Start a Conversation <Send className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
