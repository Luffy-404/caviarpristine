"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "motion/react";

export const motionViewport = { once: true, amount: 0.15 } as const;
const editorialEase = [0.22, 1, 0.36, 1] as const;
export const fadeUp: Variants = { hidden: { opacity: 0, y: 38 }, visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: editorialEase } } };
export const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.72, ease: editorialEase } } };
export const fadeScale: Variants = { hidden: { opacity: 0, y: 28, scale: 0.985 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.82, ease: editorialEase } } };
export const collectionCardReveal: Variants = { hidden: { opacity: 0, y: "var(--collection-card-offset, 70px)" }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: editorialEase } } };
export const editorialCopyReveal: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: editorialEase } } };
export const videoReveal: Variants = { hidden: { opacity: 0, y: 35, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: editorialEase } } };
export const imageReveal: Variants = { hidden: { opacity: 0, scale: 1.045 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: editorialEase } } };
export const staggerChildren: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.03 } } };

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

export function RevealImage({ children, className, delay = 0 }: Omit<RevealProps, "variant" | "immediate">) {
  return <Reveal className={className} delay={delay} variant={imageReveal}>{children}</Reveal>;
}

type RevealTextProps = { text: string; className?: string; delay?: number; immediate?: boolean };
export function RevealText({ text, className, delay = 0, immediate = false }: RevealTextProps) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  let characterIndex = 0;
  return <motion.span className={className} aria-label={text} initial="hidden" {...(immediate ? { animate: "visible" } : { whileInView: "visible", viewport: motionViewport })} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.022, delayChildren: delay } } }}>{words.map((word, wordIndex) => <span key={`${word}-${wordIndex}`} aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>{[...word].map((character) => { const key = `${character}-${characterIndex++}`; return <span key={key} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}><motion.span style={{ display: "inline-block" }} variants={{ hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: "0%", transition: { duration: 0.52, ease: editorialEase } } }}>{character}</motion.span></span>; })}{wordIndex < words.length - 1 ? " " : null}</span>)}</motion.span>;
}

export function CharacterReveal({ text, className }: Pick<RevealTextProps, "text" | "className">) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  let characterIndex = 0;
  return <motion.span className={className} aria-label={text} initial="hidden" whileInView="visible" viewport={motionViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}>{words.map((word, wordIndex) => <span key={`${word}-${wordIndex}`} aria-hidden="true"><span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{[...word].map((character) => <span key={`${character}-${characterIndex++}`} style={{ display: "inline-block", height: "1.2em", overflow: "hidden", verticalAlign: "bottom", lineHeight: "1.2em" }}><motion.span style={{ display: "inline-block", lineHeight: "1.2em" }} variants={{ hidden: { opacity: 0, y: "110%" }, visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: editorialEase } } }}>{character}</motion.span></span>)}</span>{wordIndex < words.length - 1 ? " " : null}</span>)}</motion.span>;
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
