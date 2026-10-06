import type { Metadata } from "next";
import { NavigationDestinationPage } from "@/components/navigation-destination-page";
export const metadata: Metadata = { title: "Pristine Sturgeon", description: "Sturgeon supply, selection guidance and aquaculture expertise from Pristine." };
export default function Page() { return <NavigationDestinationPage eyebrow="Sturgeon" title="A considered approach to sturgeon supply." copy="Pristine supports direct conversations about sturgeon requirements, selection and aquaculture expertise." image="/images/sturgeon-water.webp" sections={[{ id: "selection", eyebrow: "Selection guidance", title: "A direct route to the right selection.", copy: "Tell us about your intended format, market or project and the Pristine team will guide the conversation." }]} />; }
