import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

type DestinationPageProps = { eyebrow: string; title: string; copy: string; image: string; sections: { id?: string; eyebrow: string; title: string; copy: string }[] };

export function NavigationDestinationPage({ eyebrow, title, copy, image, sections }: DestinationPageProps) {
  return <><SiteHeader /><main><section className="editorial-hero"><Image src={image} alt="" fill priority sizes="100vw" /><div className="editorial-hero-shade" /><div className="editorial-shell editorial-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><a className="button" href="/contact">Make an enquiry <ArrowUpRight size={14} /></a></div></section>{sections.map(section => <section className="editorial-section" id={section.id} key={section.title}><div className="editorial-shell"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p>{section.copy}</p></div></section>)}</main><Footer /></>;
}
