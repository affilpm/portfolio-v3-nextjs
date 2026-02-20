"use client";

import { useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";

export function useScrollProgress(container?: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    container,
  });

  // Smooth out the scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}

interface UseElementScrollOptions {
  target: RefObject<HTMLElement | null>;
}

export function useElementScroll(options: UseElementScrollOptions) {
  const { scrollYProgress } = useScroll({
    target: options.target,
    offset: ["start end", "end start"],
  });

  return { scrollYProgress };
}
