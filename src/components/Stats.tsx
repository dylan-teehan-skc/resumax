"use client";

import { SectionReveal, StaggerContainer, CountUp } from "./motion";

const STATS = [
  { value: 75, suffix: "%", label: "of resumes never reach a human reviewer" },
  { value: 250, suffix: "+", label: "applications per job posting on average" },
  { value: 3, suffix: "x", label: "more callbacks with an optimized resume" },
  { value: 7, suffix: "%", label: "of Big Tech hires are now new grads (down from 32%)" },
] as const;

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-section">
      <SectionReveal>
        <p className="text-center text-xs font-bold text-text-faint uppercase tracking-[0.4em] mb-12">
          The numbers don&apos;t lie
        </p>
      </SectionReveal>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-neon-green font-headline mb-2">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs md:text-sm text-text-muted font-medium leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
}
