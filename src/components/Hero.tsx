"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WordReveal, PressButton, SectionReveal } from "./motion";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="max-w-6xl mx-auto px-6 text-center mb-section relative pt-40 md:pt-48">
      {/* Glow blob */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-80 blur-[100px] pointer-events-none"
        style={{
          background: "var(--color-neon-green-30)",
          zIndex: "var(--z-glow)",
        }}
        aria-hidden="true"
      />

      {/* Badge */}
      <SectionReveal delay={0.1}>
        <motion.div
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass border border-glass-border text-xs font-semibold text-text-secondary mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-neon-green animate-pulse" />
          Built by engineers who have landed offers at STRIPE, AWS, INTERCOM and much more.
        </motion.div>
      </SectionReveal>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-5 text-text-primary uppercase justify-center">
        <WordReveal
          text="Stop wondering why you aren't getting the interview."
          delay={0.3}
        />
      </h1>

      {/* Subtitle */}
      <SectionReveal delay={0.9}>
        <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-3xl mx-auto mb-8 font-mono uppercase tracking-wide">
          The CS job market is <span className="text-neon-green font-bold">cooked</span>. Your resume shouldn&apos;t be.
        </p>
      </SectionReveal>

      {/* CTAs */}
      <SectionReveal delay={1.1}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <PressButton
            className="w-full sm:w-auto bg-neon-green text-black px-10 py-5 rounded-xl text-lg font-black shadow-[var(--shadow-neon-lg)] cursor-pointer"
            ariaLabel="Optimize my resume"
          >
            Optimize My Resume
          </PressButton>
          <PressButton
            className="w-full sm:w-auto bg-glass border border-glass-border text-text-primary px-10 py-5 rounded-xl text-lg font-bold backdrop-blur-sm cursor-pointer hover:bg-glass-border-hover"
            ariaLabel="View demo audit"
          >
            View Demo Audit
          </PressButton>
        </div>
      </SectionReveal>
    </section>
  );
}
