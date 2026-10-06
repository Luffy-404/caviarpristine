"use client";

import { CharacterReveal, Reveal, videoReveal } from "@/components/motion";

const videoId = "1qG0osLDr0A";
export function PristineStoryVideo() {
  return <section className="pristine-story-video" aria-labelledby="pristine-story-heading"><div className="pristine-story-video-shell"><Reveal><p className="pristine-story-eyebrow">Discover Pristine</p></Reveal><h2 id="pristine-story-heading"><CharacterReveal text="Our story, in motion." /></h2><Reveal className="pristine-story-frame ceo-video-frame" variant={videoReveal} delay={.16}><div className="pristine-story-video-background" aria-hidden="true"><iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&rel=0&disablekb=1&fs=0`} title="Pristine Caviar story film" allow="autoplay; encrypted-media; picture-in-picture" tabIndex={-1} style={{ pointerEvents: "none" }} /></div><span className="pristine-story-overlay" /></Reveal><div className="pristine-story-caption"><span>Watch the film on YouTube.</span><a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a></div></div></section>;
}
