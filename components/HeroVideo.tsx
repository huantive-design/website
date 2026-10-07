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
  // The <source> is withheld until the hero is on screen and the page has
  // settled, so a 3.7 MB download never competes with LCP or first input.
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setFailed(true);
      return;
    }

    // Respect metered or slow connections: keep the still poster instead.
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData || (connection?.effectiveType && /(^|-)2g$/.test(connection.effectiveType))) {
      setFailed(true);
      return;
    }

    let observer: IntersectionObserver | undefined;
    let cancelArm: (() => void) | undefined;
    let onVisible: (() => void) | undefined;

    const arm = () => {
      if (cancelArm) return;
      // requestIdleCallback never fires in a backgrounded tab, which would leave
      // the video permanently unloaded. Wait for visibility first, then idle.
      if (document.visibilityState !== "visible") {
        onVisible = () => {
          document.removeEventListener("visibilitychange", onVisible!);
          onVisible = undefined;
          arm();
        };
        document.addEventListener("visibilitychange", onVisible);
        cancelArm = () => {
          if (onVisible) document.removeEventListener("visibilitychange", onVisible);
        };
        return;
      }
      if (typeof window.requestIdleCallback === "function") {
        // The timeout guarantees the callback runs even on a busy main thread.
        const handle = window.requestIdleCallback(() => setArmed(true), { timeout: 2000 });
        cancelArm = () => window.cancelIdleCallback?.(handle);
      } else {
        const handle = window.setTimeout(() => setArmed(true), 300);
        cancelArm = () => window.clearTimeout(handle);
      }
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              arm();
              if (video.readyState >= 2) video.play().catch(() => setFailed(true));
            } else {
              video.pause();
            }
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(video);
    } else {
      arm();
    }

    return () => {
      observer?.disconnect();
      cancelArm?.();
    };
  }, []);

  // Adding a <source> to a live <video> does not trigger a fetch on its own.
  useEffect(() => {
    if (!armed) return;
    videoRef.current?.load();
  }, [armed]);

  return (
    <div className="tb-hero-media">
      <Image
        className={`tb-hero-poster${ready && !failed ? " is-hidden" : ""}`}
        src={poster}
        alt={posterAlt}
        fill
        priority
        fetchPriority="high"
        /* Source is 1620px wide; capping the candidate list here stops the
           preload scanner requesting an upscaled 3840w variant as the LCP image. */
        sizes="(max-width: 980px) 100vw, 1620px"
      />
      <video
        ref={videoRef}
        className={`tb-hero-video${ready && !failed ? " is-visible" : ""}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={(event) => {
          setReady(true);
          event.currentTarget.play().catch(() => setFailed(true));
        }}
        onError={() => setFailed(true)}
      >
        {armed ? <source src={src} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
