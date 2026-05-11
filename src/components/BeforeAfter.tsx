"use client";

import { SectionReveal } from "./motion";

const EXAMPLES = [
  {
    before: "Worked on backend services and helped with deployments",
    after: "Architected event-driven microservice processing 2.3M requests/day on AWS ECS, reducing p99 latency from 820ms to 340ms",
    tag: "Impact quantification",
  },
  {
    before: "Used React to build frontend features for the team",
    after: "Led migration of 47 legacy jQuery views to React 18 + TypeScript, cutting bundle size by 62% and improving Core Web Vitals LCP from 4.2s to 1.1s",
    tag: "Technical specificity",
  },
  {
    before: "Improved database performance and fixed bugs",
    after: "Optimized 12 critical PostgreSQL queries using composite indexes and query plan analysis, reducing avg response time by 73% across 3 customer-facing endpoints",
    tag: "Measurable outcomes",
  },
] as const;

export default function BeforeAfter() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-section">
      <SectionReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-text-primary">
            Before &amp; After.
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto">
            Generic bullet points get you ghosted. RESUMAX rewrites them with
            the specificity that FAANG hiring managers actually look for.
          </p>
        </div>
      </SectionReveal>

      <div className="flex flex-col gap-6">
        {EXAMPLES.map((ex) => (
          <SectionReveal key={ex.tag}>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-glass-border">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-terminal-red mb-3">
                    Before
                  </span>
                  <p className="text-text-muted font-mono text-sm leading-relaxed line-through decoration-terminal-red/30">
                    {ex.before}
                  </p>
                </div>
                {/* After */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-neon-green">
                      After
                    </span>
                    <span className="text-[10px] font-mono text-text-faint uppercase tracking-wider px-2 py-0.5 rounded-full border border-glass-border">
                      {ex.tag}
                    </span>
                  </div>
                  <p className="text-text-primary font-mono text-sm leading-relaxed">
                    {ex.after}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
