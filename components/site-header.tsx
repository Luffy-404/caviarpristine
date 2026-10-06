"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["The Farm", "/farm"], ["Caviar", "/caviar"], ["Aquaculture", "/aquaculture"], ["Sustainability", "/sustainability"], ["Quality", "/quality"], ["Contact", "/contact"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);

  return <header className={`nav-wrap${open ? " nav-is-open" : ""}`}><div className="nav"><div className="nav-main"><a className="brand" href="/">PRISTINE<span>®</span></a><nav>{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav></div><div className="nav-cta-shell"><a href="/contact" className="button">CONTACT <ArrowUpRight size={14} /></a></div><button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={() => setOpen(false)}><motion.div className="mobile-menu-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} transition={{ duration: 0.45, ease: "easeOut" }} onClick={event => event.stopPropagation()}><p>Explore Pristine</p>{links.map(([label, href], index) => <motion.a key={label} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.07, duration: 0.35, ease: "easeOut" }}><small>0{index + 1}</small>{label}<ArrowUpRight size={19} /></motion.a>)}</motion.div></motion.div>}</AnimatePresence>
  </header>;
}
