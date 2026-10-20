"use client";

import { useEffect, useState } from "react";

type Certificate = {
  src: string;
  alt: string;
};

export function CertificateCarousel({ certificates }: { certificates: Certificate[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const activeCertificate = certificates[activeIndex];

  const goTo = (index: number) => {
    const nextIndex = (index + certificates.length) % certificates.length;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (certificates.length < 2 || previewIndex !== null) return;
    const timer = window.setInterval(() => goTo(activeIndex + 1), 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, certificates.length, previewIndex]);

  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewIndex(null);
      if (event.key === "ArrowLeft") setPreviewIndex((current) => (current === null ? current : (current - 1 + certificates.length) % certificates.length));
      if (event.key === "ArrowRight") setPreviewIndex((current) => (current === null ? current : (current + 1) % certificates.length));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificates.length, previewIndex]);

  if (!activeCertificate) return null;

  return (
    <section className="certificate-section" aria-labelledby="certificate-title">
      <div className="shell certificate-shell">
        <div className="certificate-copy">
          <p className="tb-tag">Factory certificates</p>
          <h2 id="certificate-title">Factory certificate documentation</h2>
          <p>
            Check available certificate files alongside the exact model, standard, certificate holder and target market so your quotation review is based on order-specific evidence.
          </p>
          <div className="certificate-controls" aria-label="Certificate carousel controls">
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous certificate">←</button>
            <span>{activeIndex + 1} / {certificates.length}</span>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next certificate">→</button>
          </div>
        </div>

        <div className="certificate-stage">
          <button className="certificate-main" type="button" onClick={() => setPreviewIndex(activeIndex)} aria-label="Open certificate preview">
            <img src={activeCertificate.src} alt={activeCertificate.alt} loading="eager" decoding="async" />
          </button>
          <div className="certificate-thumbs" aria-label="Certificate thumbnails">
            {certificates.map((certificate, index) => (
              <button
                type="button"
                key={certificate.src}
                className={index === activeIndex ? "certificate-thumb is-active" : "certificate-thumb"}
                onClick={() => goTo(index)}
                aria-label={`Show certificate ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <img src={certificate.src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {previewIndex !== null && (
        <div className="certificate-lightbox" role="dialog" aria-modal="true" aria-label="Certificate image preview" onClick={() => setPreviewIndex(null)}>
          <button className="certificate-lightbox-close" type="button" onClick={() => setPreviewIndex(null)} aria-label="Close certificate preview">×</button>
          <button className="certificate-lightbox-nav certificate-lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setPreviewIndex((previewIndex - 1 + certificates.length) % certificates.length); }} aria-label="Previous certificate">←</button>
          <img src={certificates[previewIndex].src} alt={certificates[previewIndex].alt} onClick={(event) => event.stopPropagation()} />
          <button className="certificate-lightbox-nav certificate-lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setPreviewIndex((previewIndex + 1) % certificates.length); }} aria-label="Next certificate">→</button>
        </div>
      )}
    </section>
  );
}
