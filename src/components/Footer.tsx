const FOOTER_LINKS = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="RESUMAX home">
          <div className="w-6 h-6 bg-neon-green rounded-sm flex items-center justify-center">
            <svg
              className="w-4 h-4 text-black"
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
          <span className="text-lg font-black tracking-tight text-text-primary">
            RESUMAX
          </span>
        </a>

        {/* Links */}
        <nav
          className="flex gap-10 text-sm text-text-muted font-bold uppercase tracking-widest"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={label}
              className="hover:text-neon-green transition-colors"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs text-text-muted font-mono">
          &copy; 2026 ResuMax AI. Optimized for the 2026 hiring surge.
        </div>
      </div>
    </footer>
  );
}
