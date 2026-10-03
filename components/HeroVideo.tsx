"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  posterAlt: string;
};

/**
 * Hero background video.
 *
 * The poster image renders first so the hero never shows an empty box while the
 * video loads, and it stays as the permanent fallback when autoplay is refused
 * (iOS Low Power Mode) or the user asks for reduced motion. Playback is deferred
 * until the element is actually on screen so the video never competes with the
 * initial page render.
 */
export function HeroVideo({ src, poster, posterAlt }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setFailed(true);
      return;
    }

    let observer: IntersectionObserver | undefined;

    const start = () => {
      video.play().catch(() => setFailed(true));
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              start();
            } else {
              video.pause();
            }
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(video);
    } else {
      start();
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="tb-hero-media">
      <Image
        className={`tb-hero-poster${ready && !failed ? " is-hidden" : ""}`}
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
      />
      <video
        ref={videoRef}
        className={`tb-hero-video${ready && !failed ? " is-visible" : ""}`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
