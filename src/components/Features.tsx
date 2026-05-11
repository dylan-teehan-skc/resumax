"use client";

import { StaggerContainer, HoverCard } from "./motion";

const FEATURES = [
  {
    title: "ATS Keyword Mapping",
    description:
      "Reverse-engineer recruiter filters. We identify missing technical signals that cause auto-rejections.",
    icon: (
      <path
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
  {
    title: "Engineering Impact Scoring",
    description:
      "We audit your bullet points for quantifiable scale, architectural complexity, and business ROI.",
    icon: (
      <path
        d="M13 10V3L4 14h7v7l9-11h-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
  {
    title: "LaTeX/PDF Formatting",
    description:
      "Export industry-standard, single-column templates that parse perfectly across Greenhouse, Lever, and Workday.",
    icon: (
      <path
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
] as const;

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-section" id="features">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-4 tracking-tight text-text-primary">
          Technical Auditing.
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Get an instant, high-fidelity audit of your resume against Tier-1
          engineering benchmarks. We audit your experience using real-world
          engineering rubrics and benchmarks from top-tier firms like Amazon,
          Stripe, and Intercom.
        </p>
      </div>

      <StaggerContainer className="grid md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <HoverCard key={feature.title}>
            <div className="glass-card p-card rounded-2xl relative group hover:border-neon-green-30 transition-all h-full">
              <div className="w-12 h-12 bg-neon-green-10 rounded-xl flex items-center justify-center mb-6 text-neon-green">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </HoverCard>
        ))}
      </StaggerContainer>
    </section>
  );
}
