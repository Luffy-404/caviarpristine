import Image from "next/image";
import { Droplets, Fish, Sparkles } from "lucide-react";

const values = [
  { label: "Controlled farming", Icon: Fish },
  { label: "Responsible water use", Icon: Droplets },
  { label: "Premium quality", Icon: Sparkles },
];

export function IntroAndApproachSection() {
  return (
    <section className="pristine-approach" id="caviar">
      <div className="approach-content">
        <Sparkles className="approach-mark approach-reveal approach-reveal-mark" aria-hidden="true" size={21} strokeWidth={1.1} />
        <p className="approach-pill approach-reveal approach-reveal-pill">Our approach</p>
        <h2 className="approach-reveal approach-reveal-heading">
          At Pristine, we are redefining premium aquaculture through
          <span> quality, technology and responsible farming.</span>
        </h2>
        <p className="approach-description approach-reveal approach-reveal-description">
          From carefully managed aquaculture to exceptional caviar, we combine
          controlled farming, water recirculation and meticulous production.
        </p>

        <div className="approach-images">
          <figure className="approach-card approach-card-one"><Image src="/images/hero-landscape.png" alt="Green water landscape around the Pristine farm" fill sizes="(max-width: 700px) 100vw, 30vw" /></figure>
          <figure className="approach-card approach-card-two"><Image src="/images/sturgeon-water.png" alt="Clear water at a controlled aquatic environment" fill sizes="(max-width: 700px) 100vw, 30vw" /></figure>
          <figure className="approach-card approach-card-three"><Image src="/images/caviar-editorial.png" alt="Caviar selected for Pristine's collection" fill sizes="(max-width: 700px) 100vw, 30vw" /></figure>
        </div>

        <a className="approach-button" href="#discover">Discover Pristine ↗</a>

        <div className="approach-values">
          {values.map(({ label, Icon }) => <div key={label}><Icon aria-hidden="true" size={18} strokeWidth={1.1} /><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
