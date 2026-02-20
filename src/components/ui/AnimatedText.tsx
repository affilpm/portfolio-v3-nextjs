"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  type?: "chars" | "words" | "lines";
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  type = "chars",
}: AnimatedTextProps) {
  const elements = useMemo(() => {
    if (type === "words") {
      return text.split(" ");
    }
    return text.split("");
  }, [text, type]);

  const variants = type === "words" ? wordVariants : charVariants;

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      custom={delay}
      style={{ perspective: 1000 }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={variants}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d",
            whiteSpace: element === " " ? "pre" : "normal"
          }}
        >
          {element === " " ? "\u00A0" : element}
          {type === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Gradient text reveal animation
interface GradientTextRevealProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function GradientTextReveal({
  text,
  className = "",
  once = true,
  delay = 0,
}: GradientTextRevealProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        viewport={{ once }}
      >
        {text}
      </motion.span>
      <span className="invisible">{text}</span>
    </motion.span>
  );
}
