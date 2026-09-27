import Image from "next/image";
import { ArrowUpRight, Droplets, Fish, Leaf, Waves } from "lucide-react";
import { IntroAndApproachSection } from "@/components/intro-and-approach-section";
import { Footer } from "@/components/footer";
import { PristineFarmSection } from "@/components/pristine-farm-section";
import { WhyPristineSection } from "@/components/why-pristine-section";
import { SustainabilityNumbersSection } from "@/components/sustainability-numbers-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { fadeScale, fadeUp, Reveal, Stagger } from "@/components/motion";

const Button = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => <a href="#discover" className={`button ${dark ? "button-dark" : ""}`}>{children}<ArrowUpRight size={14}/></a>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">✦ &nbsp; {children}</p>;

export default function Home() {
 return <main>
  <SiteHeader />
  <section className="hero" id="top"><Image src="/images/hero-landscape.png" fill priority sizes="100vw" alt="Aerial view of a green water landscape"/><div className="hero-overlay"/><Stagger className="hero-copy" immediate><Reveal variant={fadeUp}><Eyebrow>Pristine Caviar Farm</Eyebrow></Reveal><Reveal><h1>The art of modern aquaculture.</h1></Reveal><Reveal><p>Premium caviar produced with a careful approach to water, sturgeon and quality.</p></Reveal><Reveal><div className="hero-actions"><Button>Discover the farm</Button><a href="#caviar">Explore caviar</a></div></Reveal></Stagger><Reveal className="float-card" variant={fadeScale} immediate delay={0.45}><Image src="/images/caviar-editorial.png" width={128} height={112} alt="Caviar over ice"/><div><Eyebrow>Pristine selection</Eyebrow><strong>Premium caviar,<br/>considered.</strong><span>Explore collection</span></div></Reveal></section>
  <IntroAndApproachSection />
  <PristineFarmSection />
  <section className="capabilities" id="aquaculture"><div className="container"><Reveal><Eyebrow>Our capabilities</Eyebrow><div className="section-title"><h2>Advanced aquaculture &amp; caviar production.</h2><p>Science, observation and patience inform each stage of our process.</p></div></Reveal><Stagger className="cap-grid">{[[Fish,"Controlled aquaculture","A carefully managed home for our sturgeon."],[Waves,"Water recirculation","A considered approach to water stewardship."],[Droplets,"Sturgeon farming","Patient, quality-focused cultivation."],[Leaf,"Caviar production","Selected with the attention the product deserves."]].map(([Icon,title,body]) => {const C=Icon as typeof Fish; return <Reveal key={title as string} variant={fadeScale}><article><C/><h3>{title as string}</h3><p>{body as string}</p><a href="#discover">View detail <ArrowUpRight size={14}/></a></article></Reveal>})}</Stagger></div></section>
  <WhyPristineSection />
  <section className="numbers"><div className="container"><Eyebrow>Our priorities</Eyebrow><h2>Precision at every stage.</h2><div className="stat-grid"><div><span>01</span><strong>Water</strong><p>managed with care</p></div><div><span>02</span><strong>Sturgeon</strong><p>raised with patience</p></div><div><span>03</span><strong>Selection</strong><p>guided by quality</p></div><div><span>04</span><strong>Pristine</strong><p>from farm to table</p></div></div></div></section>
  <SustainabilityNumbersSection />
  <CaseStudiesSection />
  <TestimonialsSection />
  <section className="journal" id="journal"><div className="container"><Reveal><div className="journal-head"><div><Eyebrow>From the Pristine Journal</Eyebrow><h2>Closer to the source.</h2></div><Button>All stories</Button></div></Reveal><Stagger className="journal-grid">{[["Inside the Farm","The rhythm beneath the surface","story-a"],["The Art of Caviar","A moment made to be savoured","story-b"],["Aquaculture","Water, care and continuity","story-c"]].map(([tag,title,cls])=><Reveal key={title} variant={fadeScale}><article><div className={`story ${cls}`}/><Eyebrow>{tag}</Eyebrow><h3>{title}</h3><a href="#discover">Read story <ArrowUpRight size={14}/></a></article></Reveal>)}</Stagger></div></section>
  <section className="discover container" id="discover"><div><Eyebrow>Discover Pristine</Eyebrow><h2>The world of considered caviar.</h2><p>From farm to table, a story shaped by water and time.</p><Button>Explore the farm</Button></div></section>
  <FaqSection />
  <Footer />
 </main>;
}
