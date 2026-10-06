import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IntroAndApproachSection } from "@/components/intro-and-approach-section";
import { OurDirectionSection } from "@/components/our-direction-section";
import { Footer } from "@/components/footer";
import { PristineFarmSection } from "@/components/pristine-farm-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { EnquirySection, OrderingAndQualitySections, ProductAndAudienceSections, SturgeonAndConsultancySections } from "@/components/migrated-content-sections";
import { fadeScale, fadeUp, Reveal, Stagger } from "@/components/motion";

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">✦ &nbsp; {children}</p>;

export default function Home() {
 return <main>
  <SiteHeader />
  <section className="hero" id="top"><Image src="/images/hero-landscape.png" fill priority sizes="100vw" alt="Pristine Caviar's Abu Dhabi farm landscape"/><div className="hero-overlay"/><Stagger className="hero-copy" immediate><Reveal variant={fadeUp}><Eyebrow>Pristine Caviar · Abu Dhabi</Eyebrow></Reveal><Reveal><h1>Caviar, crafted in Abu Dhabi.</h1></Reveal><Reveal><p>Premium UAE-produced caviar, sturgeon and aquaculture expertise for trade, hospitality, retail and private customers.</p></Reveal><Reveal><div className="hero-actions"><a className="button" href="#caviar">Explore the collection<ArrowUpRight size={14}/></a><a href="#enquire">Start a conversation</a></div></Reveal></Stagger><Reveal className="float-card" variant={fadeScale} immediate delay={0.45}><Image src="/images/caviar-editorial.png" width={128} height={112} alt="Pristine caviar"/><div><Eyebrow>UAE Produced</Eyebrow><strong>Farm to tin,<br/>with control.</strong><span>Five caviar varieties</span></div></Reveal></section>
  <IntroAndApproachSection />
  <OurDirectionSection />
  <ProductAndAudienceSections />
  <PristineFarmSection />
  <SturgeonAndConsultancySections />
  <OrderingAndQualitySections />
  <CaseStudiesSection />
  <TestimonialsSection />
  <EnquirySection />
  <Footer />
 </main>;
}
