"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const faqs = [
  ["What makes Pristine caviar distinctive?", "Pristine caviar is shaped by attentive aquaculture, careful selection and a considered approach to every stage from water to table."],
  ["How are your sturgeon raised?", "Our sturgeon are raised in carefully managed environments designed around water quality, observation and the long-term wellbeing of each fish."],
  ["Do you offer different caviar selections?", "Yes. Our collection includes selections chosen for their individual character, texture and flavour, with guidance available to help find the right fit."],
  ["Where can I enjoy Pristine caviar?", "Availability depends on the selection and your location. Contact our team for current ordering and serving information."],
  ["How should caviar be stored and served?", "Keep caviar chilled, handle it gently and serve it shortly after opening so its texture and flavour can be experienced at their best."],
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-shell">
        <motion.div className="faq-intro" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}>
          <p className="faq-eyebrow">FAQs</p>
          <h2 id="faq-title">Questions about <span>considered caviar.</span></h2>
          <motion.div className="faq-image" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut", delay: reducedMotion ? 0 : 0.12 }}>
            <Image src="/images/hero-landscape.png" fill sizes="(max-width: 767px) 100vw, 48vw" alt="Aerial view of the green landscape surrounding Pristine" />
          </motion.div>
        </motion.div>

        <motion.div className="faq-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.07 } } }}>
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return <motion.article className={`faq-item${isOpen ? " is-open" : ""}`} key={question} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.45, ease: "easeOut" } } }}>
              <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span>{question}</span><span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div id={answerId} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeInOut" }}><p>{answer}</p></motion.div>}
              </AnimatePresence>
            </motion.article>;
          })}
        </motion.div>
      </div>
    </section>
  );
}
