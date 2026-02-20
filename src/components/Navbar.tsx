"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const links = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-(--background)/80 border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo link to home */}
          <Link
            href="/"
            className="group flex items-center gap-1 z-50"
            aria-label="AffilPM Home"
          >
            <span className="font-display font-bold text-2xl tracking-tighter text-text-primary">
              Affil
            </span>
            <span className="font-display font-bold text-2xl tracking-tighter text-gradient group-hover:opacity-80 transition-opacity">
              PM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-5 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-(--card-hover)/50"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-(--card-bg) border border-(--card-border) rounded-full z-0 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right side: Availability & CTA */}
          <div className="hidden md:flex items-center gap-5">
            {portfolioConfig.availability.openToFullTime && (
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-(--card-bg)/50 backdrop-blur-sm text-[13px] font-medium tracking-wide text-text-primary shadow-sm"
                aria-label="Available for full-time work"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Open to Work
              </div>
            )}
            <Link
              href="/contact"
              className="btn-primary text-[15px] font-semibold tracking-wide py-2.5 px-6 shadow-md hover:shadow-lg transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-text-primary z-50 rounded-full hover:bg-(--card-hover) transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-(--background)/95 backdrop-blur-md md:hidden flex flex-col pt-20 pb-safe px-6 h-dvh"
          >
            <div className="flex-1 overflow-y-auto pt-8 pb-4 flex flex-col justify-center gap-6">
              <motion.div
                variants={{
                  show: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-6 text-center my-auto"
              >
                {[{ name: "Home", href: "/" }, ...links].map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="relative flex justify-center w-max mx-auto"
                    >
                      <Link
                        href={link.href}
                        className={`relative z-10 px-6 py-2 text-3xl font-display font-bold transition-colors ${
                          isActive
                            ? "text-text-primary"
                            : "text-text-secondary hover:text-text-primary hover:text-gradient"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-nav-indicator"
                          className="absolute inset-0 bg-(--card-bg) border border-(--card-border) rounded-2xl z-0"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-auto pt-6 pb-8 border-t border-border flex flex-col items-center gap-6 shrink-0">
              {portfolioConfig.availability.openToFullTime && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-(--card-bg)/80 backdrop-blur-sm text-sm font-medium tracking-wide text-text-primary shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </span>
                  Open to Work
                </div>
              )}
              <Link
                href="/contact"
                className="btn-primary w-full max-w-xs text-lg py-3.5 font-semibold shadow-md"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
