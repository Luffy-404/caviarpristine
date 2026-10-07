import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CharacterReveal } from "@/components/motion";

const reasons = [
  ["01", "Controlled environment", "Carefully considered conditions designed around the wellbeing of sturgeon."],
  ["02", "Water in focus", "A responsible approach to water management underpins our work."],
  ["03", "Quality with intention", "Every selection reflects a commitment to precision and patience."],
];

export function WhyPristineSection() {
  return <section className="why-pristine" id="sustainability">
    <div className="why-pristine-container">
      <div className="why-pristine-copy"><p className="why-pristine-label">✦ &nbsp; Why Pristine</p><h2><CharacterReveal text="A modern approach to" /><br /><CharacterReveal text="premium caviar." /></h2><div className="why-pristine-list">{reasons.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
      <div className="why-pristine-media">
        <div className="why-pristine-image"><Image src="/images/hero-landscape.png" fill sizes="(max-width: 810px) 100vw, 45vw" alt="Pristine water landscape and greenery" /></div>
        <a className="why-pristine-cta" href="#farm">EXPLORE THE FARM <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} /></a>
      </div>
    </div>
  </section>;
}
