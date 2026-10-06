import type { Metadata } from "next";
import { NavigationDestinationPage } from "@/components/navigation-destination-page";
export const metadata: Metadata = { title: "Pristine Journal", description: "Notes from Pristine Caviar in Abu Dhabi." };
export default function Page() { return <NavigationDestinationPage eyebrow="Pristine Journal" title="Notes from the farm, the water and the table." copy="Updates and considered perspectives from Pristine Caviar in Abu Dhabi." image="/images/hero-landscape.webp" sections={[{ eyebrow: "The journal", title: "More from Pristine, soon.", copy: "For enquiries, caviar selection guidance and aquaculture support, the Pristine team is ready to help directly." }]} />; }
