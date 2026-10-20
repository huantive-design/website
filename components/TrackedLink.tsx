"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackingPayload = {
  event: string;
  category?: string;
  label?: string;
  value?: string;
};

type GtagCommand = "event" | "config" | "js" | "set";

type GtagFn = (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  tracking: TrackingPayload;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: GtagFn;
  }
}

export function trackConversion({ event, category, label, value }: TrackingPayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, event_category: category, event_label: label, value });
  window.gtag?.("event", event, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function TrackedLink({ href, children, tracking, onClick, ...props }: TrackedLinkProps) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    trackConversion(tracking);
    onClick?.(event);
  };

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
