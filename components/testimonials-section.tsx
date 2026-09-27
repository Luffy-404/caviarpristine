"use client";

import { fadeScale, Reveal, Stagger } from "@/components/motion";

const testimonials = [
  { name: "Emma Carter", role: "Logistics Manager", quote: "Eco-Supply cut our logistics emissions while keeping every delivery on time — a true sustainability partner.", initials: "EC" },
  { name: "Ethan Wilson", role: "Supply Head", quote: "Highly recommended for businesses focused on cutting emissions and driving true sustainability.", initials: "EW" },
  { name: "James Turner", role: "Green Advisor", quote: "Thanks to Eco-Supply Transportation, our last-mile deliveries are now significantly more sustainable.", initials: "JT" },
  { name: "Olivia Brown", role: "Environment Lead", quote: "It’s inspiring to work with a logistics partner that shares our mission for a cleaner and greener planet.", initials: "OB" },
  { name: "David Lee", role: "Supply Chain Head", quote: "Eco-Supply delivers efficiency and sustainability together, without compromising performance.", initials: "DL" },
  { name: "Noah Brooks", role: "Operations Director", quote: "They helped us transition to cleaner logistics without compromising speed or reliability.", initials: "NB" },
];

export function TestimonialsSection() {
  return <section className="testimonials" aria-labelledby="testimonials-heading"><div className="testimonials-shell">
    <Reveal className="testimonials-heading"><p>What our eco-supply clients say</p><h2 id="testimonials-heading">What our eco-supply<br /><span>clients</span> say</h2><div>Trusted by forward-thinking businesses<br />for sustainable logistics excellence.</div></Reveal>
    <Stagger className="testimonials-grid">{testimonials.map(({ name, role, quote, initials }) => <Reveal key={name} variant={fadeScale}><article className="testimonial-card"><header><span className="testimonial-avatar" role="img" aria-label={`Placeholder portrait for ${name}`}>{initials}</span><div><h3>{name}</h3><p>{role}</p></div></header><blockquote>{quote}</blockquote></article></Reveal>)}</Stagger>
  </div></section>;
}
