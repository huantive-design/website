"use client";

import { TrackedLink } from "@/components/TrackedLink";

export function MobileActions() {
  return (
    <div className="mobile-sticky" aria-label="Quick inquiry actions">
      <TrackedLink href="/contact?intent=quotation" tracking={{ event: "quote_click", category: "mobile_sticky", label: "quote" }}>Get Quote</TrackedLink>
      <TrackedLink href="/contact?intent=sample" tracking={{ event: "quote_click", category: "mobile_sticky", label: "sample" }}>Sample</TrackedLink>
    </div>
  );
}
