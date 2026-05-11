"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#benchmarks", label: "Benchmarks" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Career Blog" },
] as const;

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 w-full z-[var(--z-header)] border-b border-glass-border bg-obsidian/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2"
          aria-label="RESUMAX home"
        >
          <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center shadow-[var(--shadow-logo)]">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
              />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-text-primary">
            RESUMAX
          </span>
        </a>

        {/* Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-text-secondary hover:text-neon-green transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-neon-green hover:after:w-full after:transition-all after:duration-250 after:origin-left"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            className="text-sm font-semibold text-text-primary hover:text-neon-green transition-colors"
            href="#"
          >
            Log In
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-neon-green hover:bg-neon-green-hover text-black px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-[var(--shadow-neon)]"
            href="#"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
