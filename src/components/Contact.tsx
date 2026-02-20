"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingElement } from "@/components/ui/ParallaxSection";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/affilpm",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/affilpm",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/affilpm",
    icon: Twitter,
    color: "hover:text-sky-400",
  },
  {
    name: "Email",
    href: "mailto:affilpm@gmail.com",
    icon: Mail,
    color: "hover:text-primary",
  },
];

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <FloatingElement
          className="absolute top-1/4 left-1/4"
          duration={10}
          distance={40}
        >
          <div className="w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-1/4 right-1/4"
          duration={12}
          distance={30}
          delay={2}
        >
          <div className="w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </FloatingElement>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider uppercase mb-6">
            <span className="text-xl mr-2">06.</span>
            What&apos;s Next?
          </span>
        </motion.div>

        {/* Main heading with reveal animation */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <AnimatedText
              text="Get In Touch"
              type="chars"
              className="text-foreground"
            />
          </h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-muted-foreground text-center max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi—my inbox is always open!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <MagneticButton strength={0.25}>
            <Link
              href="mailto:affilpm@gmail.com"
              className="group inline-flex items-center gap-3 h-16 px-10 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50"
            >
              <span>Say Hello</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {socialLinks.map((social, index) => (
            <MagneticButton key={social.name} strength={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium">{social.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </motion.div>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-sm text-muted-foreground/60 font-mono">
            Designed & Built by{" "}
            <span className="text-primary">Affil PM</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/40 mt-2"
          >
            Built with Next.js, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.footer>
      </motion.div>
    </section>
  );
}
