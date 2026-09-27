"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeScale, Reveal, Stagger } from "@/components/motion";

const cases = [
  { title: <>EcoWare industries smart<br />freight optimization</>, image: "/images/hero-landscape.png", alt: "Waterways and green landscape", metrics: [["200+", "Reduction in logistics costs"], ["15%", "Smart delivery solutions"]] },
  { title: <>UrbanNest home greening<br />last-mile delivery</>, image: "/images/sturgeon-water.png", alt: "Water and lush greenery", metrics: [["50%", "Average reduction in energy costs"], ["15%", "10,000 tons CO₂ reduced"]] },
];

export function CaseStudiesSection() {
  return <section className="case-studies" aria-labelledby="case-studies-title"><div className="case-studies-shell">
    <div className="case-studies-top"><div><Reveal><p className="case-studies-pill">Case studies</p></Reveal><Reveal><h2 id="case-studies-title">Sustainability delivered impactful <span>case<br className="case-heading-break" /> studies</span> from our clients</h2></Reveal></div><Reveal><a href="#journal" className="case-studies-all">See all case studies <ArrowUpRight aria-hidden="true" size={17} /></a></Reveal></div>
    <Stagger className="case-studies-grid">{cases.map(({ title, image, alt, metrics }) => <Reveal key={alt} variant={fadeScale}><article className="case-study-card"><div className="case-study-image"><Image src={image} fill sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1200px) 38vw, 28vw" alt={alt} /></div><div className="case-study-copy"><h3>{title}</h3><div className="case-study-metrics">{metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><a href="#discover" className="case-study-button">View case <ArrowUpRight aria-hidden="true" size={15} /></a></div></article></Reveal>)}</Stagger>
  </div></section>;
}
