"use client";

import { Children } from "react";

type ContentCarouselProps = {
  label: string;
  children: React.ReactNode;
};

export function ContentCarousel({ label, children }: ContentCarouselProps) {
  const items = Children.toArray(children);

  return (
    <div className="content-carousel" aria-label={label}>
      <div className="content-carousel-viewport">
        <div className="content-carousel-track" aria-live="off">
          {items.map((item, index) => (
            <div className="content-carousel-item" key={`primary-${index}`}>
              {item}
            </div>
          ))}
          {items.map((item, index) => (
            <div className="content-carousel-item" key={`loop-${index}`} aria-hidden="true">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
