"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/* ── Shared easing ── */
type CubicBezier = [number, number, number, number];
const EASE_OUT: CubicBezier = [0.25, 0.46, 0.45, 0.94];
const EASE_EXPO: CubicBezier = [0.76, 0, 0.24, 1];
const SPRING_CARD = { type: "spring" as const, stiffness: 300, damping: 22 };
const SPRING_BUTTON = { type: "spring" as const, stiffness: 400, damping: 20 };

/* ── Blur-slide-up entrance (the core micro-interaction) ── */
const blurSlideUp: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 28 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

const blurSlideUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/* ── Section entrance wrapper ── */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={reduced ? blurSlideUpReduced : blurSlideUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered children container ── */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.09,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child) =>
        child ? (
          <motion.div
            variants={reduced ? blurSlideUpReduced : blurSlideUp}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {child}
          </motion.div>
        ) : null
      )}
    </motion.div>
  );
}

/* ── Word-by-word headline animation ── */
export function WordReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={`flex flex-wrap justify-center gap-y-[0.1em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          initial={
            reduced
              ? { opacity: 0 }
              : { filter: "blur(10px)", opacity: 0, y: 40 }
          }
          animate={
            inView
              ? reduced
                ? { opacity: 1 }
                : {
                    filter: ["blur(10px)", "blur(4px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [40, -4, 0],
                  }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: delay + (i * 100) / 1000,
            times: [0, 0.5, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Card hover ── */
export function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -7, scale: 1.018 }}
      transition={SPRING_CARD}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Button with press feedback ── */
export function PressButton({
  children,
  className = "",
  type = "button",
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING_BUTTON}
      className={className}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

/* ── Line reveal (decorative dividers) ── */
export function LineReveal({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-glass-border ${className}`}
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={
        reduced
          ? { duration: 0.3 }
          : { duration: 0.9, ease: EASE_EXPO }
      }
    />
  );
}

/* ── Number counter ── */
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  className = "",
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
