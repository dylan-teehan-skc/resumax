import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Grid background */}
      <div
        className="fixed inset-0 grid-overlay pointer-events-none"
        style={{ zIndex: "var(--z-background)" }}
        aria-hidden="true"
      />

      <Header />

      <main className="relative" style={{ zIndex: "var(--z-content)" }}>
        <Hero />
        <Terminal />
        <Ticker />
        <div className="py-8" />
        <Features />
        <div className="py-8" />
        <Testimonials />
        <div className="py-8" />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
