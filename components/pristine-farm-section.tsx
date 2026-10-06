"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion";

type FarmCard = { image: string; alt: string; label: string };

const careCards: FarmCard[] = [
  { image: "/images/farm-care-hands-on.jpg", alt: "A team member caring for sturgeon in an indoor tank", label: "Hands-on care for our sturgeon" },
  { image: "/images/farm-care-inspection.jpg", alt: "A team member inspecting a sample under a microscope", label: "A closer look at every detail" },
  { image: "/images/farm-care-hatchery.jpg", alt: "Sturgeon eggs in hatchery equipment", label: "Care from the earliest stages" },
];
const infrastructureCards: FarmCard[] = [
  { image: "/images/farm-infrastructure-systems.jpg", alt: "Integrated pipework and equipment inside the farm", label: "Integrated farm systems" },
  { image: "/images/farm-infrastructure-environment.jpg", alt: "Overhead equipment in the controlled indoor environment", label: "A controlled indoor environment" },
  { image: "/images/farm-infrastructure-operations.jpg", alt: "Operational equipment above farm tanks", label: "The detail behind daily operations" },
];

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="farm-eyebrow"><span aria-hidden="true" />{children}</p>; }
function FarmCards({ cards }: { cards: FarmCard[] }) { return <div className="farm-card-grid">{cards.map((card, index) => <Reveal key={card.label} delay={index * .07}><motion.article className="farm-editorial-card" whileHover={{ y: -4 }} transition={{ duration: .25 }}><div className="farm-editorial-image"><Image src={card.image} alt={card.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" /></div><div className="farm-editorial-caption"><p>{card.label}</p><span className="farm-arrow" aria-hidden="true"><ArrowRight size={14} /></span></div></motion.article></Reveal>)}</div>; }

export function PristineFarmSection() {
  return <section className="pristine-farm" id="farm"><div className="farm-contour farm-contour-top" aria-hidden="true" /><div className="pristine-farm-container">
    <div className="farm-intro"><Reveal><div className="farm-intro-copy"><Eyebrow>Our farm · UAE</Eyebrow><h2>The farm is part<br />of the luxury.</h2><p>At Pristine Caviar, quality begins at our farm in the UAE, where controlled aquatic farming, traceability, and careful handling, come together to support consistent and every stage.</p><div className="farm-copy-rule" /><p className="farm-approved-statement">Largely produced in Abu Dhabi at the only review center farm in the GCC.</p></div></Reveal><Reveal delay={.1}><figure className="farm-hero-photo"><Image src="/images/farm-intro.jpg" alt="Indoor sturgeon tanks at the Pristine farm in the UAE" fill sizes="(max-width: 800px) 100vw, 52vw" /><figcaption>Inside our farm in the UAE</figcaption></figure></Reveal></div>
    <section className="farm-block farm-care"><div className="farm-block-heading"><div><Eyebrow>Care at every stage</Eyebrow><h3>People. Process. Precision.</h3></div><p>From hands-on care to scientific checks, every stage is guided by experience and attention to detail.</p></div><FarmCards cards={careCards} /></section>
    <section className="farm-block farm-infrastructure"><div className="farm-block-heading"><div><Eyebrow>Our infrastructure</Eyebrow><h3>Built around the farm.</h3></div><p>Our integrated systems and carefully designed infrastructure support a healthy environment for our sturgeon.</p></div><FarmCards cards={infrastructureCards} /></section>
    <section className="farm-block farm-film-section"><div className="farm-block-heading"><div><Eyebrow>A closer look</Eyebrow><h3>Step inside our farm.</h3></div><p>Take a closer look at how our farm in the UAE operates, from our systems to our sturgeon.</p></div><a className="farm-film" href="https://www.youtube.com/watch?v=CUBzeGdRuHU" target="_blank" rel="noopener noreferrer" aria-label="Watch Pristine Caviar: Our fish farm on YouTube"><Image src="/images/farm-intro.jpg" alt="View inside the Pristine Caviar farm" fill sizes="(max-width: 1280px) 100vw, 1120px" /><span className="farm-film-shade" /><span className="farm-play"><Play size={22} fill="currentColor" /></span><span className="farm-film-title">Pristine Caviar — Our fish farm<small>Watch the video</small></span></a></section>
  </div></section>;
}
