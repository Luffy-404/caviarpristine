import { Droplets } from "lucide-react";

const pages = ["Home", "Farm", "Caviar", "Aquaculture", "Sustainability", "Journal", "Contact"];

export function Footer() {
  return (
    <footer className="pristine-footer" id="footer">
      <div className="footer-panels">
        <section className="footer-brand-card" aria-labelledby="footer-statement">
          <a className="footer-logo" href="#top" aria-label="Pristine home"><Droplets aria-hidden="true" size={26} fill="currentColor" /> PRISTINE<span>®</span></a>
          <div className="footer-subscribe">
            <h2 id="footer-statement">We believe exceptional caviar starts with responsible aquaculture.</h2>
            <p>Join the Pristine community.</p>
            <form className="footer-form" aria-label="Newsletter subscription">
              <label className="sr-only" htmlFor="footer-email">Your email</label>
              <input id="footer-email" name="email" type="email" placeholder="Your email" autoComplete="email" />
              <button type="button">Subscribe</button>
            </form>
          </div>
          <small>© 2026 Pristine Caviar Farm. All rights reserved.</small>
        </section>

        <section className="footer-info-card" aria-label="Pristine information">
          <div className="footer-info pages"><h2>Pages</h2><nav aria-label="Footer navigation"><ul>{pages.map((page) => <li key={page}><a href={page === "Home" ? "#top" : `#${page.toLowerCase()}`}>{page}</a></li>)}</ul></nav></div>
          <div className="footer-info address"><h2>Address</h2><p>Location details<br />coming soon.</p></div>
          <div className="footer-info contact"><h2>Contact</h2><p>Contact details<br />coming soon.</p></div>
          <div className="footer-info social">
            <h2>Social media</h2>
            <div className="footer-social-links" aria-label="Social media">
              <span role="img" aria-label="Facebook">f</span>
              <span role="img" aria-label="Instagram">◎</span>
              <span role="img" aria-label="YouTube">▶</span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
