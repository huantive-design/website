"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  alts = [],
  productName,
}: {
  images: string[];
  alts?: string[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const activeAlt = alts[activeIndex] ?? `${productName} product image ${activeIndex + 1}`;

  const selectImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="product-gallery" data-active-image={activeIndex + 1} data-active-src={activeImage}>
      <div className="product-gallery-thumbs" aria-label={`${productName} image previews`}>
        {images.map((image, index) => {
          const thumbAlt = alts[index] ?? `${productName} thumbnail ${index + 1}`;

          return (
            <button
              type="button"
              key={`${image}-${index}`}
              className={index === activeIndex ? "product-gallery-thumb is-active" : "product-gallery-thumb"}
              onClick={() => selectImage(index)}
              onPointerDown={() => selectImage(index)}
              aria-label={`Show image ${index + 1} of ${productName}`}
              aria-pressed={index === activeIndex}
            >
              <img src={image} alt={thumbAlt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            </button>
          );
        })}
      </div>
      <div className="product-gallery-main" aria-live="polite">
        <Image key={activeImage} src={activeImage} alt={activeAlt} fill priority sizes="(max-width: 980px) 100vw, 48vw" />
      </div>
    </div>
  );
}
