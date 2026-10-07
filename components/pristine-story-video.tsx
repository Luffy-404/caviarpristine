"use client";

import { CharacterReveal, Reveal, videoReveal } from "@/components/motion";

const youtubeFilmUrl = "https://www.youtube.com/watch?v=1qG0osLDr0A";
const cloudinaryFilmUrl = "https://res.cloudinary.com/qm4mozzo/video/upload/v1791355966/vidssave.com_Pristine_Farm_CEO_480P.mp4";

export function PristineStoryVideo() {
  return <section className="pristine-story-video" aria-labelledby="pristine-story-heading"><div className="pristine-story-video-shell"><Reveal><p className="pristine-story-eyebrow">Discover Pristine</p></Reveal><h2 id="pristine-story-heading"><CharacterReveal text="Our story, in motion." /></h2><Reveal className="pristine-story-frame ceo-video-frame" variant={videoReveal} delay={.16}><div className="pristine-story-video-background" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src={cloudinaryFilmUrl} type="video/mp4" /></video></div><span className="pristine-story-overlay" /></Reveal><div className="pristine-story-caption"><span>Watch the film on YouTube.</span><a href={youtubeFilmUrl} target="_blank" rel="noreferrer">Watch on YouTube ↗</a></div></div></section>;
}
