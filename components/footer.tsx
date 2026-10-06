import { Droplets } from "lucide-react";

const pages = [["Home", "#top"], ["Caviar", "#caviar"], ["Sturgeon", "#sturgeon"], ["Consultancy", "#consultancy"], ["Who we serve", "#audiences"], ["Our farm", "#farm"], ["Contact", "#contact"]] as const;

export function Footer() {
  return (
    <footer className="pristine-footer" id="footer">
      <div className="footer-panels">
        <section className="footer-brand-card" aria-labelledby="footer-statement">
          <a className="footer-logo" href="#top" aria-label="Pristine home"><Droplets aria-hidden="true" size={26} fill="currentColor" /> PRISTINE<span>®</span></a>
          <div className="footer-subscribe">
            <h2 id="footer-statement">Premium caviar, UAE-farmed sturgeon and aquaculture consultancy from Abu Dhabi.</h2>
            <p>Elegant · Enquiry-led · Multi-audience</p>
          </div>
          <small>© 2026 Pristine Caviar Farm. All rights reserved.</small>
        </section>

        <section className="footer-info-card" aria-label="Pristine information">
          <div className="footer-info pages"><h2>Pages</h2><nav aria-label="Footer navigation"><ul>{pages.map(([page, href]) => <li key={page}><a href={href}>{page}</a></li>)}</ul></nav></div>
          <div className="footer-info address"><h2>Address</h2><p>Mussafah,<br />Abu Dhabi, UAE</p></div>
          <div className="footer-info contact" id="contact"><h2>Contact</h2><p><a href="tel:+97125583621">+971 2 558 3621</a><br /><a href="https://wa.me/971545775900" target="_blank" rel="noreferrer">WhatsApp: +971 54 577 5900</a><br /><a href="mailto:nesrine@pristinecaviarfarm.com">nesrine@pristinecaviarfarm.com</a></p></div>
          <div className="footer-info social">
            <h2>Social media</h2>
            <p><a href="https://www.instagram.com/pristine_caviar/" target="_blank" rel="noreferrer">Instagram ↗</a><br /><a href="https://www.linkedin.com/company/pristine-caviar" target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
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
