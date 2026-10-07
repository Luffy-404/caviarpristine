import { ArrowUpRight } from "lucide-react";
import { IntroAndApproachSection } from "@/components/intro-and-approach-section";
import { OurDirectionSection } from "@/components/our-direction-section";
import { PristineStoryVideo } from "@/components/pristine-story-video";
import { Footer } from "@/components/footer";
import { PristineFarmSection } from "@/components/pristine-farm-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { EnquirySection, OrderingAndQualitySections, ProductAndAudienceSections, SturgeonAndConsultancySections } from "@/components/migrated-content-sections";
import { CharacterReveal, fadeUp, Reveal, Stagger } from "@/components/motion";

const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">✦ &nbsp; {children}</p>;

export default function Home() {
 return <main>
  <SiteHeader />
  <section className="hero" id="top" aria-label="Pristine Caviar film"><div className="hero-video" aria-hidden="true"><iframe src="https://www.youtube.com/embed/3yhlUdGkA44?autoplay=1&mute=1&loop=1&playlist=3yhlUdGkA44&controls=0&playsinline=1&rel=0&disablekb=1&fs=0" title="Pristine Caviar film" allow="autoplay; encrypted-media; picture-in-picture" tabIndex={-1} style={{ pointerEvents: "none" }} /></div><div className="hero-overlay"/><Stagger className="hero-copy" immediate><Reveal variant={fadeUp}><Eyebrow>Pristine Caviar · Abu Dhabi</Eyebrow></Reveal><Reveal><h1><CharacterReveal text="Caviar, crafted in Abu Dhabi." /></h1></Reveal><Reveal><p>Premium UAE-produced caviar, sturgeon and aquaculture expertise for trade, hospitality, retail and private customers.</p></Reveal><Reveal><div className="hero-actions"><a className="button" href="#caviar">Explore the collection<ArrowUpRight size={14}/></a><a href="#enquire">Start a conversation</a></div></Reveal></Stagger></section>
  <IntroAndApproachSection />
  <OurDirectionSection />
  <PristineStoryVideo />
  <ProductAndAudienceSections />
  <PristineFarmSection />
  <SturgeonAndConsultancySections />
  <OrderingAndQualitySections />
  <CaseStudiesSection />
  <TestimonialsSection />
  <EnquirySection />
  <FaqSection />
  <Footer />
 </main>;
}
