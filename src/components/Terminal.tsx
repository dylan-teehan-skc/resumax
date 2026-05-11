"use client";

import { SectionReveal, HoverCard, PressButton } from "./motion";

export default function Terminal() {
  return (
    <SectionReveal>
      <section className="max-w-5xl mx-auto px-6 mb-section" id="benchmarks">
        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative border-neon-green-10">
          {/* Terminal header */}
          <div className="bg-glass border-b border-glass-border px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terminal-red" />
              <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
              <div className="w-3 h-3 rounded-full bg-terminal-green" />
            </div>
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
              resumax-engine-v4.0.2
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal content */}
          <div className="p-8 md:p-16 font-mono">
            <div className="flex flex-col items-center text-center">
              <div className="mb-10">
                <div className="w-20 h-20 bg-neon-green-10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-neon-green-30 shadow-[var(--shadow-neon-inset)]">
                  <svg
                    className="w-10 h-10 text-neon-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 font-headline">
                  Start Your Engineering Audit
                </h3>
                <p className="text-text-secondary max-w-sm mx-auto text-sm">
                  Upload your PDF or paste experience to compare against
                  FAANG-grade hiring rubrics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <HoverCard>
                  <button
                    type="button"
                    aria-label="Upload PDF or DOCX resume"
                    className="flex items-center justify-center gap-3 w-full bg-glass border border-glass-border hover:border-neon-green-50 hover:bg-glass-border transition-all p-8 rounded-2xl cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-neon-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <span className="font-sans font-bold text-text-primary">
                      Upload PDF / DOCX
                    </span>
                  </button>
                </HoverCard>

                <HoverCard>
                  <button
                    type="button"
                    aria-label="Paste resume text"
                    className="flex items-center justify-center gap-3 w-full bg-glass border border-glass-border hover:border-neon-green-50 hover:bg-glass-border transition-all p-8 rounded-2xl cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-neon-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <span className="font-sans font-bold text-text-primary">
                      Paste Resume Text
                    </span>
                  </button>
                </HoverCard>
              </div>

              <div
                className="mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-text-faint font-bold"
                aria-hidden="true"
              >
                <span className="flex h-2 w-2 rounded-full bg-neon-green-50 shadow-[0_0_10px_var(--color-neon-green-50)]" />
                SECURE CLOUD ANALYSIS READY
                <span className="flex h-2 w-2 rounded-full bg-neon-green-50 shadow-[0_0_10px_var(--color-neon-green-50)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
