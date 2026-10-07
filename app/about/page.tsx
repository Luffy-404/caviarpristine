import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
export const metadata: Metadata = { title: "About Pristine Caviar", description: "Discover Pristine Caviar and its controlled aquaculture operation in Abu Dhabi." };
export default function Page() { return <AboutPage />; }
