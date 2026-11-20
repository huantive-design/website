"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackConversion } from "@/components/TrackedLink";

type TrackedContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  event: "email_click" | "whatsapp_click";
  category: string;
  label: string;
  children: ReactNode;
};

export function TrackedContactLink({ href, event, category, label, children, onClick, ...props }: TrackedContactLinkProps) {
  return (
    <a
      href={href}
      onClick={(clickEvent) => {
        trackConversion({ event, category, label });
        onClick?.(clickEvent);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
