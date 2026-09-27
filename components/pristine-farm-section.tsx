"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion";

const sections = [
  { tab: "The Farm", eyebrow: "A carefully managed environment", title: "Thoughtful conditions for exceptional caviar.", description: "Pristine brings the natural rhythm of sturgeon farming together with deliberate care for the water and surroundings that sustain it.", bullets: ["Quality-led aquaculture practices", "Controlled water environment", "Purposeful production, from source to selection"], cta: "Explore the farm", image: "/images/caviar-editorial.png", alt: "Caviar presented over ice" },
  { tab: "Caviar", eyebrow: "Pristine selection", title: "Exceptional caviar, carefully considered.", description: "From selection to final presentation, every detail is handled with the same attention to quality that defines the Pristine name.", bullets: ["Premium caviar selection", "Careful handling and presentation", "Consistent attention to quality"], cta: "Explore caviar", image: "/images/caviar-editorial.png", alt: "Pristine caviar selection" },
  { tab: "Aquaculture", eyebrow: "Modern aquaculture", title: "Technology and water working together.", description: "Modern aquaculture depends on careful water management, controlled environments and a deep understanding of the species we raise.", bullets: ["Controlled aquatic environments", "Water recirculation systems", "Responsible farming practices"], cta: "Explore aquaculture", image: "/images/sturgeon-water.png", alt: "Water at Pristine's aquaculture environment" },
  { tab: "Sustainability", eyebrow: "Responsible farming", title: "Growing premium caviar with care for water.", description: "Responsible aquaculture begins with thoughtful resource management and a long-term approach to the environments that support production.", bullets: ["Responsible water management", "Efficient recirculation", "Long-term environmental thinking"], cta: "Our approach", image: "/images/hero-landscape.png", alt: "Green water landscape" },
  { tab: "Quality", eyebrow: "Quality, from source to selection", title: "Precision at every stage.", description: "From the farm environment to final selection, Pristine maintains a careful process designed around consistency, quality and attention to detail.", bullets: ["Controlled production", "Careful selection", "Premium presentation"], cta: "Our quality", image: "/images/caviar-editorial.png", alt: "Premium caviar selection" },
];

export function PristineFarmSection() {
  const [active, setActive] = useState(0);
  const content = sections[active];
  return <section className="pristine-farm" id="farm">
    <div className="pristine-farm-container">
      <Reveal><header className="farm-header"><p className="farm-label"><Sparkles size={13} aria-hidden="true" /> The Pristine Farm</p><h2>Precision aquaculture,<br />from water to caviar.</h2></header></Reveal>
      <div className="farm-tabs" role="tablist" aria-label="Explore Pristine farm topics">
        {sections.map((item, index) => <button key={item.tab} type="button" role="tab" id={`farm-tab-${index}`} aria-selected={active === index} aria-controls="farm-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}>{item.tab}</button>)}
      </div>
      <AnimatePresence mode="wait"><motion.article className="farm-content-card" id="farm-panel" role="tabpanel" aria-labelledby={`farm-tab-${active}`} key={content.tab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -6 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        <div className="farm-card-image"><Image src={content.image} fill sizes="(max-width: 810px) 100vw, 50vw" alt={content.alt} /></div>
        <div className="farm-card-copy"><p className="farm-card-label"><Sparkles size={12} aria-hidden="true" /> {content.eyebrow}</p><h3>{content.title}</h3><p className="farm-card-description">{content.description}</p><ul>{content.bullets.map((bullet) => <li key={bullet}><Sparkles size={12} aria-hidden="true" />{bullet}</li>)}</ul><a href="#discover" className="farm-card-button">{content.cta}<ArrowUpRight size={14} /></a></div>
      </motion.article></AnimatePresence>
    </div>
  </section>;
}
