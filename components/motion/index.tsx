"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "motion/react";

export const motionViewport = { once: true, amount: 0.15 } as const;
export const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" } } };
export const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.65, ease: "easeOut" } } };
export const fadeScale: Variants = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: "easeOut" } } };
export const staggerChildren: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

type RevealProps = { children: ReactNode; className?: string; delay?: number; variant?: Variants; immediate?: boolean };
export function Reveal({ children, className, delay = 0, variant = fadeUp, immediate = false }: RevealProps) {
  const reduced = useReducedMotion();
  const transition = reduced ? { duration: 0 } : { delay };
  return <motion.div className={className} variants={variant} initial={reduced ? false : "hidden"} {...(immediate ? { animate: "visible" } : { whileInView: "visible", viewport: motionViewport })} transition={transition}>{children}</motion.div>;
}

export function Stagger({ children, className, immediate = false }: Omit<RevealProps, "delay" | "variant">) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={staggerChildren} initial={reduced ? false : "hidden"} {...(immediate ? { animate: "visible" } : { whileInView: "visible", viewport: motionViewport })}>{children}</motion.div>;
}

type CounterProps = { value: number; prefix?: string; suffix?: string; duration?: number; formatter?: (value: number) => string; className?: string };
export function Counter({ value, prefix = "", suffix = "", duration = 1.7, formatter, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame = 0;
    let startedAt: number | undefined;
    const tick = (now: number) => {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / (duration * 1000), 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, reduced, value]);

  const displayedCount = reduced ? value : count;
  const formatted = formatter ? formatter(displayedCount) : String(displayedCount);
  return <span ref={ref} className={className}>{prefix}{formatted}{suffix}</span>;
}
