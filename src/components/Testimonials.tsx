"use client";

import Image from "next/image";
import { SectionReveal, StaggerContainer, HoverCard } from "./motion";

const TESTIMONIALS = [
  {
    name: "Josh S.",
    role: "SWE",
    company: "Stripe",
    logo: "/logos/stripe.svg",
    text: "I was mass-applying with the same resume for 3 months. RESUMAX rewrote my bullet points and I got 4 callbacks in the first week. Landed Stripe a month later.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Backend Engineer",
    company: "Datadog",
    logo: "/logos/datadog.svg",
    text: "The ATS keyword mapping alone was worth it. I had no idea my resume was missing half the signals recruiters filter for.",
    stars: 5,
  },
  {
    name: "Priya R.",
    role: "Full Stack",
    company: "Google",
    logo: "/logos/google.svg",
    text: "Went from 'built features' to quantified impact statements. Response rate jumped from ~2% to over 15%.",
    stars: 5,
  },
] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-neon-green"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-section">
      <SectionReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-text-primary">
            Real results.
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Engineers who stopped guessing and started getting interviews.
          </p>
        </div>
      </SectionReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <HoverCard key={t.name}>
            <div className="border-l-2 border-neon-green/40 pl-6 pr-2 py-6 h-full flex flex-col">
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={t.logo}
                  alt={`${t.company} logo`}
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain brightness-0 invert opacity-40"
                />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role} @ {t.company}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-[15px] leading-relaxed mb-5 flex-1 italic">
                {t.text}
              </p>

              {/* Stars */}
              <Stars count={t.stars} />
            </div>
          </HoverCard>
        ))}
      </StaggerContainer>
    </section>
  );
}
