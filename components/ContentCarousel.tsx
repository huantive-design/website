"use client";

import { useRef } from "react";

type ContentCarouselProps = {
  label: string;
  children: React.ReactNode;
};

export function ContentCarousel({ label, children }: ContentCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="content-carousel" aria-label={label}>
      <div className="content-carousel-track" ref={trackRef}>
        {children}
      </div>
      <div className="content-carousel-controls" aria-label={`${label} carousel controls`}>
        <button type="button" onClick={() => scrollByPage(-1)} aria-label="Show previous items">
          <i className="arrow-left" />
        </button>
        <button type="button" onClick={() => scrollByPage(1)} aria-label="Show next items">
          <i className="arrow-right" />
        </button>
      </div>
    </div>
  );
}
