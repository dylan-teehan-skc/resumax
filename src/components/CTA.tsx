"use client";

import { SectionReveal, PressButton, WordReveal } from "./motion";

export default function CTA() {
  return (
    <SectionReveal>
      <section className="max-w-5xl mx-auto px-6 mb-40 text-center">
        <div className="bg-gradient-to-br from-neon-green-30 via-obsidian to-blue-glow rounded-2xl p-12 md:p-24 border border-glass-border relative overflow-hidden group">
          <div className="relative z-[var(--z-content)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter uppercase italic text-text-primary">
              <WordReveal text="Beat the system." />
            </h2>
            <p className="text-xl text-text-secondary mb-12 max-w-xl mx-auto font-medium">
              Stop wasting cycles on ghost jobs. Optimize your profile for the
              hardest hiring market in a decade.
            </p>
            <PressButton
              className="bg-neon-green text-black px-12 py-6 rounded-full text-xl md:text-2xl font-black shadow-[var(--shadow-neon-xl)] cursor-pointer"
              ariaLabel="Optimize my resume now"
            >
              Optimize My Resume Now
            </PressButton>
          </div>

          {/* Decorative glows */}
          <div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[120px] group-hover:opacity-100 opacity-70 transition-opacity"
            style={{ background: "var(--color-neon-green-30)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: "var(--color-blue-glow)" }}
            aria-hidden="true"
          />
        </div>
      </section>
    </SectionReveal>
  );
}
