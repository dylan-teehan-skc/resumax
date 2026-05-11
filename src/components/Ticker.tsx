"use client";

import Image from "next/image";
import { SectionReveal } from "./motion";

const COMPANIES = [
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Intercom", logo: "/logos/intercom.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Datadog", logo: "/logos/datadog.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
] as const;

function TickerItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-3 opacity-40 hover:opacity-70 transition-opacity shrink-0">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={28}
        height={28}
        className="h-7 w-7 object-contain brightness-0 invert"
      />
      <span className="text-xl font-bold text-text-primary tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Ticker() {
  return (
    <SectionReveal>
      <section className="max-w-full overflow-hidden mb-section border-y border-glass-border py-12 bg-glass">
        <p className="text-center text-xs font-bold text-text-faint uppercase tracking-[0.4em] mb-12">
          Helping candidates land offers at
        </p>
        <div className="relative flex items-center overflow-hidden">
          <div
            className="animate-ticker gap-20 md:gap-28"
            aria-label="Companies where our users have landed offers"
          >
            {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map(
              ({ name, logo }, i) => (
                <TickerItem key={`${name}-${i}`} name={name} logo={logo} />
              )
            )}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
