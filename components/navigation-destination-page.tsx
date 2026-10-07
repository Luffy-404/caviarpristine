import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { CharacterReveal, Reveal, Stagger } from "@/components/motion";

type DestinationPageProps = { eyebrow: string; title: string; copy: string; image: string; sections: { id?: string; eyebrow: string; title: string; copy: string }[] };

export function NavigationDestinationPage({ eyebrow, title, copy, image, sections }: DestinationPageProps) {
  return <><SiteHeader /><main><section className="editorial-hero inner-editorial-hero"><Image src={image} alt="" fill priority sizes="100vw" /><div className="editorial-hero-shade" /><Stagger className="editorial-shell editorial-hero-copy" immediate><Reveal><p className="eyebrow">{eyebrow}</p></Reveal><Reveal delay={.1}><h1><CharacterReveal text={title} /></h1></Reveal><Reveal delay={.2}><p>{copy}</p></Reveal><Reveal delay={.3}><a className="button" href="/contact">Make an enquiry <ArrowUpRight size={14} /></a></Reveal></Stagger></section>{sections.map(section => <section className="editorial-section" id={section.id} key={section.title}><div className="editorial-shell"><p className="eyebrow">{section.eyebrow}</p><h2><CharacterReveal text={section.title} /></h2><p>{section.copy}</p></div></section>)}</main><Footer /></>;
}
