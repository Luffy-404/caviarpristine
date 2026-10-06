import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./navbar.css";
import "./hero.css";
import "./type.css";
import "./intro-and-approach.css";
import "./footer.css";
import "./pristine-farm.css";
import "./pristine-farm-refinement.css";
import "./capabilities-refinement.css";
import "./why-pristine.css";
import "./why-pristine-refinement.css";
import "./motion.css";
import "./case-studies.css";
import "./case-studies-desktop.css";
import "./testimonials.css";
import "./mobile.css";
import "./footer-mobile.css";
import "./faq.css";
import "./button-interactions.css";
import "./navbar-desktop-geometry.css";
import "./footer-redesign.css";
import "./final-motion.css";
import "./content-migration.css";
import "./quality-editorial.css";
import "./our-direction.css";
import "./sturgeon-editorial.css";
import "./our-direction.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pristine Caviar — Crafted in Abu Dhabi",
  description: "Pristine Caviar — premium UAE-produced caviar and sturgeon for trade, hospitality, retail and private customers.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
