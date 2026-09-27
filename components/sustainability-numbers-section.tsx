"use client";

import { CloudCog, Droplet, MapPin, MoveDown } from "lucide-react";
import { Counter, fadeScale, Reveal, Stagger } from "@/components/motion";

const statistics = [
  { label: "Lower CO2 emissions", value: 40, suffix: "%", Icon: MoveDown },
  { label: "Fuel cost saving", value: 35, suffix: "%", Icon: Droplet },
  { label: "CO₂ emissions cut", value: 500, suffix: "+", Icon: CloudCog },
  { label: "Smart route planning", value: 1000, formatter: (value: number) => value >= 1000 ? "1K" : String(value), Icon: MapPin },
];

export function SustainabilityNumbersSection() {
  return <section className="sustainability-numbers" aria-labelledby="sustainability-heading">
    <div className="container">
      <Reveal className="sustainability-heading"><p className="sustainability-pill">Sustainability in numbers</p><h2 id="sustainability-heading">Driving measurable change across<br />every <span>shipment, route, and partnership.</span></h2></Reveal>
      <Stagger className="sustainability-stat-grid">
        {statistics.map(({ label, value, suffix, formatter, Icon }) => <Reveal key={label} className="sustainability-stat" variant={fadeScale}>
          <p>{label}</p><Icon className="sustainability-icon" aria-hidden="true" strokeWidth={1.3} />
          <Counter value={value} suffix={suffix} formatter={formatter} className="sustainability-value" />
        </Reveal>)}
      </Stagger>
    </div>
  </section>;
}
